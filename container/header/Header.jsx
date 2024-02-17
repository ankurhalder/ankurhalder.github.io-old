import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li>
          <a href="#" className="navbar__link">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="navbar__link">
            About
          </a>
        </li>
        <li>
          <a href="#" className="navbar__link">
            Services
          </a>
        </li>
        <li>
          <a href="#" className="navbar__link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
