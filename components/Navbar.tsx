"use client";
import { NAV_LINKS } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import "./Style/Components.css";

const Navbar = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const toggleMenu = () => setMenuOpened(!menuOpened);

  return (
    <nav
      className="flexBetween max-container px-12 z-30 py-3 sm:py-1 shadow-lg bg-white rounded-xl xl:rounded-full  fixed w-[95%] 
    left-[50%] translate-x-[-50%] top-5 "
    >
      <Link href="/" className="xs:bold-22 xs:py-2 md:py-4 md:bold-28">
        <span className="text-amber-900">LOVER OF SAHARA</span>
      </Link>
      <div className="hidden xl:flex h-full">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="flex gap-2 mx-4 relative group text-amber-950 text-md py-5"
          >
            {link.label}
            <span className=" absolute h-[2.5px] w-0 bg-amber-900 -bottom-[6px]  group-hover:w-full group-focus:w-full transition-all duration-300 ease-in-out"></span>
          </Link>
        ))}
      </div>
      <div className="hidden xl:block">
        <div
          className="flexCenter gap-2 border-2 rounded-full border-amber-900 hover:border-amber-950 bg-amber-900 px-8 py-3.5 text-white hover:bold-16 hover:text-amber-950 transition-all hover:bg-white "
          /* className= "flexCenter gap-2 border-2 rounded-full border-amber-900 hover:border-amber-950 bg-amber-900 px-8 py-3 text-white transition-all hover:bg-amber-950 "  */
        >
          <div className="whitespace-nowrap cursor-pointer text-sm">
            Get In Touch
          </div>
        </div>
      </div>
      {/* MOBILE */}

      {!menuOpened ? (
        <Image
          src="/nav3.png"
          alt="menu"
          width={28}
          height={28}
          className="xl:hidden inline-block cursor-pointer icon"
          onClick={toggleMenu}
        />
      ) : (
        <Image
          src="/nav3.png"
          alt="menu"
          width={28}
          height={28}
          className="xl:hidden inline-block cursor-pointer icon"
          onClick={toggleMenu}
        />
      )}
      <div
        className={
          menuOpened
            ? "flex flex-col justify-center w-full p-12 fixed top-[83%] bg-white rounded-b-lg border-none  transition-all duration-300 ease-in-out shadow-md right-0"
            : "flex flex-col justify-center w-full p-12 fixed top-[83%] bg-white rounded-b-lg border-none  transition-all duration-300 ease-out shadow-md right-[-500%]"
        }
      >
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="flex text-amber-900  gap-2 my-7 mx-7 text-xl font-medium hover:font-semibold hover:text-amber-950  relative  group"
          >
            {link.label}
            <span className="inline-block absolute h-[2px] w-0 bg-amber-950 -bottom-2 group-hover:w-28 transition-all duration-500"></span>
          </Link>
        ))}
        <Link href={"/contact"}>
          <div className="pt-7 mx-7">
            <div
              className="flexCenter gap-2 border-2 rounded-full border-amber-900 hover:border-amber-950 bg-amber-900 px-8 py-3.5 text-white hover:bold-16 hover:text-amber-950 transition-all hover:bg-white "
              /* className= "flexCenter gap-2 border-2 rounded-full border-amber-900 hover:border-amber-950 bg-amber-900 px-8 py-3 text-white transition-all hover:bg-amber-950 "  */
            >
              <div className="whitespace-nowrap cursor-pointer text-sm">
                Get In Touch
              </div>
            </div>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
