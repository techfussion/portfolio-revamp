import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1.2rem 3rem 0 3rem;

  > ul {
    display: flex;
    flex-direction: row;

    > li {
      margin-left: 1.7rem;
    }
  }
`;

const NavBar = (props) => {
  return (
    <StyledNav>
      <p>
        <Link style={{ color: props.color }} to={"/"}>
          @Venerable
        </Link>
      </p>
      <ul>
        <li>
          <Link style={{ color: props.color }} to={"/work"}>
            Work
          </Link>
        </li>
        <li>
          <Link style={{ color: props.color }} to={"/about"}>
            About
          </Link>
        </li>
        <li>
          <Link style={{ color: props.color }} to={"/contact"}>
            Contact
          </Link>
        </li>
      </ul>
    </StyledNav>
  );
};

export default NavBar;
