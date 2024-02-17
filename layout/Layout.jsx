import { Fragment, useState } from "react";
import { Navbar } from "@/container";
function Layout({ children }) {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <Fragment>
      <div className={`sidebar ${showSidebar ? "show" : ""}`}>hi</div>

      <div className={`mainContent ${showSidebar ? "shift" : ""}`}>
        <Navbar showsidebar={showSidebar} toggleSidebar={toggleSidebar} />
        {children}
      </div>
    </Fragment>
  );
}

export default Layout;
