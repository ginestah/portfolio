import { Link } from "react-router-dom";
import "./Footer.css";
export default function Footer() {
  return (
    <footer>
      <a href="https://github.com/ginestah" target="_blank" rel="noreferrer">
        <i className="fab fa-github"> Github</i>
      </a>
      <a
        href="https://www.linkedin.com/in/huckleberry-ginesta/"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-linkedin"></i> LinkedIn
      </a>
    </footer>
  );
}
