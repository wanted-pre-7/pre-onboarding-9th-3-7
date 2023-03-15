import type { URLSearchParamsInit } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { getMockDatas } from "./api/apis";
import Chart from "./components/Chart";
import useData from "./hooks/useData";

const Div = styled.div`
  margin: 50px;
`;

const App = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [data] = useData(getMockDatas);

  const id = searchParams.get("id");

  const updateSearchParams = (params: URLSearchParamsInit) => {
    setSearchParams(params);
  };

  return (
    <div className="App">
      <Div>
        <h1>Flexsys 시계열 차트</h1>
        <Chart
          data={data}
          searchId={id}
          updateSearchParams={updateSearchParams}
        />
      </Div>
    </div>
  );
};

export default App;
