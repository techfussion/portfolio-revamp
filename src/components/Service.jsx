import { React, useEffect, useRef } from "react";
import { styled } from "styled-components";
import { useAnimation, motion, useInView } from "framer-motion";

const StyledDiv = styled.div`
  width: 30%;

  > .service-id {
    font-size: 0.8rem;
    color: rgba(0, 0, 0, 0.6);
    margin-bottom: 1.5rem;
  }

  > hr {
    border: none;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.2);
    margin-bottom: 2rem;
  }

  > .service-name {
    margin-bottom: 2rem;
    color: rgba(0, 0, 0, 0.8);
  }

  > .service-description {
    line-height: 1.35em;
    margin-bottom: 5rem;
  }
`;

const Service = (props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animationControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      animationControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: 0.25 },
      });
    }
  }, [isInView]);

  return (
    <StyledDiv>
      <motion.div
        ref={ref}
        className="service-id"
        initial={{ opacity: 0, y: 100 }}
        animate={animationControls}
      >
        <p className="service-id">{props.num}</p>
        <hr />
        <h3 className="service-name">{props.service}</h3>
      </motion.div>
      <p className="service-description">{props.description}</p>
    </StyledDiv>
  );
};

export default Service;
