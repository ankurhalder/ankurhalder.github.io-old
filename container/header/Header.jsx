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
            MERN and NEXT.js dev | Python| JS | DevOps | Django | DSA |
            Efficiency & open source.
          </p>
          <p className="slogan__text screen-1200">
            Software & Full Stack Web Developer
          </p>
        </div>
        <div
          className={`hamburgerMenu ${activateSidebar ? "open" : ""}`}
          onClick={oneClickhandler}
        >
          {activateSidebar ? (
            <Image
              className="close-icon"
              src="/navbar/closev2.gif"
              alt="Close"
              width={80}
              height={80}
              unoptimized
            />
          ) : (
            <Image
              className="hamburger-icon"
              src="/navbar/menuv3.gif"
              alt="Hamburger"
              width={80}
              height={80}
              unoptimized
            />
          )}
        </div>
      </nav>
    </Fragment>
  );
}

export default Navbar;
