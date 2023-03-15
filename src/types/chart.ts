export interface IAreaData {
  id: string;
  y: number;
  x: string;
  fillColor?: string;
}

export interface IBarData {
  id: string;
  y: number;
  x: string;
  fillColor?: string;
}

export interface IChartResponse {
  type: string;
  version: number;
  response: IChart;
}

export interface IChart {
  [key: string]: IChartData;
}

export interface IChartData {
  id?: string;
  value_area?: number;
  value_bar?: number;
}
