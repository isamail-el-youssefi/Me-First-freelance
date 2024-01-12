"use client";
import { NAV_LINKS } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Button from "./Button";

const Navbar = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const toggleMenu = () => setMenuOpened(!menuOpened);

  return (
    <nav
      className="flexBetween max-container px-12 z-30 py-2 shadow-lg bg-white rounded-full ring-2 ring-slate-100 fixed w-[95%] 
    left-[50%] translate-x-[-50%] top-2 "
    >
      <Link href="/" className="xs:bold-20 xs:py-4 md:bold-28">
        <span className="text-amber-900">LOVER OF SAHARA</span>
      </Link>
      <div className="hidden lg:flex h-full">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="flex gap-2 mx-4 relative group text-amber-800"
          >
            <Image
              src={link.iconURL}
              alt={link.label}
              height={20}
              width={20}
              className="h-auto w-4"
            />
            {link.label}
            <span className="inline-block absolute h-[2px] w-0 bg-amber-900 -bottom-2 group-hover:w-full transition-all duration-500"></span>
          </Link>
        ))}
      </div>
      <div className="hidden lg:block">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_rounded"
        />
      </div>
      {/* MOBILE */}

      {!menuOpened ? (
        <Image
          src="menu.svg"
          alt="menu"
          width={28}
          height={28}
          className="lg:hidden inline-block cursor-pointer"
          onClick={toggleMenu}
        />
      ) : (
        <Image
          src="close.svg"
          alt="menu"
          width={28}
          height={28}
          className="lg:hidden inline-block cursor-pointer"
          onClick={toggleMenu}
        />
      )}
      <div
        className={
          menuOpened
            ? "flex flex-col justify-center p-12 fixed top-[106%] bg-amber-100 rounded-3xl transition-all duration-500 shadow-md right-0"
            : "flex flex-col justify-center p-12 fixed top-14 bg-amber-100 rounded-3xl transition-all duration-500 shadow-md right-[-100%]"
        }
      >
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="flex gap-1 m-6 relative group"
          >
            <Image
              src={link.iconURL}
              alt={link.label}
              height={20}
              width={20}
              className="h-auto w-4"
            />
            {link.label}
            <span className="inline-block absolute h-[2px] w-0 bg-black -bottom-2 group-hover:w-full transition-all duration-500"></span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
