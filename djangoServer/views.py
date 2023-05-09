import asyncio
import json
import os
import sys
import time
import yaml
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .services.pre_job_service import prepare_jobs

dir_path = os.path.dirname(os.path.realpath(__file__))
sys.path.insert(0, dir_path)

from PYTHON.services.job_service import JobService
from .utils.send_to_socket import send_msg_to_socket


job_service = JobService("flojoy-watch")

STATUS_CODES = yaml.load(
    open("STATUS_CODES.yml", "r", encoding="utf-8"), Loader=yaml.Loader
)


def test_socket(request):
    return render(request, "test_socket.html")


def report_failure(job, connection, type, value, traceback):
    print(job, connection, type, value, traceback)


@api_view(["POST"])
def cancel_flow_chart(request):
    fc = json.loads(request.data["fc"])
    jobset_id = request.data["jobsetId"]

    job_service.reset(fc.get("nodes", []))
    time.sleep(2)
    msg = {
        "SYSTEM_STATUS": STATUS_CODES["STANDBY"],
        "jobsetId": jobset_id,
        "FAILED_NODES": "",
        "RUNNING_NODES": "",
    }
    asyncio.run(send_msg_to_socket(msg=msg))
    return Response(msg, status=200)


@api_view(["POST"])
def run_flow_chart(request):
    fc = json.loads(request.data["fc"])

    # cleanup all previous jobs and the related data
    job_service.reset(fc.get("nodes", []))
    print("cancelled previous jobs")

    jobset_id = request.data["jobsetId"]
    job_service.add_jobset_id(jobset_id)

    msg = {
        "SYSTEM_STATUS": STATUS_CODES["RUN_PRE_JOB_OP"],
        "jobsetId": jobset_id,
        "FAILED_NODES": "",
        "RUNNING_NODES": "",
    }
    asyncio.run(send_msg_to_socket(msg=msg))
    asyncio.run(prepare_jobs(fc, jobset_id))
    return Response(status=200)


@api_view(["POST"])
def worker_response(request):
    parse_data = json.loads(request.data)
    asyncio.run(send_msg_to_socket(parse_data))
    response = {
        "success": True,
    }
    return Response(response, status=200)
