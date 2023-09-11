import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { styled } from "styled-components";

const StyledDiv = styled.div`
  overflow: hidden;

  > .embla_container {
    display: flex;

    > .embla_slide {
      flex: 0 0 35%;
      min-width: 0;

      > img {
        width: 85%;
      }
    }
  }

  @media (max-width: 425px) {
    > .embla_container {
      > .embla_slide {
        flex: 0 0 90%;
      }
    }
  }
`;

const Carousel = ({ children }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <StyledDiv ref={emblaRef}>
      <div className="embla_container">{children}</div>
    </StyledDiv>
  );
};

export default Carousel;
