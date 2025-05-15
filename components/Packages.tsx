"use client";

import TripPackages from "./TripPackages";
import { useTranslation } from "react-i18next";
import { TITLES } from "@/constant";
import AnimatedSection from "./AnimatedSection";

const Packages = () => {
  const { t } = useTranslation();

  return (
    <section className="max-container padding-container py-10">
      <AnimatedSection>
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="md:text-4xl text-3xl font-semibold uppercase pb-8 text-amber-900">
            {t(TITLES.Popular)}
          </h1>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 content-between gap-9 ">
          {/* Desert Adventure */}
          <TripPackages
            imageSrc="/test1.jpg"
            imageAlt="sahara desert"
            heading="Desert Adventure"
            text="Visit the UNESCO World Heritage site of Ait Ben Haddou and explore Morocco's rich history on this 3-day tour. See famous movie locations, visit ancient kasbahs, and travel through stunning mountain scenery."
            width={1920}
            height={1280}
            btnTitle={t("moreDetails")}
            link="/trips/1"
            duration="3 day trip"
            compact={true}
          />

          {/* Camel Ride */}
          <TripPackages
            imageSrc="/test2.jpg"
            imageAlt="camel caravan"
            heading="Camel Ride"
            text="Visit the UNESCO World Heritage site of Ait Ben Haddou and explore Morocco's rich history on this 3-day tour. See famous movie locations, visit ancient kasbahs, and travel through stunning mountain scenery."
            width={500}
            height={300}
            btnTitle={t("moreDetails")}
            link="/trips/2"
            duration="1 day trip"
            compact={true}
          />

          {/* Historical Journey */}
          <TripPackages
            imageSrc="/oasis2.jpg"
            imageAlt="kasbah"
            heading="Historical Journey"
            text="Visit the UNESCO World Heritage site of Ait Ben Haddou and explore Morocco's rich history on this 3-day tour. See famous movie locations, visit ancient kasbahs, and travel through stunning mountain scenery."
            width={1920}
            height={1280}
            btnTitle={t("moreDetails")}
            link="/trips/3"
            duration="3 day trip"
            compact={true}
          />
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Packages;
