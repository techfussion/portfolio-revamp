import React from "react";
import { styled } from "styled-components";
import BaseFooter from "./BaseFooter";
import "../assets/fonts/prospec/Prospec-Outline.otf";
import CircledText from "../components/CircleText";

const StyledFooter = styled.footer`
  height: 100vh;
  background-color: black;
  color: white;
  margin-top: 2rem;
  position: relative;
  color: rgb(255, 255, 255);

  > .footer-group {
    height: 100%;
    display: flex;
    justify-content: center;
    align-item: center;

    > h1 {
      letter-spacing: 6px;
      font-size: 6rem;
      height: max-content;
      margin: 7rem 2rem 0 0;
      max-width: 50%;
      font-weight: 900;
      color: rgba(255, 255, 255, 0.9);
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer-group">
        <h1>
          Let's Work <span style={{ color: "rgb(69, 92, 233)" }}>Together</span>
        </h1>
        <a style={{ color: "#fff" }} href="mailto:muminraj15@gmail.com">
          muminraj15@gmail.com
        </a>
        <div>
          <CircledText />
        </div>
      </div>

      <BaseFooter />
    </StyledFooter>
  );
};

export default Footer;
