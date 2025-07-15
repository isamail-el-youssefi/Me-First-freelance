
"use client";

import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi
} from "@/components/ui/carousel";
import { testimonials } from "@/constant";

export default function TestimonialsCarousel() {
  const { t } = useTranslation("Homepage");
  // State to track the current slide and expanded testimonials
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [expandedIds, setExpandedIds] = useState<number[]>([]);

  // Toggle expanded state for a testimonial
  const toggleExpand = (id: number) => {
    setExpandedIds(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  // When the carousel API is available, set up a listener for slide changes
  useEffect(() => {
    if (!api) {
      return;
    }

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };
    
    api.on("select", onSelect);
    // Get initial selected index
    setCurrent(api.selectedScrollSnap());

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  // Function to navigate to a specific slide when dot is clicked
  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );

  // Group testimonials into pairs for each slide
  const groupedTestimonials = [];
  for (let i = 0; i < testimonials.length; i += 2) {
    groupedTestimonials.push(testimonials.slice(i, Math.min(i + 2, testimonials.length)));
  }

  return (
    <div className="mb-10 relative max-container padding-container flex flex-col justify-center items-center text-center pt-20">
      <h2 className="md:text-3xl text-2xl font-semibold uppercase pb-12 text-amber-900">
        {t("travelersSection")}
      </h2>
      <Carousel 
        opts={{ loop: true }} 
        className="w-full"
        setApi={setApi}
      >
        <CarouselContent>
          {groupedTestimonials.map((group, groupIndex) => (
            <CarouselItem key={groupIndex} className="px-4 md:px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {group.map((testimonial, index) => {
                  const globalIndex = groupIndex * 2 + index;
                  const isExpanded = expandedIds.includes(globalIndex);
                  const needsReadMore = testimonial.recommendation.length > 700;
                  
                  return (
                    <div 
                      key={index} 
                      className="bg-[#faece56c] p-6 rounded-xl shadow-md text-amber-950 relative mx-auto flex flex-col h-full"
                    >
                      {/* Large quote mark */}
                      <div className="absolute top-3 left-6 text-7xl text-amber-800 opacity-30">
                        &ldquo;
                      </div>
                      
                      <div className="flex-grow">
                        <p className="text-amber-950 text-md md:text-md font-normal tracking-tight leading-loose md:leading-relaxed text-left mt-6 mb-2">
                          {needsReadMore && !isExpanded 
                            ? `${testimonial.recommendation.substring(0, 700)}...` 
                            : testimonial.recommendation}
                        </p>
                        {needsReadMore && (
                          <button 
                            onClick={() => toggleExpand(globalIndex)}
                            className="text-amber-800 text-sm hover:underline mb-4"
                          >
                            {isExpanded ? "Read Less" : "Read More"}
                          </button>
                        )}
                      </div>
                      
                      <div className="flex items-center mt-4">
                        {/* Profile image - replaced with Next.js Image component */}
                        <div className="w-12 h-12 bg-amber-100 rounded-full overflow-hidden mr-4 border border-amber-200 flex-shrink-0 relative">
                          <Image 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            fill
                            sizes="48px"
                            style={{ objectFit: 'cover' }}
                            priority={groupIndex === 0}
                          />
                        </div>
                        
                        <div className="text-left">
                          <p className="font-semibold text-md text-amber-800">{testimonial.name}</p>
                          <p className="text-sm text-amber-700">{testimonial.country}</p>
                        </div>
                        
                        <div className="ml-auto">
                          <a
                            href={testimonial.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-amber-800 hover:underline inline-block"
                          >
                            {t("viewOriginalReview")}
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Interactive pagination dots */}
        <div className="flex justify-center gap-2 mt-6">
          {groupedTestimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                current === index ? "bg-amber-800" : "bg-amber-200"
              }`}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
}