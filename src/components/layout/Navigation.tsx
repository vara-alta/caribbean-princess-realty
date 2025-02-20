"use client";

import { X } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
// import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Navigation() {
  const [navActive, setNavActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!ref.current?.contains(event.target as Node)) {
        if (navActive) {
          closeMenu();
        }
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 768 && navActive) {
        closeMenu();
      }
    };

    window.addEventListener("mousedown", handleOutsideClick);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousedown", handleOutsideClick);
      window.removeEventListener("resize", handleResize);
    };
  });

  const toggleNav = () => {
    setNavActive(!navActive);

    if (navActive) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden"; // Unable scrolling
    }
  };

  const closeMenu = () => {
    setNavActive(false);
    document.body.style.overflow = "auto"; // Enable scrolling
  };

  return (
    <nav
      className="bg-red-400  w-full h-20 flex items-center justify-end z-30"
      ref={ref}
    >
      {/* HAMBURGER BUTTON */}
      <a
        className="w-[1.875rem] h-[1.875rem] flex flex-col justify-around absolute top-[55px] right-[35px] cursor-pointer z-40"
        onClick={toggleNav}
      >
        <span className="block h-[0.188rem] w-[100%] bg-white rounded-[0.625rem] transition-all ease-in-out duration-200"></span>
        <span className="block h-[0.188rem] w-[100%] bg-white rounded-[0.625rem] transition-all ease-in-out duration-200"></span>
        <span className="block h-[0.188rem] w-[100%] bg-white rounded-[0.625rem] transition-all ease-in-out duration-200"></span>
      </a>

      {/* MENU */}
      <section
        className={`min-h-screen absolute bg-white/90 text-[#f93a97] -right-[100%] top-0 w-[100%] sm:w-[60%] md:w-[35%] flex flex-col items-start justify-center font-ubuntu font-semibold tracking-widest p-12 text-2xl transition-all ease-in-out shadow-sm shadow-gray-200 duration-500 ${
          navActive && "right-[0%] z-50"
        }`}
        ref={ref}
      >
        <section className="absolute top-4 left-4 flex items-center gap-4">
          <a
            href="https://www.facebook.com/people/Caribbean-Princess-Realty/100083177683200/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              className="w-6 h-auto text-[#f93a97]"
            />
          </a>
          <a
            href="https://www.instagram.com/caribbeanprincessrealty/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="w-6 h-auto text-[#f93a97]"
            />
          </a>
        </section>

        <X
          className="absolute top-2 right-2 transition-all ease-linear duration-200 hover:rotate-90 cursor-pointer"
          width={40}
          height={40}
          onClick={closeMenu}
        />

        <div className="w-full flex items-center justify-center gap-4 p-4 border-b border-[#808080]">
          <Link
            href="/"
            className="tracking-wider uppercase"
            onClick={closeMenu}
          >
            Inicio
          </Link>
        </div>
        <div className="w-full flex items-center justify-center gap-4 p-4 border-b border-[#808080]">
          <Link
            href="/acerca"
            className="tracking-wider uppercase"
            onClick={closeMenu}
          >
            Acerca
          </Link>
        </div>
        <div className="w-full flex items-center justify-center gap-4 p-4 border-b border-[#808080]">
          <Link
            href="/propiedades"
            className="tracking-wider uppercase"
            onClick={closeMenu}
          >
            Propiedades
          </Link>
        </div>
        <div className="w-full flex items-center justify-center gap-4 p-4 border-b border-[#808080]">
          <Link
            href="/contacto"
            className="tracking-wider uppercase"
            onClick={closeMenu}
          >
            Contacto
          </Link>
        </div>

        <section className="w-full flex items-center justify-center gap-4 text-[#808080] text-xs mt-8">
          <div className="flex">
            <Link
              href="/privacidad"
              className="tracking-wider"
              onClick={closeMenu}
            >
              Privacidad
            </Link>
          </div>{" "}
          <div className="flex">
            <Link
              href="/terminos"
              className="tracking-wider"
              onClick={closeMenu}
            >
              Términos
            </Link>
          </div>{" "}
          <div className="flex ">
            <Link
              href="/cookies"
              className="tracking-wider"
              onClick={closeMenu}
            >
              Cookies
            </Link>
          </div>
        </section>
      </section>
    </nav>
  );
}
