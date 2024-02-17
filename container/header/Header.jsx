/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function Navbar({ showSidebar, toggleSidebar }) {
  const router = useRouter();

  // Close sidebar when navigating
  useEffect(() => {
    if (showSidebar) {
      toggleSidebar();
    }
  }, [router.pathname]);

  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className={router.pathname === "/" ? "active" : ""}>
          <Link href="/" className="navbar__link">
            Home
          </Link>
        </li>
        <li className={router.pathname === "/about" ? "active" : ""}>
          <Link href="/about" className="navbar__link">
            About
          </Link>
        </li>
        <li className={router.pathname === "/skills" ? "active" : ""}>
          <Link href="/skills" className="navbar__link">
            Skills
          </Link>
        </li>
        <li className={router.pathname === "/training" ? "active" : ""}>
          <Link href="/training" className="navbar__link">
            Training
          </Link>
        </li>
        <li className={router.pathname === "/contact" ? "active" : ""}>
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
