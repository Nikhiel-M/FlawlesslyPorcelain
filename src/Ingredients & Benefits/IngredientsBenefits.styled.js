  import styled from "styled-components";

  
 export const Container = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
  width: 100vw;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 0 2rem;
  text-align: center;
  margin-bottom: 5rem;
  `

 export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 10px;

  .GridItem {
    background-color: ${(props) => props.theme.colors.pink};
    padding: 5rem 1rem ;
    margin: 1rem;

  }
  `