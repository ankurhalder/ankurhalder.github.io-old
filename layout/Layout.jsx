import { Fragment, useState } from "react";
import { Navbar } from "@/container";
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

      <div className={`sidebar ${showSidebar ? "show" : ""}`}>hi</div>

      <div className={`mainContent ${showSidebar ? "shift" : ""}`}>
        <Navbar />
        {children}
      </div>
    </Fragment>
  );
}

export default Layout;
