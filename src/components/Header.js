import React from "react";
import { Link } from "react-router-dom";

import"../styles/header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">My SPA</div>
      <nav className="navbar">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/portfolio" className="nav-link">Portfolio</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
