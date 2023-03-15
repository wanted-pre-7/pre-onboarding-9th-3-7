import { useCallback, useState } from "react";
import styled from "styled-components";
import Chart from "./components/Chart";
import FillterBtns from "./components/FillterBtns";
import useChart from "./hooks/useChart";

const App = () => {
  const { data, locations } = useChart();
  const [location, setLocation] = useState("");

  const handleChangeLocation = useCallback((value: string) => {
    setLocation(value);
  }, []);

  return (
    <Container>
      <Chart
        data={data}
        location={location}
        handleLocation={handleChangeLocation}
      />
      <FillterBtns data={locations} handleLocation={handleChangeLocation} />
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
