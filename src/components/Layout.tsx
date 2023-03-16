import type { ReactNode } from "react";
import styled from "styled-components";

type IChildrenProps = {
  children: ReactNode;
};

const Layout = ({ children }: IChildrenProps) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  padding-top: 14vh;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto 0;
  box-shadow: 0px 1px 22px -12px #607d8b;
  background-color: #fff;
  padding: 25px 35px 25px 30px;
`;
