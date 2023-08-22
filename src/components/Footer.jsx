import React from "react";
import { styled } from "styled-components";

const StyledFooter = styled.footer`
  height: 100vh;
  background-color: black;
  color: white;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-item: center;
  color: rgb(255, 255, 255);
  > h1 {
    font-family: "Barlow Condensed", sans-sarif;
    font-size: 2.5rem;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <h1>Let's Work Together</h1>
    </StyledFooter>
  );
};

export default Footer;
