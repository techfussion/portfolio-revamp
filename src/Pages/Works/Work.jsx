import React from "react";
import NavBar from "../../components/NavBar";
import Card from "../../components/Card";
import "./Work.css";
import CardTitle from "../../components/CardTitle";
import ActionButton from "../../components/ActionButton";
import Footer from "../../components/Footer";

const Work = () => {
  return (
    <>
      <NavBar color="#000" />
      <section className="project-section">
        <div className="card-group">
          <Card imgName="home-item-1.jpg" bgColor="#373737" />
          <CardTitle name="MicDrop Agency" workType="Design & Development" />
        </div>
        <div className="card-group">
          <Card imgName="home-item-3.jpg" bgColor="grey" />
          <CardTitle name="Atypikal" workType="Design" />
        </div>
        <div className="card-group">
          <Card imgName="home-item-3.jpg" bgColor="grey" />
          <CardTitle name="Atypikal" workType="Design" />
        </div>
        <div className="card-group">
          <Card imgName="home-item-6.jpg" bgColor="grey" />
          <CardTitle name="Tapsody" workType="App & Web" />
        </div>
        <div className="card-group">
          <Card imgName="home-item-8.jpg" bgColor="grey" />
          <CardTitle name="Emble Studio" workType="Desing & Development" />
        </div>
      </section>
      <ActionButton bgColor="black" value="View More" />
      <Footer />
    </>
  );
};

export default Work;
