"use client";
import { NAV_LINKS } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import "./Style/Components.css";
import { useTranslation } from "react-i18next";
import LanguageChanger from "./LanguageChanger";
import { TransitionLink } from "../components/utils/TransitionLink";

const Navbar = () => {
  const { t } = useTranslation();

  const [menuOpened, setMenuOpened] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setMenuOpened(!menuOpened);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50 && !menuOpened) {
        setShowNavbar(false); // hide on scroll down
      } else {
        setShowNavbar(true); // show on scroll up or when menu is open
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, menuOpened]);

  // THIS FOR MOBILE MENU TO CLOSE WHEN CLICK OUTSIDE OF IT
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(event.target as Node)
      ) {
        setMenuOpened(false);
      }
    };

    if (menuOpened) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpened]);

  return (
    <nav
      className={`flexBetween max-container md:px-12 px-6 z-30 py-3 sm:py-1 shadow-lg bg-white rounded-xl xl:rounded-full fixed w-[95%] 
      left-[50%] translate-x-[-50%] top-5 transition-all duration-500 ease-in-out ${
        showNavbar ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <Link
        href="/"
        className="text-md font-bold xs:py-2 md:py-4 py-0 md:bold-28"
      >
        <span className="text-amber-900">LOVER OF SAHARA</span>
      </Link>

      <div className="hidden xl:flex h-full">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="flex gap-2 mx-4 relative group text-amber-950 text-md py-5"
          >
            {t(link.label)}
            <span className="absolute h-[2.5px] w-0 bg-amber-900 -bottom-[6px] group-hover:w-full transition-all duration-300 ease-in-out"></span>
          </Link>
        ))}
      </div>

      <LanguageChanger />

      <Link href="/contact">
        <div className="hidden xl:block">
          <div className="flexCenter gap-2 border-2 rounded-full border-amber-900 hover:border-amber-950 bg-amber-900 px-8 py-3.5 text-white hover:bold-16 hover:text-amber-950 transition-all hover:bg-white">
            <div className="whitespace-nowrap cursor-pointer text-sm">
              {t("nav-btn")}
            </div>
          </div>
        </div>
      </Link>

      {/* MOBILE MENU ICON */}
      {!menuOpened ? (
        <Image
          ref={toggleButtonRef}
          src="/circle-ellipsis.png"
          alt="menu"
          width={28}
          height={28}
          className="xl:hidden inline-block cursor-pointer icon"
          onClick={toggleMenu}
        />
      ) : (
        <Image
          ref={toggleButtonRef}
          src="/minus-circle.png"
          alt="menu"
          width={28}
          height={28}
          className="xl:hidden inline-block cursor-pointer icon"
          onClick={toggleMenu}
        />
      )}

      {/* MOBILE MENU */}
      <div
        ref={menuRef}
        className={
          menuOpened
            ? "flex flex-col justify-center w-full p-12 fixed top-[83%] bg-white rounded-b-lg border-none transition-all duration-300 ease-in-out shadow-md right-0"
            : "flex flex-col justify-center w-full p-12 fixed top-[83%] bg-white rounded-b-lg border-none transition-all duration-300 ease-out shadow-md right-[-500%]"
        }
      >
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="flex text-amber-900 gap-2 my-7 mx-7 text-xl font-medium hover:font-semibold hover:text-amber-950 relative group"
            onClick={toggleMenu}
          >
            {t(link.label)}
            <span className="inline-block absolute h-[2px] w-0 bg-amber-950 -bottom-2 group-hover:w-28 transition-all duration-500"></span>
          </Link>
        ))}
        <Link href="/contact" onClick={toggleMenu}>
          <div className="pt-7 mx-7">
            <div className="flexCenter gap-2 border-2 rounded-full border-amber-900 hover:border-amber-950 bg-amber-900 px-8 py-3.5 text-white hover:bold-16 hover:text-amber-950 transition-all hover:bg-white">
              <div className="whitespace-nowrap cursor-pointer text-sm">
                {t("nav-btn")}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
