import { useEffect, useState } from "react";
import styled from "styled-components";
import MixedChart from "../components/MixedChart";
import { getChartData } from "../utils/hooks";

const ChartPage = () => {
  const { data, isLoading } = getChartData();

  const labels = Object.keys(data).map((v) => v.split(" ")[1]);
  const area = Object.values(data).map((v, i) => {
    return { x: labels[i], y: v.value_area, fillColor: "#05f936" };
  });
  const bar = Object.values(data).map((v, i) => {
    return { x: labels[i], y: v.value_bar, fillColor: "#9febfb" };
  });
  const idData = Object.values(data).map((v) => v.id);
  const idList = [...new Set(idData)];
  idList.push("선택해제");

  const [barData, setBarData] = useState(bar);
  const [areaData, setAreaData] = useState(area);

  useEffect(() => {
    setBarData(bar);
    setAreaData(area);
  }, [data]);

  const handleFilter = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent> | string,
  ) => {
    const id = typeof e === "string" ? e : (e.target as HTMLButtonElement).id;
    const selectedId = idData
      .map((v, i) => (v === id ? i : null))
      .filter((v) => v !== null);

    setBarData(
      barData.map((v, i) =>
        selectedId.includes(i)
          ? { ...v, fillColor: "#004f5f" }
          : { ...v, fillColor: "#9febfb" },
      ),
    );
    setAreaData(
      areaData.map((v, i) =>
        selectedId.includes(i)
          ? { ...v, fillColor: "#022c0a" }
          : { ...v, fillColor: "#05f936" },
      ),
    );
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <MixedChart
        idData={idData}
        barData={barData}
        areaData={areaData}
        labels={labels}
        handleFilter={handleFilter}
      />
      {idList.map((id) => {
        return (
          <button key={id} onClick={(e) => handleFilter(e)} id={id}>
            {id}
          </button>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  width: 65%;
  height: auto;
  margin: 0 auto;
`;

export default ChartPage;
