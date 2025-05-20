import React from "react";
import Image from "next/image";
import Link from "next/link";

interface TripPackagesProps {
  imageSrc: string;
  imageAlt: string;
  heading: string;
  text: string;
  width: number;
  height: number;
  btnTitle: string;
  link: string;
  duration?: string; // New prop for trip duration (e.g. "1 day trip")
  compact?: boolean; // New prop to toggle between original and new compact design
}

const TripPackages: React.FC<TripPackagesProps> = ({
  imageSrc,
  imageAlt,
  heading,
  text,
  width,
  height,
  btnTitle,
  link,
  duration,
  compact = false,
}) => {
  // New compact design (like the Camel Ride card)
  if (compact) {
    return (
      <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-200">
        {/* Close button in top-right corner */}

        
        {/* Image */}
        <div className="relative w-full md:h-66">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={width}
            height={height}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            className="rounded-b-lg"
          />
        </div>
        
        {/* Content */}
        <div className="py-4 pl-6 pr-4 bg-white">
          <h3 className="text-xl md:text-2xl font-semibold capitalize text-amber-900 flex justify-center">{heading}</h3>

          <p className="text-amber-950 text-xs md:text-sm font-normal leading-7 pt-4 ">{text}</p>
          
          {/* Button */}
          <div className="py-6 flex justify-center">
            <Link href={link}>
              <button
                className=" gap-2 border-2 rounded-2xl border-amber-900 hover:border-amber-950 px-4 bg-amber-900  py-3.5 text-white  hover:text-amber-950 transition-all hover:bg-white text-xs font-medium"
                type="button"
              >
                {btnTitle}
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  // Original design
  return (
    <div className="group rounded-3xl cursor-pointer py-6 px-5 shadow-md shadow-gray-200">
      <div className="relative overflow-hidden rounded-xl ease-in-out duration-300">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={width}
          height={height}
          style={{ width: "100%", height: "100%" }}
          className="group-hover:scale-105 ease-out duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none rounded-xl" />
      </div>
      <h4 className="bold-22 md:bold-22 capitalize pt-4 pb-4 px-1 text-amber-900 text-center">
        {heading}
      </h4>
      <p className="text-amber-950 text-justify px-1 pb-4">{text}</p>
      <div className="flex justify-center pt-4 pb-3">
        <Link href={link}>
          <button
            className="flexCenter gap-2 border-2 rounded-full border-amber-900 hover:border-amber-950 bg-amber-900 px-8 py-3.5 text-white hover:bold-16 hover:text-amber-950 transition-all hover:bg-white"
            type="button"
          >
            <label className="whitespace-nowrap cursor-pointer text-sm">
              {btnTitle}
            </label>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TripPackages;