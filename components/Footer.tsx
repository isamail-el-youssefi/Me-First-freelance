import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col content-center pb-8 pt-16 bg-white padding-container max-container border-gray-200  ">
      <div className="  flex justify-between px-3 ">
        <h1 className="bold-18 lg:bold-28 text-amber-900">LOVER OF SAHARA</h1>
        <div className="grid grid-flow-col gap-[2vw] text-sm font-medium leading-7 lg:text-lg lg:font-normal text-amber-900">
          <Link href={"/about"}>
            <h1 className="border-b-[1px] hover:border-amber-900 border-white transition-all ease-in-out duration-500">
              About
            </h1>
          </Link>
          <Link href={"/about"}>
            <h1 className="border-b-[1px] hover:border-amber-900 border-white transition-all ease-in-out duration-500">
              Trips
            </h1>
          </Link>
          <Link href={"/about"}>
            <h1 className="border-b-[1px] hover:border-amber-900 border-white transition-all ease-in-out duration-500">
              Gallery
            </h1>
          </Link>
          <Link href={"/about"}>
            <h1 className="border-b-[1px] hover:border-amber-900 border-white transition-all ease-in-out duration-500">
              Contact
            </h1>
          </Link>
        </div>
      </div>
      <div className="flex justify-between px-3 flex-row-reverse pt-3 text-amber-900  text-sm font-medium  lg:text-[1rem] lg:font-normal border-b-[1.1rem] lg:border-b-[1rem] rounded-xl  border-amber-900 pb-2">
        <h1>©2024 Lover Of Sahara</h1>
        <div className="flex gap-6 pb-3">
          <h1>FB</h1>
          <h1>IG</h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
