import React from "react";
import styled from "styled-components";
import DesktopMacIcon from "@material-ui/icons/DesktopMac";
import TabletAndroidIcon from "@material-ui/icons/TabletAndroid";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import { Button } from "@material-ui/core";
import slack from "../assets/slack.PNG";
import amazon from "../assets/amazon.PNG";
import instagram from "../assets/instagram.PNG";
import whatsapp from "../assets/whatsapp.PNG";
import discord from "../assets/discord.PNG";
import todo from "../assets/todo.PNG";

function Projects() {
  return (
    <ProjectsContainer>
      <h2>Projects</h2>
      <p>Here are few of the projects I have worked on.</p>
      <ProjectRow>
        <ProjectImage>
          <img src={todo} alt="" />
        </ProjectImage>
        <ProjectDetail>
          <h3>Todo App</h3>
          <p>WEB</p>
          <ProjectPlatform>
            <DesktopMacIcon />
            <TabletAndroidIcon />
            <PhoneAndroidIcon />
          </ProjectPlatform>
          <ProjectDescription>
            <p>A simple TODO app using MERN and React Context API.</p>
          </ProjectDescription>
          <ProjectButton>
            <a href="https://github.com/buyongtatt/mern-todo-app">
              <Button>VISIT REPO</Button>
            </a>
          </ProjectButton>
        </ProjectDetail>
      </ProjectRow>
      <ProjectRow>
        <ProjectDetail>
          <h3>SLACK-CLONE</h3>
          <p>WEB</p>
          <ProjectPlatform>
            <DesktopMacIcon />
            <TabletAndroidIcon />
            <PhoneAndroidIcon />
          </ProjectPlatform>
          <ProjectDescription>
            <p>
              A Slack-looking web application made with ReactJs & Firebase that
              allows the user to Sign up, Log in, Add Channel and Chatting.
            </p>
          </ProjectDescription>
          <ProjectButton>
            <a href="https://slack-clone-6815b.web.app/">
              <Button>VISIT WEBPAGE</Button>
            </a>
            <a href="https://github.com/buyongtatt/slack-clone">
              <Button>VISIT REPO</Button>
            </a>
          </ProjectButton>
        </ProjectDetail>
        <ProjectImage>
          <img src={slack} alt="" />
        </ProjectImage>
      </ProjectRow>
      <ProjectRow>
        <ProjectImage>
          <img src={amazon} alt="" />
        </ProjectImage>
        <ProjectDetail>
          <h3>AMAZON-CLONE</h3>
          <p>WEB</p>
          <ProjectPlatform>
            <DesktopMacIcon />
            <TabletAndroidIcon />
            <PhoneAndroidIcon />
          </ProjectPlatform>
          <ProjectDescription>
            <p>
              An Amazon-looking web application made with ReactJs, Firebase,
              Stripe, NodeJs and Express that allows the user to Sign up, Log in
              and Purchase Item with Card Payment.
            </p>
          </ProjectDescription>
          <ProjectButton>
            <a href="https://cl-63edc.firebaseapp.com/">
              <Button>VISIT WEBPAGE</Button>
            </a>
            <a href="https://github.com/buyongtatt/amazon-clone">
              <Button>VISIT REPO</Button>
            </a>
          </ProjectButton>
        </ProjectDetail>
      </ProjectRow>
      <ProjectRow>
        <ProjectDetail>
          <h3>INSTAGRAM-CLONE</h3>
          <p>WEB</p>
          <ProjectPlatform>
            <DesktopMacIcon />
            <TabletAndroidIcon />
            <PhoneAndroidIcon />
          </ProjectPlatform>
          <ProjectDescription>
            <p>
              A Instagram-looking web application made with ReactJs & Firebase
              that allows the user to Sign up, Log in, Upload Posts and Comment
              Posts.
            </p>
          </ProjectDescription>
          <ProjectButton>
            <a href="https://instagram-clone-9c95f.web.app/">
              <Button>VISIT WEBPAGE</Button>
            </a>
            <a href="https://github.com/buyongtatt/instagram-clone">
              <Button>VISIT REPO</Button>
            </a>
          </ProjectButton>
        </ProjectDetail>
        <ProjectImage>
          <img src={instagram} alt="" />
        </ProjectImage>
      </ProjectRow>
      <ProjectRow>
        <ProjectImage>
          <img src={whatsapp} alt="" />
        </ProjectImage>
        <ProjectDetail>
          <h3>WHATSAPP-CLONE</h3>
          <p>WEB</p>
          <ProjectPlatform>
            <DesktopMacIcon />
            <TabletAndroidIcon />
            <PhoneAndroidIcon />
          </ProjectPlatform>
          <ProjectDescription>
            <p>
              A Whatsapp-looking web application made with ReactJs & Firebase
              that allows the user to Sign up, Log in, Add New Chat and
              Chatting.
            </p>
          </ProjectDescription>
          <ProjectButton>
            <a href="https://whatsapp-clone-974a6.web.app/">
              <Button>VISIT WEBPAGE</Button>
            </a>
            <a href="https://github.com/buyongtatt/whatsapp-clone">
              <Button>VISIT REPO</Button>
            </a>
          </ProjectButton>
        </ProjectDetail>
      </ProjectRow>
      <ProjectRow>
        <ProjectDetail>
          <h3>DISCORD-CLONE</h3>
          <p>WEB</p>
          <ProjectPlatform>
            <DesktopMacIcon />
            <TabletAndroidIcon />
            <PhoneAndroidIcon />
          </ProjectPlatform>
          <ProjectDescription>
            <p>
              A Discord-looking web application made with MERN stack, Redux and
              firebase authentication that allows the user to Sign up, Log in,
              Add New Channel and Chatting.
            </p>
          </ProjectDescription>
          <ProjectButton>
            <a href="https://github.com/buyongtatt/mern-discord-clone">
              <Button>VISIT REPO</Button>
            </a>
          </ProjectButton>
        </ProjectDetail>
        <ProjectImage>
          <img src={discord} alt="" />
        </ProjectImage>
      </ProjectRow>
    </ProjectsContainer>
  );
}

export default Projects;

const ProjectImage = styled.div`
  flex: 0.5;
  width: 50%;
  padding-right: 0.9375rem;
  padding-left: 0.9375rem;
  > img {
    display: inline-block;
    vertical-align: middle;
    max-width: 100%;
    height: auto;
  }
`;

const ProjectButton = styled.div`
  display: flex;
  margin-top: 2rem;
  justify-content: space-around;
  width: 300px;

  > a > .MuiButtonBase-root {
    display: inline-block;
    vertical-align: middle;
    margin: 0 0 1rem;
    padding: 0.85em 1em;
    border: 1px solid transparent;
    border-radius: 50px;
    font-size: 0.9rem;
    line-height: 1;
    text-align: center;
    color: rgba(255, 103, 68, 0.91);
    border: 2px solid rgba(255, 103, 68, 0.91) !important;
    background-color: #fff;
    font-weight: 700;

    :hover {
      color: #fff;
      background-color: rgba(255, 103, 68, 0.91);
      transition: 1s;
    }
  }
`;

const ProjectDescription = styled.div`
  > p {
    color: #738182;
    font-family: "Maven pro", sans-serif;
    font-weight: 500;
    font-size: 1.2em;

    line-height: 1.6;
  }
`;

const ProjectPlatform = styled.p`
  display: flex;
  margin-bottom: 1.8em !important;
  justify-content: space-between;
  width: 100px;
`;

const ProjectDetail = styled.div`
  flex: 0.5;
  padding-left: 3rem;
  padding-right: 3rem;
  > h3 {
    color: #738182;
    text-transform: uppercase;
    padding-top: 20px;
    font-family: "Lato", sans-serif !important;
    font-weight: 900 !important;
    font-size: 1.9375rem;
    line-height: 1.4;
    margin-top: 0;
    margin-bottom: 0.5rem;
  }

  > p {
    font-size: 0.8em;
    text-transform: uppercase;
    margin: 2em 0 -0.1em;
    font-family: "Maven pro", sans-serif;
    font-weight: 500;
    color: #ff7654;
  }
`;

const ProjectRow = styled.div`
  display: flex;
  margin-bottom: 5.5em;
  max-width: 75rem;
  margin-right: auto;
  margin-left: auto;
  align-items: center;
`;

const ProjectsContainer = styled.div`
  padding: 6em 4em 3em;
  background-color: #fff;

  > h2 {
    text-align: center;
    color: #ff6945;
    margin-bottom: 0.7em;
    font-family: "Lato", sans-serif !important;
    font-weight: 900 !important;
    font-size: 2.5rem;
    line-height: 1.4;
    margin-top: 0;
  }

  > p {
    color: #767779;
    font-size: 1.4em;
    margin-bottom: 4em;
    text-align: center;
    font-family: Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;
    font-weight: 400;
  }
`;
