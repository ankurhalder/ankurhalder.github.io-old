// Sidebar.js
import React, { useState } from "react";
import Link from "next/link";

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`sidebar ${isMenuOpen ? "open" : ""}`}>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className={`icon ${isMenuOpen ? "close" : "hamburger"}`}></div>
      </div>
      <ul className="nav">
        <li>
          <Link href="/">
            <div>Home</div>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <div>About</div>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <div>Contact</div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
