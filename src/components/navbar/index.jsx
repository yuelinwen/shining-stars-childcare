import React, { useEffect, useState } from "react";
import "./styles.scss";
import Logo from "./logo/logo";

const NavbarComponent = () => {
  const [show, setShow] = useState(true);
  const controlNavbar = () => {
    if (window.scrollY > 100) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <div className={`navbar-container ${show && "nav-scrolled"}`}>
      <div className={`navbar-logo ${show && "logo-scrolled"}`}>
        <Logo />
      </div>
      <div>
        <ul className="nav-list">
          <li className="nav-list-item">
            <a className="nav-link">Home</a>
          </li>
          <li className="nav-list-item">
            <a className="nav-link">Home</a>
          </li>
          <li className="nav-list-item">
            <a className="nav-link">Home</a>
          </li>
          <li className="nav-list-item">
            <a className="nav-link">Home</a>
          </li>
          <li className="nav-list-item">
            <a className="nav-link">Home</a>
          </li>
        </ul>
      </div>
      <div className="navbar-btn">Book a tour</div>
    </div>
  );
};

export default NavbarComponent;
