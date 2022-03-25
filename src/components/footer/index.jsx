import React from "react";
import "./styles.scss";
import { FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
const FooterComponent = () => {
  return (
    <div className="footer-container">
      <div className="footer-info">
        <a href="">
          {" "}
          <FaInstagram />
        </a>
        <a href="">
          {" "}
          <FaYoutube />
        </a>
        <a href="">
          {" "}
          <FaFacebook />
        </a>
      </div>
      <p> © 2022 Shining Stars Child Care Centre. All rights reserved.</p>
    </div>
  );
};

export default FooterComponent;
