"use client";

import { useRouter, usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18nConfig from "@/i18nConfig";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const LANGUAGES = [
  { code: "en", flag: "🇬🇧", name: "English" },
  { code: "fr", flag: "🇫🇷", name: "Français" },
  { code: "es", flag: "🇪🇸", name: "Español" },
  { code: "it", flag: "🇮🇹", name: "Italiano" },
  { code: "de", flag: "🇩🇪", name: "Deutsch" },
  { code: "zh", flag: "🇨🇳", name: "中文" },
];

export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const router = useRouter();
  const currentPathname = usePathname();
  const currentLocale = i18n.language;
  const [isOpen, setIsOpen] = useState(false);
  
  // Refs for click outside functionality
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleChange = (newLocale: string) => {
    setIsOpen(false);

    // Save cookie
    const date = new Date();
    date.setTime(date.getTime() + 30 * 24 * 60 * 60 * 1000);
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${date.toUTCString()};path=/`;

    // Navigate
    if (currentLocale === i18nConfig.defaultLocale && !i18nConfig.prefixDefault) {
      router.push("/" + newLocale + currentPathname);
    } else {
      router.push(currentPathname.replace(`/${currentLocale}`, `/${newLocale}`));
    }

    router.refresh();
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const selected = LANGUAGES.find(l => l.code === currentLocale) || LANGUAGES[0];

  return (
    <div className="relative inline-block">
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2  from-amber-100  hover:from-amber-200  px-3 py-2 rounded-full   transition-all duration-300 hover:shadow-md focus:shadow-md group"
      >
        <span className="text-lg">{selected.flag}</span>
       
        <ChevronDown 
          className={`w-4 h-4 text-amber-700 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </button>

      {isOpen && (
        <div 
          ref={dropdownRef}
          className="absolute top-full mt-2 bg-white rounded-xl shadow-xl border border-amber-100 py-2  z-50 right-0 animate-in slide-in-from-top-2 duration-200"
        >
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleChange(lang.code)}
              className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-amber-50 text-left transition-colors duration-200 ${
                lang.code === currentLocale ? 'bg-amber-50 text-amber-900' : 'text-gray-700'
              }`}
            >
              <span className="text-lg">{lang.flag}</span>

            </button>
          ))}
        </div>
      )}
    </div>
  );
}