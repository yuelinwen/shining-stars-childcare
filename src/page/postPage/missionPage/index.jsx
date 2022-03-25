import React from "react";
import { Row, Col } from "react-bootstrap";
import "../styles.scss";
import ImageSrc from "../../../assets/image/1635604890_3.jpeg";

const ourMissionPage = () => {
  return (
    <div className="page-outer">
      <h1>Our Mission</h1>
      <div className="page-inner">
        <Row>
          <Col md={6} sm={12} className="order-1">
            <img src={ImageSrc} alt="junior-senior-kid-program" />
          </Col>
          <Col md={6} sm={12} className="order-2 mt-md-2 mt-sm-5">
            <h3>OUR MISSION STATEMENT & PHILOSOPHY</h3>
            <p>
              Shining Stars Child Care Centre is located in the heart of York
              Region, servicing the communities of Richmond Hill, Vaughan and
              Markham. We are licensed by the Ministry of Education.
              <br />
              <br />
              Our programs accommodate and meet the needs of toddlers,
              preschoolers, kindergarten-aged children (from one and half to
              seven years of age), as well as children preparing for bilingual
              and French immersion programs. We provide exceptional quality
              childcare for families seeking to help their children realize
              their full potential. <br />
              <br />
              We serve our children with three nutritious meals daily, all of
              which strictly follow Canada's food guide. We encourage
              parents/guardians to take an active role in their childs learning
              experiences, and work in a collaborative manner in order to meet
              every child's goals.
              <br />
              <br />
              At Shining Stars Child Care Centre, our goal is to provide our
              children with a comfortable, safe, family-centred environment to
              learn and grow physically, emotionally, and intellectually. We
              strive to promote inclusivity and respect for all people, both
              children and adults alike. <br />
              <br />
              We believe that all children are unique; possessing a variety of
              needs and interests. Children are encouraged to explore this
              individuality at Shining Stars, but at the same time learn to be a
              part of a big community and family. Both traditional academic
              goals are met at Shining Stars, as well as experiential and active
              learning through play. It is imperative for children to maintain a
              balance between academic work and play in order to reach their
              full physical, social/emotional, and academic potential. <br />
              <br />
              We adhere to the philosophy and methodologies of both High Scope
              learning, as well as Emergent Curriculum. High Scope learning
              places emphasis on the importance of providing children with a
              solid foundation of language and mathematics skills, while
              Emergent Curriculum encourages creativity on both the parts of the
              caregivers and children by giving them the opportunity to express
              themselves freely and to design programming based on the
              children's interests. <br />
              <br />
              Please feel free to come in and take a tour of our center.
              <br />
              <br />
              Your feedback is greatly valued as it will assist us in the
              pursuit of continuous improvement, and allow us to strive to be
              our very best in providing top-quality childcare services.
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ourMissionPage;
