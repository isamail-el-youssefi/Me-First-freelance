import About from "@/components/About";
import Hero from "@/components/Hero";
import Packages from "@/components/Packages";
import Feedback from "@/components/Feedback";

import React from "react";
import CarouselMain from "@/components/Carousel";

const page = () => {
  return (
    <>
      <Hero />
      <About />
      <Packages limit={3} />
      <Feedback />
      <CarouselMain />

      
      
    </>
  );
};

export default page;
