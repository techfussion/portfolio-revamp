import React, { useState, useEffect, useRef } from "react";
import "./Home.css";
import HashLoader from "react-spinners/HashLoader";
import PreLoader from "../../components/PreLoader";

const Home = () => {
  return (
    <>
      <PreLoader />
      <div>
        <h1>Hello welcome to my portfolio page</h1>
      </div>
    </>
  );
};

export default Home;
