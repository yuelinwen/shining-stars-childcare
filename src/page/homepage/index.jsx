import React from "react";
import HeroComponent from "../../components/hero";
import PhotoComponent from "../../components/photo";
import MidInfoComponent from "../../components/information";
import ProgramComponent from "../../components/program";
import PostComponent  from "../../components/post";
import NotificationComponent from "../../components/notification";
const HomePage = () => {
  return (
    <>
      <HeroComponent />
      <NotificationComponent />
      <MidInfoComponent />
      <ProgramComponent />
      <PhotoComponent />
      <PostComponent />
    </>
  );
};

export default HomePage;
