import React from "react";
import { Row, Col } from "react-bootstrap";
import "../styles.scss";
import ImageSrc from "../../../assets/image/jk_b.jpeg";

const JkskPage = () => {
  return (
    <div className="page-outer">
      <h1>Our Junior and Senior Kindergarten Program (3.5 years to 6 years)</h1>
      <div className="page-inner">
        <Row>
          <Col md={6} sm={12} className="order-1">
            <img src={ImageSrc} alt="junior-senior-kid-program" />
          </Col>
          <Col md={6} sm={12} className="order-2 mt-md-2 mt-sm-5">
            <p>
              Our JK/SK program is geared to the needs of children who attend
              junior or senior kindergarten, but who require care for the days
              they are not attending school. Activities in the program build
              upon the kindergarten experiences such as auditory skills, reading
              and writing, visual discrimination, art projects, letter concepts
              and math awareness. Topics, with related activities, assist in
              developing your child's knowledge base, attention span and
              effective communicating skills. The children have the opportunity
              to explore the discovery centers that exist in the classroom such
              as Blocks & Building, Dramatic Play, Library, Music & Movement,
              Cognitive, Science & Discovery, and Creative.
              <br />
              <br />
              The children will learn the basic skills for reading and writing;
              Learning the letter sounds (including initial consonant and
              vowels), learning letter formation (correctly printing the
              letters), blending (forming words by combining letter sounds to
              make words) , identifying sounds in words (beginning, middle and
              ending) , spelling and identifying familiar words (“tricky”
              words). The children also focus on printing and level reading to
              develop language and literacy skills. Our numeracy program
              introduces the children to the basic math skills they will need
              when entering grade one. <br />
              <br />
              The program also introduces French in a fun and interactive way
              through gatherings, props, charts and stories. Our teachers will
              encourage children to become comfortable with using basic French
              words in everyday conversations. Our focus is on verbal speaking
              but the children will have visual displays to accompany their
              lessons. Parents will receive daily updates with their child's
              teacher about their progress.
              <br />
              <br />
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default JkskPage;
