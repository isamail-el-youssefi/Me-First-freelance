"use client";

import React from "react";
import { allPackages } from "@/constant";
import TripPackages from "./TripPackages";
import { useTranslation } from "react-i18next";

interface SimilarSectionProps {
  tripId: string;
}

const SimilarSection: React.FC<SimilarSectionProps> = ({ tripId }) => {
  const { t } = useTranslation();

  return (
    <section className="max-container padding-container  pt-16 pb-28">
      <div className="mt-20">
        <h2 className="text-2xl font-semibold text-center text-amber-900 mb-8">
          {t("similarSection.title")}
        </h2>

        {/* Desktop grid / Mobile horizontal scroll */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allPackages
            .filter((trip) => trip.id.toString() !== tripId)
            .map((trip) => (
              <TripPackages
                key={trip.id}
                imageSrc={trip.imageSrc}
                imageAlt={trip.imageAlt}
                heading={trip.heading}
                text={trip.text}
                width={trip.width}
                height={trip.height}
                btnTitle={t("similarSection.moreDetails")}
                link={trip.link}
                duration={trip.duration}
                price={trip.price}
                compact={true}
              />
            ))}
        </div>

        {/* Mobile horizontal scroll */}
        <div className="flex md:hidden gap-4 overflow-x-auto pb-4 -mx-4 px-4">
          {allPackages
            .filter((trip) => trip.id.toString() !== tripId)
            .map((trip) => (
              <div className="min-w-[80%] max-w-xs flex-shrink-0" key={trip.id}>
                <TripPackages
                  imageSrc={trip.imageSrc}
                  imageAlt={trip.imageAlt}
                  heading={trip.heading}
                  text={trip.text}
                  width={trip.width}
                  height={trip.height}
                  btnTitle={t("similarSection.moreDetails")}
                  link={trip.link}
                  duration={trip.duration}
                  price={trip.price}
                  compact={true}
                />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default SimilarSection;
