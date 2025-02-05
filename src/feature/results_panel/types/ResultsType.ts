import { OverridePlotData } from "@src/feature/common/PlotlyComponent";
import { ElementsData } from "@src/feature/flow_chart_panel/types/CustomNodeProps";
import { Layout } from "plotly.js";

export const ALL_DC_TYPE = [
  "grayscale",
  "matrix",
  "dataframe",
  "image",
  "ordered_pair",
  "ordered_triple",
  "scalar",
  "plotly",
] as const;

export type DataContainerType = (typeof ALL_DC_TYPE)[number];

export interface DataContainer {
  type: DataContainerType;
  x?: number[];
  y?: number[];
  z?: number[];
  t?: number[];
  m?: string;
  c?: number[];
  r?: number[];
  g?: number[];
  b?: number[];
  a?: number[];
  fig?: { data: OverridePlotData };
}

//export interface DataContainer {
//  type: DataContainerType;
//  data:
//    | GrayscaleData
//    | MatrixData
//    | DataFrameData
//    | ImageData
//    | OrderedPairData
//    | OrderedTripleData
//    | ScalarData
//    | PlotlyData;
//}
//
//export interface GrayscaleData {
//  m: number[];
//}
//
//export interface MatrixData {
//  m: number[];
//}
//
//export interface DataFrameData {
//  m: string;
//}
//
//export interface ImageData {
//  r: number[];
//  g: number[];
//  b: number[];
//  a: number[];
//}
//
//export interface OrderedPairData {
//  x: number[];
//  y: number[];
//}
//
//export interface OrderedTripleData {
//  x: number[];
//  y: number[];
//  z: number[];
//}
//
//export interface ScalarData {
//  c: number[];
//}
//
//export interface PlotlyData {
//  data: OverridePlotData;
//}

export type ResultIO = {
  cmd: string;
  id: string;
  result: Result;
};

export type Result = {
  default_fig: {
    data: OverridePlotData;
    layout?: Partial<Layout>;
  };
  data: DataContainer;
};

export interface ResultsType {
  io?: ResultIO[];
}
export type ResultNodeData = ElementsData & {
  resultData?: ResultIO["result"];
};
