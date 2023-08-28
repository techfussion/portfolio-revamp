import { React, useEffect, useRef } from "react";
import NavBar from "../../layout/NavBar";
import Card from "../../components/Card";
import "./Work.css";
import CardTitle from "../../components/CardTitle";
import ActionButton from "../../components/ActionButton";
import Footer from "../../layout/Footer";
import SideNav from "../../layout/SideNav";
import workList from "../../data/workList";
import { motion, useAnimation, useInView } from "framer-motion";

const Work = () => {
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

  return (
    <>
      <SideNav />
      <NavBar />
      <section className="work-intro" ref={ref}>
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
      <motion.div
        ref={ref}
        className="toggle-work-type"
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={animationControls}
        transition={{ duration: 0.5, delay: 1.8 }}
      >
        <p>All</p>
        <p>Design</p>
        <p>Development</p>
        <p>Scripts</p>
      </motion.div>
      <section className="project-section">
        {workList.map((work) => (
          <div className="card-group" key={work.id}>
            <Card imgName={work.imgUri} bgcolor={work.bgcolor} />
            <CardTitle name={work.title} workType={work.workType} />
          </div>
        ))}
        <ActionButton
          bgcolor="rgb(69,92,233)"
          color="white"
          value="View More"
        />
      </section>
      <Footer />
    </>
  );
};

export default Work;
