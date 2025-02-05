import json
import os
import sys
import time
import traceback
import warnings

import matplotlib.cbook
import networkx as nx
from flojoy import get_next_directions, get_next_nodes

warnings.filterwarnings("ignore", category=matplotlib.cbook.mplDeprecation)

dir_path = os.path.dirname(os.path.realpath(__file__))
sys.path.append(os.path.abspath(os.path.join(dir_path, os.pardir)))

from services.job_service import JobService
from utils.dynamic_module_import import get_module_func, create_map
from utils.topology import Topology

ENV_CI = "CI"


class FlowScheduler:
    def __init__(self, scheduler_job_id, fc, extraParams, jobsetId=None) -> None:
        # print("sjid", scheduler_job_id)
        # print("fc", fc)
        # print("ep", extraParams)
        # print("jsid", jobsetId)
        self.scheduler_job_id = scheduler_job_id
        self.jobset_id = jobsetId
        self.flow_chart = fc
        # TODO: split this up into different input vars
        self.maximum_runtime = extraParams.get("maximumRuntime", 3000)
        self.node_delay = extraParams.get("nodeDelay", 0)
        self.job_service = JobService("flojoy", self.maximum_runtime)

    def run(self):
        print("\nrun jobset:", self.jobset_id)
        self.is_ci = os.getenv(key=ENV_CI, default=False)
        print("is running in CI?", self.is_ci)
        self.nx_graph = reactflow_to_networkx(
            self.flow_chart["nodes"], self.flow_chart["edges"]
        )
        self.topology = Topology(graph=self.nx_graph)
        self.topology.print_id_to_label_mapping()
        self.topology.print_graph()
        self.topology.collect_ready_jobs()

        num_times_waited_for_new_jobs = 0
        wait_time_for_new_jobs = 0.1
        wait_time_multiplier = 2
        max_wait_time = 10

        while not self.topology.finished():
            print("\nnext wave")
            # self.topology.print_graph()

            try:
                self.topology.collect_ready_jobs()
                next_jobs = self.topology.next_jobs()

                if len(next_jobs) == 0:
                    wait_time_for_new_jobs = wait_time_for_new_jobs * pow(
                        wait_time_multiplier, num_times_waited_for_new_jobs
                    )
                    wait_time_for_new_jobs = min(wait_time_for_new_jobs, max_wait_time)
                    print(
                        f"no new jobs to execute, sleeping for {wait_time_for_new_jobs} sec"
                    )
                    time.sleep(wait_time_for_new_jobs)
                    num_times_waited_for_new_jobs += 1
                    continue

                # reset wait count
                num_times_waited_for_new_jobs = 0

                self.topology.print_jobq("ready ")

                for job_id in next_jobs:
                    self.run_job(job_id)

                print("waiting on jobs enqueued")
                for job_id in next_jobs:
                    job_result, success = self.wait_for_job(job_id)
                    self.process_job_result(job_id, job_result, success)

                self.topology.clear_jobq()

            except Exception as e:
                self.topology.print_graph(
                    "exception occurred in scheduler, current working graph:"
                )
                print(traceback.format_exc())
                raise e

        # jobset finished
        self.topology.print_graph()
        self.notify_jobset_finished()
        print("finished proceessing jobset", self.jobset_id, "\n")

    def process_job_result(self, job_id, job_result, success):
        """
        process special instructions to scheduler
        """

        if not success:
            self.topology.mark_job_failure(job_id)
            return

        # process instruction to flow through specified directions
        for direction_ in get_next_directions(job_result):
            direction = direction_.lower()
            self.topology.mark_job_success(job_id, direction)

        # process instruction to flow to specified nodes
        nodes_to_add = []
        next_nodes = get_next_nodes(job_result)
        if next_nodes is not None:
            nodes_to_add += [node_id for node_id in next_nodes]

        if len(nodes_to_add) > 0:
            print(
                "  + adding nodes to graph:",
                [self.topology.get_label(n_id, original=True) for n_id in nodes_to_add],
            )

        for node_id in nodes_to_add:
            print("OVER HERE")
            self.topology.restart(node_id)

    def run_job(self, job_id):
        node = self.nx_graph.nodes[job_id]
        cmd = node["cmd"]
        cmd_mock = node["cmd"] + "_MOCK"
        func = get_module_func(cmd, cmd)
        if self.is_ci:
            try:
                func = get_module_func(cmd, cmd_mock)
            except Exception:
                pass

        dependencies = self.topology.get_job_dependencies(job_id, original=True)

        print(
            " enqueue job:",
            self.topology.get_label(job_id),
            "dependencies:",
            [self.topology.get_label(dep_id, original=True) for dep_id in dependencies],
        )

        self.job_service.enqueue_job(
            func=func,
            jobset_id=self.jobset_id,
            job_id=job_id,
            iteration_id=job_id,
            ctrls=node["ctrls"],
            previous_job_ids=[],
            input_job_ids=dependencies,
        )

    def wait_for_job(self, job_id):
        print(" waiting for job:", self.topology.get_label(job_id))

        while True:
            time.sleep(self.node_delay)

            job = self.job_service.fetch_job(job_id=job_id)
            if job:
                job_status = job.get_status()

                if job_status in ["finished", "failed"]:
                    job_result = job.result
                    success = True if job_status == "finished" else False
                    print(
                        "  job:", self.topology.get_label(job_id), "status:", job_status
                    )
                    break

        return job_result, success

    def notify_jobset_finished(self):
        self.job_service.redis_dao.remove_item_from_list(
            f"{self.jobset_id}_watch", self.scheduler_job_id
        )

    def print_flow_chart(self):
        print(
            "nodes from FE:",
            json.dumps(self.flow_chart["nodes"], indent=2),
            "\nedges from FE:",
            json.dumps(self.flow_chart["edges"], indent=2),
        )


def reactflow_to_networkx(elems, edges):
    nx_graph: nx.DiGraph = nx.DiGraph()
    for i in range(len(elems)):
        el = elems[i]
        node_id = el["id"]
        data = el["data"]
        cmd = el["data"]["func"]
        ctrls = data["ctrls"] if "ctrls" in data else {}
        inputs = data["inputs"] if "inputs" in data else {}
        label = data["label"] if "label" in data else {}
        nx_graph.add_node(
            node_id,
            pos=(el["position"]["x"], el["position"]["y"]),
            id=el["id"],
            ctrls=ctrls,
            inputs=inputs,
            label=label,
            cmd=cmd,
        )

    for i in range(len(edges)):
        e = edges[i]
        _id = e["id"]
        u = e["source"]
        v = e["target"]
        label = e["sourceHandle"]
        nx_graph.add_edge(u, v, label=label, id=_id)

    nx.draw(nx_graph, with_labels=True)

    return nx_graph


def run(**kwargs):
    try:
        return FlowScheduler(**kwargs).run()
    except Exception:
        print("exception occured while running the flowchart")
        print(traceback.format_exc())
