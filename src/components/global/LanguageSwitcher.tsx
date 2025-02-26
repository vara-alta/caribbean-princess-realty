"use client";

import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { setCookie, getCookie } from "cookies-next";

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
  const [languageSelected, setLanguageSelected] = useState("es");
  const [cookiesAccepted, setCookiesAccepted] = useState(false);

  useEffect(() => {
    // Ensure this runs only on the client
    setHostname(window.location.hostname.toLowerCase());

    // Check if cookies are accepted
    const consent = getCookie("cookieConsent") as string | undefined;
    setCookiesAccepted(consent === "accepted");

    // Load language from cookies if available and cookies are accepted
    if (consent === "accepted") {
      const storedLanguage = getCookie("siteLanguage") as string | undefined;
      if (storedLanguage && langs[storedLanguage]) {
        setLanguageSelected(storedLanguage);
        if (window.Weglot) {
          window.Weglot.switchTo(storedLanguage);
        }
      }
    }

    // Load Weglot script only if not already added
    if (!document.querySelector("#weglot-script")) {
      const script = document.createElement("script");
      script.src = "https://cdn.weglot.com/weglot.min.js";
      script.async = true;
      script.id = "weglot-script";
      document.head.appendChild(script);

      script.onload = () => {
        if (window.Weglot) {
          window.Weglot.initialize({
            api_key: process.env.NEXT_PUBLIC_WEGLOT_API || "",
          });
        }
      };
    }

    return () => {
      const script = document.querySelector("#weglot-script");
      if (script) document.head.removeChild(script);
    };
  }, [langs]);

  const pathAndQuery =
    pathname + (searchParams.toString() ? `?${searchParams.toString()}` : "");

  const handleLanguageChange = (langCode: string) => {
    setLanguageSelected(langCode);

    if (cookiesAccepted) {
      setCookie("siteLanguage", langCode, { maxAge: 365 * 24 * 60 * 60 }); // Store for 1 year
    }

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
          className={`flex items-center gap-2 p-2 w-full text-left border border-gray-300 rounded transition-colors ease-in-out duration-300 hover:bg-[#f93a97] ${
            languageSelected === langCode ? "bg-[#afe6d8]" : ""
          }`}
        >
          <Image
            src={`/banderas/${langName}`}
            alt={`${langName} flag`}
            width={20}
            height={20}
            className="w-[20px] h-[20px]"
          />
        </button>
      ))}
    </div>
  );
};
