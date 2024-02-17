import { Fragment, useState } from "react";

function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Fragment>
      <div
        className={`hamburgerMenu ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`content ${isMenuOpen ? "bent" : ""}`}>{children}</div>

      <div
        className={`sideNavbar ${isMenuOpen ? "open" : "closed"}`}
        onClick={toggleMenu}
      ></div>
    </Fragment>
  );
}

export default Layout;
