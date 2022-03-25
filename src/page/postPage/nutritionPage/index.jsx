import React from "react";
import { Row, Col } from "react-bootstrap";
import "../styles.scss";
import ImageSrc from "../../../assets/image/1635604875_2.jpeg";

const nutritionPage = () => {
  return (
    <div className="page-outer">
      <h1>Nutrition</h1>
      <div className="page-inner">
        <Row>
          <Col md={6} sm={12} className="order-1">
            <img src={ImageSrc} alt="junior-senior-kid-program" />
          </Col>
          <Col md={6} sm={12} className="order-2 mt-md-2 mt-sm-5">
            <p>
            Good nutrition is essential for healthy growth and development and is therefore, an important and intrinsic part of our program. We have lunch in everyday, as well as breakfast and snack prepared and cook onsite. All meals are in accordance with Canada's Food Guide.
              <br />
              <br />
              Children are encouraged to try all foods but are never forced to eat. Weekly menus will be posted for parents on our menu board.
              <br />
              <br />
              We are a <span style={{color:"#f56a6a"}}>NUT FREE</span> environment and do not accept any outside food due to allergies within the centre.
              <br />
              <br />
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default nutritionPage;
