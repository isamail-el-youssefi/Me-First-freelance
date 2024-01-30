import Image from "next/image";
import React from "react";
import TripData from "../../components/DestinationData";
import { TRIPS } from "@/constant";

const page = () => {
  return (
    <section className="max-container padding-container lg:pt-40 pt-36">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="bold-44  pb-5 text-amber-900">About Us</h1>
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
    </section>
  );
};

export default page;
