import { useEffect, useState } from "react";
import { getChart } from "../apis/chart";

export const getChartData = () => {
  const [chartData, setChartData] = useState({ data: {}, isloading: true });

  useEffect(() => {
    getChart().then((res) => {
      setChartData({ data: { ...res }, isloading: false });
    });
  }, []);

  return chartData;
};
