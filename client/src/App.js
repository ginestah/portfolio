import "./App.css";
import { Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Layout from "./shared/Layout/Layout";
import AboutMe from "./screens/AboutMe/AboutMe";
import Projects from "./screens/Projects";
import Contact from "./screens/Contact/Contact";
import { GlobalStyles } from "./styles/GlobalStyles";
import { lightTheme, darkTheme } from "./styles/Themes";
import { useDarkMode } from "./styles/useDarkMode";

function App(props) {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <div className="App">
        <Layout themeToggler={themeToggler}>
          <Route exact path="/" component={AboutMe} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/projects" component={Projects} />
        </Layout>
      </div>
    </ThemeProvider>
  );
}

export default App;
