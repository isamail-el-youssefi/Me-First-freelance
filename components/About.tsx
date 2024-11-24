import Image from "next/image";
import React from "react";
import { TRIPS } from "@/constant";
import DestinationData from "./DestinationData";

const About = () => {
  return (
    <section>
      <div className="bg-[#faece570]  ">
        <div className=" max-container padding-container flex flex-col justify-center items-center text-center pt-16">
          <h1 className="bold-32 lg:bold-40  uppercase pb-8 text-amber-900">Must-See Places</h1>
{/*           <hr className="text-center w-[10%] border-2 inline-block border-black"/>
 */}        </div>
        <div className=" max-container padding-container flex flex-col gap-8 xl:flex-row pb-12">
          {/* LEFT */}

          <DestinationData
            title={TRIPS.length > 0 ? TRIPS[0].place : "Default Title"}
            detail={TRIPS.length > 0 ? TRIPS[0].details : "Default Title"}
          />

          {/* RIGHT */}
          <div className="  flex flex-1 gap-5">
            <div>
              <Image
                src="/chegaga2.jpg"
                alt="about"
                height={888}
                width={666}
                style={{ width: "100%", height: "87%" }}
                className="w-auto  rounded-lg border hover:border-amber-800 mt-10 hover:scale-105  transition-all ease-in-out duration-300 cursor-pointer "
              />
            </div>
            <div>
              <Image
                src="/chegaga1.jpg"
                alt="about"
                height={888}
                width={666}
                style={{ width: "100%", height: "87%" }}
                className="w-auto  rounded-lg border  hover:border-amber-800 mb-10 hover:scale-105  transition-all ease-in-out duration-300 cursor-pointer "
              />
            </div>
          </div>
        </div>
      </div>

      {/* SECOND CONTAINER */}
      <div className=" max-container padding-container flex flex-col-reverse gap-8 xl:flex-row pb-12 pt-12">
        {/* LEFT */}
        <div className="flex flex-1 gap-5">
          <div>
            <Image
              src="/fint1.jpg"
              alt="about"
              height={888}
              width={666}
              style={{ width: "100%", height: "87%" }}
              className="w-auto  rounded-lg border hover:border-amber-800 mb-10 hover:scale-105  transition-all ease-in-out duration-300 cursor-pointer "
            />
          </div>
          <div>
            <Image
              src="/fint2.jpg"
              alt="about"
              height={888}
              width={666}
              style={{ width: "100%", height: "87%" }}
              className="w-auto  rounded-lg border  hover:border-amber-800 mt-10 hover:scale-105  transition-all ease-in-out duration-300 cursor-pointer "
            />
          </div>
        </div>
        {/* RIGHT */}

        <DestinationData
          title={TRIPS.length > 0 ? TRIPS[1].place : "Default Title"}
          detail={TRIPS.length > 0 ? TRIPS[1].details : "Default Title"}
        />
      </div>
      {/* THIRD CONTAINER */}
      <div className="bg-[#faece570]  py-12">
        <div className="max-container padding-container flex flex-col gap-8 xl:flex-row ">
          {/* LEFT */}
          <DestinationData
            title={TRIPS.length > 0 ? TRIPS[2].place : "Default Title"}
            detail={TRIPS.length > 0 ? TRIPS[2].details : "Default Title"}
          />

          {/* RIGHT */}
          <div className="flex flex-1 gap-5">
            <div>
              <Image
                src="/ait1.jpg"
                alt="about"
                height={888}
                width={666}
                style={{ width: "100%", height: "87%" }}
                className="w-auto  rounded-lg border hover:border-amber-800 mt-10 hover:scale-105  transition-all ease-in-out duration-300 cursor-pointer "
              />
            </div>
            <div>
              <Image
                src="/ait2.jpg"
                alt="about"
                height={888}
                width={666}
                style={{ width: "100%", height: "87%" }}
                className="w-auto  rounded-lg border  hover:border-amber-800 mb-10 hover:scale-105  transition-all ease-in-out duration-300 cursor-pointer "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
