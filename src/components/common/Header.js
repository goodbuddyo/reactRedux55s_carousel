import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#eeeeee" };
  return (
    <header className="blog-header">
      <div className="row flex-nowrap justify-content-between align-items-center">
        <div className="col-12 pt-1">
          <nav>
            <NavLink to="/">
              <img
                src="/static/img/5-5sLogo06_454x140.png"
                className="so-55sLogo"
              />
            </NavLink>
            {" | "}
            <NavLink to="/stepone" activeStyle={activeStyle}>
              Begin Assessment 
            </NavLink>
            {" | "}

            <NavLink to="/courses" activeStyle={activeStyle}>
              Task List
            </NavLink>
            {" | "}
            <NavLink to="/about" activeStyle={activeStyle}>
              About
            </NavLink>
          </nav>
        </div>
{/* 
        <div className="col-4 d-flex justify-content-end align-items-center" /> */}
      </div>
    </header>
  );
};

export default Header;
