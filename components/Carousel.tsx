"use client";
import React, { useState, useEffect } from "react";
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
import { ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

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

  // Initialize Fancybox
  useEffect(() => {
    Fancybox.bind("[data-fancybox='gallery']", {
      Toolbar: {
        display: {
          left: ["infobar"],
          middle: ["toggleZoom"],
          right: ["slideshow", "fullscreen", "thumbs", "close"],
        },
      },
      showClass: "fancybox-fadeIn",
      hideClass: "fancybox-fadeOut",
      on: {
        ready: (fancybox) => {
          if (window.innerWidth < 768) {
            fancybox.container.style.padding = "20px";
          }
          // Add Tailwind classes to the image
          const img = fancybox.container.querySelector('.fancybox__content img');
          if (img) {
            img.classList.add('rounded-xl', 'overflow-hidden');
          }
        },
        reveal: (fancybox) => {
          // Also apply on each slide reveal
          const img = fancybox.container.querySelector('.fancybox__content img');
          if (img) {
            img.classList.add('rounded-xl', 'overflow-hidden');
          }
        },
      },
    });

    // Cleanup function
    return () => {
      Fancybox.unbind("[data-fancybox='gallery']");
      Fancybox.close();
    };
  }, []);

  return (
    <div className="max-container padding-container pb-10 pt-16">
      <AnimatedSection>
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="md:text-3xl text-2xl font-semibold uppercase pb-10 text-amber-900">
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
                <a
                  href={src}
                  data-fancybox="gallery"
                  data-caption={`Happy Traveler ${index + 1}`}
                  className="block cursor-pointer"
                >
                  <Image
                    src={src}
                    alt={`happy-traveler-${index}`}
                    height={400}
                    width={400}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    className="rounded-2xl hover:opacity-90 transition-opacity"
                  />
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <div className="w-full flex justify-center items-center gap-2 mb-2 text-amber-900 text-sm font-medium select-none pointer-events-none animate-pulse pt-10 md:hidden">
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
    </div>
  );
};

export default CarouselMain;