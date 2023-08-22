import React from "react";
import { styled } from "styled-components";

const StyledDiv = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  max-width: 100%;
  background-color: black;

  > .base-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    > .base-group {
      display: flex;

      > .base-item {
        margin-left: 1.5rem;
        font-family: "Monserrat", sans-serif;

        > .base-description {
          font-family: "Barlow Condensed", sans-sarif;
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.6);
        }

        > .base-value {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.6);
          display: flex;
          flex-direction: row;
          padding-left: 0;
          margin-right: 1.3rem;

          & li {
            padding-right: 0.5rem;

            > a {
              color: rgba(255, 255, 255, 0.6);
            }
          }
        }
      }
    }
  }

  > hr {
    ${"" /* width: 80%; */}
    border: none;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.2);
  }
  > .copyright {
    width: max-content;
    margin: 0.3rem auto;
    font-family: monospace, sans-serif;
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.4);
  }
`;

const BaseFooter = () => {
  const year = new Date().getFullYear();

  return (
    <StyledDiv>
      <div className="base-wrapper">
        <div className="base-group">
          <div className="base-item">
            <p className="base-description">VERSION</p>
            <p className="base-value">{year}&copy;Edition</p>
          </div>
          <div className="base-item">
            <p className="base-description">LOCAL TIME</p>
            <p className="base-value">Availble soon</p>
          </div>
        </div>
        <div className="base-group">
          <div className="base-item">
            <p className="base-description">SOCIALS</p>
            <ul className="base-value">
              <li>
                <a
                  href="https://linkedin.com/in/raji-abdulmumin-728377279"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/techfussion" target="_blank">
                  Github
                </a>
              </li>
              <li>
                <a>Twitter</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr />
      <p className="copyright">
        &copy; {year} Portfolio - Raji abdulmumin. All rights reserved
      </p>
    </StyledDiv>
  );
};

export default BaseFooter;
