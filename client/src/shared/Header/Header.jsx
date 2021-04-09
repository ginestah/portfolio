import "./Header.css";
import { Link } from "react-router-dom";
import { useState } from "react";

import Modal from "../../components/Modal";
export default function Header() {
  const [open, handleOpen] = useState(false);
  return (
    <>
      <header className="header">
        <nav className="nav">
          <Link className="logo" to="/">
            Huckleberry Ginesta <br />
            <div className="sub-heading"> Software Engineer</div>
          </Link>
          <div className="link-container">
            <Link className="section-link" to="/projects">
              Projects
            </Link>
            <Link className="section-link" onClick={() => handleOpen(true)}>
              Contact
            </Link>
            <a
              href="https://drive.google.com/file/d/1n1z9XwrZ4RM0-jVsO0Ek_uaEAHgT8MHf/view?usp=sharing"
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
