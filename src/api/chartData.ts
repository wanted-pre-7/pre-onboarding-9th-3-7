import mockData from "../mock/data.json";
import type { IMokData, IData } from "../type/chartData";

export const getChartData = () => {
  const data: IMokData = { ...mockData.response };
  const mockDataArr: IData[] = [];

  for (let key of Object.keys(data)) {
    data[key]["time"] = key;
    mockDataArr.push(data[key]);
  }
  return mockDataArr;
};
