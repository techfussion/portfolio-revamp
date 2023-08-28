import React from "react";
import { styled } from "styled-components";

const StyledDiv = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  > .circle {
    width: 5rem;
    height: 5rem;
    border-radius: 1rem;
    background: #ccc;
    display: flex;
    justify-content: center;
    align-items: center;

    > .logo {
      width: 4rem;
      height: 4rem;
      background: (url{require(../assets/img/home-item-1.jpg)});
      background-size: cover;
      border-radius: 50%;
    }
  }
`;

const CircledText = () => {
  return (
    <StyledDiv>
      <div className="circle">
        <div className="logo"></div>
        <div className="text">
          <p>From pixels to product. Building seamless products</p>
        </div>
      </div>
    </StyledDiv>
  );
};

export default CircledText;
