  import styled from "styled-components";
  import lady from "../Assets/flawedpng.png"

 export const Container = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 position: static;
 background-image: url(${lady});
 background-size: cover;
 background-repeat: no-repeat;
 flex-direction: column;
  height: 100vh;
  width: 100vw;
  padding: 0 2rem;
  text-align: center;
  margin-bottom: 5rem;
  `

