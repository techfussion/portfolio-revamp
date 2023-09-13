import { React, useEffect, useRef } from "react";
import { VscGithubAlt, VscEye } from "react-icons/vsc";
import { styled } from "styled-components";
import { motion, useAnimation, useInView } from "framer-motion";

const StyledDiv = styled.div`
  > h2 {
    font-size: 1.5vw;
  }
  > .work-type-group {
    display: flex;
    justify-content: space-between;
    margin-bottom: 7vw;

    > p {
      font-size: 1.1vw;
    }
    > ul {
      padding-left: 0;

      > li {
        display: inline;
        padding-left: 0.6vw;
      }
    }
  }

  @media (max-width: 425px) {
    > h2 {
      font-size: 4vw;
    }

    > .work-type-group {
      margin-bottom: 10vw;

      > p {
        font-size: 2.8vw;
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
      transition={{ duration: 0.4, delay: 0.2 }}
    >
      <StyledDiv>
        <h2>{props.name}</h2>
        <hr />
        <div className="work-type-group">
          <p>{props.workType}</p>
          <p>
            <a
              href={props.url}
              alt=""
              target="_blank"
              rel="noopener noreferrer"
            >
              live-site
            </a>
          </p>
        </div>
      </StyledDiv>
    </motion.div>
  );
};

export default CardTitle;
