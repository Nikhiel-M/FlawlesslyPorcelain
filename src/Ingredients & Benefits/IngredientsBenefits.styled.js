  import styled from "styled-components";

  
 export const Container = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
  width: 100%;
  background: linear-gradient(180deg, #fff7ee 0%, ${(props) => props.theme.colors.primary} 100%);
  padding: 1.25rem 2rem 0;
  text-align: center;
  margin-bottom: 4rem;

  @media (max-width: 480px) {
    padding: 0 0.85rem;
  }
  `

 export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  width: min(1120px, 100%);
  padding: 0.9rem;
  gap: 1rem;

  .GridItem {
    background-color: ${(props) => props.theme.colors.card};
    border: 1px solid rgba(207, 143, 59, 0.24);
    border-radius: 20px;
    padding: 2rem 1rem;
    margin: 0;
    box-shadow: 0 12px 30px rgba(94, 60, 22, 0.08);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .GridItem:hover {
    transform: translateY(-3px);
    box-shadow: 0 18px 32px rgba(94, 60, 22, 0.12);

  }

  .GridItem h1 {
    font-size: clamp(1.25rem, 2.5vw, 1.8rem);
    margin-bottom: 0.55rem;
  }

  .GridItem h2 {
    font-size: clamp(0.95rem, 1.8vw, 1.15rem);
    line-height: 1.65;
  }

    @media (max-width: 780px) {
    grid-template-columns: 1fr 1fr;
    .GridItem {
      padding: 1.4rem 0.85rem;
    }
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;

    .GridItem {
      margin: 0.5rem 0;
    }
  }
  `