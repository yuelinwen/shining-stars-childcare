import React from "react";
import "./styles.scss";
import heroImg from "../../assets/image/rs=w_1534,m.webp";
import { Button } from "react-bootstrap";

const HeroComponent = () => {
  return (
    <>
      <div className="hero-container">
        <img src={heroImg} alt="" />

        <div className="hero-text">
          <h1>Accepting 2022-2023 term</h1>
          <Button variant="danger" size="lg">
            REGISTER NOW
          </Button>
          <h4>admin@email.com</h4>
        </div>
      </div>
    </>
  );
};

export default HeroComponent;
