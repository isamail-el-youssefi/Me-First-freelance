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
    "/7.jpg",
    "/8.jpg",
    "/9.jpg",
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
          <h1 className="md:text-4xl text-3xl font-semibold uppercase pb-8 text-amber-900">
            {t(TITLES.Happy)}
          </h1>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <Carousel
          opts={{ loop: true }}
          plugins={[
            Autoplay({
              delay: 2700,
              stopOnInteraction: true,
            }),
          ]}
        >
          <CarouselContent>
            {imageSources.map((src, index) => (
              <CarouselItem key={index} className="lg:basis-1/3 basis-1/2">
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
