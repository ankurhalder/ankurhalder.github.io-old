import { Fragment, useState } from "react";

function Layout({ children }) {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <Fragment>
      <div
        className={`hamburgerMenu ${showSidebar ? "open" : ""}`}
        onClick={toggleSidebar}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

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
