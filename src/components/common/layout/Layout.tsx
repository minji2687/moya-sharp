import React, { ReactChildren, ReactChild } from "react";
import styled from "@emotion/styled";
import GlobalHeader from "./Header";
import GlobalFooter from "./Footer";
// import { useLocation } from "react-router-dom";

interface AuxProps {
  children: ReactChild | ReactChildren;
}

export const Layout: React.FC<AuxProps> = props => {
  // const location = useLocation<LocationTypes>();
  // const path = location.pathname.slice(1);

  // if (path === "login") return <Root>{props.children}</Root>;

  return (
    <Root className="layout">
      <GlobalHeader />
      {props.children}
      <GlobalFooter />
    </Root>
  );
};

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
