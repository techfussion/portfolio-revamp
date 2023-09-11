import { React, useContext, useLayoutEffect, useRef, useState } from "react";
import { AsideContext } from "../context/AsideContext";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { SlMenu } from "react-icons/sl";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Magnetic from "../components/Magnetic";

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1.2vw 3vw 0 3vw;
  background-color: ${(props) => (props.bgcolor ? props.bgcolor : "fff")};

  > p {
    font-size: 1.25vw;

    @media (width: 425px) {
      margin-top: 4vw;
      font-size: 2.5vw;
    }
    @media (max-width: 375px) {
      margin-top: 5vw;
      font-size: 2.5vw;
    }
  }
  > ul {
    display: flex;
    flex-direction: row;

    > div {
      > .desktop-nav {
        margin-left: 1.4vw;
        font-size: 1.25vw;

        @media (max-width: 425px) {
          font-size: 1.5vw;
          display: none;
        }
      }

      > .mobile-menu {
        display: none;
        font-size: 2.5vw;

        @media (max-width: 425px) {
          display: block;
        }
      }
    }
  }
`;

const StyledDiv = styled.div`
  max-width: max-content;
  background-color: rgba(0, 0, 0, 0.76);
  padding: 1.5vw;
  position: fixed;
  right: 1vw;
  top: 2vh;
  border-radius: 50%;
  border: 0.1vw solid rgba(255, 255, 255, 0.4);
  color: rgba(255, 255, 255, 0.4);
  z-index: 10;
  scale: 0;
  cursor: pointer;

  &:hover {
    background-color: rgb(69, 92, 233);
  }

  @media (max-width: 425px) {
    padding: 3vw;
  }
`;

const NavBar = (props) => {
  const burger = useRef();
  const { toggled, handleToggle } = useContext(AsideContext);
  const [iconSize, setIconSize] = useState(24);

  useLayoutEffect(() => {
    const userWidth = window.innerWidth;

    if (userWidth <= 425) {
      setIconSize(12);
    }

    gsap.registerPlugin(ScrollTrigger);
    gsap.to(burger.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        onLeave: () => {
          gsap.to(burger.current, {
            scale: 1,
            duration: 0.25,
            ease: "power1.out",
          });
        },
        onEnterBack: () => {
          gsap.to(burger.current, {
            scale: 0,
            duration: 0.25,
            ease: "power1.out",
          });
        },
      },
    });
  }, []);

  return (
    <>
      <StyledNav bgcolor={props.bgcolor}>
        <p>
          <Link to={"/"}>@Venerable</Link>
        </p>
        <ul>
          <Magnetic>
            <li className="desktop-nav">
              <Link to="/work">Work</Link>
            </li>
          </Magnetic>
          <Magnetic>
            <li className="desktop-nav">
              <Link to="/about">About</Link>
            </li>
          </Magnetic>
          <Magnetic>
            <li className="desktop-nav">
              <Link to="/contact">Contact</Link>
            </li>
          </Magnetic>
          <Magnetic>
            <li className="mobile-menu">Menu</li>
          </Magnetic>
        </ul>
      </StyledNav>

      <StyledDiv ref={burger} onClick={handleToggle}>
        <Magnetic>
          {toggled ? <SlMenu size={iconSize} /> : <SlMenu size={iconSize} />}
        </Magnetic>
      </StyledDiv>
    </>
  );
};

export default NavBar;
