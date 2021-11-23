import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../Images/pchas.png";
import "../Styles/MainNav.css";

export default function MainNav() {
  const location = useLocation();
  return (
    <div className="MainNav">
      <div className="col-sm-11 px-2 px-sm-3 mx-auto pt-2 pt-sm-4">
        <div className="d-flex flex-wrap justify-content-between">
          <div className="logo-part">
            <img src={logo} alt="pchas-logo" />
          </div>
          <div className="site-links d-flex flex-wrap">
            <NavLink
              className={`nav-link ${
                location.pathname === "/" && "active-link"
              }`}
              to="/"
            >
              Home
              <div className="circle"></div>
            </NavLink>
            <li className="nav-link">
              Games
              <div className="circle"></div>
            </li>
            <NavLink
              className={`nav-link ${
                location.pathname === "/contact" && "active-link"
              }`}
              to="/contact"
            >
              Contact
              <div className="circle"></div>
            </NavLink>
            <NavLink
              className={`nav-link ${
                location.pathname === "/privacy" && "active-link"
              }`}
              to="/privacy"
            >
              Privacy & Policy
              <div className="circle"></div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
