import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col content-center pb-3 pt-16 bg-white padding-container max-container border-gray-200  ">
      <div className="  flex justify-between  ">
        <h1 className="bold-18 lg:bold-28 text-amber-900">LOVER OF SAHARA</h1>
        <div className="grid grid-flow-col gap-[2vw] text-sm font-medium leading-7 lg:text-lg lg:font-normal text-amber-900">
          <Link href={"/about"}>
            <h1 className="border-b-[1px] font-semibold hover:border-amber-900 border-white transition-all ease-in-out duration-500">
              About
            </h1>
          </Link>
          <Link href={"/trips"}>
            <h1 className="border-b-[1px] font-semibold hover:border-amber-900 border-white transition-all ease-in-out duration-500">
              Trips
            </h1>
          </Link>
          <Link href={"/gallery"}>
            <h1 className="border-b-[1px] font-semibold hover:border-amber-900 border-white transition-all ease-in-out duration-500">
              Gallery
            </h1>
          </Link>
          <Link href={"/contact"}>
            <h1 className="border-b-[1px] font-semibold hover:border-amber-900 border-white transition-all ease-in-out duration-500">
              Contact
            </h1>
          </Link>
        </div>
      </div>
      <div className="flex font-semibold justify-between flex-row-reverse pt-3 text-amber-900  text-sm   lg:text-[1rem]  border-b-[0.3rem]  pb-1  border-amber-900">
        <div className=" grid grid-flow-col justify-center gap-6 pb-2">
          <Link href={"https://www.instagram.com/lover_of_sahara/"}>
            <Image
              src="/nav2.png"
              alt="ig"
              height={32}
              width={32}
              style={{ width: "100%", height: "100%" }}
            />
          </Link>

          <Image
            src="/nav1.png"
            alt="whatsapp"
            height={32}
            width={32}
            style={{ width: "100%", height: "100%" }}
          />
          <Link href={"https://www.facebook.com/loveroffsahara"}>
            <Image
              src="/nav3.png"
              alt="fb"
              height={32}
              width={32}
              style={{ width: "100%", height: "100%" }}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
