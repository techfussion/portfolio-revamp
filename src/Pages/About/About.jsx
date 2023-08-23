import React from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import SideNav from "../../components/SideNav";
import "./About.css";

const About = () => {
  return (
    <>
      <SideNav />
      <NavBar />
      <section className="about-intro">
        <h1>Code with Purpose, Design with Passion, Deliver with Excellence</h1>
        <button>Hire</button>
      </section>
      <hr />
      <main></main>
      <Footer />
    </>
  );
};

export default About;
