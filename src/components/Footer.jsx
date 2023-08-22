import React from "react";
import { styled } from "styled-components";
import BaseFooter from "./BaseFooter";

const StyledFooter = styled.footer`
  height: 100vh;
  background-color: black;
  color: white;
  margin-top: 2rem;
  display: flex;
  position: relative;
  justify-content: center;
  align-item: center;
  color: rgb(255, 255, 255);

  > h1 {
    font-family: "Barlow Condensed", sans-sarif;
    font-size: 3.5rem;
    color: rgba(255, 255, 255, 0.8);
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <h1>Let's Work Together</h1>
      <BaseFooter />
    </StyledFooter>
  );
};

export default Footer;
