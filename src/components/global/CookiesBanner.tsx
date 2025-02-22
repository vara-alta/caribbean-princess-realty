"use client";

import { useState, useEffect } from "react";
import { setCookie, getCookie } from "cookies-next";
import { X } from "lucide-react";
import Link from "next/link";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);

  useEffect(() => {
    const cookieConsent = getCookie("cookieConsent");
    if (cookieConsent === "accepted") {
      setIsAccepted(true);
    } else if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    setCookie("cookieConsent", "accepted", { maxAge: 365 * 24 * 60 * 60 });
    setCookie("functionalCookies", "true", { maxAge: 365 * 24 * 60 * 60 });
    setCookie("marketingCookies", "true", { maxAge: 365 * 24 * 60 * 60 });
    setIsAccepted(true);
    setIsVisible(false);
  };

  const handleReject = () => {
    setCookie("cookieConsent", "rejected", { maxAge: 7 * 24 * 60 * 60 });
    setCookie("functionalCookies", "false", { maxAge: 7 * 24 * 60 * 60 });
    setCookie("marketingCookies", "false", { maxAge: 7 * 24 * 60 * 60 });
    setIsVisible(false);
  };

  if (isAccepted || !isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white rounded-t-lg p-5 shadow-md flex flex-col gap-4 justify-between z-20">
      <X
        className="text-[#f93a97] absolute top-4 right-4 transition-all ease-linear duration-300 cursor-pointer hover:text-opacity-30"
        width={30}
        height={30}
        // onClick={setIsVisible(false) }
      />
      <div className="space-y-4">
        <h3 className="text-[#f93a97] text-lg font-ubuntu">
          Acepte el uso de cookies
        </h3>
        <p className="text-sm leading-relaxed -tracking-wide">
          Usamos cookies para mejorar su experiencia de navegación, servirle
          contenido personalizado, y análisis de tráfico. Al hacer clic en{" "}
          <span className="font-semibold">Aceptar</span>, usted estará de
          acuerdo con el almacenamiento de las cookies en su dispositivo. Para
          más detalles mire nuestra{" "}
          <Link
            href={"/cookies"}
            target="_blank"
            className="text-[#f93a97] font-semibold inline-block relative no-underline after:content-[''] after:absolute after:w-[100%] after:scale-x-100 after:h-[1px] after:bottom-0 after:right-0 after:bg-[#f93a97] after:origin-bottom-left after:transition-transform hover:after:scale-x-0 hover:after:origin-bottom-right"
          >
            política de cookies.
          </Link>
        </p>
      </div>
      <div className="flex gap-3">
        <button
          onClick={handleAccept}
          className="border-2 border-solid border-[#f93a97] bg-[#f93a97] text-white tracking-wide px-4 py-2 rounded-3xl transition-colors duration-300 ease-linear hover:bg-white hover:text-[#f93a97]"
        >
          Aceptar
        </button>
        <button
          onClick={handleReject}
          className="border-2 border-solid border-[#808080] tracking-wide px-4 py-2 rounded-3xl transition-colors duration-300 ease-linear hover:bg-[#808080] hover:text-white"
        >
          Rechazar
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
