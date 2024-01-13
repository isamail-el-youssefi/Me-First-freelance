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
        <source src="sahara.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="max-container padding-container relative top-28 sm:top-1/3 z-10">
        <h1 className="bold-44 sm:bold-64 text-white capitalize max-w-[36rem]">
          Explore the world with us
        </h1>

        <div className="btn mt-8">
          <Button
            type="button"
            title="Travel Plan"
            icon="/send-plane.svg"
            variant="btn_white_rounded"
          />
        </div>
        <div className="pt-10 ">
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
        </div>
      </div>
    </section>
  );
};

type CategoryItem = {
  title: string;
  icon: string;
};

const CategoryItem = ({ icon, title }: CategoryItem) => {
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
};

export default Hero;
