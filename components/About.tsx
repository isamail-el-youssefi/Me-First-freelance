import Image from "next/image";
import React from "react";
import TripData from "./TripData";
import { TRIPS } from "@/constant";

const About = () => {
  return (
    <section className="max-container padding-container py-24">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="bold-44  pb-2 text-amber-900">Popular Destinations</h1>
        <p className="text-amber-950 pb-10 tracking-tight text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing
        </p>
      </div>
      <div className="flex flex-col gap-8 xl:flex-row pb-24">
        {/* LEFT */}

        <TripData
          title={TRIPS.length > 0 ? TRIPS[0].place : "Default Title"}
          detail={TRIPS.length > 0 ? TRIPS[0].details : "Default Title"}
        />

        {/* RIGHT */}
        <div className="flex flex-2 xl:flex-2 gap-5">
          <div>
            <Image
              src="/sahara-7.jpg"
              alt="about"
              height={444}
              width={333}
              style={{ width: "100%", height: "85%" }}
              className="w-auto  rounded-lg border  hover:border-amber-800 mt-10 hover:scale-105  transition-all ease-in-out duration-300 cursor-pointer "
            />
          </div>
          <div>
            <Image
              src="/chegaga-1.jpg"
              alt="about"
              height={444}
              width={333}
              style={{ width: "100%", height: "85%" }}
              className="w-auto rounded-lg border hover:border-amber-800 mb-10 hover:scale-105  transition-all ease-in-out duration-300 cursor-pointer "
            />
          </div>
        </div>
      </div>
      {/* SECOND CONTAINER */}
      <div className="flex flex-col-reverse gap-8 lg:flex-row">
        {/* LEFT */}
        <div className="flex flex-2 xl:flex-2 gap-4 lg:gap-4">
          <div className="relative overflow-hidden">
            <Image
              src="/about1.jpg"
              alt="about"
              height={333}
              width={333}
              className="w-auto rounded-lg border-2 border-amber-800 mb-10 transform transition-transform duration-300 hover:scale-110"
            />
          </div>
          <div>
            <Image
              src="/about2.jpg"
              alt="about"
              height={333}
              width={333}
              className="w-auto rounded-lg border border-gray-10 mt-10 "
            />
          </div>
        </div>
        {/* RIGHT */}

        <TripData
          title={TRIPS.length > 0 ? TRIPS[1].place : "Default Title"}
          detail={TRIPS.length > 0 ? TRIPS[1].details : "Default Title"}
        />
      </div>
    </section>
  );
};

export default About;
