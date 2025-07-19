import { createGlobalStyle } from "styled-components";

 export const GlobalStyles = createGlobalStyle`
 *{
   box-sizing: border-box;
   margin: 0;
   padding: 0;
   font-family: "Newsreader", serif;
   font-weight: 300;
   /* change font weight to 500 */
   font-style: normal;
   overflow-x: hidden;

 }

 body {
  background-color: ${(props) => props.theme.colors.primary };
 }

 html {
  scroll-behavior: smooth;
}
`;

 