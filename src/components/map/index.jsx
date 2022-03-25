import React from "react";
import "./styles.scss";
import GoogleMapImg from "../../assets/image/WechatIMG271.jpeg";

const MapComponent = () => {
  return (
    <div className="map-container">
      <h1>Our Location</h1>
      <img src={GoogleMapImg} alt="demo-google-map" />
    </div>
  );
};

export default MapComponent;
