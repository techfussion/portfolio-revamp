import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import BaseFooter from "./BaseFooter";
import Magnetic from "../components/Magnetic";
import ActionButton from "../components/ActionButton";
import { scrollToTop } from "../utils/scrollToTop";

const StyledFooter = styled.footer`
  height: 100vh;
  position: relative;
  background-color: black;

  > .footer-group {
    display: flex;
    justify-content: center;
    height: 100%;
    align-items: center;

    > .footer-elements {
      margin: 0 12vw 5vw;
      display: inline-block;

      > h1 {
        letter-spacing: 0.6vw;
        font-size: 5.5vw;
        height: max-content;
        font-weight: 900;
        font-family: "Barlow Condensed", sans-serif;
        color: rgba(255, 255, 255, 0.65);
      }
      > .element {
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        color: rgba(255, 255, 255, 0.55);

        p {
          letter-spacing: 0.5vw;
          padding: 2vw 1vw;
          cursor: pointer;
          font-size: 1.1vw;

          > a {
            color: rgba(255, 255, 255, 0.55);
          }
        }
      }
      > .footer-contact-button {
        float: right;
        margin-top: 2vw;
        margin-right: 2vw;
      }
    }
  }

  @media (max-width: 425px) {
    > .footer-group {
      > .footer-elements {
        > h1 {
          font-size: 7vw;
        }

        > .element {
          p {
            font-size: 2.2vw;
          }
        }

        > .footer-contact-button {
          margin-top: 8vw;
          margin-right: 17vw;
        }
      }
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer-group">
        <div className="footer-elements">
          <h1>Let's Work Together</h1>
          <div className="element">
            <Magnetic>
              <p>
                <a href="mailto:muminraj15@gmail.com">muminraj15@gmail.com</a>
              </p>
            </Magnetic>
          </div>
          <div className="element">
            <Magnetic>
              <p>
                <a href="tel:+2349069209111">+2349069209111</a>
              </p>
            </Magnetic>
          </div>
          <div className="footer-contact-button">
            <Magnetic>
              <Link to={"/contact"} onClick={scrollToTop}>
                <ActionButton
                  bgcolor="rgba(0, 0, 0, 0.9)"
                  color="rgba(255, 255, 255, .4)"
                  value="Contact"
                />
              </Link>
            </Magnetic>
          </div>
        </div>
      </div>
      <BaseFooter />
    </StyledFooter>
  );
};

export default Footer;
