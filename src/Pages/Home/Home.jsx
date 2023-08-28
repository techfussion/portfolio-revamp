import React, { useEffect, useState, useRef } from "react";
import "./Home.css";
import NavBar from "../../layout/NavBar";
import {
  VscGithubInverted,
  VscChevronLeft,
  VscChevronRight,
} from "react-icons/vsc";
import { IoLogoLinkedin } from "react-icons/io5";
import Footer from "../../layout/Footer";
import SideNav from "../../layout/SideNav";
import roleData from "../../data/role.js";

const Home = () => {
  // const [roleState, setRoleState] = useState("");
  // const [toastMessage, setToastMessage] = useState("");

  // let idx = useRef(1);

  // setInterval(() => {
  //   setRoleState(roleData[idx.current].role);
  //   setToastMessage(roleData[idx.current].toastMessage);
  //   idx.current = idx.current === roleData.length ? 0 : idx.current + 1;
  // }, 7000);

  // useEffect(() => {
  //   setRoleState(roleData[0].role);
  //   setToastMessage(roleData[0].toastMessage);
  // }, []);

  return (
    <>
      <SideNav />
      <header className="home-landing-viewport">
        <NavBar color="#fff" />
        <div className="wrapper">
          <div className="intro-prev">
            <VscChevronLeft size={24} />
          </div>
          <div className="intro">
            <h1 className="name">Raji Abdulmumin</h1>
            {/* <p className="role">{roleState}</p>
            <p className="toast-message">{toastMessage}</p> */}
            <p className="role">Software Engineer</p>
            <p className="toast-message">
              Building amazing products for companies, startups and more.
            </p>
            <div className="socials">
              <a href="https://github.com/techfussion" target="_blank">
                <VscGithubInverted />
              </a>
              <a
                href="https://linkedin.com/in/raji-abdulmumin-728377279"
                target="_black"
              >
                <IoLogoLinkedin />
              </a>
            </div>
          </div>
          <img src={require("../../assets/img/home-anim-1.gif")} alt="" />
          <div className="intro-next">
            <VscChevronRight size={24} />
          </div>
        </div>
      </header>
      <main>
        <Footer />
      </main>
    </>
  );
};

export default Home;
