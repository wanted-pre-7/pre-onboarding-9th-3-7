import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { fetchFlexsysData } from "./api/apis";
import Chart from "./components/Chart";
import FilterButton from "./components/FilterButton";
import Layout from "./components/Layout";
import GlobalStyle from "./GlobalStyle";
import useFetchData from "./hooks/useFetchData";
import type { IChartData } from "./types/chartTypes";

const App = () => {
  const chartData: IChartData[] = useFetchData(fetchFlexsysData);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentParams = searchParams.get("id");

  const idArr = Object.values(chartData).map((v) => v.id);
  const uniqueIdArr = [...new Set(idArr), "필터 해제"];

  const handleButtonFilter = (clickedId: string) => {
    return clickedId ? setSearchParams({ id: clickedId }) : setSearchParams({});
  };

  return (
    <Layout>
      <GlobalStyle />

      <BtnWrapper>
        {uniqueIdArr.map((id) => {
          return (
            <FilterButton
              key={id}
              btnOption={{
                btnText: id,
                event: () => handleButtonFilter(id),
              }}
            />
          );
        })}
      </BtnWrapper>

      {/* todo: fix type error */}
      <ChartWrapper>
        <Chart
          data={chartData}
          currentParams={currentParams}
          setSearchParams={setSearchParams}
        />
      </ChartWrapper>
    </Layout>
  );
};

export default App;

const BtnWrapper = styled.div`
  display: flex;
  button {
    margin-right: 5px;
  }
`;

const ChartWrapper = styled.div`
  width: 100%;
`;
