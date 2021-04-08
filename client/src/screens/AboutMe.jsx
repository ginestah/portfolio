import { CSSTransition } from "react-transition-group";
import { useState } from "react";
import Layout from "../shared/Layout/Layout";

export default function AboutMe() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <Layout>
      <CSSTransition in={isVisible} timeout={300} classNames="sample">
        <div className="heck">I am a fade transition</div>
      </CSSTransition>
      <button onClick={() => setIsVisible(!isVisible)}>Click</button>
    </Layout>
  );
}
