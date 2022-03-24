import React, { useEffect, useState } from "react";
import "./styles.scss";
import Logo from "./logo/logo";
import { NavLink } from "react-router-dom";
// import NotificationComponent from "../notification";

const NavbarComponent = () => {
  const [show, setShow] = useState(true);
  const [click, setClick] = React.useState(false);
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  const controlNavbar = () => {
    if (window.scrollY > 50) {
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
    <>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      {/* {!click && <NotificationComponent />} */}
      <div
        className={`navbar-container ${show && "nav-scrolled"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="nav-container">
          <NavLink
            exact
            to="/"
            className={`navbar-logo ${show && "logo-scrolled"}`}
          >
            <Logo />
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item" id="first-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                <span className={show ? "tag-text" : "scrolled-text"}>
                  Home
                </span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                <span className={show ? "tag-text" : "scrolled-text"}>
                  BOOK A TOUR
                </span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/blog"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                <span className={show ? "tag-text" : "scrolled-text"}>
                  HOURS OF OPERATION
                </span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                <span className={show ? "tag-text" : "scrolled-text"}>
                  CONTACT US
                </span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                <span className={show ? "tag-text" : "scrolled-text"}>
                  CAREER
                </span>
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarComponent;
