import React, { useState, useEffect } from "react";
import "./Home.scss";
import NavBar from "../../layout/NavBar";
import Footer from "../../layout/Footer";
import SideNav from "../../layout/SideNav";
import Card from "../../components/Card";
import CardTitle from "../../components/CardTitle";
import workList from "../../data/workList";
import Preloader from "../../components/Preloader";
import ActionButton from "../../components/ActionButton";
import { AnimatePresence } from "framer-motion";
import Magnetic from "../../components/Magnetic";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../utils/scrollToTop";
import { motion } from "framer-motion";

const Home = () => {
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isloading && <Preloader page="Welcome" />}
      </AnimatePresence>
      <SideNav />
      <header className="home-landing-viewport">
        <NavBar color="#000" />
        <div className="wrapper">
          <div className="intro">
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2.5 }}
            >
              Hey <span>👋</span> I'm
            </motion.p>
            <h1 className="name">
              {"R a j i - A b d u l m u m i n".split(" ").map((char, index) => (
                <motion.span
                  initial={{ opacity: 0, y: 200 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 2.8 + index / 8 }}
                  key={index}
                >
                  {char}
                </motion.span>
              ))}
            </h1>
            <motion.p
              className="role"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 4.5 }}
            >
              Software Engineer
            </motion.p>
            <motion.p
              className="toast-message"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 5 }}
            >
              I Build amazing products for companies, startups and more.
            </motion.p>
            <div className="socials">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 5.4 }}
              >
                <Magnetic>
                  <Link
                    to={"https://github.com/techfussion"}
                    target="_blank"
                    style={{ marginRight: "4vw" }}
                  >
                    <ActionButton
                      value="GitHub"
                      bgcolor="rgba(0, 0, 0, 0.8)"
                      color="rgba(255, 255, 255, 0.8)"
                    />
                  </Link>
                </Magnetic>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 5.9 }}
              >
                <Magnetic>
                  <Link
                    to={"https://linkedin.com/in/raji-abdulmumin-728377279"}
                    target="_blank"
                  >
                    <ActionButton
                      value="LinkedIn"
                      bgcolor="rgba(0, 0, 0, 0.8)"
                      color="rgba(255, 255, 255, 0.8)"
                    />
                  </Link>
                </Magnetic>
              </motion.div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className="mini-about">
          <p>
            Elevating brands in the digital age, we collaboratively redefine the
            norm, consistently leading at the forefront – no frills, always
            pioneering.
          </p>
          <div
            style={{
              margin: "2rem 0 4rem 0",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Magnetic>
              <Link to={"/about"} onClick={scrollToTop}>
                <ActionButton
                  bgcolor="rgba(0, 0, 0, 0.9)"
                  color="rgba(255, 255, 255, .8)"
                  value="About"
                />
              </Link>
            </Magnetic>
          </div>
        </section>
        <p className="latest-work">Latest Work</p>

        <section className="project-section">
          {workList
            .filter((work) => {
              return work.id <= 4;
            })
            .map((work) => (
              <div className="card-group" key={work.id}>
                <Card imgName={work.imgUri} bgcolor={work.bgcolor} />
                <CardTitle name={work.title} workType={work.workType} />
              </div>
            ))}
        </section>
        <div
          style={{
            margin: "2rem 0 4rem 0",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Magnetic>
            <Link to={"/work"} onClick={scrollToTop}>
              <ActionButton
                bgcolor="rgba(0, 0, 0, 0.9)"
                color="rgba(255, 255, 255, .8)"
                value="Works"
              />
            </Link>
          </Magnetic>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Home;
