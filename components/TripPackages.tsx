import React from "react";
import Image from "next/image";
import Link from "next/link";

interface TripPackagesProps {
  iamgeSrc: string;
  iamgeAlt: string;
  heading: string;
  text: string;
  width: number;
  height: number;
  btnType: "button" | "submit";
  btnTitle: string;
  btnIcon?: string;
  link: string;
}

const TripPackages: React.FC<TripPackagesProps> = (props) => {
  return (
    <div className="group rounded-3xl cursor-pointer py-6 px-5 shadow-md shadow-gray-200">
      <div className="relative overflow-hidden rounded-xl ease-in-out duration-300">
        <Image
          src={props.iamgeSrc}
          alt={props.iamgeAlt}
          width={props.width}
          height={props.height}
          style={{ width: "100%", height: "100%" }}
          className="group-hover:scale-105 ease-out duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none rounded-xl" />
      </div>
      <h4 className="bold-22 md:bold-22 capitalize pt-4 pb-4 px-1 text-amber-900 text-center">
        {props.heading}
      </h4>
      <p className="text-amber-950 text-justify px-1 pb-4 ">{props.text}</p>
      <div className="flex justify-center pt-4 pb-3">
        <Link href={props.link}>
          <button
            className="flexCenter gap-2 border-2 rounded-full border-amber-900 hover:border-amber-950 bg-amber-900 px-8 py-3.5 text-white hover:bold-16 hover:text-amber-950 transition-all hover:bg-white"
            type={props.btnType}
          >
            {props.btnIcon && (
              <Image
                src={props.btnIcon}
                alt={props.btnTitle}
                width={20}
                height={20}
              />
            )}
            <label className="whitespace-nowrap cursor-pointer text-sm">
              {props.btnTitle}
            </label>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TripPackages;
