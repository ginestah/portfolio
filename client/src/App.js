import "./App.css";
import { Route } from "react-router-dom";

import Layout from "./shared/Layout/Layout";
import AboutMe from "./screens/AboutMe/AboutMe";
import Projects from "./screens/Projects";
import Contact from "./screens/Contact";

function App() {
  return (
    <div className="App">
      <Layout>
        <Route exact path="/" component={AboutMe} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/projects" component={Projects} />
      </Layout>
    </div>
  );
}

export default App;
