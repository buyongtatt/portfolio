import React from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";

function About() {
  return (
    <AboutContainer>
      <AboutPhoto src="https://avatars.githubusercontent.com/u/48663882?s=460&u=166b088335258e442fc0a8d17e9a7557cb53dbd2&v=4" />
      <h2>
        Hi, I'm Bu Yong Tatt.<br></br> Nice to meet you.
      </h2>
      <AboutContact></AboutContact>
    </AboutContainer>
  );
}

export default About;

const AboutContact = styled.div``;

const AboutContainer = styled.div`
  display: grid;

  > h2 {
    color: #646464;
    font-size: 3.8em;
    padding-bottom: 1em;
    font-weight: 900 !important;
    line-height: 1.4;
    margin-top: 0;
    margin-bottom: 0.5rem;
    text-align: center;
  }
`;

const AboutPhoto = styled(Avatar)`
  width: 200px !important;
  height: 200px !important;
  margin: 0 auto !important;
  border-radius: 50% !important;
  background-size: cover !important;
  margin-top: 50px !important;
  margin-bottom: 40px !important;
`;
