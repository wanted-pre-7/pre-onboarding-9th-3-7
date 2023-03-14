import { useEffect, useState } from "react";
import { getChartData } from "../api";
import type { IChart, IResponse } from "../types/chart";

const useChartData = () => {
  const [chartData, setChartData] = useState<IChart[]>([]);

  useEffect(() => {
    const chartArray: IChart[] = [];
    const getChart = async () => {
      const data: IResponse = await getChartData();

      for (const key in data) {
        chartArray.push({
          time: new Date(key).toLocaleTimeString().replace("오후 ", ""),
          value_time: key,
          ...data[key],
        });
      }

      setChartData(chartArray);
    };

    getChart();
  }, []);

  return { data: chartData };
};

export default useChartData;
