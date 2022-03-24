import React from "react";
import "./styles.scss";
import { Row, Col } from "react-bootstrap";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import toddler from "../../assets/image/new_b_toddler.jpeg";
import preschool from "../../assets/image/pre_school.jpeg";
import jk from "../../assets/image/jk_b.jpeg";
import { Button } from "@mui/material";

const CardItem = ({ title, img }) => {
  return (
    <Card sx={{ maxHeight: 600 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="350"
          image={img}
          alt={`{title} img`}
          className="card-media"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            For toddlers we have a program that has been developed to meet their
            needs of limitless energy, natural curiosity for learning and
            struggle for independence.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const ProgramComponent = () => {
  return (
    <div className="program-container">
      <h1>Our Program</h1>
      <Row className="programs">
        <Col lg={4} md={12} className="program mb-4">
          <CardItem
            title={"Toddler Program (16 months to 2.5 years)"}
            img={toddler}
          />
        </Col>
        <Col lg={4} md={12} className="program mb-4">
          <CardItem
            title={"Toddler Program (16 months to 2.5 years)"}
            img={preschool}
          />
        </Col>
        <Col lg={4} md={12} className="program mb-4">
          <CardItem
            title={"Toddler Program (16 months to 2.5 years)"}
            img={jk}
          />
        </Col>
      </Row>
    </div>
  );
};

export default ProgramComponent;
