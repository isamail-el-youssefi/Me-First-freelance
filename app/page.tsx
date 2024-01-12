import About from "@/components/About";
import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import Packages from "@/components/Packages";
import Testimonial from "@/components/Testimonial";
import Video from "@/components/Video";
import React from "react";

const page = () => {
  return (
    <>
      <Hero />
      <Feature />
      <About />
      <Packages />
      <Video />
      <Testimonial />
    </>
  );
};

export default page;
