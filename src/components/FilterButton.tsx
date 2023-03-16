import { useNavigate } from "react-router-dom";
import type { IToButtonProps } from "../types/chartTypes";

const FilterButton = ({ btnOption }: IToButtonProps) => {
  const navigate = useNavigate();
  const { btnText, event } = btnOption;

  return (
    <>
      {btnText === "필터 해제" ? (
        <button onClick={() => navigate("/chart")}>{btnText}</button>
      ) : (
        <button onClick={event}>{btnText}</button>
      )}
    </>
  );
};

export default FilterButton;
