import React from "react";
import { CATEGORIES } from "@/constant";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <section className="relative h-[75vh] lg:h-[100vh] w-full z-10 pb-12">
      <Image
        src="/oasis3.jpg"
        alt="about"
        height={3000}
        width={4200}
        style={{ width: "100%", height: "100%" }}
        className="absolute top-0 left-0 object-cover w-full h-full"
      />
      <div className=" flex flex-col justify-center items-center padding-container relative top-[46%]  z-10">
        <span className="bold-44 sm:bold-52 lg:bold-64 text-white capitalize px-5 sm:px-20 text-center ">
          CONTACT ME.
        </span>

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

export default Contact;
