export interface IData {
  id: string;
  value_area: number;
  value_bar: number;
  time?: string;
}

export interface IMokData {
  [key: string]: IData;
}
