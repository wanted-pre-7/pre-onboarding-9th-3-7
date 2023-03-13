import styled from "styled-components";
import type { ITooltip } from "../types/chart";

const CustomToolTip = ({ active, payload }: ITooltip) => {
  console.log("active", active, "payload", payload);
  if (active && payload) {
    return (
      <Wrapper>
        <Title>{payload[0].payload.id}</Title>
        <Item>value_area: {payload[0].payload.value_area}</Item>
        <Item>value_bar: {payload[0].payload.value_bar}</Item>
        <Item>Detailtime: {payload[0].payload.value_time}</Item>
      </Wrapper>
    );
  }
  return <div />;
};
export default CustomToolTip;

const Wrapper = styled.div`
  background-color: white;
  border: 1px solid black;
  padding: 5px;
`;

const Title = styled.div`
  font-weight: bold;
`;

const Item = styled.div`
  margin-top: 5px;
`;
