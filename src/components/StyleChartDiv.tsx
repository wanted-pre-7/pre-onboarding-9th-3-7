import styled from "styled-components";

const Div = styled.div`
  border: dotted 1px gray;
  padding: 30px;
`;
const StyledChartDiv = ({ children, ...rest }) => {
  return <Div {...rest}>{children}</Div>;
};

export default StyledChartDiv;
