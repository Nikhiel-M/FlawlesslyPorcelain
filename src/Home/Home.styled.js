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
    /* color: white; */
  }
`;
