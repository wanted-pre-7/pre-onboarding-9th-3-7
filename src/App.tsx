import { useEffect, useState } from "react";

import { fetchFlexsysData } from "./apis/api";

import Chart from "./components/Chart";
import GlobalStyle from "./GlobalStyle";
import type { IResData } from "./types/chartTypes";

const App = () => {
  const [chartData, setChartData] = useState<IResData[]>([]);

  const fetchData = async () => {
    try {
      const res = await fetchFlexsysData();
      if (res) setChartData(res.data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <GlobalStyle />
      {/* todo: type error fix */}
      <Chart data={chartData} />
    </>
  );
};

export default App;
