import { Fragment, useState } from "react";

function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track menu open/close

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Fragment>
      {/* Hamburger menu */}
      <div
        className={`hamburgerMenu ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Main content */}
      <div className={`content ${isMenuOpen ? "bent" : ""}`}>{children}</div>

      {/* Side navbar */}
      <div
        className={`sideNavbar ${isMenuOpen ? "open" : "closed"}`}
        onClick={toggleMenu}
      >
        {/* Add your side navbar content here */}
      </div>
    </Fragment>
  );
}

export default Layout;
