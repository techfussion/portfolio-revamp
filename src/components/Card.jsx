import { React, useEffect, useRef } from "react";
import { styled } from "styled-components";
import { motion, useAnimation, useInView } from "framer-motion";
import { Link } from "react-router-dom";

// import hoverIcon from "../assets/img/hoverImg.png";

const StyledDiv = styled.div`
  max-width: 100%;
  padding: 7vw 2.3vw;
  margin-bottom: 2.5vw;
  background-color: ${(props) => props.bgcolor};
  cursor: url("https://github.com/techfussion/placeholder/blob/main/hoverImg.png"),
    pointer;
  transition: transform 1s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  img {
    max-width: 100%;
  }

  @media (max-width: 425px) {
    margin-bottom: 5vw;
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
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <StyledDiv bgcolor={props.bgcolor}>
        <Link to={props.url} target="_blank" rel="noopener noreferrer">
          <img
            alt=""
            src={require(`../assets/img/works/${props.imgName}`)}
            id={props.imgName}
          />
        </Link>
      </StyledDiv>
    </motion.div>
  );
};

export default Card;
