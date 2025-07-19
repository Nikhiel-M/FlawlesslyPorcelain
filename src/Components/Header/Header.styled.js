import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  height: 15vh;
  width: 100%;
  padding: 0 1.5rem;
  justify-content: space-between;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background-color: ${(props) => props.theme.colors.primary};
  border-bottom: black solid 1px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  overflow: hidden;

  .logo {
    display: flex;
    align-self: center;
    cursor: pointer;
  }

  .logo img {
    height: 11rem;
    width: auto;
    display: block;
    object-fit: contain;
  }

  .nav {
    display: flex;
  }
  .nav-links {
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    font-size: 2rem;
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
    transition: color 0.2s ease-in-out ;
  }
`;
