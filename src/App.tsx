import { useSearchParams } from "react-router-dom";
import { fetchFlexsysData } from "./api/apis";
import Chart from "./components/Chart";
import GlobalStyle from "./GlobalStyle";
import useFetchData from "./hooks/useFetchData";
import type { IResData } from "./types/chartTypes";

const App = () => {
  const chartData: IResData[] = useFetchData(fetchFlexsysData);
  const [searchParams, setSearchParams] = useSearchParams();

  const currentParams = searchParams.get("id");

  return (
    <>
      <GlobalStyle />
      {/* todo: fix type error */}
      <Chart
        data={chartData}
        currentParams={currentParams}
        setSearchParams={setSearchParams}
      />
    </>
  );
};

export default App;
