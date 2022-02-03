import React from "react";
import "./header.css";
function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://jooinn.com/images/blur-background-10.png"
        alt="header image blog"
      ></img>
    </div>
  );
}

export default Header;
