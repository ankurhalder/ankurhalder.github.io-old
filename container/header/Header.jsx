import React from "react";

function Navbar({ showSidebar, toggleSidebar }) {
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
      <div
        className={`hamburgerMenu ${showSidebar ? "open" : ""}`}
        onClick={toggleSidebar}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar;
