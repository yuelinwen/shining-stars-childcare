import React from "react";
import "./styles.scss";
import heroImg from "../../assets/image/rs=w_1534,m.webp";

const HeroComponent = () => {
  return (
    <div className="hero-container">
      <div className="hero-img">
        <img src={heroImg} alt="" />
      </div>

      <div className="hero-text">
        <h1>Accepting 2022-2023 term</h1>
        <button>REGISTER NOW</button>
        <span>admin@email.com</span>
      </div>
    </div>
  );
};

export default HeroComponent;
