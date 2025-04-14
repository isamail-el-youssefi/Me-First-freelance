'use client';

import Image from "next/image";
import React from "react";
import { useTranslation } from 'react-i18next';
import DestinationData from "../../../components/DestinationData";
import { TRIPS } from "@/constant";

const Page = () => {
  const { t } = useTranslation();
  return (
    <section className="max-container padding-container lg:pt-40 pt-36">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="bold-44 pb-12 text-amber-900">{t('about-title')}</h1>
      </div>
      <div className="flex flex-col gap-8 xl:flex-row sm:pb-3 xl:mb-20">
        {/* LEFT */}
        <DestinationData
          title={TRIPS.length > 0 ? TRIPS[3].place : "trip4-title"}
          detail={TRIPS.length > 0 ? TRIPS[3].details : "trip4-detail"}
        />

        {/* RIGHT */}
        <div className="flex flex-2 md:flex-1 gap-3 md:pt-14">
          <div>
            <Image
              src="/about2.jpg"
              alt="about"
              height={1500}
              width={1000}
              className="w-auto rounded-lg border hover:border-amber-800 mt-8 hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer"
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
      </div>

      {/* TESTIMONIALS PREVIEW */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-amber-900 mb-6">
          What Travelers Say
        </h2>
        <div className="bg-amber-50 p-6 rounded-lg shadow-md italic">
          <p className="text-gray-700 mb-4">
            "Our desert tour with Salah was the highlight of our Morocco trip.
            His knowledge of the region and genuine warmth made this experience
            truly special. The sunset camel ride and overnight camp under the
            stars was magical!"
          </p>
          <p className="text-amber-800 font-semibold">— Maria & John, Spain</p>
        </div>
      </div>
    </section>
  );
};

export default Page;
