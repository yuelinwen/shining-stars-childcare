import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

const BookingPage = () => {
  return (
    <div className="page-outer">
      <h1>Book A Tour</h1>
      <div className="form-inner">
        <span>
          Please note that tours are conducted by reservation only and we cannot
          accommodate walk-ins. Appointment are Monday to Friday. Please fill
          the following form and we will contact you soon.
        </span>
        <Row>
          <Col className="booking-form my-5">
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridName">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control type="text" placeholder="Name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Your Email</Form.Label>
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridPhone">
                  <Form.Label>Your Phone</Form.Label>
                  <Form.Control type="text" placeholder="Phone" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control type="text" placeholder="City" />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCareerProgram">
                  <Form.Label>- Qualifications -</Form.Label>
                  <Form.Select defaultValue="- Program -">
                    <option>ON-ECA</option>
                    <option>ON-RECE</option>
                    <option>
                      ON-RECE with Montessori Experience or education
                    </option>
                    <option>Others</option>
                  </Form.Select>
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Please tell us about you"
                />
              </Form.Group>
              <Form.Group controlId="formFileMultiple" className="mb-3">
                <Form.Label>Multiple files input example</Form.Label>
                <Form.Control type="file" multiple />
              </Form.Group>
              <Button variant="primary" type="submit">
                SEND MESSAGE
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default BookingPage;
