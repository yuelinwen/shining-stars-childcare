import React from "react";
import { Row, Col } from "react-bootstrap";

const ContactPage = () => {
  return (
    <div className="page-outer">
      <h1>Contact Us</h1>
      <div className="form-inner">
        <span>
          Please note that tours are conducted by reservation only and we cannot
          accommodate walk-ins. Appointment are Monday to Friday. Please fill
          the following form and we will contact you soon.
        </span>
        <Row>
          <Col></Col>
          <Col></Col>
        </Row>
      </div>
    </div>
  );
};

export default ContactPage;
