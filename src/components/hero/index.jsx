import React from "react";
import "./styles.scss";
import heroImg from "../../assets/image/pexels-andrea-piacquadio-3755511.jpg";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
const HeroComponent = () => {
  return (
    <>
      <div className="hero-container">
        <img src={heroImg} alt="" />
        <div className="hero-text">
          <h1>Accepting 2022-2023 term</h1>
          <Link to={"/booking"}>
            <Button variant="contained" size="large" color="error">
              Book a tour
            </Button>
          </Link>
          <h4>admin@email.com</h4>
        </div>
      </div>
    </>
  );
};

export default HeroComponent;
