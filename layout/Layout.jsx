import { Fragment, useState } from "react";

function Layout({ children }) {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <Fragment>
      {/* Hamburger Menu */}
      <div className="hamburgerMenu" onClick={toggleSidebar}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${showSidebar ? "show" : ""}`}>
        {/* Sidebar content goes here */}
        {/* You can place your sidebar items and links here */}
      </div>

      {/* Main Content */}
      <div className={`mainContent ${showSidebar ? "shift" : ""}`}>
        {children}
      </div>
    </Fragment>
  );
}

export default Layout;
