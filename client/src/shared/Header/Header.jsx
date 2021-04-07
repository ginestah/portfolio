import "./Header.css";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="header">
      <img />
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
        <a href="">Resume</a>
      </nav>
    </header>
  );
}
