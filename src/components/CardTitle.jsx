import React from "react";
import { VscGithubAlt, VscEye } from "react-icons/vsc";
import { styled } from "styled-components";

const StyledDiv = styled.div`
  > .work-type-group {
    display: flex;
    justify-content: space-between;
    margin-bottom: 7rem;

    > ul {
      padding-left: 0;

      > li {
        display: inline;
        padding-left: 0.6rem;
      }
    }
  }
`;

const CardTitle = (props) => {
  return (
    <StyledDiv>
      <h2>{props.name}</h2>
      <hr />
      <div className="work-type-group">
        <p>{props.workType}</p>
        <ul>
          <li>
            <VscGithubAlt />
          </li>
          <li>
            <VscEye />
          </li>
        </ul>
      </div>
    </StyledDiv>
  );
};

export default CardTitle;
