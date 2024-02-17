import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function Navbar({ showSidebar, toggleSidebar }) {
  const router = useRouter();

  useEffect(() => {
    if (showSidebar) {
      toggleSidebar();
    }
  }, [router.pathname, showSidebar, toggleSidebar]);

  return (
    <nav className="navbar">
      <Link href="/" className="navbar__logo">
        Ankur Halder
      </Link>
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
