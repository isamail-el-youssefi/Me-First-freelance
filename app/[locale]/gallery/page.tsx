"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const Page = () => {
  const images = [
    { src: "/111.jpg", width: 667, height: 1000 },
    { src: "/222.jpg", width: 1000, height: 681 },
    { src: "/333.jpg", width: 1000, height: 750 },
    { src: "/444.jpg", width: 1000, height: 709 },
    { src: "/555.jpg", width: 800, height: 1000 },
    { src: "/666.jpg", width: 750, height: 1000 },
    { src: "/999.jpg", width: 1000, height: 664 },
    { src: "/888.jpg", width: 800, height: 1000 },
    { src: "/777.jpg", width: 758, height: 1000 },
    { src: "/1111.jpg", width: 1000, height: 656 },
    { src: "/2222.jpg", width: 800, height: 1000 },
    { src: "/3333.jpg", width: 1000, height: 750 },
    { src: "/4444.jpg", width: 667, height: 1000 },
    { src: "/5555.jpg", width: 1000, height: 667 },
    { src: "/6666.jpg", width: 1000, height: 663 },
    { src: "/7777.jpg", width: 1000, height: 750 },
    { src: "/8888.jpg", width: 1000, height: 667 },
    { src: "/9999.jpg", width: 1000, height: 980 },
    { src: "/10001.jpg", width: 1000, height: 639 },
    { src: "/10002.jpg", width: 1000, height: 667 },
    { src: "/10003.jpg", width: 1000, height: 748 },
    { src: "/10004.jpg", width: 1000, height: 665 },
    { src: "/10005.jpg", width: 1000, height: 692 },
    { src: "/10006.jpg", width: 1000, height: 677 },
    { src: "/10007.jpg", width: 681, height: 1000 },
    { src: "/10008.jpg", width: 1000, height: 667 },
    { src: "/10009.jpg", width: 1000, height: 708 },
    { src: "/10010.jpg", width: 1000, height: 674 },
    { src: "/10011.jpg", width: 622, height: 1000 },
    { src: "/10012.jpg", width: 1000, height: 640 },
    { src: "/10013.jpg", width: 1000, height: 669 },
  ];

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const closeModal = () => setSelectedIndex(null);

  const showNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  const showPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;

      if (e.key === "ArrowLeft") showPrevious();
      else if (e.key === "ArrowRight") showNext();
      else if (e.key === "Escape") closeModal();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  });

  // Swipe navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    if (
      touchStartX.current !== null &&
      touchEndX.current !== null &&
      selectedIndex !== null
    ) {
      const delta = touchStartX.current - touchEndX.current;
      if (delta > 50) showNext(); // swipe left
      if (delta < -50) showPrevious(); // swipe right
    }
  };

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
    <div className="max-container padding-container lg:pt-40 pt-36 pb-6">
      <div className="gap-4 lg:gap-5 columns-2 md:columns-3 space-y-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="cursor-pointer"
            onClick={() => setSelectedIndex(index)}
          >
            <div className="w-full h-full overflow-hidden relative">
              <AnimatedSection>
                <Image
                  src={image.src}
                  alt="gallery"
                  width={image.width}
                  height={image.height}
                  className="rounded-lg"
                />
              </AnimatedSection>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedIndex !== null && (
        <div
          className={`fixed inset-0 bg-gray-90 backdrop-blur-sm bg-opacity-65 z-50 flex items-center justify-center p-4
    transition-all duration-500 overflow-auto
    ${modalVisible ? "opacity-100 scale-100" : "opacity-0 scale-100"}
  `}
          onClick={closeModal}
        >
          {/* Navigation Arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showPrevious();
            }}
            className="absolute invisible lg:visible left-0 lg:left-10 text-white hover:scale-110 transition"
          >
            <ChevronLeft size={40} />
          </button>

          <div
            className="rounded-2xl overflow-hidden max-w-full max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[selectedIndex].src}
              alt="zoomed"
              width={900}
              height={600}
              className="object-contain w-full h-full"
            />
          </div>

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

export default Page;
