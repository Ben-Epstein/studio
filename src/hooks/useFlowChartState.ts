import { ElementsData } from "@src/feature/flow_chart_panel/types/CustomNodeProps";
import { atom, useAtom } from "jotai";
import { atomWithImmer } from "jotai-immer";
import localforage from "localforage";
import { ReactFlowJsonObject } from "reactflow";

export interface CtrlManifestParam {
  functionName: string;
  param: string;
  nodeId: string;
  id: string;
  type?: string;
}
export interface PlotManifestParam {
  node: string;
  plot?: PlotType;
  input?: string;
  output?: string;
}

interface PlotType {
  type: string;
  mode: string;
}

export interface CtlManifestType {
  type: string;
  name: string;
  id: string;
  param?: PlotManifestParam | CtrlManifestParam | string;
  val?: string | number | boolean;
  hidden?: boolean;
  segmentColor?: string;
  controlGroup?: string;
  label?: string;
  minHeight: number;
  minWidth: number;
  layout: ReactGridLayout.Layout;
}

export interface RfSpatialInfoType {
  x: number;
  y: number;
  zoom: number;
}

const failedNodeAtom = atomWithImmer<string>("");
const runningNodeAtom = atomWithImmer<string>("");
const showLogsAtom = atomWithImmer<boolean>(false);
const rfInstanceAtom = atomWithImmer<
  ReactFlowJsonObject<ElementsData> | undefined
>(undefined);
const editModeAtom = atomWithImmer<boolean>(false);
const expandModeAtom = atomWithImmer<boolean>(false);
const apiKeyAtom = atomWithImmer<string>("");
const isSidebarOpenAtom = atom<boolean>(false);
const nodeParamChangedAtom = atom<boolean | undefined>(undefined);
localforage.config({ name: "react-flow", storeName: "flows" });

export function useFlowChartState() {
  const [rfInstance, setRfInstance] = useAtom(rfInstanceAtom);
  const [isEditMode, setIsEditMode] = useAtom(editModeAtom);
  const [isExpandMode, setIsExpandMode] = useAtom(expandModeAtom);
  const [showLogs, setShowLogs] = useAtom(showLogsAtom);
  const [runningNode, setRunningNode] = useAtom(runningNodeAtom);
  const [failedNode, setFailedNode] = useAtom(failedNodeAtom);
  const [apiKey, setApiKey] = useAtom(apiKeyAtom);
  const [isSidebarOpen, setIsSidebarOpen] = useAtom(isSidebarOpenAtom);
  const [nodeParamChanged, setNodeParamChanged] = useAtom(nodeParamChangedAtom);

  return {
    rfInstance,
    setRfInstance,
    isEditMode,
    setIsEditMode,
    isExpandMode,
    setIsExpandMode,
    showLogs,
    setShowLogs,
    runningNode,
    setRunningNode,
    failedNode,
    setFailedNode,
    apiKey,
    setApiKey,
    nodeParamChanged,
    setNodeParamChanged,
    isSidebarOpen,
    setIsSidebarOpen,
  };
}
