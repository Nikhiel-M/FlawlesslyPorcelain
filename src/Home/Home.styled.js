import styled from "styled-components";
import lady from "../Assets/flawevV2.png";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: static;
  background-image: url(${lady});
  background-size: contain;
  background-position: top;
  flex-direction: column;
  margin-top: 13vh;
  height: 100vh;
  width: 100vw;
  padding: 0 2rem;
  text-align: center;
  margin-bottom: 5rem;

  .homeTitle {
    color: orange;
  }

    @media (max-width: 1350px) {
    background-size: cover;
    margin-top: 10vh;
    height: auto;
    min-height: 80vh;
    padding: 0 1rem;
    background-repeat: no-repeat;
    background-position: center;


    .homeTitle {
      font-size: 2rem;
    }
  }

  @media (max-width: 480px) {
        background-repeat: no-repeat;
    background-position: center;

    .homeTitle {
      font-size: 1.5rem;
    }
  }
`;
