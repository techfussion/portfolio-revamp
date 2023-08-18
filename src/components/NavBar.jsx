import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 3rem;

  > ul {
    display: flex;
    flex-direction: row;

    > li {
      margin-left: 1.7rem;
    }
  }
`;

const NavBar = () => {
  return (
    <StyledNav>
      <p>
        <Link to={"/"}>@Venerable</Link>
      </p>
      <ul>
        <li>
          <Link to={"/work"}>Work</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

export default NavBar;
