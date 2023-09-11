import React from "react";
import { styled } from "styled-components";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";

const StyledDiv = styled.div`
  padding: 2vw;
  background-color: ${(props) =>
    props.backcolor ? props.backcolor : "#eeeeee"};
  border-radius: 2%;
  margin: 4vw 1vw 4vw 1vw;

  > .review {
    font-size: 1.1vw;
  }
  > .service {
    font-size: 1.1vw;
    clear: both;
    position: relative;
    top: 2vw;
    color: rgba(23, 44, 156);
  }

  > div {
    display: flex;
    margin-bottom: 1vw;

    > img {
      height: 4vw;
      border-radius: 50%;
    }

    > div {
      margin-left: 0.8vw;
      > p {
        margin-top: 0.4vw;
        font-size: 1.1vw;
      }
      > .org {
        font-size: 1.1vw;
      }
    }
  }

  @media (max-width: 425px) {
    > .review {
      font-size: 2.5vw;
    }

    > .service {
      font-size: 2.5vw;
    }

    > div {
      > img {
        height: 13vw;
      }

      > div {
        margin-left: 1.2vw;

        > p {
          margin-top: 0.6vw;
          font-size: 2.2vw;
        }

        > .org {
          font-size: 2.2vw;
        }
      }
    }
  }
`;

const ReviewCard = (props) => {
  return (
    <StyledDiv className="embla_slide" backcolor={props.backcolor}>
      <div>
        <img src={require(`../assets/img/about/${props.imgUri}`)} alt="img" />
        <div>
          <p>{props.name}</p>
          <p className="org">{props.org}</p>
        </div>
      </div>
      <BiSolidQuoteAltLeft />
      <p className="review">{props.review}</p>
      <BiSolidQuoteAltRight style={{ float: "right" }} />
      <p className="service">{props.service}</p>
    </StyledDiv>
  );
};

export default ReviewCard;
