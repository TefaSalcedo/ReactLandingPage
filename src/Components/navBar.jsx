import React from "react";
import "./navBar.css";
import logo from "./logo.svg";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={logo} alt="logo" className="navbar-logo"/>
      </div>
      <div className="navbar-menu">
        <ul className="navbar-items">
          <li className="navbar-item">Home</li>
          <li className="navbar-item">About</li>
          <li className="navbar-item">Services</li>
        </ul>
      </div>
      <div className="navbar-contact">
        <a
          href="https://wa.me/+573053281605"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/color/48/000000/whatsapp.png"
            alt="Whatsapp"
          />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
