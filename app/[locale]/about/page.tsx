import Image from "next/image";
import React from "react";
import TripData from "../../components/DestinationData";
import { TRIPS } from "@/constant";

const page = () => {
  return (
    <section className="max-container padding-container lg:pt-40 pt-36">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="bold-44  pb-12 text-amber-900">About Me</h1>
      </div>
      <div className="flex flex-col gap-8 xl:flex-row sm:pb-3 xl:mb-40">
        {/* LEFT */}

        <TripData
          title={TRIPS.length > 0 ? TRIPS[3].place : "Default Title"}
          detail={TRIPS.length > 0 ? TRIPS[3].details : "Default Title"}
        />

        {/* RIGHT */}
        <div className="flex  flex-2 md:flex-1 gap-3">
          <div>
            <Image
              src="/about2.jpg"
              alt="about"
              height={1500}
              width={1000}
              className="w-auto  rounded-lg border  hover:border-amber-800 mt-8 hover:scale-105  transition-all ease-in-out duration-300 cursor-pointer "
            />
          </div>
          <div>
            <Image
              src="/about22.jpg"
              alt="about"
              height={1500}
              width={1000}
              className="w-auto rounded-lg border hover:border-amber-800 mb-8 hover:scale-105  transition-all ease-in-out duration-300 cursor-pointer "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
