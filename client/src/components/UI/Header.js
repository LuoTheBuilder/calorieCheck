import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div>
        <img className="logo" src="./logo.png" />
        <div className="vertdiv"></div>
        <div className="brand">CalorieScheduler</div>
      </div>
    </div>
  );
};

export default Header;
