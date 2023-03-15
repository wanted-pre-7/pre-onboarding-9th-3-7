import styled from "styled-components";
import { getMockDatas } from "./api/apis";
import Chart from "./components/Chart";
import useData from "./hooks/useData";

const Div = styled.div`
  margin: 50px;
`;
const App = () => {
  const [data] = useData(getMockDatas);

  return (
    <div className="App">
      <Div>
        <h1>Flexsys 시계열 차트</h1>
        <Chart data={data} />
      </Div>
    </div>
  );
};

export default App;
