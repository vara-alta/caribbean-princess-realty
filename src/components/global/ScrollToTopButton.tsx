"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const toggleVisibility = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setIsVisible(window.scrollY > 500);
      }, 100); // Adjust debounce time as needed
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed bottom-14 md:bottom-4 right-4 rounded-full outline-none z-20 cursor-pointer transition-opacity duration-200 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-label="Scroll to top of the page"
      onClick={scrollToTop}
    >
      <Image
        src="/scrollToTopIcon.png"
        alt="Scroll to top of the page"
        sizes="25vw"
        width={40}
        height={40}
        className="w-[40px] h-[40px]"
      />
    </div>
  );
}
