import type { PlotData, PlotType } from "plotly.js";
import { Result, ResultIO } from "@src/feature/results_panel/types/ResultsType";

export interface CtrlOptionValue {
  id: string;
  functionName: string;
  param: string;
  nodeId: string;
  inputId: string;
  type?: PlotType | string;
  mode?: PlotData["mode"];
}
export interface ControlOptions {
  label: string;
  value: CtrlOptionValue | string;
  type?: PlotType;
  mode?: PlotData["mode"];
}
export interface PlotControlOption {
  id: string;
  type?: PlotData["type"];
  mode?: PlotData["mode"];
}
export interface PlotControlOptions {
  label: string;
  value: PlotControlOption;
}

export interface NodeInputOptions {
  label: string;
  value: Result; // ResultIO['result']
}
