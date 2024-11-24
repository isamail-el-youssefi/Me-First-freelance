"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Autoplay from "embla-carousel-autoplay";

import Image from "next/image";

const CarouselMain = () => {
  const TESTIMONIAL = [
    {
      title: "James Martinez",
      profession: "Director, Nova Gold",
      URL: "/person-1.jpg",
      desc: "Fantastic destinations, knowledgeable guides, seamless logistics. Spectacular views and memories. Exceeded expectations; worth every penny",
    },
    {
      title: "Sophia Anderson",
      profession: "Manager, Safe City",
      URL: "/person-2.jpg",
      desc: "Unforgettable experiences, friendly staff, and top-notch organization. Highly recommended for adventurous souls. A must-try. Highly recommend",
    },
    {
      title: "Lily Walker",
      profession: "Director, High Gold",
      URL: "/person-3.jpg",
      desc: "Unbelievable sights, professional guides, seamless planning. Unmatched experiences that leave you wanting more. Highly recommended",
    },
    {
      title: "Ninna Williams",
      profession: "CEO, Rafa Builds",
      URL: "/person-4.jpg",
      desc: "Unparalleled expertise, personalized service, breathtaking destinations. Consistently delivers an extraordinary travel experience. Highly recommended",
    },
    {
      title: "Ali Khan",
      profession: "CEO, High Chase",
      URL: "/person-5.jpg",
      desc: "Outstanding deys, knowledgeable guides, seamless execution. Each trip exceeds expectations, ensuring lasting memories and remarkable experiences.",
    },
  ];

  return (
    <div className="max-container padding-container pb-10 pt-3">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="bold-44  pb-2 text-amber-900">Happy Visitors</h1>
        <p className="text-amber-950 pb-10 tracking-tight text-lg">
          Lorem ipsum dolor sit amet consectetur
        </p>
      </div>
      <Carousel>
        <CarouselContent>
          {/* Map over image sources to generate CarouselItems */}
          {TESTIMONIAL.map((src, index) => (
            <CarouselItem key={index} className="lg:basis-1/2 basis-1/2">
              <Card>
                <CardHeader>
                  <CardTitle>{src.title}</CardTitle>
                  <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Card Content</p>
                </CardContent>
                <CardFooter>
                  <p>Card Footer</p>
                </CardFooter>
              </Card>
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
