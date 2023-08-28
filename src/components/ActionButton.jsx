import React from "react";
import { styled } from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) => (props.bgColor ? props.bgColor : "#fff")};
  color: ${(props) => (props.color ? props.color : "#fff")};
  border: 1px solid ${(props) => props.color};
  padding: 1.5rem 2.5rem;
  border-radius: ${(props) => (props.rad ? props.rad : "2rem")};
  margin: 0 auto 5rem auto;
  font-family: "Barlow Condensed", sans-serif;
  font-size: 1rem;
`;

const ActionButton = (props) => {
  return (
    <StyledButton
      type={props.type ? props.type : "button"}
      name={props.name ? props.name : ""}
      bgColor={props.bgColor}
      color={props.color}
      rad={props.rad}
    >
      {props.value}
    </StyledButton>
  );
};

export default ActionButton;
