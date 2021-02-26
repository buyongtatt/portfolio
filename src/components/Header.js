import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

function Header() {
  return (
    <HeaderContainer>
      <HeaderLeft></HeaderLeft>
      <HeaderRight>
        <Link to="/">
          <HeaderButton>About</HeaderButton>
        </Link>

        <Link to="/projects">
          <HeaderButton>Projects</HeaderButton>
        </Link>
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;

const HeaderLeft = styled.div`
  flex: 0.9;
`;

const HeaderRight = styled.div`
  display: flex;
  flex: 0.1;
  margin-left: auto;
  margin-right: 20px;

  > a {
    text-decoration: none !important;
  }
`;

const HeaderButton = styled(Button)`
  color: white !important;
  width: 100px;
  height: 100px;

  :hover {
    background-color: white !important;
    color: rgba(255, 103, 68, 0.91) !important;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  position: sticky;
  top: 10px;
  background-color: rgba(255, 103, 68, 0.91);
  height: 100px;
`;
