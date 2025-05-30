"use client";

import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";
import DestinationData from "../../../components/DestinationData";
import { TRIPS } from "@/constant";
import { TransitionLink } from "@/components/utils/TransitionLink";
import Link from "next/link";

const Page = () => {
  const { t } = useTranslation();
  return (
    <section className="max-container padding-container lg:pt-40 pt-36 pb-14">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="md:text-4xl text-2xl font-semibold  pb-6 text-amber-900">
          {t("about-title")}
        </h1>
      </div>
      <div className="flex flex-col-reverse gap-8 md:flex-row sm:pb-3 ">
        {/* LEFT */}
        <div className="flex flex-1 flex-col justify-center items-center text-wrap xl:items-start">
          <h1 className="md:text-3xl text-xl font-light capitalize pb-4 text-amber-900 hidden md:block">
            {t("trip4-title")}
          </h1>
          <p className="text-amber-950 text-md lg:text-md  tracking-tight leading-8 xl:leading-9 text-justify ">
            {t("trip4-detail")}
          </p>
        </div>

        {/* RIGHT */}

        <div className="flex flex-2 md:flex-1 gap-3 md:pt-14">
          <div className="md:visible">
            <Image
              src="/about2.jpg"
              alt="about"
              height={1500}
              width={1000}
              className="w-auto rounded-lg border hover:border-amber-800 mt-8 hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer md:visible hidden"
            />
          </div>
          <div>
            <Image
              src="/about22.jpg"
              alt="about"
              height={1500}
              width={1000}
              className="w-auto rounded-lg border hover:border-amber-800 mb-8 hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer"
            />
          </div>
        </div>
        {/* TEXT WITH NAME */}
        <div className="flex flex-col items-center xl:items-start">
          {/* Name — shows above images on mobile */}
          <h2 className="md:text-3xl text-xl font-light capitalize pb-4 text-amber-900 visible md:hidden ">
            {t("trip4-title")}
          </h2>
        </div>
      </div>
      <Link href="/contact">
        <div className="w-40 lg:w-56  pt-7">
          <div className="flexCenter gap-2 border-2 rounded-full border-amber-900 hover:border-amber-950 bg-amber-900 px-1 py-3.5 text-white hover:bold-16 hover:text-amber-950 transition-all hover:bg-white">
            <div className="whitespace-nowrap cursor-pointer text-sm">
              {t("nav-btn")}
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default Page;
