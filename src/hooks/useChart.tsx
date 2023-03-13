import { useEffect, useState } from "react";
import { readData } from "../apis/chart";
import type { IChart, IChartResponse } from "../types/chart";

const useChart = () => {
  const [chartData, setChartData] = useState<IChart[]>([]);

  useEffect(() => {
    (async () => {
      const data = await readData();
      const newData = Object.entries(data as IChartResponse)?.map(
        ([time, { id, value_area, value_bar }]) => ({
          id,
          value_area,
          value_bar,
          time,
        }),
      );
      setChartData(newData);
    })();
  }, []);
  return [chartData];
};

export default useChart;
