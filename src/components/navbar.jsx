// src/components/Navbar.jsx
import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="nav-link">
        Home
      </a>
      <a href="#about" className="nav-link">
        About
      </a>
      <a href="#projects" className="nav-link">
        Projects
      </a>
      <a href="#contact" className="nav-link">
        Contact
      </a>
    </nav>
  );
}

export default Navbar;
