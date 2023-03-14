import { useEffect, useState } from "react";
import { getMockDatas } from "./api/apis";
import Chart from "./components/Chart";
import type { IChart } from "./types/chart";

const App = () => {
  const [chartData, setChartData] = useState<IChart>({});

  useEffect(() => {
    const getChartList = async () => {
      const res = await getMockDatas();
      setChartData(res.data.response);
    };

    getChartList();
  }, []);

  return (
    <div className="App">
      <Chart data={chartData} />
    </div>
  );
};

export default App;
