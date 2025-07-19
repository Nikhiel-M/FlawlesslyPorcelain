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

  .whatsapp{
    font-size: 4rem;
    fill: #25d366;
    cursor: pointer;
    margin-top: 0.5rem;
  }
   
  .whatsapp:hover {
    fill: #47e480ff;
    transition: fill 0.1s ease-in-out;

  .contact{
    display: flex;
    align-items: center;
    margin-top: 1rem;
  }
    .quantity{
        margin: 0 0 1rem 0;
    }
    
  }
  `
