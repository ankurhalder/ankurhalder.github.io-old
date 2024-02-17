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
      nav.toggleClass("menu-hover", !isOpen);
      main.toggleClass("menu-hover", !isOpen);
    };

    const handleHover = () => {
      if (!isOpen) {
        main.addClass("menu-hover");
      }
    };

    const handleMouseLeave = () => {
      if (!isOpen) {
        main.removeClass("menu-hover");
      }
    };

    menu.on("click", handleClick);
    menu.hover(handleHover, handleMouseLeave);

    return () => {
      menu.off("click", handleClick);
      menu.off("mouseenter mouseleave", handleHover);
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
        </section>
      </main>
    </>
  );
};

export default Navbar;
