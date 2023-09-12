import { React, useEffect, useRef, useState } from "react";
import NavBar from "../../layout/NavBar";
import Footer from "../../layout/Footer";
import SideNav from "../../layout/SideNav";
import "./About.scss";
import Service from "../../components/Service";
import servicesData from "../../data/services";
import {
  motion,
  useInView,
  useAnimation,
  AnimatePresence,
} from "framer-motion";
import CarouselTemplate from "../../components/CarouselTemplate";
import ReviewCard from "../../components/ReviewCard";
import reviews from "../../data/reviews";
import Preloader from "../../components/Preloader";

const About = () => {
  const [isloading, setIsLoading] = useState(true);
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  const animationControls = useAnimation();

  const intro =
    "Code with Purpose, Design with Passion, Deliver with Excellence";
  const about =
    "Hey I'm Raji Abdulmumin, a versatile software developer passionate about elegant code and creative problem-solving. With expertise in various programming languages, I thrive in turning complex concepts into functional applications. Whether you need freelance services or a valuable addition to your team, I'm here to help. Beyond coding, I enjoy skating, gaming, and tech exploration.";

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    if (isInView) {
      animationControls.start({
        opacity: 1,
        y: 0,
      });
    }
  }, [isInView]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isloading && <Preloader page="About" />}
      </AnimatePresence>
      <SideNav />
      <NavBar />
      <section data-scroll-section className="intro-viewport" ref={ref}>
        <h1>
          {intro.split(" ").map((word, index) => {
            return (
              <motion.span
                initial={{ opacity: 0, y: 100 }}
                animate={animationControls}
                transition={{ duration: 0.5, delay: 2.4 + index / 6 }}
                key={index}
              >
                {word}
              </motion.span>
            );
          })}
        </h1>
      </section>
      <main>
        <section data-scroll-section className="about-section">
          <p className="about">
            {about.split(" ").map((word, index) => {
              return (
                <motion.span
                  initial={{ opacity: 0, y: 100 }}
                  animate={animationControls}
                  transition={{ duration: 0.5, delay: 3.5 }}
                  key={index}
                >
                  {word}
                </motion.span>
              );
            })}
          </p>
          <motion.img
            initial={{ opacity: 0, y: 100 }}
            animate={animationControls}
            transition={{ duration: 0.5, delay: 3.5 }}
            className="about-image"
            src={require("../../assets/img/about/Damn.png")}
            alt=""
          />
        </section>
        <section data-scroll-section className="services">
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
        <section data-scroll-section className="reviews">
          <h2>What clients have to say...</h2>
          <CarouselTemplate>
            {reviews.map((item, index) => {
              return <ReviewCard {...item} key={index} />;
            })}
          </CarouselTemplate>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
