import React from "react";
import HeroComponent from "../../components/hero";
import PhotoComponent from "../../components/photo";
import MidInfoComponent from "../../components/information";
import ProgramComponent from "../../components/program";
const HomePage = () => {
  return (
    <>
      <HeroComponent />
      <MidInfoComponent />
      <ProgramComponent />
      <PhotoComponent />
    </>
  );
};

export default HomePage;
