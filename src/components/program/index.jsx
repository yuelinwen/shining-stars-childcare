import React from "react";
import "./styles.scss";
import { Row, Col } from "react-bootstrap";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import toddler from "../../assets/image/new_b_toddler.jpeg";
import preschool from "../../assets/image/pre_school.jpeg";
import jk from "../../assets/image/jk_b.jpeg";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const CardItem = ({ title, img }) => {
  return (
    <Card
      sx={{
        height: {
          xs: 250, // theme.breakpoints.up('xs')
          sm: "auto", // theme.breakpoints.up('sm')
          md: "auto", // theme.breakpoints.up('md')
          lg: "auto", // theme.breakpoints.up('lg')
        },
        width: {
          xs: 400, // theme.breakpoints.up('xs')
          sm: 400, // theme.breakpoints.up('sm')
          md: 300, // theme.breakpoints.up('md')
          lg: 400, // theme.breakpoints.up('lg')
        },
      }}
    >
      <CardMedia
        sx={{
          height: {
            xs: 100, // theme.breakpoints.up('xs')
            sm: 270, // theme.breakpoints.up('sm')
            md: 270, // theme.breakpoints.up('md')
            lg: 350, // theme.breakpoints.up('lg')
          },
          width: {
            xs: 400, // theme.breakpoints.up('xs')
            sm: 400, // theme.breakpoints.up('sm')
            md: 300, // theme.breakpoints.up('md')
            lg: 400, // theme.breakpoints.up('lg')
          },
        }}
        component="img"
        // height="150"
        image={img}
        alt={`{title} img`}
        className="card-media"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          style={{ textAlign: "center" }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          style={{ textAlign: "center" }}
        >
          <Link to={`/program`}>
            <Button variant="contained" color="error">
              LEARN MORE
            </Button>
          </Link>
        </Typography>
      </CardContent>
    </Card>
  );
};

const ProgramComponent = () => {
  return (
    <div className="program-container">
      <h1>Our Program</h1>
      <Row className="programs">
        <Col md={4} xs={12} className="program">
          <CardItem
            title={"Toddler Program (16 months to 2.5 years)"}
            img={toddler}
          />
        </Col>
        <Col md={4} xs={12} className="program">
          <CardItem
            title={"Preschool Program (2.5 years to 3.5 years)"}
            img={preschool}
          />
        </Col>
        <Col md={4} xs={12} className="program">
          <CardItem
            title={"JK /SK Program (3.5 years up to 7 years)"}
            img={jk}
          />
        </Col>
      </Row>
    </div>
  );
};

export default ProgramComponent;
