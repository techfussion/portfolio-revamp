import { React, useEffect, useRef } from "react";
import { styled } from "styled-components";
import { motion, useAnimation, useInView } from "framer-motion";

// import imageLoaded from "../utils/verifyImgLoaded";
// import HashLoader from "react-spinners/HashLoader";

const StyledDiv = styled.div`
  max-width: 100%;
  padding: 7rem 2.3rem;
  margin-bottom: 2.5rem;
  background-color: ${(props) => props.bgcolor};

  > img {
    max-width: 100%;
  }
`;

const Card = (props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animationControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      animationControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={animationControls}
      transition={{ duration: 1, delay: 0.2 }}
    >
      <StyledDiv bgcolor={props.bgcolor}>
        <img
          alt=""
          src={require(`../assets/img/${props.imgName}`)}
          id={props.imgName}
        />
      </StyledDiv>
    </motion.div>
  );
};

export default Card;
