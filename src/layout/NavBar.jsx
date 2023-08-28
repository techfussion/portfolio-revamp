import { React, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { SlMenu } from "react-icons/sl";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1.2rem 3rem 0 3rem;
  background-color: ${(props) => (props.bgcolor ? props.bgcolor : "fff")};

  > ul {
    display: flex;
    flex-direction: row;

    > li {
      margin-left: 1.7rem;
    }
  }
`;

const StyledDiv = styled.div`
  max-width: max-content;
  background-color: rgba(0, 0, 0, 0.76);
  padding: 1.5rem;
  position: fixed;
  right: 1rem;
  top: 2rem;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.4);
  color: rgba(255, 255, 255, 0.4);
  z-index: 10;
  scale: 0;
`;

const NavBar = (props) => {
  const burger = useRef(null);
  const [isFocused, setIsFocused] = useState(false);

  useLayoutEffect(() => {
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
      <StyledDiv ref={burger}>
        <SlMenu size={24} />
      </StyledDiv>
    </>
  );
};

export default NavBar;
