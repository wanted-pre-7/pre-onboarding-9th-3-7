import styled from "styled-components";
import Chart from "./components/Chart";
import useChart from "./hooks/useChart";

const App = () => {
  const [data] = useChart();

  return (
    <Container>
      <Chart data={data} />
    </Container>
  );
};

export default App;

const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
