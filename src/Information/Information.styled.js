 import styled from "styled-components";

  
 export const Container = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 0.5rem 2rem 0;
  text-align: center;
  margin-bottom: 2.5rem;

  @media (max-width: 480px) {
    padding: 0 0.85rem;
  }

  `
 export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  width: min(980px, 100%);
  padding: 0.75rem;
  gap: 1rem;

  .GridItem {
    background-color: ${(props) => props.theme.colors.surface};
    border: 1px solid rgba(207, 143, 59, 0.22);
    border-radius: 18px;
    padding: 2rem 1.2rem;
    margin: 0;
    box-shadow: 0 10px 26px rgba(94, 60, 22, 0.08);

  }

  .GridItem h2 {
    font-size: clamp(1rem, 2.3vw, 1.35rem);
    line-height: 1.65;
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