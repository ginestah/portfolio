import "./Header.css";
import { Link } from "react-router-dom";
import Burger from "./Burger";
import { useMediaPredicate } from "react-media-hook";

export default function Header(props) {
  const smallerThan400 = useMediaPredicate("(max-width: 400px)");

  return (
    <>
      <header className="header">
        <nav className="nav">
          <Link className="logo" to="/">
            Huckleberry Ginesta <br />
            <div className="sub-heading"> Software Engineer</div>
          </Link>
          {smallerThan400 ? (
            <Burger />
          ) : (
            <div className="link-container">
              <Link className="section-link" to="/projects">
                Projects
              </Link>
              <Link className="section-link" to="/contact">
                Contact
              </Link>
              <Link to="/resume" className="section-link">
                Resume
              </Link>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
