// Sidebar.js
import React from "react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="nav">
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
