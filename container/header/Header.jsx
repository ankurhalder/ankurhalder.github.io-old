import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Loader } from "@/components";
import { useRouter } from "next/router";

function Navbar({ showSidebar, toggleSidebar }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const delayedRouterPush = (href) => {
    const delay = 2000;
    setLoading(true); // Set loading state to true before routing
    setTimeout(() => {
      try {
        router.push(href);
      } catch (error) {
        console.error("Error while routing:", error);
      } finally {
        setLoading(false); // Set loading state back to false after routing
      }
    }, delay);
  };

  useEffect(() => {
    if (showSidebar) {
      toggleSidebar();
    }
  }, [router.pathname, showSidebar, toggleSidebar]);

  return (
    <nav className="navbar">
      {loading && <Loader />}
      <a className="navbar__logo" onClick={() => delayedRouterPush("/")}>
        Ankur Halder
      </a>
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
