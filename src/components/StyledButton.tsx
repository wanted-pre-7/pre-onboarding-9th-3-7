import styled from "styled-components";

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;

  height: 2.25rem;
  font-size: 1rem;

  background: #228be6;
  &:hover {
    background: #339af0;
  }
  &:active {
    background: #1c7ed6;
  }

  & + & {
    margin-left: 1rem;
  }
`;
const StyledButton = ({ children, ...rest }) => {
  return <Button {...rest}>{children}</Button>;
};

export default StyledButton;
