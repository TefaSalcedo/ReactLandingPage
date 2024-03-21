import React, { useState } from "react";
import "./navBar.css";
import Boton from "../boton/boton.jsx";
import open from "./open.svg";
import close from "./close.svg";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen); // Agrega esta línea
  };

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
      <div className="navbar-boton">
        <Boton title="Connect Wallet" size="230px" />
      </div>
      <div className="navbar-menu">
        <img
          src={open}
          alt="menu-open"
          className={`navbar-menu-open ${isMenuOpen ? "hidden" : ""}`}
          onClick={toggleMenu}
        />
        <img
          src={close}
          alt="menu-close"
          className={`navbar-menu-close ${isMenuOpen ? "" : "hidden"}`}
          onClick={toggleMenu}
        />
      </div>
      <div className={`navbar-mobile-menu ${isMenuOpen ? "" : "hidden"}`}>
        <ul className="navbar-mobile-hambuger-menu">
          <li>Markets</li>
          <li>Portafolio</li>
          <li>Products</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
