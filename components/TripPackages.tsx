import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  Clock1,
  Clock10,
  Clock10Icon,
  Clock11,
  Clock2,
  Clock7,
  LucideClock,
} from "lucide-react";

interface TripPackagesProps {
  imageSrc: string;
  imageAlt: string;
  heading: string;
  text: string;
  width: number;
  height: number;
  btnTitle: string;
  price: string;
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
  price,
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
          <h3 className="text-xl md:tracking-wider tracking-wide  font-semibold capitalize text-amber-900 pr-3 md:pr-0">
            {heading}
          </h3>
          {/* Price */}
          <p className="text-md text-amber-800 font-normal pt-3 ">
            From {price}
          </p>

          <p className="text-amber-950 text-xs md:text-sm font-light leading-5 pt-3 pr-3 md:pr-0 pb-3">
            {text}
          </p>

          {/* Duration & Button */}
          <div className="flex justify-between items-center  pt-4 py-4">
            <div className="flex items-center gap-[6px]">
              <Clock className="text-amber-800 stroke-[1.5px] h-5" />
              <span className="text-sm font-normal text-amber-800">
                {duration}
              </span>
            </div>

            <Link href={link}>
              <div className="pr-3 md:pr-0">
                <button
                  className="  border-2 rounded-2xl border-amber-900 hover:border-amber-950 px-4 bg-amber-900 py-3 text-white hover:text-amber-950 transition-all hover:bg-white text-xs font-medium"
                  type="button"
                >
                  {btnTitle}
                </button>
              </div>
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
