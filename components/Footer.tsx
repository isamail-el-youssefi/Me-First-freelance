"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#faece570]">
      <footer className="bg-[#faece570] flex flex-col padding-container max-container pb-12 pt-8 lg:pb-24 lg:pt-16">
        {/* Mobile layout - navigation at top, logo and social at bottom */}
        <div className="md:hidden flex flex-col">
          {/* Navigation Links at top for mobile */}
          <nav className="flex flex-col items-start gap-3 text-sm font-semibold text-amber-900 mb-6">
            <Link href="/about">
              <span className="border-b-[1px] hover:border-amber-900 border-white transition-all ease-in-out duration-500">
                {t("About")}
              </span>
            </Link>
            <Link href="/trips">
              <span className="border-b-[1px] hover:border-amber-900 border-white transition-all ease-in-out duration-500">
                {t("Trips")}
              </span>
            </Link>
            <Link href="/gallery">
              <span className="border-b-[1px] hover:border-amber-900 border-white transition-all ease-in-out duration-500">
                {t("Gallery")}
              </span>
            </Link>
            <Link href="/contact">
              <span className="border-b-[1px] hover:border-amber-900 border-white transition-all ease-in-out duration-500">
                {t("nav-btn")}
              </span>
            </Link>
          </nav>

          {/* Logo and Social Icons at bottom for mobile, in one row */}
          <div className="flex justify-between items-center mt-4">
            <h1 className="bold-16 text-amber-900 whitespace-nowrap">
              LOVER OF SAHARA
            </h1>

            <div className="flex gap-4 items-center">
              <Link
                href="https://www.instagram.com/lover_of_sahara/"
                aria-label="Instagram"
              >
                <Image
                  src="/nav2.png"
                  alt="Instagram"
                  height={32}
                  width={32}
                  className="w-7 h-7"
                />
              </Link>
              <Link href="https://wa.me/yourphonenumber" aria-label="WhatsApp">
                <Image
                  src="/nav1.png"
                  alt="WhatsApp"
                  height={32}
                  width={32}
                  className="w-7 h-7"
                />
              </Link>
              <Link
                href="https://www.facebook.com/loveroffsahara"
                aria-label="Facebook"
              >
                <Image
                  src="/nav3.png"
                  alt="Facebook"
                  height={32}
                  width={32}
                  className="w-7 h-7"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop layout - remains the same */}
        <div className="hidden md:flex md:flex-col">
          <div className="flex flex-row justify-between items-center gap-6 pb-6">
            {/* Logo/Brand */}
            <h1 className="bold-28 text-amber-900 whitespace-nowrap">
              LOVER OF SAHARA
            </h1>

            {/* Navigation Links */}
            <nav className="flex flex-wrap gap-6 text-lg font-medium text-amber-900">
              <Link href="/about">
                <span className="border-b-[1px] font-semibold hover:border-amber-900 border-white transition-all ease-in-out duration-500">
                  {t("About")}
                </span>
              </Link>
              <Link href="/trips">
                <span className="border-b-[1px] font-semibold hover:border-amber-900 border-white transition-all ease-in-out duration-500">
                  {t("Trips")}
                </span>
              </Link>
              <Link href="/gallery">
                <span className="border-b-[1px] font-semibold hover:border-amber-900 border-white transition-all ease-in-out duration-500">
                  {t("Gallery")}
                </span>
              </Link>
              <Link href="/contact">
                <span className="border-b-[1px] font-semibold hover:border-amber-900 border-white transition-all ease-in-out duration-500">
                  {t("nav-btn")}
                </span>
              </Link>
            </nav>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-end pt-6 pb-2">
            <div className="flex gap-6 items-center">
              <Link
                href="https://www.instagram.com/lover_of_sahara/"
                aria-label="Instagram"
              >
                <Image
                  src="/nav2.png"
                  alt="Instagram"
                  height={32}
                  width={32}
                  className="w-8 h-8"
                />
              </Link>
              <Link href="https://wa.me/yourphonenumber" aria-label="WhatsApp">
                <Image
                  src="/nav1.png"
                  alt="WhatsApp"
                  height={32}
                  width={32}
                  className="w-8 h-8"
                />
              </Link>
              <Link
                href="https://www.facebook.com/loveroffsahara"
                aria-label="Facebook"
              >
                <Image
                  src="/nav3.png"
                  alt="Facebook"
                  height={32}
                  width={32}
                  className="w-8 h-8"
                />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
