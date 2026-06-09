import styled from "styled-components";

export const Container = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
  width: min(860px, calc(100% - 2.5rem));
  margin: 0 auto 4.5rem;
  border-radius: 24px;
  border: 1px solid rgba(207, 143, 59, 0.28);
  background: linear-gradient(180deg, #fffdf8 0%, #fff3e3 100%);
  box-shadow: 0 20px 36px rgba(94, 60, 22, 0.12);
  padding: 2.2rem 2rem;
  text-align: center;
  overflow: hidden;

  h1,
  h2 {
    overflow-wrap: anywhere;
    word-break: break-word;
  }

  h1 {
    font-size: clamp(1.35rem, 4.4vw, 2.45rem);
  }

  h2 {
    font-size: clamp(0.95rem, 3.6vw, 1.25rem);
    line-height: 1.6;
  }

  .whatsapp{
    font-size: clamp(2.75rem, 10vw, 4rem);
    fill: #25d366;
    cursor: pointer;
    margin-top: 0.5rem;
  }

  .contact{
    display: block;
    margin-top: 1rem;
  }

  .quantity{
    margin: 0 0 1rem 0;
  }
   
  .whatsapp:hover {
    fill: #47e480ff;
    transition: fill 0.1s ease-in-out;
  }

  @media (max-width: 480px) {
    width: calc(100% - 1.2rem);
    padding: 1.45rem 0.85rem;
    border-radius: 18px;

    .whatsapp {
      margin-top: 0.3rem;
    }
  }
  `
