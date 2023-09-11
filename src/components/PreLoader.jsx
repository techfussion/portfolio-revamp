import React from "react";
import BounceLoader from "react-spinners/BounceLoader";
import { motion } from "framer-motion";

const styles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#495057",
  position: "fixed",
  width: "100%",
  height: "100%",
  zIndex: "2000",
};

const pStyle = {
  color: "rgba(255, 255, 255, 1)",
  position: "absolute",
  left: "2vw",
  bottom: "1vw",
  fontSize: "2.2vw",
};

const slideUp = {
  initial: {
    y: "0",
  },
  exit: {
    y: "-100vh",
    transition: { duration: 0.4, ease: [0.66, 0, 0.14, 0.7] },
  },
};

const Preloader = (props) => {
  return (
    <motion.div variants={slideUp} initial="initial" exit="exit" style={styles}>
      <BounceLoader
        color="#fff"
        size={100}
        aria-label="Loading Spinner"
        data-testid="preloader"
      />
      <p style={pStyle}>{props.page}...</p>
    </motion.div>
  );
};

export default Preloader;
