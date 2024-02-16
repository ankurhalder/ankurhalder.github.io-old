// Sidebar.js
import React from "react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="sidebar">
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
