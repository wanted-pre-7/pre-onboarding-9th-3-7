import styled from "styled-components";

const CustomTooltip = ({ active, data }: PropsType) => {
  if (active && data) {
    return (
      <Container>
        <BoxId>{data.id}</BoxId>
        <BoxValue>area: {data.area}</BoxValue>
        <BoxValue>bar: {data.bar}</BoxValue>
      </Container>
    );
  }
  return null;
};

const Container = styled.div`
  width: 140px;
  height: 100px;

  box-sizing: border-box;
`;

const BoxId = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 30px;
  background-color: whitesmoke;
  padding-left: 8px;
`;

const BoxValue = styled.div`
  margin-top: 4px;
  padding-left: 8px;
`;

type PropsType = {
  active: boolean;
  data: {
    id: string;
    area: number;
    bar: number;
  };
};

export default CustomTooltip;
