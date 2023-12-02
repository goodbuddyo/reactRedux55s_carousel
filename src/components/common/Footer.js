import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const activeStyle = { color: "#F15B2A" };
  return (
    <footer className="pt-4 my-md-5 pt-md-5 so-footer">
      <div className="row">
        <div className="col-12 col-md">
          <nav>
            <NavLink to="/" activeStyle={activeStyle} exact>
              Home
            </NavLink>
            {" | "}
            <NavLink to="/about" activeStyle={activeStyle}>
              About 5-5s
            </NavLink>
            {" | "}

            <small className="  mb-3 text-muted">
              &copy;5-5s.com 2018-2019
            </small>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
