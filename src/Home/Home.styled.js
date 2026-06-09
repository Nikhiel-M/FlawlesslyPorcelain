import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: static;
  background-image: linear-gradient(
      115deg,
      rgba(28, 18, 8, 0.52) 0%,
      rgba(28, 18, 8, 0.18) 52%,
      rgba(28, 18, 8, 0.45) 100%
    ),
    url("https://img.magnific.com/free-photo/beauty-spanish-woman-beige-background_633478-76.jpg?t=st=1781027596~exp=1781031196~hmac=29bd86894ddbd871990b242219f100b519557bb0ae8025a232456bc95b1824b8&w=1480");
  background-size: cover;
  background-position: center 16%;
  background-repeat: no-repeat;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  padding: 7.5rem 2rem 0;
  text-align: center;
  margin-bottom: 4rem;
  isolation: isolate;

  > * {
    position: relative;
    z-index: 1;
  }

  .homeTitle {
    color: #ffe6bc;
    text-shadow: 0 8px 22px rgba(0, 0, 0, 0.42);
    margin-bottom: 1rem;
  }

  h1 {
    color: #fff9f0;
    font-size: clamp(1rem, 2.8vw, 1.8rem);
    line-height: 1.45;
    max-width: 37ch;
    margin: 0 auto;
    text-shadow: 0 8px 20px rgba(0, 0, 0, 0.38);
  }

    @media (max-width: 1350px) {
    background-size: cover;
    height: auto;
    min-height: 80vh;
    padding: 6.75rem 1rem 0;
    background-repeat: no-repeat;
    background-position: center 24%;


    .homeTitle {
      font-size: 2rem;
    }
  }

  @media (max-width: 480px) {
    min-height: 100vh;
    padding: 6.1rem 0.85rem 0;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 68% 20%;

    .homeTitle {
      font-size: 1.5rem;
    }

    h1 {
      font-size: 1rem;
    }
  }
`;
