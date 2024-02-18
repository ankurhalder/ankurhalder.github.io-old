import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Loader } from "@/components";

function Navbar({ showSidebar, toggleSidebar }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const delayedRouterPush = (href) => {
    const delay = 2500;
    setLoading(true);
    setTimeout(() => {
      try {
        router.push(href);
      } catch (error) {
        console.error("Error while routing:", error);
      } finally {
        setLoading(false);
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
      <Image
        src="/Ankur_Halder.png"
        alt="Ankur-Halder"
        width={20}
        height={20}
      ></Image>
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
