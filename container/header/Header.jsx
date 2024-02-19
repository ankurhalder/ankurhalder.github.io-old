import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Loader } from "@/components";

function Navbar({ showSidebar, toggleSidebar }) {
  const [activateSidebar, setActivateSidebar] = useState(false);
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

  function oneClickhandler() {
    setActivateSidebar(!activateSidebar);
    toggleSidebar();
  }

  return (
    <Fragment>
      {loading && <Loader />}
      <nav className="navbar none">
        <div className="navbar__brand">
          <Image
            className="brand__image"
            src="/Ankur_Halder.png"
            alt="Ankur-Halder"
            width={605}
            height={605}
          ></Image>
          <a className="brand__logo" onClick={() => delayedRouterPush("/")}>
            Ankur Halder
          </a>
        </div>
        <div className="navbar__slogan">
          <p className="slogan__text">
            Passionate dev skilled in MERN stack, Django, Python, JavaScript,
            DevOps, Next.js, and DSA. Committed to crafting efficient solutions
            & open source contribution.
          </p>
        </div>
        <div
          className={`hamburgerMenu ${activateSidebar ? "open" : ""}`}
          onClick={oneClickhandler}
        >
          {activateSidebar ? (
            <Image
              className="close-icon"
              src="/navbar/close.gif"
              alt="Close"
              width={100}
              height={100}
            />
          ) : (
            <Image
              className="hamburger-icon"
              src="/navbar/hamburger.gif"
              alt="Hamburger"
              width={100}
              height={100}
            />
          )}
        </div>
      </nav>
    </Fragment>
  );
}

export default Navbar;
