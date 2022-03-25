import React from "react";
import { Row, Col } from "react-bootstrap";
import "../styles.scss";
import StaffImg1 from "../../../assets/image/1630332555_0_1-1.png";
import StaffImg2 from "../../../assets/image/1630332665_0_4-1.png";
import StaffImg3 from "../../../assets/image/1630332784_0_3-1.jpeg";
import StaffImg4 from "../../../assets/image/1630332912_0_5-1.png";
import StaffImg5 from "../../../assets/image/1630333012_0_2-1.jpeg";
import "./styles.css";

const staffPage = () => {
  return (
    <div className="page-outer">
      <h1>Our Team</h1>
      <div className="page-inner">
        <Row className="row-flex">
          <Col md={6} xs={12}>
            <div className="staff-content">
              <h4>Holly Gerrard</h4>
              <img src={StaffImg1} alt={`our staff`} />
              <p>
                Hello, My name is Holly Gerrard and I am the Supervisor of
                Shining Stars Child Care Center. I have been the Supervisor of
                Shining Stars Child Care for the past 9 years but have worked in
                the field for a total of 32 years.
                <br />
                <br />
                I am a Registered Early Childhood Educator, Resource Teacher and
                a Part Time Professor in the Early Childhood Education Program
                at Seneca College. Presently I am teaching in the Infant and
                Toddler Program.
                <br />
                <br />
                My passion is to ensure that you and your family feel welcome
                into Shining Stars through ongoing communication and
                collaboration.
                <br />
                <br />
                Please feel free to contact me if you need more information
                about the Shining Stars Programs we provide. I will be happy to
                discuss this exciting adventure with you and to help with the
                smooth, stress free transition to make yours and your child's
                experience successful.
              </p>
            </div>
          </Col>
          <Col md={6} xs={12}>
            <div className="staff-content">
              <h4>Alysa Baker RECE</h4>
              <img src={StaffImg2} alt={`our staff`} />
              <p>
                My name is Alysa. My passion for the nurturing and education of
                children stems from my own life experiences and witnessing the
                life experiences of others.
                <br />
                <br />
                My passion began as a child while helping my Grandmother care
                for foster children from Toronto Children's Aid Society. I began
                my journey into Early Childhood Education through Seneca College
                and subsequently went onto my Bachelors of Child Development. I
                look forward each day to providing a safe, nurturing and
                inclusive education to children of all ages.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="row-flex">
          <Col md={6} xs={12}>
            <div className="staff-content">
              <h4>Leigh McMaster, RECE</h4>
              <img src={StaffImg3} alt={`our staff`} />
              <p>
                Welcome to the Toddler Room!
                <br />
                <br />
                My name is Ms Leigh and I have been involved with the childcare
                industry in York Region for more than 5 years, specifically with
                children from birth to 3.5 years. I hold a diploma in Early
                Childhood Education as well as an internationally recognized
                diploma in Montessori Education.
                <br />
                <br />
                Currently, I am pursuing a Master’s Degree in Early Childhood
                Education. I bring my passion and educational knowledge of
                childhood development each day to the centre as well as
                curiosity, enthusiasm, and creativity to spark joy and wonder in
                each child.
              </p>
            </div>
          </Col>
          <Col md={6} xs={12}>
            <div className="staff-content">
              <h4>Francine Renaud RECE</h4>
              <img src={StaffImg4} alt={`our staff`} />
              <p>
                Hello! I am Ms. Francine. I am a Registered Early Childhood
                Educator and I have had the extreme pleasure of teaching
                toddlers and preschoolers at Shining Stars for the past five
                years.
                <br />
                <br />
                I love being a facilitator/observer of children reaching their
                own unique milestones - each journey is a joy to experience. I
                am a former children’s librarian and “Montrealer” so literacy
                and language are important for me to instill...a lot of
                books/stories and French are part of our class!
                <br />
                <br />
                We strive to create a balanced program that meets all
                developmental domains while still having fun:) I look forward to
                being one of your child’s educators while keeping in touch
                regarding their growth and exploration.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="row-flex">
          <Col md={6} xs={12}>
            <div className="staff-content">
              <h4>Fiona Chao</h4>

              <img src={StaffImg5} alt={`our staff`} />
              <p>
                Hello everyone! I’m Miss Fiona! I am fluent in Cantonese, and a
                bit of mandarin. I work in the Preschool classroom at Shining
                Stars CCC and I’ve been working for as long as we’ve been open!
                <br />
                <br />
                9 years with Shining Stars and one thing I love about my job is
                being able to help these kids get ready for kindergarten. Sad to
                see them leave but love seeing the progress they make from
                beginning to end.
                <br />
                <br />
                For most of my programs I like to base it off of the children’s
                interests to help expand the children’s knowledge and language
                skills. I enjoy being able to guide and help them in their
                growth and shaping them into being the unique individuals they
                are!
              </p>
            </div>
          </Col>
          <Col md={6} xs={12}></Col>
        </Row>
      </div>
    </div>
  );
};

export default staffPage;
