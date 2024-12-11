import React from "react";
import "./../styles/header.css";

const Header = () => {
  const scrollToTop = () => {
    const homeSection = document.getElementById("home");
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header">
      {/* Clickable Logo */}
      <h1 className="logo" onClick={scrollToTop} style={{ cursor: "pointer" }}>
        Gourmet Paradise
      </h1>
      <nav className="nav">
        <button className="nav-link" onClick={() => scrollToSection("home")}>
          Home
        </button>
        <button className="nav-link" onClick={() => scrollToSection("specialties")}>
          Signature Dishes
        </button>
        <button className="nav-link" onClick={() => scrollToSection("about")}>
          About
        </button>
        <button className="nav-link" onClick={() => scrollToSection("contact")}>
          Contact
        </button>
      </nav>
    </header>
  );
};

export default Header;


// old header.js code
// import React from "react";
// import { Link } from "react-router-dom";
// import "./../styles/header.css";

// const Header = () => {
//   return (
//     <header className="header">
//       <h1 className="logo">Gourmet Paradise</h1>
//       <nav className="nav">
//         <Link to="/" className="nav-link">
//           Home
//         </Link>
//         <Link to="/about" className="nav-link">
//           About
//         </Link>
//         <Link to="/contact" className="nav-link">
//           Contact
//         </Link>
//       </nav>
//     </header>
//   );
// };

// export default Header;
