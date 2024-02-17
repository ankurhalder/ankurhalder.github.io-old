import { useEffect } from "react";
import $ from "jquery";

const Navbar = () => {
  useEffect(() => {
    const nav = $("nav");
    const menu = $("nav h1");
    const main = $("main");
    let open = false;

    const handleClick = () => {
      open = !open;
      nav.toggleClass("menu-active");
      main.toggleClass("menu-active");
      nav.removeClass("menu-hover");
      main.removeClass("menu-hover");
      console.log(open);
    };

    menu.on("click", handleClick);

    menu.hover(
      function () {
        if (!open) {
          nav.addClass("menu-hover");
          main.addClass("menu-hover");
        }
      },
      function () {
        nav.removeClass("menu-hover");
        main.removeClass("menu-hover");
      }
    );

    return () => {
      menu.off("click", handleClick);
    };
  }, []);

  return (
    <>
      <nav className="menu-activea menu-active">
        <h1>Menu</h1>
        <ul>
          <li>Jimmy</li>
          <li>Susy</li>
          <li>Jack</li>
          <li>Nancy</li>
          <li>Kurt</li>
          <li>Clay</li>
          <li>Lisa</li>
        </ul>
      </nav>
      <main className="main">
        <section>
          <h1>&larr; Sidebar Menu Thingy</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam
          </p>
          <p>
            Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam
          </p>
        </section>
      </main>
    </>
  );
};

export default Navbar;
