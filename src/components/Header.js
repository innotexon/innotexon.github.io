import React from "react";
import { Link } from "react-scroll";
import "./Header.css";

const Header = () => {
  return (
    <header className="header" data-aos="fade-down" data-aos-delay="200" data-aos-duration="800">
      <div className="logo">INNOTEXON</div>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="hero" smooth={true} duration={500} offset={-60}>Home</Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500} offset={-60}>About</Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500} offset={-60}>Projects</Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} offset={-60}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;