import React from "react";

const Sidebar = () => {
  return (
    <>
      <input type="checkbox" id="check" />
      <label htmlFor="check">
        <i className="fas fa-bars" id="btn"></i>
        <i className="fas fa-times" id="cancel"></i>
      </label>
      <div className="sidebar">
        <header>Menu</header>
        <a href="#" className="active">
          <i className="fas fa-qrcode"></i>
          <span>Dashboard</span>
        </a>
        <a href="#">
          <i className="fas fa-link"></i>
          <span>Shortcuts</span>
        </a>
        <a href="#">
          <i className="fas fa-stream"></i>
          <span>Overview</span>
        </a>
        <a href="#">
          <i className="fas fa-calendar"></i>
          <span>Events</span>
        </a>
        <a href="#">
          <i className="far fa-question-circle"></i>
          <span>About</span>
        </a>
        <a href="#">
          <i className="fas fa-sliders-h"></i>
          <span>Services</span>
        </a>
        <a href="#">
          <i className="far fa-envelope"></i>
          <span>Contact</span>
        </a>
      </div>

      <div className="frame">
        <p>Responsive</p>
        <h2>SIDE BAR</h2>
        <p>in Pure CSS</p>
      </div>
    </>
  );
};

export default Sidebar;
