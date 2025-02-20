"use client";

import { useEffect, useState } from "react";
import {
  EmailShareButton,
  // FacebookMessengerShareButton,
  TelegramShareButton,
  WhatsappShareButton,
} from "react-share";
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function ShareLinkButtons() {
  const [share, setShare] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setShare(window.location.href);
    }
  }, []);

  const style =
    "w-[40px] h-[40px] rounded-full cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out";

  const shareButtons = [
    {
      Component: EmailShareButton,
      icon: (
        <MdEmail
          style={{ color: "#021c97", fontSize: "1.60rem" }}
          aria-label="Sharing link through email"
        />
      ),
    },
    // {
    //   Component: FacebookMessengerShareButton,
    //   icon: <FaFacebookMessenger style={{ color: '#0078FF', fontSize: '1.65rem' }} arial-lable="Sharing link through messenger"/>,
    //   appId: "your-app-id-here", // Replace with a valid app ID
    // },
    {
      Component: TelegramShareButton,
      icon: (
        <FaTelegramPlane
          style={{ color: "#021c97", fontSize: "1.60rem" }}
          aria-label="Sharing link through telegram"
        />
      ),
    },
    {
      Component: WhatsappShareButton,
      icon: (
        <FaWhatsapp
          style={{ color: "#021c97", fontSize: "1.60rem" }}
          aria-label="Sharing link through whatsapp"
        />
      ),
    },
  ];

  return (
    <>
      {/* SIDEBAR - LARGE SCREENS */}
      <div className="hidden w-10 md:flex flex-col gap-2 fixed top-[calc(100vh-60%)] left-2 z-50">
        {shareButtons.map(({ Component, icon }, index) => (
          <div
            key={index}
            className={style}
            rel="noopener noreferrer"
            style={{
              background: "radial-gradient(circle, #ffffff 10%, #bbc6cc 90%)",
            }}
          >
            <Component
              url={share}
              className="w-full h-full flex items-center justify-center"
            >
              {icon}
            </Component>
          </div>
        ))}
      </div>

      {/* BOTTOM BAR - SMALL SCREENS */}
      <div className="flex md:hidden fixed bg-[#bbc6cc] w-full left-0 h-11 right-0 bottom-0 z-20">
        {shareButtons.map(({ Component, icon }, index) => (
          <div
            key={index}
            className="w-1/3 bg-[#bbc6cc] bg-gradient-to-t from-[#bbc6cc] to-[#ffffff]"
            rel="noopener noreferrer"
          >
            <Component
              url={share}
              className="w-full h-full flex items-center justify-center"
            >
              {icon}
            </Component>
          </div>
        ))}
      </div>
    </>
  );
}
