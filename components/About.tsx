import Image from "next/image";
import React from "react";
import { ABOUT } from "@/constant";

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
        <div className="flex flex-1 flex-col justify-center items-center text-wrap xl:items-start ">
          <h1 className="bold-22 md:bold-28 capitalize pb-4 text-amber-900">
            Erg Chegaga, m'hamid el ghizlane
          </h1>
          <p className="text-amber-950 text-lg tracking-tight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, illum temporibus aliquid distinctio eligendi nostrum
            porro molestiae ea, necessitatibus, Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Consectetur error corrupti ex aperiam
            doloribus error corrupti ex aperiam doloribus,Perferendis, illum
            temporibus aliquid distinctio eligendi nostrum porro molestiae ea,
            necessitatibus, Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Consectetur
          </p>
        </div>
        {/* RIGHT */}
        <div className="flex flex-2 xl:flex-2 gap-4 lg:gap-4">
          <div>
            <Image
              src="/about1.jpg"
              alt="about"
              height={444}
              width={333}
              className="w-auto rounded-lg border border-gray-10 mt-10 "
            />
          </div>
          <div>
            <Image
              src="/about2.jpg"
              alt="about"
              height={444}
              width={333}
              className="w-auto rounded-lg border border-gray-10 mb-10 "
            />
          </div>
        </div>
      </div>
      {/* SECOND CONTAINER */}
      <div className="flex flex-col-reverse gap-8 lg:flex-row">
        {/* LEFT */}
        <div className="flex flex-2 xl:flex-2 gap-4 lg:gap-4">
          <div>
            <Image
              src="/about1.jpg"
              alt="about"
              height={444}
              width={333}
              className="w-auto rounded-lg border border-gray-10 mb-10 "
            />
          </div>
          <div>
            <Image
              src="/about2.jpg"
              alt="about"
              height={444}
              width={333}
              className="w-auto rounded-lg border border-gray-10 mt-10 "
            />
          </div>
        </div>
        {/* RIGHT */}
        <div className="flex flex-1 flex-col justify-center items-center text-wrap xl:items-start ">
          <h1 className="bold-22 md:bold-28 capitalize pb-4 text-amber-900">
            Erg Chegaga, m'hamid el ghizlane
          </h1>
          <p className="text-amber-950 text-lg tracking-tight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, illum temporibus aliquid distinctio eligendi nostrum
            porro molestiae ea, necessitatibus, Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Consectetur error corrupti ex aperiam
            doloribus error corrupti ex aperiam doloribus,Perferendis, illum
            temporibus aliquid distinctio eligendi nostrum porro molestiae ea,
            necessitatibus, Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Consectetur
          </p>
        </div>
      </div>
    </section>
  );
};

type aboutItem = {
  title: string;
  icon: string;
};

const AboutItem = ({ icon, title }: aboutItem) => {
  return (
    <div className="w-1/2 flex gap-2 mb-4">
      <Image src={icon} alt="icon" height={20} width={20} />
      <p className="regular-14">{title}</p>
    </div>
  );
};

export default About;
