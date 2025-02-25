"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navigation from "./Navigation";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const Header: React.FC = () => {
  const pathname = usePathname();

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

  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    if (previous) {
      if (latest > previous && latest > 200) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    }

    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <header className="relative w-full h-[calc(100vh-14rem)] lg:h-[calc(100vh-12rem)]">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 w-full h-full object-cover brightness-[1] contrast-[1.2] filter sepia-[0.3] hue-rotate-[300deg] opacity-55"
      >
        <source src="/palm-tree-header-video.mp4" type="video/mp4" />
        Tu navegador no soporta video.
      </video>

      <div className="absolute inset-0 bg-gradient-to-r from-[#c2fff0]/70 to-[#f93a97]/70 mix-blend-overlay"></div>

      <div className="absolute inset-0 bg-black/30 flex flex-col gap-24 items-center justify-center text-white text-center px-4 sm:px-8 lg:px-16 2xl:px-32">
        <Link className="flex items-center" href="/">
          <Image
            src="/logo-caribbean-princess-realty.png"
            loading="eager"
            alt="Caribbean Princess Realty"
            sizes="(max-width:512px) 200px, 220px"
            width={220}
            height={220}
            className="w-[180px] min-[512px]:w-[220px] h-auto"
          />
        </Link>
        {headerTitle === "Caribbean Princess Realty" ? (
          <div className="w-full flex flex-col items-center gap-6">
            <h1 className="text-4xl min-[896px]:text-5xl min-[1152px]:text-6xl text-shadow-sm shadow-[#feebf5] font-ubuntu uppercase tracking-widest">
              {headerTitle}
            </h1>
            <h2 className="text-base md:text-lg text-shadow-sm shadow-[#feebf5] uppercase tracking-widest">
              Mariela Rodríguez Wildt | Jessie Rodríguez
            </h2>
          </div>
        ) : (
          <h1 className="text-4xl md:text-6xl text-shadow-sm shadow-[#feebf5] font-ubuntu uppercase tracking-widest">
            {headerTitle}
          </h1>
        )}
      </div>

      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed w-full transition-colors duration-300 z-30 ${
          isScrolled
            ? "bg-[#afe6d8] bg-gradient-to-r from-[#afe6d8] to-[#f93a97]"
            : "bg-transparent"
        }`}
      >
        <div className="h-40 w-full px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
          <div className="flex h-full items-center">
            <div className="w-3/4 h-full flex items-center justify-start">
              <Link className="flex items-center" href="/">
                <Image
                  src="/logo-caribbean-princess-realty.png"
                  alt="Caribbean Princess Realty"
                  sizes="(max-width:512px) 120px, 150px"
                  width={150}
                  height={150}
                  className={`w-[120px] min-[512px]:w-[150px] h-auto ${
                    isScrolled ? "" : "hidden"
                  }`}
                />
              </Link>
            </div>
            {/* MENU SECTION */}
            <div className="w-1/4 h-full flex items-center">
              <Navigation />
            </div>
          </div>
        </div>
      </motion.nav>
    </header>
  );
};

export default Header;
