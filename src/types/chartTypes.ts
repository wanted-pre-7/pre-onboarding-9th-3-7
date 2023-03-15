export interface IResData {
  [key: string]: IChartData;
}

export interface IChartData {
  id: string;
  value_area: number;
  value_bar: number;
}

export interface IValueData {
  id: string;
  x: string;
  y: number;
  fillColor?: string;
}

export interface IToChartProps {
  data: IResData;
  currentParams: string | null;
  setSearchParams: ({ id: URLSearchParams }: { id: string }) => void;
}
