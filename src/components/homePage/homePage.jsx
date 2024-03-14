import React from "react";
import Proptypes from "react"
import "./homePage.css";
import imagenHomePage from "./imagen.svg";
import Boton from "../boton/boton.jsx";

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="homePage-header">
        <span className="homePage-title">
          Start Sending Crypto Currency Easily
        </span>
        <span className="homePage-description">
          Join the world largest crypto exchange
        </span>
        <Boton title="Connect Wallet" size="230px" />
      </div>
      <span className="homePage-img">
        <img src={imagenHomePage} alt="imagen decorativa"></img>
      </span>
    </div>
  );
};

export default HomePage;
