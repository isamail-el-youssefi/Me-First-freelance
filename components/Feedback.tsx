// components/TestimonialsCarousel.tsx
"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"
import { testimonials } from "@/constant"


export default function TestimonialsCarousel() {
  // Group testimonials into pairs for each slide
  const grouped = []
  for (let i = 0; i < testimonials.length; i += 2) {
    grouped.push(testimonials.slice(i, i + 2))
  }

  return (
    <div className="mb-16 relative">
      <h2 className="text-3xl font-bold text-amber-900 mb-6">What Travelers Say</h2>
      <Carousel opts={{ loop: true }}>
        <CarouselContent>
          {grouped.map((group, index) => (
            <CarouselItem key={index}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {group.map((testimonial, i) => (
                  <div
                    key={i}
                    className="bg-amber-50 p-6 rounded-lg shadow-md italic"
                  >
                    <p className="text-gray-700 mb-4 whitespace-pre-line">
                      “{testimonial.recommendation}”
                    </p>
                    <p className="text-amber-800 font-semibold">
                      {testimonial.name}, {testimonial.country}
                    </p>
                    <a
                      href={testimonial.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:underline mt-2 inline-block"
                    >
                      View Original Review
                    </a>
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
  )
}
