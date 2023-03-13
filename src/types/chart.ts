export interface IChartResponse {
  [key: string]: IChart;
}

export interface IChart {
  id: string;
  value_area: number;
  value_bar: number;
  value_time: string;
}

// export interface Props {
//   data: Record<string, data>;
// }
