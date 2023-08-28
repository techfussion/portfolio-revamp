import { React, useEffect, useRef } from "react";
import { VscGithubAlt, VscEye } from "react-icons/vsc";
import { styled } from "styled-components";
import { motion, useAnimation, useInView } from "framer-motion";

const StyledDiv = styled.div`
  > .work-type-group {
    display: flex;
    justify-content: space-between;
    margin-bottom: 7rem;

    > ul {
      padding-left: 0;

      > li {
        display: inline;
        padding-left: 0.6rem;
      }
    }
  }
`;

const CardTitle = (props) => {
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
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <StyledDiv>
        <h2>{props.name}</h2>
        <hr />
        <div className="work-type-group">
          <p>{props.workType}</p>
          <ul>
            <li>
              <VscGithubAlt />
            </li>
            <li>
              <VscEye />
            </li>
          </ul>
        </div>
      </StyledDiv>
    </motion.div>
  );
};

export default CardTitle;
