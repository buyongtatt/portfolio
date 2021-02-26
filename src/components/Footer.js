import { Avatar } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterContainer>
      <FooterLogo>Bu</FooterLogo>
      <FooterName>
        <p>Bu Yong Tatt</p>
      </FooterName>
      <FooterYear>
        <p>2021</p>
      </FooterYear>
    </FooterContainer>
  );
}

export default Footer;

const FooterYear = styled.div`
  > p {
    margin-bottom: 1rem;
    margin-top: 1.6em;
    font-size: inherit;
    line-height: 1.6;
    text-rendering: optimizeLegibility;
    font-weight: 500;
    color: #7d7d7d;
  }
`;

const FooterName = styled.div`
  > p {
    margin-bottom: 1rem;
    margin-top: 1.6em;
    font-size: inherit;
    line-height: 1.6;
    text-rendering: optimizeLegibility;
    font-weight: 500;
    color: #7d7d7d;
  }
`;

const FooterLogo = styled(Avatar)`
  background-color: rgba(255, 103, 68, 0.91) !important;
  border-radius: 50% !important;
  color: #fff !important;
  padding: 0.4em !important;
  font-size: 1.6em !important;
  font-weight: 500 !important;
  display: inline !important;
`;

const FooterContainer = styled.div`
  bottom: 0px;
  padding-bottom: 5em;
  height: 100px;
  padding-top: 5em;
  background-color: #e3e3e3;
  width: 100%;
  display: block;
  text-align: center;
`;
