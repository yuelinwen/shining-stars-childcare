import React from "react";
import "./styles.scss";
import { FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
const FooterComponent = () => {
  return (
    <div className="footer-container">
      <div className="footer-info">
        <a href="https://www.instagram.com/">
          <FaInstagram />
        </a>
        <a href="https://www.youtube.com/">
          <FaYoutube />
        </a>
        <a href="https://www.facebook.com/">
          <FaFacebook />
        </a>
      </div>
      <p className="text">
        {" "}
        © 2022 Shining Stars Child Care Centre. All rights reserved.
      </p>
    </div>
  );
};

export default FooterComponent;
