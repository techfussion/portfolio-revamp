import { React, useState, useEffect, useRef } from "react";
import NavBar from "../../layout/NavBar";
import Card from "../../components/Card";
import "./Work.scss";
import CardTitle from "../../components/CardTitle";
import ActionButton from "../../components/ActionButton";
import Footer from "../../layout/Footer";
import SideNav from "../../layout/SideNav";
import workList from "../../data/workList";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useInView,
} from "framer-motion";
import Preloader from "../../components/Preloader";
import Magnetic from "../../components/Magnetic";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../utils/scrollToTop";

const Work = () => {
  const [isloading, setIsLoading] = useState(true);
  const [workFilter, setWorkFilter] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animationControls = useAnimation();
  const intro = "Designing Experinces, Crafting Solution, Bridging Frontiers";

  useEffect(() => {
    if (isInView) {
      animationControls.start({
        opacity: 1,
        y: 0,
      });
    }
  }, [isInView]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isloading && <Preloader page="Work" />}
      </AnimatePresence>
      <SideNav />
      <NavBar />
      <section className="work-intro" ref={ref}>
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
      <motion.div
        ref={ref}
        className="toggle-work-type"
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={animationControls}
        transition={{ duration: 0.5, delay: 3.4 }}
      >
        <p
          style={{
            color: `${workFilter == false ? "#ff1414ea" : "black"}`,
          }}
          onClick={() => setWorkFilter(false)}
        >
          All
        </p>
        <p
          style={{
            color: `${workFilter == "Design" ? "#ff1414ea" : "black"}`,
          }}
          onClick={() => setWorkFilter("Design")}
        >
          Design
        </p>
        <p
          style={{
            color: `${workFilter == "Development" ? "#ff1414ea" : "black"}`,
          }}
          onClick={() => setWorkFilter("Development")}
        >
          Development
        </p>
        <p
          style={{
            color: `${workFilter == "Script" ? "#ff1414ea" : "black"}`,
          }}
          onClick={() => setWorkFilter("Script")}
        >
          Scripts
        </p>
      </motion.div>
      <section className="project-section">
        {!workFilter
          ? workList
              .filter((work) => {
                return work.id <= 6;
              })
              .map((work) => (
                <motion.div className="card-group" key={work.id}>
                  <Card imgName={work.imgUri} bgcolor={work.bgcolor} />
                  <CardTitle name={work.title} workType={work.workType} />
                </motion.div>
              ))
          : workList
              .filter((work) => {
                return work.id <= 6 && work.workType.includes(workFilter);
              })
              .map((work) => (
                <motion.div className="card-group" key={work.id}>
                  <Card imgName={work.imgUri} bgcolor={work.bgcolor} />
                  <CardTitle name={work.title} workType={work.workType} />
                </motion.div>
              ))}
      </section>
      <section className="personal-project-section">
        <h2>Personal Projects</h2>
        <div className="toggle-work-type">
          <p
            style={{
              color: `${workFilter == false ? "#ff1414ea" : "black"}`,
            }}
            onClick={() => setWorkFilter(false)}
          >
            All
          </p>
          <p
            style={{
              color: `${workFilter == "Design" ? "#ff1414ea" : "black"}`,
            }}
            onClick={() => setWorkFilter("Design")}
          >
            Front-End
          </p>
          <p
            style={{
              color: `${workFilter == "Development" ? "#ff1414ea" : "black"}`,
            }}
            onClick={() => setWorkFilter("Development")}
          >
            Back-End
          </p>
          <p
            style={{
              color: `${workFilter == "Script" ? "#ff1414ea" : "black"}`,
            }}
            onClick={() => setWorkFilter("Script")}
          >
            Full-Stack
          </p>
          <p
            style={{
              color: `${workFilter == "Script" ? "#ff1414ea" : "black"}`,
            }}
            // onClick={() => setWorkFilter("Script")}
          >
            Others
          </p>
        </div>
        <div className="project-section">
          {!workFilter
            ? workList
                .filter((work) => {
                  return work.id <= 6;
                })
                .map((work) => (
                  <motion.div className="card-group" key={work.id}>
                    <Card imgName={work.imgUri} bgcolor={work.bgcolor} />
                    <CardTitle name={work.title} workType={work.workType} />
                  </motion.div>
                ))
            : workList
                .filter((work) => {
                  return work.id <= 6 && work.workType.includes(workFilter);
                })
                .map((work) => (
                  <motion.div className="card-group" key={work.id}>
                    <Card imgName={work.imgUri} bgcolor={work.bgcolor} />
                    <CardTitle name={work.title} workType={work.workType} />
                  </motion.div>
                ))}
        </div>
      </section>
      <div
        style={{
          margin: "2rem 0 4rem 0",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Magnetic>
          <Link to={"/contact"} onClick={scrollToTop}>
            <ActionButton
              bgcolor="rgba(0, 0, 0, 0.9)"
              color="rgba(255, 255, 255, .8)"
              value="Hire"
            />
          </Link>
        </Magnetic>
      </div>
      <Footer />
    </>
  );
};

export default Work;
