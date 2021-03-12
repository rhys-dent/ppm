import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";
import { useContext, useState } from "react";
import Context from "./Context";

function App() {
  const context = useContext(Context);
  return (
    <ThemeProvider theme={context.theme}>
      <Router>
        <Header />
        <Main refresher={context.state} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
