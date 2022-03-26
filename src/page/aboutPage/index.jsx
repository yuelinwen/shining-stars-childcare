import React from "react";
import { Row, Col } from "react-bootstrap";
import ImageSrc from "../../assets/image/slide-image-16.jpeg";

const AboutPage = () => {
  return (
    <div className="page-outer">
      <h1>About Us</h1>
      <div className="page-inner">
        <Row>
          <Col md={6} sm={12} className="order-1">
            <img src={ImageSrc} alt="junior-senior-kid-program" />
          </Col>
          <Col md={6} sm={12} className="order-2 mt-md-2 mt-sm-5">
            <p>
              Welcome! Shining Stars Child Care Centre is a day care facility
              serving Richmond Hill, Markham, Stouffville and Vaughan areas. We
              are located on Elgin Mills Road East between Leslie Street and
              Bayview Avenue in prestigious Richmond Hill, Ontario across from
              Richmond Green Community Centre. We are fully licensed by the
              Ministry of Education. We offer exciting, stimulating and
              educating programs for Toddlers, Preschoolers and Kindergarteners.
              <br />
              <br />
              Please feel free to call, email or book a tour at your
              convenience. We will be happy to give your family a tour of our
              facilities, meet our teachers and raise any questions that you may
              have regarding our programs, curriculum and registration. We look
              forward to meeting you all soon!
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AboutPage;
