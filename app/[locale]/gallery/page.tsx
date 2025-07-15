"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

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

  // Initialize Fancybox
  useEffect(() => {
    Fancybox.bind("[data-fancybox='masonry-gallery']", {
      Toolbar: {
        display: {
          left: ["infobar"],
          middle: ["toggleZoom"],
          right: ["slideshow", "fullscreen", "thumbs", "close"],
        },
      },
      // No more Thumbs.autoStart in v5
      showClass: "fancybox-fadeIn",
      hideClass: "fancybox-fadeOut",
      on: {
        ready: (fancybox) => {
          if (window.innerWidth < 768) {
            fancybox.container.style.padding = "20px";
          }
          // Add Tailwind classes to the image
          const img = fancybox.container.querySelector(
            ".fancybox__content img"
          );
          if (img) {
            img.classList.add("rounded-xl", "overflow-hidden");
          }
        },
      },
    });

    // Cleanup function
    return () => {
      Fancybox.unbind("[data-fancybox='masonry-gallery']");
      Fancybox.close();
    };
  }, []);

  return (
    <div className="max-container padding-container lg:pt-40 pt-36 pb-6">
      <div className="gap-4 lg:gap-5 columns-2 md:columns-3 space-y-4">
        {images.map((image, index) => (
          <div key={index} className="cursor-pointer">
            <AnimatedSection>
              <a
                href={image.src}
                data-fancybox="masonry-gallery"
                data-caption={`Gallery Image ${index + 1}`}
                className="block w-full h-full overflow-hidden relative hover:opacity-90 transition-opacity"
              >
                <Image
                  src={image.src}
                  alt={`gallery-${index}`}
                  width={image.width}
                  height={image.height}
                  className="rounded-lg w-full h-auto"
                />
              </a>
            </AnimatedSection>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
