"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Hero = () => {
  const { t } = useTranslation();
  const headline = t("hero-title");
  const words = headline.split(" "); // Splitting the sentence into words

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
      <div className=" flex flex-col justify-center  items-center padding-container relative top-[42%]  z-10">
        {/*         <span className="bold-48 sm:bold-64 text-white capitalize px-5 sm:px-20 text-center ">
          {t("hero-title")}
        </span> */}

        <div className="flex flex-wrap justify-center items-center gap-x-2 sm:gap-x-3 px-5 sm:px-20 text-center max-w-6xl">
          {words.map((word, index) => (
            <motion.span
              initial={{ filter: "blur(10px)", opacity: 0, y: 12 }}
              animate={{ filter: "blur(0)", opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.23 * index }}
              key={index}
              className="text-2xl font-bold sm:text-[52px] text-white capitalize inline-block leading-snug"
            >
              {word}
            </motion.span>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, filter: "blur(15px)"  }}
          animate={{ opacity: 1, filter: "blur(0)"  }}
          transition={{ duration: 0.7, delay: 1.4 }}
          className="mt-8"
        >
          <Link href={"/trips"}>
            <div className="flexCenter gap-2 rounded-full  bg-transparent hover:bg-amber-900 hover:border-amber-900 focus:bg-amber-900 focus:border-amber-900 text-white border-[2px] md:border-[2.3]  border-white md:px-8 px-4 md:py-3.5 py-3   bold-16  transition-all ease-in-out duration-500 ">
              <div className="whitespace-nowrap cursor-pointer text-md">
                {t("view-tours")}{" "}
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
