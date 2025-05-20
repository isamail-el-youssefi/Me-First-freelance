"use client";

import TripPackages from "./TripPackages";
import { useTranslation } from "react-i18next";
import { allPackages, TITLES } from "@/constant";
import AnimatedSection from "./AnimatedSection";
import { ArrowRight } from "lucide-react";



const Packages = ({ limit }: { limit?: number }) => {
  const { t } = useTranslation();
  const displayedPackages = limit ? allPackages.slice(0, limit) : allPackages;

  return (
    <section className="max-container padding-container">
      <AnimatedSection>
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="md:text-4xl text-2xl font-semibold uppercase pb-12 text-amber-900">
            {t(TITLES.Popular)}
          </h1>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 content-between gap-9">
          {displayedPackages.map((pkg, index) => (
            <TripPackages
              key={index}
              imageSrc={pkg.imageSrc}
              imageAlt={pkg.imageAlt}
              heading={pkg.heading}
              text={pkg.text}
              width={pkg.width}
              height={pkg.height}
              btnTitle={t("moreDetails")}
              link={pkg.link}
              duration={pkg.duration}
              compact={true}
            />
          ))}
        </div>
      </AnimatedSection>

      {limit && (
        <div className="text-center mt-10">
          <a
            href="/trips"
            className="inline-block text-amber-800 font-medium text-lg hover:text-amber-700"
          >
            {t("viewAllTrips") || "View All Trips"}
          </a>
        </div>
      )}
    </section>
  );
};

export default Packages;
