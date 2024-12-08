import React from "react";
import { Link } from "react-router-dom";
import "./../styles/header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">Gourmet Paradise</h1>
      <nav className="nav">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/about" className="nav-link">
          About
        </Link>
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
