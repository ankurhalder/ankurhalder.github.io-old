import { useEffect, useState } from "react";
import $ from "jquery";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const nav = $("nav");
    const menu = $("nav h1");
    const main = $("main");

    const handleClick = () => {
      setIsOpen(!isOpen);
    };

    menu.on("click", handleClick);

    menu.hover(
      function () {
        if (!isOpen) {
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
  }, [isOpen]);

  return (
    <>
      <nav className={`menu-activea ${isOpen ? "menu-active" : ""}`}>
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
      <main className={`main ${isOpen ? "menu-active" : ""}`}>
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
          {/* Rest of your content */}
        </section>
      </main>
    </>
  );
};

export default Navbar;
