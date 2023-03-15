import { useEffect, useState } from "react";
import { getChartData } from "../api";
import type { IChart, IResponse } from "../types/chart";

const useChartData = () => {
  const [chartData, setChartData] = useState<IChart[]>([]);
  useEffect(() => {
    const getChart = async () => {
      const data: IResponse = await getChartData();

      const arrData: IChart[] = Object.entries(data).map(([time, item]) => ({
        time: new Date(time).toLocaleTimeString(),

        ...item,
      }));

      setChartData(arrData);
    };

    getChart();
  }, []);

  const chartDistrict = [...new Set(chartData.map((data) => data.id))].sort();

  return { data: chartData, chartDistrict };
};

export default useChartData;
