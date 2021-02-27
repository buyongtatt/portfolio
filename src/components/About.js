import React from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import TelegramIcon from "@material-ui/icons/Telegram";

function About() {
  return (
    <AboutContainer>
      <AboutPhoto src="https://avatars.githubusercontent.com/u/48663882?s=460&u=166b088335258e442fc0a8d17e9a7557cb53dbd2&v=4" />
      <h2>
        Hi, I'm Bu Yong Tatt.<br></br> Nice to meet you.
      </h2>
      <AboutContact>
        <a href="mailto:yongtatt981213@hotmail.com">
          {" "}
          <ContactEmail />
        </a>
        <a href="https://www.facebook.com/bu.yongtatt/">
          <ContactFacebook />
        </a>
        <a href="https://www.instagram.com/buyongtatt/">
          <ContactInstagram />
        </a>
        <a href="https://www.linkedin.com/in/yong-tatt-bu-1957761ba/">
          <ContactLinkedIn />
        </a>
        <a href="https://github.com/buyongtatt">
          <ContactGithub />
        </a>
        <a href="https://wa.me/601124273578">
          <ContactWhatsapp />
        </a>
        <a href="https://telegram.me/buyongtatt">
          <ContactTelegram />
        </a>
      </AboutContact>
    </AboutContainer>
  );
}

export default About;

const ContactEmail = styled(EmailIcon)`
  color: #2473c7 !important;
`;
const ContactFacebook = styled(FacebookIcon)`
  color: #385898 !important;
`;
const ContactInstagram = styled(InstagramIcon)`
  color: #8a3ab9 !important;
`;
const ContactLinkedIn = styled(LinkedInIcon)`
  color: #0e76a8 !important;
`;
const ContactGithub = styled(GitHubIcon)`
  color: black !important;
`;
const ContactWhatsapp = styled(WhatsAppIcon)`
  color: #25d366 !important;
`;
const ContactTelegram = styled(TelegramIcon)`
  color: #0088cc !important;
`;

const AboutContact = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-evenly;
  width: 50%;
  margin-left: auto;
  margin-right: auto;

  > a > .MuiSvgIcon-root {
    text-decoration: none;
    color: initial;

    font-size: 30px;
    padding: 10px;
  }
`;

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
