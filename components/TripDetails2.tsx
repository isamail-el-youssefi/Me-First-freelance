"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TRIPDAY } from "@/constant";
import { useTranslation } from "react-i18next";

// Add this type for the day images
interface DayImages {
  day1: string[];
  day2: string[];
  day3: string[];
  [key: string]: string[]; // Index signature for any additional days
}

interface PageProps {
  Heading: string;
  days: number;
  map: string;
  // Still keep these for backward compatibility
  carousel1: string;
  carousel2: string;
  carousel3: string;
  // Optional day images object that can be passed from the parent
  dayImages?: DayImages;
}

const Page: React.FC<PageProps> = (props) => {
  const { t } = useTranslation();

  // Get the trip data for the current package
  const tripData = TRIPDAY[props.days];

  // Track the active day to show the right images
  const [activeDay, setActiveDay] = useState("day1");

  // State for showing the image change notification
  const [showNotification, setShowNotification] = useState(false);

  // Default images if no day-specific images are provided
  const defaultDayImages: DayImages = {
    day1: [props.carousel1, props.carousel2, props.carousel3],
    day2: [props.carousel1, props.carousel2, props.carousel3],
    day3: [props.carousel1, props.carousel2, props.carousel3],
  };

  // Use provided day images or fall back to default
  const dayImages = props.dayImages || defaultDayImages;

  // Get the current day's images
  const currentDayImages = dayImages[activeDay] || dayImages.day1;

  // Handle tab change to update the active day
  const handleDayChange = (value: string) => {
    if (activeDay !== value) {
      setActiveDay(value);
      setShowNotification(true);
    }
  };

  // Hide notification after 3 seconds
  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showNotification]);

  return (
    <section className="max-container padding-container lg:pt-40 pt-36 pb-28">
      {/* HEADING */}
      <div className="flex flex-col justify-center items-center text-center ">
        <h1 className="lg:bold-44 bold-28 pb-2 text-amber-900">
          {props.Heading}
        </h1>
      </div>
      <div className="flex flex-col gap-10 lg:gap-28 lg:flex-row pt-6">
        {/* LEFT */}
        <div className="flex-1">
          {/* MAIN TABS */}
          <Tabs defaultValue="tour">
            <TabsList className="bg-amber-100 flex justify-evenly py-7 rounded-full">
              <TabsTrigger
                value="tour"
                className="rounded-full text-amber-950 text-md py-2 px-4"
              >
                Tour
              </TabsTrigger>
              <TabsTrigger
                value="details"
                className="rounded-full text-amber-950 text-md py-2 px-4"
              >
                Details
              </TabsTrigger>
              <TabsTrigger
                value="map"
                className="rounded-full text-amber-950 text-md py-2 px-4"
              >
                Tour in map
              </TabsTrigger>
            </TabsList>

            {/* TOUR TAB CONTENT */}
            <TabsContent value="tour" className="pt-4">
              {/* NESTED TABS FOR DAYS - Using a separate Tabs component */}
              <Tabs defaultValue="day1" onValueChange={handleDayChange}>
                <TabsList className="bg-amber-50 flex justify-evenly py-4 rounded-full mb-6">
                  {tripData.map((trip, index) => (
                    <TabsTrigger
                      key={`day-tab-${index}`}
                      value={`day${index + 1}`}
                      className="rounded-full text-amber-950 text-md py-2 px-4"
                    >
                      {t(trip.d)}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {/* DAY CONTENT - Each day as a separate TabsContent */}
                {tripData.map((trip, index) => (
                  <TabsContent
                    key={`day-content-${index}`}
                    value={`day${index + 1}`}
                  >
                    <h1 className="bold-18 md:bold-20 capitalize pl-2 pb-1 text-amber-900">
                      {t(trip.d)}
                    </h1>
                    <p className="text-amber-950 text-lg tracking-tight leading-7 xl:leading-8 text-justify pb-3">
                      {t(trip.details)}
                    </p>
                  </TabsContent>
                ))}
              </Tabs>
            </TabsContent>

            {/* DETAILS TAB CONTENT */}
            <TabsContent value="details" className="pt-4 w-full">
              <div className="bg-amber-50 rounded-xl p-6">
                <h2 className="bold-20 text-amber-900 mb-4">Trip Highlights</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li className="text-amber-950">
                    Authentic local experiences
                  </li>
                  <li className="text-amber-950">Professional guides</li>
                  <li className="text-amber-950">Traditional meals included</li>
                  <li className="text-amber-950">Comfortable transportation</li>
                  <li className="text-amber-950">Photography opportunities</li>
                </ul>

                <h2 className="bold-20 text-amber-900 mt-6 mb-4">
                  What to Bring
                </h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li className="text-amber-950">Comfortable walking shoes</li>
                  <li className="text-amber-950">
                    Sun protection (hat, sunglasses, sunscreen)
                  </li>
                  <li className="text-amber-950">Light, breathable clothing</li>
                  <li className="text-amber-950">Camera</li>
                  <li className="text-amber-950">Water bottle</li>
                </ul>
              </div>
            </TabsContent>

            {/* MAP TAB CONTENT */}
            <TabsContent value="map" className="pt-4">
              <iframe
                src={props.map}
                className="w-full h-96 rounded-2xl"
              ></iframe>
            </TabsContent>
          </Tabs>
          {/* Day indicator title */}
          <div className="flex items-center mb-4">
            {/* Permanent indicator below carousel */}

            {/* Image change notification */}
            {showNotification && (
              <div className="ml-4 px-3 bg-amber-100 text-amber-900 rounded-full text-sm animate-pulse">
                Images updated for Day {activeDay.replace("day", "")}
              </div>
            )}
          </div>
        </div>

        {/* RIGHT - CAROUSEL WITH DAY-SPECIFIC IMAGES */}
        <div className="flex-1 relative">
          {/* Permanent indicator below carousel */}
          <div className="mb-4 flex items-center justify-center">
            <Carousel>
              <CarouselContent>
                {currentDayImages.map((imageSrc, index) => (
                  <CarouselItem key={`image-${activeDay}-${index}`}>
                    <Image
                      src={imageSrc}
                      alt={`Day ${activeDay.replace("day", "")} - Image ${
                        index + 1
                      }`}
                      height={400}
                      width={400}
                      style={{ width: "100%", height: "100%" }}
                      className="rounded-2xl"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
