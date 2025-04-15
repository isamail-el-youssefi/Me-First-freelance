"use client";

import { useRouter, usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18nConfig from "@/i18nConfig";
import { useState } from "react";

const LANGUAGES = [
  { code: "en", flag: "🇬🇧" },
  { code: "fr", flag: "🇫🇷" },
  { code: "es", flag: "🇪🇸" },
  { code: "it", flag: "🇮🇹" },
  { code: "de", flag: "🇩🇪" },
  { code: "zh", flag: "🇨🇳" },
];

export default function LanguageDropdown() {
  const { i18n } = useTranslation();
  const router = useRouter();
  const currentPathname = usePathname();
  const currentLocale = i18n.language;
  const [isOpen, setIsOpen] = useState(false);

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

  const selected = LANGUAGES.find(l => l.code === currentLocale) || LANGUAGES[0];

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-white px-3 py-1 rounded-full  cursor-pointer"
      >
        <span className="text-l">{selected.flag}</span>

      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 bg-white rounded-md shadow-lg w-16 py-2">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleChange(lang.code)}
              className="w-full flex justify-center py-2 hover:bg-gray-100 text-l"
            >
              {lang.flag}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
