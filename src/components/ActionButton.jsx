import React from "react";
import { styled } from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) => (props.bgColor ? props.bgColor : "#fff")};
  color: ${(props) => (props.bgColor ? "#fff" : "#000")}
  padding: 1rem 2rem;
  border-radius: 1.5rem;
`;

const ActionButton = (props) => {
  return (
    <StyledButton
      type={props.type ? props.type : "button"}
      name={props.name ? props.name : ""}
      bgColor={props.bgColor}
    >
      {props.value}
    </StyledButton>
  );
};

export default ActionButton;
