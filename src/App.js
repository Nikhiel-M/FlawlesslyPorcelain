import { ThemeProvider } from "styled-components";
import { Theme } from "./Styles/theme.js";
import { GlobalStyles } from "./Styles/Global.styled.js";
import Router from "./Router";

function App() {

  return (
    <ThemeProvider theme={Theme}> 
    <GlobalStyles />
    <Router />
    </ThemeProvider>
  );
}

export default App;
