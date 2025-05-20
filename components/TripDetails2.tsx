"use client";
import Image from "next/image";
import React, { useState, useEffect, useCallback } from "react";
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
import {
  User,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import ReviewList from "./ReviewList";
import ReviewModal from "./ReviewModal";
import SimilarSection from "./SimilarSection";
import ReviewSection from "./ReviewSection";

// Add this type for the day images
interface DayImages {
  day1: string[];
  day2: string[];
  day3: string[];
  [key: string]: string[]; // Index signature for any additional days
}

// Define the Review interface
interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  tripId: string;
  createdAt: string;
  // Add any other fields that might be in your Review type
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
  // Change pricing from string to an array of pricing tiers
  pricing: {
    persons: number;
    price: string;
  }[];
  keyStops: string[];
  tripId: string;
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

  // State to track character limit based on screen size
  const [charLimit, setCharLimit] = useState(300); // Default to mobile size

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

  // State to track which days have expanded content
  const [expandedDays, setExpandedDays] = useState<{ [key: string]: boolean }>(
    {}
  );

  // Function to toggle expanded state for a specific day
  const toggleReadMore = (dayKey: string) => {
    setExpandedDays((prev) => ({
      ...prev,
      [dayKey]: !prev[dayKey],
    }));
  };

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

  // Effect to update character limit based on screen size
  useEffect(() => {
    // Function to update character limit based on window width
    const updateCharLimit = () => {
      if (window.innerWidth >= 768) {
        // Typical breakpoint for tablets/desktops
        setCharLimit(530); // Larger screens
      } else {
        setCharLimit(300); // Smartphones
      }
    };

    // Set initial value
    updateCharLimit();

    // Add event listener for window resize
    window.addEventListener("resize", updateCharLimit);

    // Cleanup
    return () => window.removeEventListener("resize", updateCharLimit);
  }, []);

  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  const [reviews, setReviews] = useState<Review[]>([]);

  const [isLoadingReviews, setIsLoadingReviews] = useState(false);

  // Add this function to fetch reviews
  const fetchReviews = useCallback(async () => {
    try {
      setIsLoadingReviews(true);
      const response = await fetch(`/api/reviews?tripId=${props.tripId}`);
      if (response.ok) {
        const data = await response.json();
        setReviews(data.reviews);
      }
    } catch (error) {
      console.error("Error fetching reviews:", error);
    } finally {
      setIsLoadingReviews(false);
    }
  }, [props.tripId]);

  useEffect(() => {
    fetchReviews();
  }, [fetchReviews]);

  // Add this function to handle when a new review is added
  const handleReviewAdded = () => {
    fetchReviews();
  };

  return (
    <section className="max-container padding-container lg:pt-40 pt-36 pb-28">
      {/* HEADING */}
      <div className="flex flex-col justify-center items-center text-center md:pb-6 pb-4 pt-6">
        <h1 className=" text-2xl md:text-3xl pb-2 text-amber-900">
          {props.Heading}
        </h1>
      </div>
      <div className="flex flex-col  lg:gap-28 lg:flex-row pt-6  ">
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
                value="review"
                className="rounded-full text-amber-950 text-md  px-4"
              >
                Reviews
              </TabsTrigger>
              <TabsTrigger
                value="map"
                className="rounded-full text-amber-950 text-md  px-4"
              >
                Map
              </TabsTrigger>
            </TabsList>
            {/* TOUR TAB CONTENT */}
            <TabsContent value="tour" className="pt-4">
              <div className="bg-amber-50 rounded-xl p-3 md:min-h-[630px] min-h-[500px]">
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

                  {/* DAY CONTENT - Each day as a separate TabsContent with Read More/Less */}
                  {tripData.map((trip, index) => {
                    const dayKey = `day${index + 1}`;
                    const isExpanded = expandedDays[dayKey] || false;

                    const details = t(trip.details);
                    const hasLongContent =
                      details && details.length > charLimit;

                    return (
                      <TabsContent key={`day-content-${index}`} value={dayKey}>
                        <AnimatedSectionText triggerKey={activeDay}>
                          <div className="bg-amber-50 rounded-xl p-6">
                            <h1 className="capitalize pb-3 text-lg text-amber-800">
                              {t(trip.itinerary)}
                            </h1>
                            <div className="text-amber-950 text-lg leading-7 xl:leading-9 text-justify">
                              {hasLongContent && !isExpanded ? (
                                <>
                                  {details.substring(0, charLimit)}
                                  <span className="text-amber-500">...</span>
                                </>
                              ) : (
                                details
                              )}
                            </div>

                            {hasLongContent && (
                              <div className="flex justify-center mt-4">
                                <button
                                  onClick={() => toggleReadMore(dayKey)}
                                  className="flex items-center gap-2 bg-amber-100 hover:bg-amber-200 text-amber-900 rounded-full px-4 py-2 transition-colors duration-300"
                                >
                                  {isExpanded ? (
                                    <>
                                      Read Less <ChevronUp size={16} />
                                    </>
                                  ) : (
                                    <>
                                      Read More <ChevronDown size={16} />
                                    </>
                                  )}
                                </button>
                              </div>
                            )}
                          </div>
                        </AnimatedSectionText>
                      </TabsContent>
                    );
                  })}
                </Tabs>
              </div>
            </TabsContent>
            {/* DETAILS TAB CONTENT */}
            <TabsContent value="details" className="pt-4 w-full ">
              <div className="bg-amber-50 rounded-xl p-6 md:min-h-[630px] min-h-[500px]">
                <h2 className="bold-20 text-amber-900 mb-4">
                  Key stops of the trip
                </h2>
                <ul className="list-disc pl-5 space-y-2">
                  {props.keyStops ? (
                    // If keyStops are provided, use them
                    props.keyStops.map((stop, index) => (
                      <li key={`key-stop-${index}`} className="text-amber-950">
                        {stop}
                      </li>
                    ))
                  ) : (
                    // Fallback static content if no keyStops provided
                    <>
                      <li className="text-amber-950">
                        Visite des greniers de la falaise dAoujgal
                      </li>
                      <li className="text-amber-950">
                        Exploration de la grotte Akhiam
                      </li>
                      <li className="text-amber-950">
                        Ascension guidée du sommet de Bab Nouayad
                      </li>
                      <li className="text-amber-950">
                        Découverte des lacs Isli & Tislit
                      </li>
                      <li className="text-amber-950">Oasis fint</li>
                    </>
                  )}
                </ul>

                <h2 className="bold-20 text-amber-900 mb-4 mt-6">
                  Trip Highlights
                </h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li className="text-amber-950">
                    Authentic local experiences
                  </li>
                  <li className="text-amber-950">Professional guides</li>
                  <li className="text-amber-950">Traditional meals included</li>
                  <li className="text-amber-950">Comfortable transportation</li>
                  <li className="text-amber-950">Photography opportunities</li>
                </ul>
              </div>
            </TabsContent>
            {/* PRICE AND RESERVATION TAB CONTENT */}

            <TabsContent value="prix" className="pt-4">
              <div className="bg-amber-50 rounded-xl w-full md:min-h-[630px] min-h-[500px]">
                <table className="min-w-full bg-amber-50 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="text-center bg-amber-100 text-amber-900 uppercase text-sm">
                      <th className=" py-3 font-semibold">Personnes</th>
                      <th className=" py-3 font-semibold">Prix</th>
                      <th className=" py-3 font-semibold">Action</th>
                    </tr>
                  </thead>
                  <tbody className="text-amber-800 font-medium text-center">
                    {props.pricing.map((tier, index) => (
                      <tr
                        key={`pricing-tier-${index}`}
                        className="border-t border-amber-200"
                      >
                        <td className="px-5 md:px-10 py-4">
                          {/* Display person icons based on the number */}
                          <div className="flex items-center">
                            {/* Add "+" sign for the last tier (indicating 5+ people) */}

                            {Array.from({
                              length: Number(tier.persons) || 1,
                            }).map((_, i) => (
                              <User
                                key={i}
                                className="text-amber-800 mr-1"
                                size={20}
                              />
                            ))}
                            {index === props.pricing.length - 1 && (
                              <span className="text-amber-800 font-medium mr-1">
                                +
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="px-2 md:px-6 py-4">{tier.price}</td>
                        <td className="px-5 md:px-6 py-4">
                          <a
                            href="https://wa.me/212707992405"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-amber-50  border-[1px] border-amber-900 hover:bg-amber-900 hover:text-amber-50 duration-300 text-amber-900 font-semibold hover:font-medium py-2 px-4 rounded-full transition mr-1"
                          >
                            Réserver
                          </a>

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

              <BookingCalendar
                open={calendarOpen}
                onOpenChange={setCalendarOpen}
                tripId={props.days.toString()}
                tripName={props.Heading}
              />
            </TabsContent>

            {/* REVIEW TAB */}
            <TabsContent value="review" className="pt-4">
              <div className="bg-amber-50 rounded-xl md:min-h-[630px] min-h-[350px]">
                <div className="p-4 flex justify-between items-center border-b border-amber-200">
                  <h2 className="text-xl font-semibold text-amber-900">
                    Customer Reviews
                  </h2>
                  <button
                    onClick={() => setReviewModalOpen(true)}
                    className="bg-amber-50  border-[1px] border-amber-900 hover:bg-amber-900 hover:text-amber-50 duration-300 text-amber-900 font-semibold hover:font-medium py-2 px-4 rounded-full transition mr-1"
                  >
                    Write a Review
                  </button>
                </div>
                <ReviewList reviews={reviews} isLoading={isLoadingReviews} />
              </div>
            </TabsContent>

            {/* MAP TAB CONTENT */}
            <TabsContent value="map" className="pt-4">
              {/* Map container with enhanced styling */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg md:min-h-[630px] min-h-[500px]">
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
          {/* Always-visible swipe hint */}

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

        <div className="w-full flex justify-center items-center gap-2 mb-2 text-amber-900 text-sm font-medium select-none pointer-events-none animate-pulse pt-10 md:hidden ">
          <ChevronLeft className="w-4 h-4" />
          Swipe
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            color={"#7b3306"}
            fill={"none"}
            {...props}
          >
            <path
              d="M21.001 4.49905H15.001M21.001 4.49905C21.001 3.79909 19.0067 2.49134 18.501 2M21.001 4.49905C21.001 5.19901 19.0067 6.50675 18.501 6.9981"
              stroke="#7b3306"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M16.8942 21.9884C16.8424 20.0751 16.9713 19.8448 17.1081 19.4191C17.2448 18.9935 18.2011 17.4587 18.5395 16.3621C19.6342 12.8141 18.6139 12.0595 17.2536 11.0534C15.7451 9.93759 12.8997 9.37252 11.4886 9.49486V3.74359C11.4886 2.78063 10.7077 2 9.74439 2C8.78106 2 8.00014 2.78063 8.00014 3.74359V14.0032L5.93997 11.8238C5.30035 11.1303 4.27243 11.06 3.5709 11.6908C2.90609 12.2886 2.80906 13.2953 3.34749 14.009L4.63984 15.722M7.87078 22.0002L7.85125 20.9498C7.89419 19.7185 6.9982 18.9151 5.82962 17.3089C5.74542 17.1931 5.6635 17.0813 5.58372 16.973M5.58372 16.973C5.22966 16.4926 4.91814 16.0832 4.63984 15.722M5.58372 16.973L6.75315 18.5231M5.58372 16.973L4.63984 15.722M4.63984 15.722C4.06847 14.9802 3.63715 14.4412 3.26531 13.9056"
              stroke="#7b3306"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <ChevronRight className="w-4 h-4" />
        </div>
      </div>
      <ReviewModal
        open={reviewModalOpen}
        onOpenChange={setReviewModalOpen}
        tripId={props.tripId}
        tripName={props.Heading}
        onReviewAdded={handleReviewAdded}
      />
      <ReviewSection tripId={props.tripId} tripName={props.Heading} />
      <SimilarSection tripId={props.tripId} />
    </section>
  );
};

export default Page;
