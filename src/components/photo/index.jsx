import React from "react";
import "./styles.scss";
import { Carousel } from "react-bootstrap";

import Gallery1 from "../../assets/image/pexels-anna-shvets-11286037.jpg";
import Gallery2 from "../../assets/image/pexels-lukas-296301.jpg";
import Gallery3 from "../../assets/image/slide-image-16.jpeg";
import Gallery4 from "../../assets/image/pexels-andrea-piacquadio-3755511.jpg";
import Gallery5 from "../../assets/image/1635605074_8.jpeg";

const PhotoComponent = () => {
  return (
    <div className="photo-container">
      <h1>Our Photo Gallery</h1>
      <Carousel className="carousel-gallery">
        <Carousel.Item interval={10000}>
          <img className="d-block w-100" src={Gallery1} alt="Our Picture" />
        </Carousel.Item>
        <Carousel.Item interval={10000}>
          <img className="d-block w-100" src={Gallery2} alt="Our Picture" />
        </Carousel.Item>
        <Carousel.Item interval={10000}>
          <img className="d-block w-100" src={Gallery3} alt="Our Picture" />
        </Carousel.Item>
        <Carousel.Item interval={10000}>
          <img className="d-block w-100" src={Gallery4} alt="Our Picture" />
        </Carousel.Item>
        <Carousel.Item interval={10000}>
          <img className="d-block w-100" src={Gallery5} alt="Our Picture" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default PhotoComponent;
