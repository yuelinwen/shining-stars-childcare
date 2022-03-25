import React from "react";
import "./styles.scss";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Image1 from "../../assets/image/sscc_main.jpeg";
import Image2 from "../../assets/image/slide-image-3.jpeg";
import Image3 from "../../assets/image/sscc_main.jpeg";
import Image4 from "../../assets/image/1635605074_8.jpeg";

const PostComponent = () => {
  return (
    <div className="post-container">
      <Container className="post-inner">
        <Row className="my-2 post-item">
          <Col md={6} sm={12} className="order-1">
            <img src={Image1} alt="our mission" className="post-img" />
          </Col>
          <Col md={6} sm={12} className="order-md-1 order-2 my-3 post-content">
            <h4>Our Mission</h4>
            <p>
              Shining Stars Child Care Centre is located in the heart of York
              Region, servicing the communities of Richmond Hill, Vaughan and
              Markham. We are licensed by the Ministry of Education.
            </p>
            <Link to={"/mission"}>
              <Button variant="outlined" size="large" color="error">
                MORE
              </Button>
            </Link>
          </Col>
        </Row>

        <Row className="my-2 post-item">
          <Col md={6} sm={12} className="order-md-1 order-2 my-3 post-content">
            <h4>Nutrition</h4>
            <p>
              Good nutrition is essential for healthy growth and development and
              is therefore, an important and intrinsic part of our program. We
              have lunch in everyday, as well as breakfast and snack prepared
              and cook onsite. All meals are in accordance with Canada's Food
              Guide.
            </p>
            <Link to={"/nutrition"}>
              <Button variant="outlined" size="large" color="error">
                MORE
              </Button>
            </Link>
          </Col>
          <Col md={6} sm={12} className="order-md-2  order-1">
            <img src={Image2} alt="nutrition" className="post-img" />
          </Col>
        </Row>

        <Row className="my-2 post-item">
          <Col md={6} sm={12} className="order-1">
            <img src={Image3} alt="our staff" className="post-img" />
          </Col>
          <Col md={6} sm={12} className="order-md-1 order-2 my-3 post-content">
            <h4>Our Staff</h4>
            <p>
              Our devoted and professional teachers provide a unique learning
              environment that is fun, safe and loving. Every one of our
              teachers works to satisfy the needs of each child and make them
              feel at home.
            </p>
            <Link to={"/staff"}>
              <Button variant="outlined" size="large" color="error">
                MORE
              </Button>
            </Link>
          </Col>
        </Row>

        <Row className="my-2 post-item">
          <Col md={6} sm={12} className="order-md-1 order-2 my-3 post-content">
            <h4>Our Classroom</h4>
            <Link to={"/classroom"}>
              <Button variant="outlined" size="large" color="error">
                MORE
              </Button>
            </Link>
          </Col>

          <Col md={6} sm={12} className="order-md-2  order-1">
            <img src={Image4} alt="our classroom" className="post-img" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PostComponent;
