// components/Sidenavbar.js

import { useState } from "react";

const Sidenavbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`sidenavbar ${isCollapsed ? "collapsed" : ""}`}>
      <button className="collapse-btn" onClick={toggleCollapse}>
        {isCollapsed ? ">>" : "<<"}
      </button>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidenavbar;
