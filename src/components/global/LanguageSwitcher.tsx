"use client";

import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

// Define the Weglot type
type Weglot = {
  initialize: (options: { api_key: string }) => void;
  switchTo: (langCode: string) => void;
};

// Extend the Window interface to include Weglot
declare global {
  interface Window {
    Weglot?: Weglot;
  }
}

export type LanguageSwitcherProps = {
  domain: string;
  langs: { [key: string]: string };
};

/**
 * NextJS compatible Weglot Language Switcher (uses TailwindCSS)
 *
 * Usage:
 * <LanguageSwitcher
 *     domain="yourdomain.com"
 *     langs={{ en: 'English', fr: 'French', es: 'Spanish' }}
 * />
 */
export const LanguageSwitcher = ({ domain, langs }: LanguageSwitcherProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [hostname, setHostname] = useState("");
  const [languageSelected, setLanguageSelected] = useState("en");

  useEffect(() => {
    // Ensure this runs only on the client
    setHostname(window.location.hostname.toLowerCase());

    const script = document.createElement("script");
    script.src = "https://cdn.weglot.com/weglot.min.js";
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      if (window.Weglot) {
        window.Weglot.initialize({
          api_key: process.env.NEXT_PUBLIC_WEGLOT_API || "",
        });
      }
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const pathAndQuery =
    pathname + (searchParams.toString() ? `?${searchParams.toString()}` : "");

  const handleLanguageChange = (langCode: string) => {
    setLanguageSelected(langCode);
    if (window.Weglot) {
      window.Weglot.switchTo(langCode); // Dynamically switch the language
    } else if (!hostname.startsWith(langCode)) {
      window.location.href = `https://${langCode}.${domain}${pathAndQuery}`;
    }
  };

  return (
    <div className="flex gap-1 fixed bottom-24 md:bottom-16 left-4 z-10 rounded">
      {Object.entries(langs).map(([langCode, langName]) => (
        <button
          key={langCode}
          onClick={() => handleLanguageChange(langCode)}
          className={`flex items-center gap-2 p-2 w-full text-left border border-gray-300 rounded transition-colors ease-in-out duration-300 hover:bg-bgsecondary ${
            languageSelected === langCode ? "bg-[#bbc6cc]" : ""
          }`}
        >
          <Image
            src={`${langName}`}
            alt=""
            width={20}
            height={20}
            className="w-[20px] h-[20px]"
          />
        </button>
      ))}
    </div>
  );
};
