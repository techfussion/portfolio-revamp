import React from "react";
import { styled } from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) => (props.bgcolor ? props.bgcolor : "#fff")};
  color: ${(props) => (props.color ? props.color : "#fff")};
  border: 1px solid ${(props) => props.color};
  padding: 2.7vh 2.7vw;
  border-radius: ${(props) => (props.rad ? props.rad : "2vw")};
  margin: 0 auto 0 auto;
  font-family: "Barlow Condensed", sans-serif;
  font-size: 1.2vw;
  cursor: pointer;

  &:hover {
    background-color: rgb(69, 92, 233);
    border: none;
  }

  @media (max-width: 768px) {
    border-radius: ${(props) => (props.rad ? props.rad : "3vw")};
  }

  @media (max-width: 425px) {
    border-radius: ${(props) => (props.rad ? props.rad : "4.4vw")};
    padding: 2.7vh 4.5vw;
    font-size: 2.5vw;
    border-radius: 6vw;
    letter-spacing: 0.4vw;
  }
`;

const ActionButton = (props) => {
  return (
    <StyledButton
      type={props.type ? props.type : "button"}
      name={props.name ? props.name : ""}
      bgcolor={props.bgcolor}
      color={props.color}
      rad={props.rad}
      disabled={props.isDisabled}
    >
      {props.value}
    </StyledButton>
  );
};

export default ActionButton;
