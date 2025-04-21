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
import AnimatedSectionText from "./AnimatedSectionText";
import { motion, AnimatePresence } from "framer-motion";
import BookingCalendar from "./BookingCalendar";

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
  price: string;
  duration: string;
}

const Page: React.FC<PageProps> = (props) => {
  const { t } = useTranslation();

  // Get the trip data for the current package
  const tripData = TRIPDAY[props.days];

  // Track the active day to show the right images
  const [activeDay, setActiveDay] = useState("day1");

  // State for showing the image change notification
  const [showNotification, setShowNotification] = useState(false);

  const [calendarOpen, setCalendarOpen] = useState(false);

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
      <div className="flex flex-col justify-center items-center text-center md:pb-6 pb-4 pt-6">
        <h1 className=" text-2xl md:text-3xl pb-2 text-amber-900">
          {props.Heading}
        </h1>
      </div>
      <div className="flex flex-col gap-10 lg:gap-28 lg:flex-row pt-6 ">
        {/* LEFT */}
        <div className="flex-1 ">
          {/* MAIN TABS */}
          <Tabs defaultValue="tour">
            <TabsList className="bg-amber-50 flex justify-evenly py-7 rounded-xl">
              <TabsTrigger
                value="tour"
                className="rounded-full text-amber-950 text-md  px-4 "
              >
                Tour
              </TabsTrigger>
              <TabsTrigger
                value="details"
                className="rounded-full text-amber-950 text-md  px-4"
              >
                Details
              </TabsTrigger>
              <TabsTrigger
                value="prix"
                className="rounded-full text-amber-950 text-md  px-4"
              >
                Price
              </TabsTrigger>
              <TabsTrigger
                value="map"
                className="rounded-full text-amber-950 text-md  px-4"
              >
                Tour in map
              </TabsTrigger>
            </TabsList>

            {/* TOUR TAB CONTENT */}
            <TabsContent value="tour" className="pt-4">
              <div className="bg-amber-50 rounded-xl p-3 md:min-h-[680px] min-h-[500px]">
                {/* NESTED TABS FOR DAYS - Using a separate Tabs component */}
                <Tabs defaultValue="day1" onValueChange={handleDayChange}>
                  <TabsList className="bg-amber-50 flex flex-wrap sm:justify-evenly gap-2 sm:gap-0 pt-6 rounded-full mb-6 min-h-[80px]">
                    {tripData.map((trip, index) => (
                      <TabsTrigger
                        key={`day-tab-${index}`}
                        value={`day${index + 1}`}
                        className="rounded-full text-amber-900 text-sm py-2 px-4 border-2 border-amber-900 bg-amber-50"
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
                      <AnimatedSectionText triggerKey={activeDay}>
                        <div className="bg-amber-50 rounded-xl p-6">
                          <h1 className="capitalize pb-3 text-lg text-amber-800">
                            {t(trip.itinerary)}
                          </h1>
                          <p className="text-amber-950 text-lg  leading-7 xl:leading-9 text-justify pb-3">
                            {t(trip.details)}
                          </p>{" "}
                        </div>
                      </AnimatedSectionText>
                    </TabsContent>
                  ))}
                </Tabs>
              </div>
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

            {/* PRICE AND RESERVATION TAB CONTENT */}
            {/* PRICE AND RESERVATION TAB CONTENT */}
            <TabsContent value="prix" className="pt-4">
              <div className="bg-amber-50 rounded-xl">
                <table className="min-w-full bg-amber-50 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="text-left bg-amber-100 text-amber-900 uppercase text-sm">
                      <th className="px-6 py-3">Durée</th>
                      <th className="px-6 py-3">Nombre de Personnes</th>
                      <th className="px-6 py-3">Prix</th>
                      <th className="px-6 py-3">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {props.pricing.map((tier, index) => (
                      <tr
                        key={`pricing-tier-${index}`}
                        className="border-t border-amber-200"
                      >
                        {index === 0 && (
                          <td
                            className="px-6 py-4"
                            rowSpan={props.pricing.length}
                          >
                            {props.duration}
                          </td>
                        )}
                        <td className="px-6 py-4">{tier.persons}</td>
                        <td className="px-6 py-4">{tier.price}</td>
                        <td className="px-6 py-4">
                          <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="https://wa.me/212707992405"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-2 px-4 rounded-full transition mr-2"
                          >
                            Réserver
                          </motion.a>

                          {/*
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => setCalendarOpen(true)}
                              className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded-full transition mt-2 sm:mt-0"
                            >
                              Choisir une date
                            </motion.button>
                          */}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Add the BookingCalendar component outside the table but still within the TabsContent */}
              <BookingCalendar
                open={calendarOpen}
                onOpenChange={setCalendarOpen}
                tripId={props.days.toString()}
                tripName={props.Heading}
              />
            </TabsContent>

            {/* MAP TAB CONTENT */}
            <TabsContent value="map" className="pt-4">
              {/* Map container with enhanced styling */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                {/* Map iframe */}
                <iframe
                  src={props.map}
                  className="w-full rounded-2xl"
                  loading="lazy"
                  width="600"
                  height="600"
                  style={{ border: "13px solid white " }}
                ></iframe>
              </div>
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
            <motion.div
              key={activeDay} // Ensures re-render + animation on day change
              initial={{ opacity: 0, translateY: 0 }}
              animate={{ opacity: 1, translateY: 30 }}
              transition={{ duration: 1.1, ease: "easeInOut" }}
            >
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
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
