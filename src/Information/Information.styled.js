 import styled from "styled-components";

  
 export const Container = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 0 2rem;
  text-align: center;
  margin-bottom: 5rem;

  @media (max-width: 480px) {
    padding: 0 0.85rem;
  }

  `
 export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  background-color: ${(props) => props.theme.colors.primary};
  padding: 0.75rem;
  gap: 1rem;

  .GridItem {
    background-color: ${(props) => props.theme.colors.pink};
    padding: 2rem 1rem;
    margin: 0;

  }

      @media (max-width: 780px) {
    grid-template-columns: 1fr;
    .GridItem {
      padding: 2rem 0.5rem;
    }
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    
    .GridItem {
      padding: 1rem 0.25rem;
      margin: 0.5rem 0;
    }
  }
`