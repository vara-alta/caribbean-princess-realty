"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
// import Navigation from "./Navigation";

const Header: React.FC = () => {
  const pathname = usePathname();

  // Map route to header text
  const pageTitles: Record<string, string> = {
    "/": "Caribbean Princess Realty",
    "/acerca": "Acerca",
    "/propiedades": "Propiedades",
    "/contacto": "Contacto",
    "/privacidad": "Privacidad",
    "/terminos": "Términos",
    "/cookies": "Cookies",
  };

  const headerTitle = pageTitles[pathname] || "Propiedad";
  // const headerTitle = pathname.replace("/", "").replace("-", " ") || "Welcome"; // To automatically format paths

  return (
    <header className="relative w-full h-[calc(100vh-12rem)]">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 w-full h-full object-cover brightness-[1] contrast-[1.2] filter sepia-[0.3] hue-rotate-[300deg] opacity-55"
      >
        <source src="/header-video.mp4" type="video/mp4" />
        Tu navegador no soporta video.
      </video>

      {/* TINTED EFFECT OVER VIDEO */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#c2fff0]/70 to-[#f93a97]/70 mix-blend-overlay"></div>

      <div className="absolute inset-0 bg-black/30 flex flex-col gap-24 items-center justify-center text-white text-center">
        {/* Overlay with Dynamic Title */}
        <Link className="flex items-center" href="/">
          <Image
            src="/logo-caribbean-princess-realty.png"
            priority={true}
            alt="Caribbean Princess Realty"
            sizes="(max-width:512px) 200px, 220px"
            width={220}
            height={220}
            className="w-[180px] min-[512px]:w-[220px] h-auto"
          />
        </Link>
        {headerTitle === "Caribbean Princess Realty" ? (
          <div className="w-full flex flex-col items-center gap-6">
            <h1 className="text-4xl md:text-6xl text-shadow-sm shadow-[#feebf5] font-ubuntu uppercase tracking-widest">
              {headerTitle}
            </h1>
            <h2 className="text-lg text-shadow-sm shadow-[#feebf5] uppercase tracking-widest">
              Mariela Rodríguez Wildt | Jessie Rodríguez
            </h2>
          </div>
        ) : (
          <h1 className="text-4xl md:text-6xl text-shadow-sm shadow-[#feebf5] font-ubuntu uppercase tracking-widest">
            {headerTitle}
          </h1>
        )}
      </div>
      {/* <Navigation /> */}
    </header>
  );
};

export default Header;
