import About from "@/components/About";
import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import Packages from "@/components/Packages";
import Testimonial from "@/components/Testimonial";
import Video from "@/components/Video";
import Slide from "@/components/Slide";
import React from "react";
import CarouselMain from "@/components/Carousel";

const page = () => {
  return (
    <>
      <Hero />
      <About />
      <Packages />
      {/*       <Testimonial></Testimonial>
       */}
      <CarouselMain />
    </>
  );
};

export default page;
