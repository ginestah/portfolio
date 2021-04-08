import "./App.css";
import Layout from "./shared/Layout/Layout";
import { Route } from "react-router-dom";
import { useState } from "react";
import AboutMe from "./screens/AboutMe";
import { Transition } from "react-transition-group";

function App() {
  return (
    <Layout>
      <div className="App">
        <Route exact path="/about" component={AboutMe} />
      </div>
    </Layout>
  );
}

export default App;
