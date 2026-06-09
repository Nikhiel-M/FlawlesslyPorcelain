import { createGlobalStyle } from "styled-components";

 export const GlobalStyles = createGlobalStyle`
 *{
   box-sizing: border-box;
   margin: 0;
   padding: 0;
   font-family: "Newsreader", serif;
   font-weight: 300;
   font-style: normal;
   outline: none;
   
 }

 *::before,
 *::after {
   box-sizing: border-box;
 }

 .gooey-selected {
  -webkit-tap-highlight-color: transparent;
}

 body {
  background-color: ${(props) => props.theme.colors.primary };
  color: ${(props) => props.theme.colors.text};
  overflow-x: hidden;
  width: 100%;
  line-height: 1.45;
 }

 a {
  color: inherit;
 }

 img {
  max-width: 100%;
 }

 html {
  scroll-behavior: smooth;
  overflow-x: hidden;
}
`;

 