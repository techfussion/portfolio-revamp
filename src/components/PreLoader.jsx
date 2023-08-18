import React, { useState, useRef, useEffect } from "react";
import HashLoader from "react-spinners/HashLoader";
import { styled } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #1f1e1e;
  width: 100vw;
  height: 100vh;
`;

const PreLoader = () => {
  const [preloader, setPreloader] = useState(false);
  const [timer, setTimer] = useState(0);
  const [currentpreloaderColor, setCurrentPreloaderColor] = useState("#8c8e91");

  const preloaderColorArray = ["#0515f7", "#f705bf", "#428af591", "#f5a742"];

  let id = useRef(null);

  const clear = () => {
    setPreloader(false);
    clearInterval(id.current);
  };

  const randomIndex = Math.floor(Math.random() * preloaderColorArray.length);

  id.current = window.setInterval(() => {
    setTimer((timer) => timer + 1);
    setCurrentPreloaderColor(preloaderColorArray[randomIndex]);

    if (timer < 7) {
    } else if (document.readyState === "complete") {
      clear();
    } else {
      // You should toast the visitor about slow network here
      // Wait two seconds and display page regardless
      setTimeout(() => {
        clear();
      }, 2000);
    }
  }, 1000);

  useEffect(() => {
    setPreloader(true);
  }, []);
  return (
    <>
      {preloader ? (
        <Wrapper>
          <HashLoader
            color={currentpreloaderColor}
            loading={preloader}
            size={100}
            aria-label="Loading Spinner"
            data-testid="preloader"
          />
        </Wrapper>
      ) : (
        <></>
      )}
    </>
  );
};

export default PreLoader;
