import "./Footer.css";
export default function Footer(props) {
  return (
    <footer>
      <p className="change-theme" onClick={props.themeToggler}>
        Change Theme
      </p>
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
