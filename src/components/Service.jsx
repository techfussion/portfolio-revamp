import { React, useEffect, useRef } from "react";
import { styled } from "styled-components";

const StyledDiv = styled.div`
  width: 30%;

  > .service-id {
    font-size: 1.1vw;
    color: rgba(0, 0, 0, 0.6);
    margin-bottom: 1.7vw;
  }

  > hr {
    border: none;
    height: 0.1vw;
    background-color: rgba(0, 0, 0, 0.2);
    margin-bottom: 2.2vw;
  }

  > .service-name {
    margin-bottom: 2.2vw;
    color: rgba(0, 0, 0, 0.8);
    font-size: 1.7vw;
  }

  > .service-description {
    line-height: 1.5vw;
    margin-bottom: 5vw;
    font-size: 1.2vw;
  }

  @media (max-width: 425px) {
    width: 100%;

    > .service-id {
      font-size: 2.8vw;
      margin-bottom: 2.1vw;
    }

    > .service-name {
      margin-bottom: 3vw;
      font-size: 4vw;
    }

    > .service-description {
      line-height: 3.5vw;
      font-size: 2.8vw;
    }
  }
`;

const Service = (props) => {
  return (
    <StyledDiv>
      <p className="service-id">{props.num}</p>
      <hr />
      <h3 className="service-name">{props.service}</h3>
      <p className="service-description">{props.description}</p>
    </StyledDiv>
  );
};

export default Service;
