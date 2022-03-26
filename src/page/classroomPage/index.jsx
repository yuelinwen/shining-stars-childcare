import React from "react";
import { Image } from "antd";
import classImg1 from "../../assets/image/1635604875_2.jpeg";
import classImg2 from "../../assets/image/1635604890_3.jpeg";
import classImg3 from "../../assets/image/1635604989_4.jpeg";
import classImg4 from "../../assets/image/1635605027_6.jpeg";
import classImg5 from "../../assets/image/1635605074_8.jpeg";
import classImg6 from "../../assets/image/sscc_main.jpeg";

import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import "./styles.scss";

const itemData = [
  {
    img: classImg1,
    title: "Classroom",
    author: "Classroom",
  },
  {
    img: classImg2,
    title: "Classroom",
    author: "Classroom",
  },
  {
    img: classImg3,
    title: "Classroom",
    author: "Classroom",
  },
  {
    img: classImg4,
    title: "Classroom",
    author: "Classroom",
  },
  {
    img: classImg5,
    title: "Classroom",
    author: "Classroom",
  },
  {
    img: classImg6,
    title: "Classroom",
    author: "Classroom",
  },
];

const ClassroomPage = () => {
  return (
    <div className="page-outer">
      <h1>Our Classroom</h1>
      <div className="page-inner image-post">
        <Box sx={{ width: "100%", height: "auto" }}>
          <ImageList variant="masonry" cols={2} gap={8}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <Image width={"auto"} src={item.img} />
                <ImageListItemBar position="below" title={item.author} />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </div>
    </div>
  );
};

export default ClassroomPage;
