import React from "react";
import { Row, Col } from "react-bootstrap";
import "../styles.scss";
import ImageSrc from "../../../assets/image/pre_school.jpeg";

const PreSchoolPage = () => {
  return (
    <div className="page-outer">
      <h1>Our Preschool Program (2.5 years to 3.5 years)</h1>
      <div className="page-inner">
        <Row>
          <Col md={6} sm={12} className="order-1">
            <img src={ImageSrc} alt="junior-senior-kid-program" />
          </Col>
          <Col md={6} sm={12} className="order-2 mt-md-2 mt-sm-5">
            <p>
              Preschoolers have a program that includes a wide range of
              experiences, which builds on the natural curiosity of this age
              group about the world around them. The children will explore
              topics through group time introductions and reviews, daily
              enrichments, and additions to each learning center.
              <br />
              <br />
              Because preschoolers like to learn new information and have the
              desire to master new tasks, much of what your child learns will be
              through self-directed experiences. Throughout the day, children
              will have the opportunity to explore the classroom’s learning
              centers: Blocks & Building, Dramatic Play, Library, Music &
              Movement, Cognitive, Science & Discovery, and Creative. Learning
              through play, in these clearly defined areas of interest, promotes
              independence, fosters decision-making, and encourages hands-on
              involvement. Each learning center engages the child’s core
              components of development: social-emotional, language, cognitive,
              physical and aesthetic. Each child develops at their own pace and
              we encourage communication between teacher and parents on the
              progress of their child. Daily communication from the classroom
              teachers will update parents on activities, future class projects
              and field trips.
              <br />
              <br />
              The program also introduces French in a fun and interactive way
              through gatherings, props, charts and stories. Our teachers will
              encourage children to become comfortable with using basic French
              words in everyday conversations. Parents will receive daily
              updates with their child’s teacher about their progress.
              <br />
              <br />
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default PreSchoolPage;
