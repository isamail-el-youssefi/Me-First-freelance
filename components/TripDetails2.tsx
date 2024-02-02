import Image from "next/image";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { TRIPDAY } from "@/constant";

interface PageProps {
  Heading: string;
  days: number;
  map: string;
  carousel1: string;
  carousel2: string;
  carousel3: string;

}

const Page: React.FC<PageProps> = (props) => {
  return (
    <section className="max-container padding-container py-36">
      {/* HEADING */}
      <div className="flex flex-col justify-center items-center text-center ">
        <h1 className="lg:bold-44 bold-28  pb-2 text-amber-900">
          {props.Heading}
        </h1>
      </div>
      <div className="flex flex-col gap-10 lg:gap-28 lg:flex-row pt-6">
        {/* LEFT */}
        <div className="flex flex-col gap-8 xl:flex-row flex-3  ">
          {/* TAB AND CONTENT */}
          <Tabs defaultValue="account"  >
            {/* 3 TABS */}
            <TabsList className="bg-amber-100 flex justify-evenly py-7 rounded-full ">
              <TabsTrigger
                value="account"
                className="  focus:rounded-full  text-amber-950 text-md py-2 px-4"
              >
                Tab1
              </TabsTrigger>
              <TabsTrigger
                value="password"
                className="  focus:rounded-full  text-amber-950 text-md py-2 px-4 "
              >
                Tab2
              </TabsTrigger>
              <TabsTrigger
                value="3rd"
                className="  focus:rounded-full  text-amber-950 text-md py-2 px-4"
              >
                Tab3
              </TabsTrigger>
            </TabsList>
            {/* 3 CONTENTS */}
            <TabsContent value="account" className="pt-4 ">
              {TRIPDAY[props.days].map((trip, index) => (
                <div key={index}>
                  <h1>{trip.days}</h1>
                  <p>{trip.details}</p>
                </div>
              ))}
            </TabsContent>
            <TabsContent value="password" className="pt-4 w-full">
              <p className="lg:text-amber-300 lg:text-xl xl:text-red-600 2xl:text-green-50">hvkjvkvjhvkjvkjbjkbvkjbvkjbkjbvkvkjbvkjbkjbkjbkjbkjbkj</p>
              <iframe
                src={props.map}
                className="w-full h-96 rounded-2xl"
              ></iframe>
            </TabsContent>
            <TabsContent value="3rd" className="pt-4 ">
              <iframe
                src="https://www.google.com/maps/d/embed?mid=1dSeOzM2YSbCVON6pqMFE1oDFABuVjAU0&hl=en_US&ehbc=2E312F"
                className="w-full h-96 rounded-2xl"
                
              ></iframe>
            </TabsContent>
          </Tabs>
        </div>
        {/* RIGHT */}
        <div className="flex-2  ">
          <h1 className="lg:bold-44 bold-28  pb-6 text-amber-900 lg:hidden ">
            Images From the Trip
          </h1>
          <div >
            <Carousel>
              <CarouselContent>
                <CarouselItem >
                  <Image
                    src= {props.carousel1}
                    alt="about"
                    height={400}
                    width={400}
                    style={{ width: "100%", height: "100%" }}
                    className="rounded-2xl"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    src= {props.carousel2}
                    alt="about"
                    height={400}
                    width={400}
                    style={{ width: "100%", height: "100%" }}
                    className="rounded-2xl"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    src= {props.carousel3}
                    alt="about"
                    height={400}
                    width={400}
                    style={{ width: "100%", height: "100%" }}
                    className="rounded-2xl"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
