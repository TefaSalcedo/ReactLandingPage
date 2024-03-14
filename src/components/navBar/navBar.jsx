import React from "react";
import "./navBar.css";
import Boton from "../boton/boton.jsx";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="navbar-logo">
          Send
          <span className="navbar-Cript">Crypt</span>
        </span>
        <ul className="navbar-items">
          <li className="navbar-item">Markets</li>
          <li className="navbar-item">Portafolio</li>
          <li className="navbar-item">Products</li>
        </ul>
      </div>
      <Boton title="Connect Wallet" size="230px" />
    </nav>
  );
};

export default NavBar;
