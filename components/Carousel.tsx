"use client";
import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useTranslation } from "react-i18next";
import { TITLES } from "@/constant";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react"; // optional icons
import { useEffect } from "react";
import AnimatedSection from "./AnimatedSection";

const CarouselMain = () => {
  const imageSources = [
    "/1.jpg",
    "/2.jpg",
    "/3.jpg",
    "/4.jpg",
    "/5.jpg",
    "/6.jpg",
    "/11-1.jpg",

    "/8.jpg",
    "/9.jpg",
    "/10.jpg",
    "/7.jpg",
  ];

  const { t } = useTranslation();

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const closeModal = () => setSelectedIndex(null);

  const showNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % imageSources.length);
    }
  };

  const showPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        (selectedIndex - 1 + imageSources.length) % imageSources.length
      );
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;

      if (e.key === "ArrowLeft") {
        showPrevious();
      } else if (e.key === "ArrowRight") {
        showNext();
      } else if (e.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (selectedIndex !== null) {
      // Delay to allow CSS transition to trigger
      setTimeout(() => setModalVisible(true), 10);
    } else {
      setModalVisible(false);
    }
  }, [selectedIndex]);

  return (
    <div className="max-container padding-container pb-10 pt-12">
      <AnimatedSection>
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="md:text-4xl text-2xl font-semibold uppercase pb-8 text-amber-900">
            {t(TITLES.Happy)}
          </h1>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <Carousel
          opts={{ loop: true }}
          plugins={[
            Autoplay({
              delay: 6000,
              stopOnInteraction: true,
            }),
          ]}
        >
          <CarouselContent>
            {imageSources.map((src, index) => (
              <CarouselItem key={index} className="lg:basis-1/3 basis-full">
                <Image
                  src={src}
                  alt={`happy-traveler-${index}`}
                  height={400}
                  width={400}
                  style={{ width: "100%", height: "100%", cursor: "pointer" }}
                  className="rounded-2xl"
                  onClick={() => setSelectedIndex(index)}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
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
      </AnimatedSection>

      {/* Modal with navigation */}
      {selectedIndex !== null && (
        <div
          className={`fixed lg:px-0 px-6 inset-0 bg-gray-90 bg-opacity-65 flex items-center justify-center z-50 transition-all duration-500 overflow-auto ${
            modalVisible ? "opacity-100 scale-100" : "opacity-0 scale-100"
          }`}
          onClick={closeModal} // Close when clicking outside
        >
          {/* Previous button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showPrevious();
            }}
            className="absolute invisible lg:visible left-0 lg:left-10 text-white hover:scale-110 transition"
          >
            <ChevronLeft size={40} />
          </button>

          {/* Image */}
          <Image
            src={imageSources[selectedIndex]}
            alt="zoomed"
            width={900}
            height={600}
            className="rounded-2xl lg:max-w-[800px] lg:max-h-[800px] max-h-full max-w-full object-contain"
            onClick={(e) => e.stopPropagation()} // Prevent modal close on image click
          />

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="absolute invisible lg:visible right-0 lg:right-10 text-white hover:scale-110 transition"
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </div>
  );
};

export default CarouselMain;
