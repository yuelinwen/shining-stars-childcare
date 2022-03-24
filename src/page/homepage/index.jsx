import React from "react";
import HeroComponent from "../../components/hero";
// import CarouselComponent from "../../components/carousel";
import MidInfoComponent from "../../components/information";
import ProgramComponent from "../../components/program";
const HomePage = () => {
  return (
    <>
      <HeroComponent />
      <MidInfoComponent />
      <ProgramComponent />
    </>
  );
};

export default HomePage;
