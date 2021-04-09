import "./App.css";
import { Route } from "react-router-dom";

import Layout from "./shared/Layout/Layout";
import AboutMe from "./screens/AboutMe";

function App() {
  return (
    <div className="App">
      <Layout>
        <Route exact path="/" component={AboutMe} />
        {/* <Route exact path="/contact" component={Contact} /> */}
      </Layout>
    </div>
  );
}

export default App;
