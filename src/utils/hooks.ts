import { useEffect, useState } from "react";
import { getChart } from "../apis/chart";

export const getChartData: () => IChartData = () => {
  const [chartData, setChartData] = useState({ data: {}, isLoading: true });

  useEffect(() => {
    getChart().then((res) => {
      setChartData({ data: { ...res }, isLoading: false });
    });
  }, []);

  return chartData;
};

interface IChartData {
  data: {
    [key: string]: {
      id: string;
      value_area: number;
      value_bar: number;
    };
  };
  isLoading: boolean;
}
