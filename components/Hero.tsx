"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative h-[100vh] w-full z-10 pb-12">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 object-cover w-full h-full"
      >
        <source src="/herovideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className=" flex flex-col justify-center items-center padding-container relative top-[42%]  z-10">
        <span className="bold-48 sm:bold-64 text-white capitalize px-5 sm:px-20 text-center ">
          {t("hero-title")}
        </span>

        <Link href={"/trips"}>
          <div className=" mt-8">
            <div
              className="flexCenter gap-2 rounded-full  bg-white hover:bg-amber-900  hover:text-white px-8 py-3.5  bold-16  transition-all ease-in-out duration-500 "
              /* className= "flexCenter gap-2 border-2 rounded-full border-amber-900 hover:border-amber-950 bg-amber-900 px-8 py-3 text-white transition-all hover:bg-amber-950 "  */
            >
              <div className="whitespace-nowrap cursor-pointer text-sm">
                {t("view-tours")}{" "}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
