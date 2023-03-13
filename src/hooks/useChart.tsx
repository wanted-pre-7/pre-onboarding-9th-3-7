import dayjs from "dayjs";
import { useEffect, useMemo, useState } from "react";
import { readData } from "../apis/chart";
import type { IChart, IChartResponse } from "../types/chart";

const useChart = () => {
  const [chartData, setChartData] = useState<IChart[]>([]);

  const locations = useMemo(() => {
    if (!chartData) return [];
    return [...new Set(chartData.map((data) => data.id))];
  }, [chartData]);

  useEffect(() => {
    (async () => {
      const data = await readData();
      const newData = Object.entries(data as IChartResponse)?.map(
        ([time, { id, value_area, value_bar }]) => ({
          id,
          value_area,
          value_bar,
          time: dayjs(time).format("HH:mm"),
          value_time: time,
        }),
      );
      setChartData(newData);
    })();
  }, []);
  return { data: chartData, locations: locations };
};

export default useChart;
