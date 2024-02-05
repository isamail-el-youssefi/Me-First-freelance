import React from "react";
import Button from "./Button";
import { CATEGORIES } from "@/constant";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative h-[100vh] w-full z-10 pb-12">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 object-cover w-full h-full"
      >
        <source src="/herovideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className=" flex flex-col justify-center items-center padding-container relative top-[42%]  z-10">
        <span className="bold-48 sm:bold-64 text-white capitalize px-5 sm:px-20 text-center ">
          DISCOVER THE DESERT
        </span>

        <Link href={"/trips"}>
          <div className="btn mt-8">
            <div
              className="flexCenter gap-2 rounded-full  bg-white hover:bg-amber-950  hover:text-white px-8 py-3.5  bold-16  transition-all ease-in-out duration-500 "
              /* className= "flexCenter gap-2 border-2 rounded-full border-amber-900 hover:border-amber-950 bg-amber-900 px-8 py-3 text-white transition-all hover:bg-amber-950 "  */
            >
              <div className="whitespace-nowrap cursor-pointer text-sm">
                View Tours
              </div>
            </div>
          </div>
        </Link>

        {/* <div className="pt-10 ">
          <h4 className="text-white my-4 bold-22">Explore the key points.</h4>
          <ul className="flex flex-wrap gap-4">
            {CATEGORIES.map((category) => (
              <CategoryItem
                key={category.title}
                title={category.title}
                icon={category.icon}
              />
            ))}
          </ul>
        </div> */}
      </div>
    </section>
  );
};

/* type CategoryItem = {
  title: string;
  icon: string;
}; */

/* const CategoryItem = ({ icon, title }: CategoryItem) => {
  return (
    <Link
      href="/"
      className="bg-white flexCenter gap-2 px-4 py-2 cursor-pointer hover:-translate-y-[2px] transition-all duration-500 rounded-md"
    >
      <Image
        src={icon}
        alt="icon"
        height={22}
        width={22}
        className="regular-28"
      />
      <span className="capitalize regular-16">{title}</span>
    </Link>
  );
}; */

export default Hero;
