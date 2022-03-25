import React from "react";
import { Row, Col } from "react-bootstrap";
import "../styles.scss";
import ImageSrc from "../../../assets/image/1635605074_8.jpeg";

const OperationInfoPage = () => {
  return (
    <div className="page-outer">
      <h1>Hours of Operation</h1>
      <div className="page-inner">
        <Row>
          <Col md={6} sm={12} className="order-2">
            <img src={ImageSrc} alt="junior-senior-kid-program" />
          </Col>
          <Col md={6} sm={12} className="order-1 mt-md-2 mt-sm-5">
            <p>
              Shining Stars Child Care Centre is open from 7am to 6pm. Kindly
              note that the centre will be closed for the following Statutory
              and Civic holidays: 
              <br />
              <br />
              <ul>
                <li>New Year’s Day</li>
                <li>Family Day</li>
                <li>Good Friday</li>
                <li>Victoria Day</li>
                <li>Canada Day</li>
                <li>Civic Holiday</li>
                <li>Labor Day</li>
                <li>Thanksgiving Day</li>
                <li>Christmas Day</li>
                <li>Boxing Day</li>
                <li>December 27 noon until January 2</li>
              </ul>
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default OperationInfoPage;
