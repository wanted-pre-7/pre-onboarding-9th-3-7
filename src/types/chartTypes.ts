export interface IResData {
  [key: string]: IChartData;
}

export interface IChartData {
  id: string;
  value_area: number;
  value_bar: number;
}
