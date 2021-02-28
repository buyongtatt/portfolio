import React from "react";
import styled from "styled-components";
import LaptopChromebookIcon from "@material-ui/icons/LaptopChromebook";
import StorageIcon from "@material-ui/icons/Storage";
import StarIcon from "@material-ui/icons/Star";

function SkillSet() {
  return (
    <SkillSetContainer>
      <h2>My Skillset</h2>
      <Skillset>
        <Skill>
          <LaptopChromebookIcon />
          <h3>Front-end</h3>
          <ul>
            <li>ReactJs</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>Material UI</li>
          </ul>
        </Skill>
        <Skill>
          <StorageIcon />
          <h3>Back-end</h3>
          <ul>
            <li>NPM</li>
            <li>NodeJs</li>
            <li>Express</li>
            <li>Firebase</li>
          </ul>
        </Skill>
        <Skill>
          <StarIcon />
          <h3>Tools</h3>
          <ul>
            <li>GitHub</li>
            <li>VS Code</li>
          </ul>
        </Skill>
      </Skillset>
    </SkillSetContainer>
  );
}

export default SkillSet;

const SkillSetContainer = styled.div`
  display: grid;
  background-color: #4c6d86;
  padding: 6em 4em 5.6em;
  text-align: center;

  > h2 {
    color: #fff;
    font-size: 2.5rem;
    margin-bottom: 2em;
    font-weight: 900 !important;
    font-family: "Lato", sans-serif !important;
  }
`;

const Skillset = styled.div`
  display: flex;
`;

const Skill = styled.div`
  display: block;
  padding-right: 0.9375rem;
  padding-left: 0.9375rem;
  width: 33.33333%;
  justify-content: space-evenly;

  > .MuiSvgIcon-root {
    color: rgba(255, 103, 68, 0.91);
    font-size: 4rem;
  }

  > h3 {
    color: #fff;
    font-family: "Lato", sans-serif !important;
    font-weight: 900 !important;
    font-size: 1.9375rem;
    line-height: 1.4;
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-style: normal;
  }

  > ul {
    margin-left: 1.25rem;
    list-style-type: disc;
    margin-bottom: 1rem;
    list-style-position: outside;
    line-height: 1.6;
    margin: 0;
    padding: 0;
    text-align: center;
  }

  > ul > li {
    list-style: none;
    color: #bbd2ff;
    font-family: "Maven pro", sans-serif;
    font-weight: 500;
    font-size: inherit;
    margin: 0;
    padding: 0;
  }
`;
