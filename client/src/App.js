import "./App.css";
import { Route } from "react-router-dom";

import Layout from "./shared/Layout/Layout";
import AboutMe from "./screens/AboutMe";
import Contact from "./screens/Contact";

function App() {
  return (
    <div className="App">
      <Layout>
        <Route exact path="/about" component={AboutMe} />
        <Route exact path="/contact" component={Contact} />
      </Layout>
    </div>
  );
}

export default App;
