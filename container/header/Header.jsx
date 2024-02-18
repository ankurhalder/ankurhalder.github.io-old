import React, { useEffect } from "react";
import Link from "next/link";
// import { useRouter } from "next/router";

function Navbar({ showSidebar, toggleSidebar }) {
  // const router = useRouter();

  // const delayedRouterPush = (href) => {
  //   const delay = 2000; // 2 seconds
  //   setTimeout(() => {
  //     router.push(href);
  //   }, delay);
  // };

  // useEffect(() => {
  //   if (showSidebar) {
  //     toggleSidebar();
  //   }
  // }, [router.pathname, showSidebar, toggleSidebar]);

  return (
    <nav className="navbar">
      <Link href="/">Ankur Halder</Link>
      {/* <a className="navbar__logo" onClick={() => delayedRouterPush("/")}>
        Ankur Halder
      </a> */}
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
