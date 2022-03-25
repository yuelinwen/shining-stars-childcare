import React from "react";
import { Row, Col } from "react-bootstrap";
import "../styles.scss";
import ImageSrc from "../../../assets/image/new_b_toddler.jpeg";

const ToddlerPage = () => {
  return (
    <div className="page-outer">
      <h1>Toddler Program (16 months to 2.5 years)</h1>
      <div className="page-inner">
        <Row>
          <Col md={6} sm={12} className="order-1">
            <img src={ImageSrc} alt="junior-senior-kid-program" />
          </Col>
          <Col md={6} sm={12} className="order-2 mt-md-2 mt-sm-5">
            <p>
              For toddlers we have a program that has been developed to meet
              their needs of limitless energy, natural curiosity for learning
              and struggle for independence. Learning centers, with educational
              and developmentally appropriate toys designed for learning, create
              a bright and exciting environment for your child. Expanding the
              imagination and strengthening the muscles has never been more fun!
              Weekly lesson plans provide activities designed to develop skills
              necessary to accomplish developmental milestones. At this tender
              age, there's no such thing as too much love, too many hugs, or too
              many giggles. It's imperative to create strong bonds with families
              and caregivers. At Shining Stars Child Care Centre, you know your
              child is being loved, hugged and nurtured from the very beginning
              and as he/she continues to develop. The program also introduces
              French in a fun and interactive way through gatherings, nursery
              rhymes as well as songs.
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ToddlerPage;
