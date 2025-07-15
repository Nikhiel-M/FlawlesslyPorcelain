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
  background-color: white;
  border-bottom: black solid 1px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  
  .logo {
    height: auto;
    width: auto;
    cursor: pointer;
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

  .nav-links > li {
  font-family: "DM Serif Text", serif;
  font-weight: 400;
  font-style: normal;
  }

  .nav-links > li:hover {
    color: ${(props) => props.theme.colors.textLight};
    text-decoration: underline;
  }
`;
