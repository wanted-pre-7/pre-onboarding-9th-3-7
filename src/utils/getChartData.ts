import { useEffect, useState } from "react";
import { getChartApi } from "../api";
import type { IChart, IResponse } from "../types/chart";

const getChartData = () => {
  const [chartData, setChartData] = useState<IChart[]>([]);
  useEffect(() => {
    const getData = async () => {
      const data: IResponse = await getChartApi();

      setChartData(
        Object.entries(data).map(([time, item]) => ({
          time: new Date(time).toLocaleTimeString(),
          ...item,
        })),
      );
    };
    getData();
  }, []);

  const chartDistrict = [...new Set(chartData.map((data) => data.id))].sort();

  return { chartData, chartDistrict };
};

export default getChartData;
