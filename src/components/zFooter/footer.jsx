import React from "react";
import "./footer.css";
import facebook from "./facebook.svg";
import twitter from "./twitter.svg";
import linkedin from "./linkedin.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <span className="footer-logo">
          Send
          <span className="footer-Cript">Crypt</span>
        </span>
        <div className="footer-center">
          <img src={twitter} alt="Icon-Twitter" />
          <img src={linkedin} alt="Icon-Linkedin" />
          <img src={facebook} alt="Icon-Facebook" />
        </div>
        <div className="footer-right">
          Copyright © 2022 SendCrypt. All rights reserved
        </div>
    </footer>
  );
};
export default Footer;
