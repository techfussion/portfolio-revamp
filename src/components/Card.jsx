import React from "react";
import { styled } from "styled-components";
// import imageLoaded from "../utils/verifyImgLoaded";
// import HashLoader from "react-spinners/HashLoader";

const StyledDiv = styled.div`
  max-width: 100%;
  padding: 7rem 2.3rem;
  margin-bottom: 2.5rem;
  background-color: ${(props) => props.bgColor};

  > img {
    max-width: 100%;
  }
`;

const Card = (props) => {
  return (
    <StyledDiv bgColor={props.bgColor}>
      <img
        alt=""
        src={require(`../assets/img/${props.imgName}`)}
        id={props.imgName}
      />
    </StyledDiv>
  );
};

export default Card;
