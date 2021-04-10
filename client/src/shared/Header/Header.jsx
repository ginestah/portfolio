import "./Header.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useMediaPredicate } from "react-media-hook";

import Modal from "../../components/Modal";
export default function Header(props) {
  const smallerThan600 = useMediaPredicate("(max-width: 600px)");

  const [open, handleOpen] = useState(false);
  return (
    <>
      <header className="header">
        <nav className="nav">
          <Link className="logo" to="/">
            Huckleberry Ginesta <br />
            <div className="sub-heading"> Software Engineer</div>
          </Link>
          {smallerThan600 ? null : (
            <button className="theme-toggle" onClick={props.themeToggler}>
              Change Theme
            </button>
          )}
          <div className="link-container">
            <Link className="section-link" to="/projects">
              Projects
            </Link>
            {smallerThan600 ? (
              <Link className="section-link" to="/contact">
                Contact
              </Link>
            ) : (
              <Link className="section-link" onClick={() => handleOpen(true)}>
                Contact
              </Link>
            )}
            <a
              href="https://drive.google.com/file/d/1AARrsN0-mih6aZSI4WQzuZX1JwJbINev/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="section-link"
            >
              Resume
            </a>
          </div>
        </nav>
      </header>
      {open && <Modal open={open} handleOpen={handleOpen} />}
    </>
  );
}
