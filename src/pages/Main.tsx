import { FaUndoAlt } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import TimeChart from "../components/TimeChart";
import useData from "../hooks/useData";
import theme from "../theme";

const Main = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { uniqueIdList } = useData();
  const handleClick = (item: string) => navigate(`/${item}`);

  return (
    <Container>
      <TimeChart />
      <ButtonWrap>
        {uniqueIdList.map((item) => (
          <Button
            key={item}
            onClick={() => handleClick(item)}
            isId={id === item}
          >
            {item}
          </Button>
        ))}
        <Button onClick={() => handleClick("전체")} isId={id === "전체"}>
          <FaUndoAlt className="reset" />
        </Button>
      </ButtonWrap>
    </Container>
  );
};

export default Main;

const Container = styled.div`
  width: 90vw;
  margin: 30px auto;
`;

const ButtonWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 20px auto;
`;

const Button = styled.button<{ isId: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  background: ${(props) =>
    props.isId ? `${theme.grayBar}` : `${theme.grayArea}`};
  color: #555;
  cursor: pointer;
  & .reset {
    color: #555;
  }
`;
