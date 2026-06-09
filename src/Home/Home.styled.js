import styled from "styled-components";
import lady from "../Assets/flawevV2.png";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: static;
  background-image: url("https://img.magnific.com/free-photo/happy-serene-young-woman-with-beautiful-olive-skin-curly-hair-ideal-skin-brown-eyes-studio_633478-1011.jpg?t=st=1781026616~exp=1781030216~hmac=95bb7d0460ee0d81ab9287d91e95df5ab179ddc70da6d7c87d7ef0828630002d&w=1480");
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  padding: 7.5rem 2rem 0;
  text-align: center;
  margin-bottom: 5rem;

  .homeTitle {
    color: orange;
  }

  h1 {
    color: white;
    font-size: clamp(1rem, 2.8vw, 1.8rem);
    line-height: 1.45;
    max-width: 35ch;
    margin: 0 auto;
  }

    @media (max-width: 1350px) {
    background-size: cover;
    height: auto;
    min-height: 80vh;
    padding: 6.75rem 1rem 0;
    background-repeat: no-repeat;
    background-position: center 20%;


    .homeTitle {
      font-size: 2rem;
    }
  }

  @media (max-width: 480px) {
    min-height: 100vh;
    padding: 6.1rem 0.85rem 0;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center top;

    .homeTitle {
      font-size: 1.5rem;
    }

    h1 {
      font-size: 1rem;
    }
  }
`;
