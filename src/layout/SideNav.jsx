import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { IoArrowBack } from "react-icons/io5";
import BaseFooter from "./BaseFooter";
import { AnimatePresence } from "framer-motion";
import { AsideContext } from "../context/AsideContext";

const StyledAside = styled.aside`
  height: 100vh;
  width: 35%;
  position: fixed;
  right: 0;
  background-color: #000;
  z-index: 1;
  display: ${(props) => (props.toggled ? "none" : "block")};

  > h1 {
    font-size: 2.5rem;
    color: rgba(255, 255, 255, 0.6);
    margin: 3rem 0 4rem 1.3rem;
    font-family: "Barlow Condensed", sans-serif;
  }

  > hr {
    width: 60%;
    border: none;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.2);
    margin-bottom: 4rem;
  }

  > .aside-styling-circle {
    padding: 2.3rem;
    color: rgba(255, 255, 255, 0.7);
    transform: rotate(-60deg);
    top: 3rem;
    right: 3rem;
    border: 1px solid rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    position: absolute;
  }

  > ul {
    padding-left: 0;
    width: max-content;
    margin-left: auto;
    margin-right: auto;

    > li {
      margin-bottom: 1.5rem;
      font-size: 1.5rem;
      letter-spacing: 7px;
    }
  }
`;

const SideNav = () => {
  const toggled = useContext(AsideContext);

  return (
    <AnimatePresence>
      {toggled && (
        <StyledAside toggled={toggled}>
          <h1>Navigations</h1>
          <hr />
          <div className="aside-styling-circle">
            <IoArrowBack size={24} />
          </div>
          <ul>
            <li>
              <Link style={{ color: "rgba(255, 255, 255, 0.8)" }} to={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link style={{ color: "rgba(255, 255, 255, 0.8)" }} to={"/work"}>
                Work
              </Link>
            </li>
            <li>
              <Link style={{ color: "rgba(255, 255, 255, 0.8)" }} to={"/about"}>
                About
              </Link>
            </li>
            <li>
              <Link
                style={{ color: "rgba(255, 255, 255, 0.8)" }}
                to={"/contact"}
              >
                Contact
              </Link>
            </li>
          </ul>
          <BaseFooter />
        </StyledAside>
      )}
    </AnimatePresence>
  );
};

export default SideNav;
