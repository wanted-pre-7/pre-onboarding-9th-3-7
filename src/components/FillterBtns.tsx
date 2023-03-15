import React from "react";
import styled from "styled-components";

interface IProps {
  data: string[];
  handleLocation: (value: string) => void;
}

const FillterBtns = ({ data, handleLocation }: IProps) => {
  return (
    <BtnWrapper>
      {React.Children.toArray(
        ["전체", ...data]?.map((item) => (
          <button onClick={() => handleLocation(item)}>{item}</button>
        )),
      )}
    </BtnWrapper>
  );
};

export default FillterBtns;

const BtnWrapper = styled.div`
  display: flex;
  gap: 10px;
`;
