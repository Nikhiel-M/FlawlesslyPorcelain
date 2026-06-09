import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  min-height: 5.25rem;
  width: 100%;
  padding: 0.5rem 1.25rem;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(250, 247, 242, 0.78);
  border-bottom: 1px solid rgba(207, 143, 59, 0.2);
  backdrop-filter: blur(12px);
  box-shadow: 0 12px 28px rgba(32, 33, 36, 0.08);
  overflow: hidden;
  outline: none;

  .gooey-selected {
    -webkit-tap-highlight-color: transparent;
  }

  .logo {
    display: flex;
    align-self: center;
    cursor: pointer;
    height:auto;
    width: 30rem;
  }

  .logo img {
    height: clamp(3.5rem, 8vw, 6rem);
    width: auto;
  }

  .nav {
    display: flex;
  }
  .nav-links {
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    font-size: clamp(1rem, 2.2vw, 1.7rem);
    color: ${(props) => props.theme.colors.text};
    cursor: pointer;
  }

  .nav-links > li > a {
    color: ${(props) => props.theme.colors.text};
    font-family: "DM Serif Text", serif;
    font-weight: 400;
    font-style: normal;
    text-decoration: none;
    padding: 0.3rem 0.6rem;
    letter-spacing: 0.01em;
    border-radius: 999px;
    transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out, transform 0.2s ease-in-out;
  }

  .nav-links > li > a:hover {
    color: ${(props) => props.theme.colors.accent};
    background-color: rgba(207, 143, 59, 0.12);
    transform: translateY(-1px);
  }

  @media (max-width: 780px) {
    padding: 0.4rem 0.75rem;
    min-height: 4.75rem;


    .gooey-selected {
      -webkit-tap-highlight-color: transparent;
    }

    .nav-links {
      font-size: 1rem;
      gap: 0.65rem;
     
    }

    .logo img {
      height: 3.7rem;
      width: auto;
    }
  }

  @media (max-width: 480px) {
    padding: 0.4rem 0.6rem;
    min-height: 4.5rem;

    .gooey-selected {
      -webkit-tap-highlight-color: transparent;
    }

    .nav-links {
      font-size: 0.82rem;
      gap: 0.4rem;
      margin-left: 0;
      text-align: right;
    }

    .logo img {
      height: 3.2rem;
      width: auto;
    }
  }
`;
