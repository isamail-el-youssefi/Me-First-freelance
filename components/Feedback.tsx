// components/TestimonialsCarousel.tsx
"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { testimonials } from "@/constant";

export default function TestimonialsCarousel() {
  // Group testimonials into pairs for each slide
  const grouped = [];
  for (let i = 0; i < testimonials.length; i += 2) {
    grouped.push(testimonials.slice(i, i + 2));
  }

  return (
    <div className="mb-6 relative max-container padding-container flex flex-col justify-center items-center text-center pt-12">
      <h2 className="md:text-4xl text-3xl font-semibold uppercase pb-8 text-amber-900">
        What Travelers Say
      </h2>
      <Carousel opts={{ loop: true }}>
        <CarouselContent>
          {grouped.map((group, index) => (
            <CarouselItem key={index}>
              <div className="grid grid-cols-1 gap-6">
                {group.map((testimonial, i) => (
                  <div
                    key={i}
                    className="bg-[#faece56c] p-6 rounded-xl shadow-md "
                  >
                    <p className="text-amber-950 text-md lg:text-md font-normal  tracking-tight leading-loose text-justify text-wrap">
                      “{testimonial.recommendation}”
                    </p>

                    <div className="flex items-center justify-between pt-3">
                      <p className="text-amber-800 font-semibold text-sm">
                        {testimonial.name}, {testimonial.country}
                      </p>
                      <a
                        href={testimonial.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-amber-800 hover:underline mt-2 inline-block"
                      >
                        View Original Review
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
