import React from "react";
import { styled } from "styled-components";

const StyledDiv = styled.div`
  > .work-type-group {
    display: flex;
    justify-content: space-between;
    margin-bottom: 7rem;
  }
`;

const CardTitle = (props) => {
  return (
    <StyledDiv>
      <h2>{props.name}</h2>
      <hr />
      <div className="work-type-group">
        <p>{props.workType}</p>
        <p>test</p>
      </div>
    </StyledDiv>
  );
};

export default CardTitle;
