// components/Layout.js
import { useState } from "react";
import "../styles/main.scss";

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container">
      <div className={`sidebar ${isMenuOpen ? "open" : ""}`}>
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <nav>
          {/* Your sidebar navigation items go here */}
          <ul>
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
          </ul>
        </nav>
      </div>
      <div className="content">{children}</div>
    </div>
  );
};

export default Layout;
