"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import Image from "next/image";

const CarouselMain = () => {
  const imageSources = [
    "/1.jpg",
    "/2.jpg",
    "/3.jpg",
    "/4.jpg",
    "/5.jpg",
    "/6.jpg",
    "/7.jpg",
    "/8.jpg",
    "/9.jpg",
  ];

  return (
    <div className="max-container padding-container pb-10 pt-3">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="bold-44  pb-2 text-amber-900">Happy Visitors</h1>
        <p className="text-amber-950 pb-10 tracking-tight text-lg">
          Lorem ipsum dolor sit amet consectetur
        </p>
      </div>      <Carousel
        plugins={[
          Autoplay({
            delay: 2700,
            stopOnInteraction: false,
          }),
        ]}
      >
        <CarouselContent>
          {/* Map over image sources to generate CarouselItems */}
          {imageSources.map((src, index) => (
            <CarouselItem key={index} className="lg:basis-1/3 basis-1/2">
              <Image
                src={src}
                alt="about"
                height={400}
                width={400}
                style={{ width: "100%", height: "100%" }}
                className="rounded-2xl"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CarouselMain;
