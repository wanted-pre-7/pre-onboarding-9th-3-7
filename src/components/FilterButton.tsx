import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import type { IToButtonProps } from "../types/chartTypes";

const FilterButton = ({ btnOption }: IToButtonProps) => {
  const navigate = useNavigate();
  const { btnText, event } = btnOption;

  return (
    <>
      {btnText === "필터 해제" ? (
        <StyledButton onClick={() => navigate("/chart")}>
          {btnText}
        </StyledButton>
      ) : (
        <StyledButton onClick={event}>{btnText}</StyledButton>
      )}
    </>
  );
};

export default FilterButton;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  outline: 0;
  border: none;
  cursor: pointer;
  height: 40px;
  padding: 12px 16px;
  border-radius: 50px;
  background-color: #2222220d;
  color: #222;
  font-size: 16px;
  font-weight: 400;
  word-break: keep-all;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  :hover {
    background-color: #2222221a;
  }
`;
