import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";

function Header() {
  return (
    <HeaderContainer>
      <HeaderOption>About</HeaderOption>
      <HeaderOption>Projects</HeaderOption>
      <HeaderOption>Contact</HeaderOption>
    </HeaderContainer>
  );
}

export default Header;

const HeaderOption = styled(Button)`
  color: white !important;
  width: 100px;

  :hover {
    background-color: lightgray !important;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  position: sticky;
  top: 10px;
  background-color: black;
  height: 100px;
`;
