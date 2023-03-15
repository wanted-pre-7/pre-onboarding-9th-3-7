import { fetchFlexsysData } from "./api/apis";
import Chart from "./components/Chart";
import GlobalStyle from "./GlobalStyle";
import useFetchData from "./hooks/useFetchData";
import type { IResData } from "./types/chartTypes";

const App = () => {
  const chartData: IResData[] = useFetchData(fetchFlexsysData);

  return (
    <>
      <GlobalStyle />
      {/* todo: type error fix */}
      <Chart data={chartData} />
    </>
  );
};

export default App;
