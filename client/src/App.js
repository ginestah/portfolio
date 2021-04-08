import "./App.css";
import Layout from "./shared/Layout/Layout";
import { Route } from "react-router-dom";
import { useState } from "react";
import AboutMe from "./screens/AboutMe";
import { Transition } from "react-transition-group";

function App() {
  return (
    <div className="App">
      <Layout>
        <Route exact path="/about" component={AboutMe} />
      </Layout>
    </div>
  );
}

export default App;
