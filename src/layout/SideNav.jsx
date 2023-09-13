import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import BaseFooter from "./BaseFooter";
import { AnimatePresence } from "framer-motion";
import { AsideContext } from "../context/AsideContext";
import { scrollToTop } from "../utils/scrollToTop";
import Magnetic from "../components/Magnetic";
import { VscClose } from "react-icons/vsc";
import { motion } from "framer-motion";

const StyledAside = styled.aside`
  height: 100vh;
  width: 40%;
  position: fixed;
  right: 0;
  background-color: #495057;
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 1001;

  > div {
    float: right;

    > .close-menu {
      color: rgba(255, 255, 255, 0.4);
      padding: 1.6vw;
      border: 0.1vw solid rgba(255, 255, 255, 0.4);
      border-radius: 50%;
      margin: 2vw 2vw 0 0;
      cursor: pointer;

      &:hover {
        background-color: rgb(69, 92, 233);
        border: none;
      }
    }
  }

  > ul {
    padding: 0;
    width: max-content;
    margin-left: auto;
    margin-right: auto;
    clear: both;

    > li {
      margin-bottom: 2vw;
      font-size: 2vw;
      letter-spacing: 0.7vw;
    }
  }

  @media (max-width: 425px) {
    width: 60%;

    > ul {
      > li {
        font-size: 4vw;
        margin-bottom: 4vw;
      }
    }
  }
`;

const SideNav = () => {
  const { toggled, handleToggle } = useContext(AsideContext);

  const handleClick = () => {
    scrollToTop();
    handleToggle();
  };

  return (
    <AnimatePresence>
      {toggled && (
        <motion.div>
          <StyledAside>
            <Magnetic>
              <div className="close-menu" onClick={handleToggle}>
                <Magnetic>
                  <VscClose size={24} />
                </Magnetic>
              </div>
            </Magnetic>
            <ul>
              <li>
                <Magnetic>
                  <Link
                    style={{
                      color: "rgba(255, 255, 255, 0.6)",
                    }}
                    to={"/"}
                    onClick={handleClick}
                  >
                    Home
                  </Link>
                </Magnetic>
              </li>

              <li>
                <Magnetic>
                  <Link
                    style={{ color: "rgba(255, 255, 255, 0.6)" }}
                    to={"/work"}
                    onClick={handleClick}
                  >
                    Work
                  </Link>
                </Magnetic>
              </li>

              <li>
                <Magnetic>
                  <Link
                    style={{ color: "rgba(255, 255, 255, 0.6)" }}
                    to={"/about"}
                    onClick={handleClick}
                  >
                    About
                  </Link>
                </Magnetic>
              </li>

              <li>
                <Magnetic>
                  <Link
                    style={{ color: "rgba(255, 255, 255, 0.6)" }}
                    to={"/contact"}
                    onClick={handleClick}
                  >
                    Contact
                  </Link>
                </Magnetic>
              </li>

              <li>
                <Magnetic>
                  <Link
                    style={{ color: "rgba(255, 255, 255, 0.6)" }}
                    to={"https://github.com/techfussion"}
                    target="_blank"
                    onClick={handleClick}
                  >
                    GitHub
                  </Link>
                </Magnetic>
              </li>
              <li>
                <Magnetic>
                  <Link
                    style={{ color: "rgba(255, 255, 255, 0.6)" }}
                    to={"https://linkedin.com/in/raji-abdulmumin-728377279"}
                    target="_blank"
                    onClick={handleClick}
                  >
                    LinkedIn
                  </Link>
                </Magnetic>
              </li>
            </ul>
            <BaseFooter />
          </StyledAside>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SideNav;
