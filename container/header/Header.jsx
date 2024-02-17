import React from "react";
import Link from "next/link";
function Navbar({ showSidebar, toggleSidebar }) {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li>
          <Link href="/" className="navbar__link">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="navbar__link">
            About
          </Link>
        </li>
        <li>
          <Link href="/skills" className="navbar__link">
            Skills
          </Link>
        </li>
        <li>
          <Link href="/training" className="navbar__link">
            Training
          </Link>
        </li>
        <li>
          <Link href="/contact" className="navbar__link">
            Contact
          </Link>
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
