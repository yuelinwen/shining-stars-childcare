import React from "react";
import "./styles.scss";
import { Row, Col, Form, Button } from "react-bootstrap";
import GoogleMapImg from "../../assets/image/WechatIMG271.jpeg";

const ContactPage = () => {
  return (
    <div className="page-outer">
      <h1>Contact Us</h1>
      <div className="form-inner">
        <span>
          Get in touch with us. Please fill the following form and we will
          contact you soon.
        </span>
        <Row>
          <Col className="booking-form my-5" md={6} xs={12}>
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridName">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control type="text" placeholder="Name" />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Your Email</Form.Label>
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridChildName">
                  <Form.Label>Your Child Name</Form.Label>
                  <Form.Control type="text" placeholder="Child Name" />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridPhone">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="text" placeholder="Phone" />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridPhone">
                  <Form.Label>Post Code</Form.Label>
                  <Form.Control type="text" placeholder="Post Code" />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter your message"
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                SEND MESSAGE
              </Button>
            </Form>
          </Col>
          <Col className="booking-info my-5" md={6} xs={12}>
            <Row className="my-2">
              <h5>Shining Stars Child Care Centre</h5>
              <span>
                1305 Elgin Mills Road East <br />
                Markham, ON L4S 0B5
                <br />
                Phone Number: 905-737-9100
                <br />
                Email: info@shiningstarschildcare.ca
                <br />
                Monday to Friday from 7:00am to 6:00pm
              </span>
            </Row>
            <Row>
              <img src={GoogleMapImg} alt="demo-google-map" />
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ContactPage;
