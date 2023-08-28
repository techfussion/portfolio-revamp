import { React, useEffect, useRef } from "react";
import NavBar from "../../layout/NavBar";
import Footer from "../../layout/Footer";
import SideNav from "../../layout/SideNav";
import "./About.css";
import Service from "../../components/Service";
import servicesData from "../../data/services";
import { motion, useInView, useAnimation } from "framer-motion";

const About = () => {
  const introRef = useRef();
  const aboutRef = useRef();
  const introInView = useInView(introRef, { once: true });
  const aboutInVIew = useInView(aboutRef, { once: true });
  const animationControls = useAnimation();

  const intro =
    "Code with Purpose, Design with Passion, Deliver with Excellence";
  const about =
    "I'm a freelacnce software developer driven by a love for elegant code and creative problem solving. With a strong foundation in various programming languages and a knack for turning complex concepts into functional applications. I thrive in bringing ideas to life. When not glued to my keyboard, I enjoy hiking, gaming, and constantly expanding my tech toolkit.";

  useEffect(() => {
    if (introInView) {
      animationControls.start({
        opacity: 1,
        y: 0,
      });
    }

    if (aboutInVIew) {
      animationControls.start({
        opacity: 1,
        y: 0,
      });
    }
  }, [introInView, aboutInVIew]);

  return (
    <>
      <SideNav />
      <NavBar />
      <section className="intro-viewport" ref={introRef}>
        <h1>
          {intro.split(" ").map((word, index) => {
            return (
              <motion.span
                initial={{ opacity: 0, y: 100 }}
                animate={animationControls}
                transition={{ duration: 0.5, delay: 0.25 * index }}
                key={index}
              >
                {word}
              </motion.span>
            );
          })}
        </h1>
      </section>
      <main>
        <section className="about-section">
          <p className="about">
            {about.split(" ").map((word, index) => {
              return (
                <motion.span
                  ref={aboutRef}
                  initial={{ opacity: 0, y: 100 }}
                  animate={animationControls}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                  key={index}
                >
                  {word}
                </motion.span>
              );
            })}
          </p>
          <img
            className="about-image"
            src={require("../../assets/img/works/Damn.png")}
            alt=""
          />
        </section>
        <section className="services">
          <h2>Services I offer...</h2>
          <div className="service-group">
            {servicesData.map((item, index) => (
              <Service
                num={item.id}
                service={item.service}
                description={item.description}
                key={index}
              />
            ))}
          </div>
        </section>
        <section className="gallery">
          <div className="gallery-group-1">
            <img
              src={require("../../assets/img/works/micdrop-case-header-540x.jpg")}
              alt=""
            />
            <img
              src={require("../../assets/img/works/micdrop-case-header-540x.jpg")}
              alt=""
            />
          </div>
          <div className="gallery-group-2">
            <img
              src={require("../../assets/img/works/micdrop-case-header-540x.jpg")}
              alt=""
            />
            <img
              src={require("../../assets/img/works/micdrop-case-header-540x.jpg")}
              alt=""
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
