export interface IData {
  [key: string]: List;
}

export type List = {
  id: string;
  value_area: number;
  value_bar: number;
};
