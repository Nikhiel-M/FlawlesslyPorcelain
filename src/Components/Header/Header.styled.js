import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  min-height: 5.25rem;
  width: 100%;
  padding: 0.5rem 1rem;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background-color: ${(props) => props.theme.colors.primary};
  border-bottom: black solid 1px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  overflow: hidden;
  outline: none;

  .gooey-selected {
    -webkit-tap-highlight-color: transparent;
  }

  .logo {
    display: flex;
    align-self: center;
    cursor: pointer;
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
  }

  .nav-links > li > a:hover {
    color: ${(props) => props.theme.colors.textLight};
    text-decoration: underline;
    transition: color 0.2s ease-in-out;
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
