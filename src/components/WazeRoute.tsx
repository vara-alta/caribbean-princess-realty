"use client";

import React, { useState } from "react";
import { FaWaze } from "react-icons/fa";

type WazeRouteProps = {
  latitude: number;
  longitude: number;
  label?: string;
};

export const WazeRoute: React.FC<WazeRouteProps> = ({
  latitude,
  longitude,
}) => {
  const [error, setError] = useState<string | null>(null);
  const [hovered, setHovered] = useState<boolean>(false);

  const handleNavigate = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      () => {
        const wazeUrl = `https://waze.com/ul?ll=${latitude},${longitude}&navigate=yes`;
        window.open(wazeUrl, "_blank");
      },
      (err) => {
        setError("Unable to fetch your location.");
        console.error(err);
      }
    );
  };

  return (
    <>
      <div
        className="w-[70%] min-[387px]:w-[60%] min-[512px]:w-[55%] sm:w-[31%] min-h-[250px] w-[512px]:min-h-[280px] sm:min-h-[200px] flex flex-col gap-4 p-8 sm:p-4 md:p-6 items-center justify-center border border-solid border-[#021c97] rounded-lg transition-all ease-in-out duration-500 cursor-pointer"
        onClick={handleNavigate}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <FaWaze
          className={`w-10 h-10 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-[#021c97] transition-all ease-in-out duration-300 ${
            hovered ? "animate-shake" : ""
          }`}
        />
        <p
          className={`font-zonapro text-center sm:text-sm lg:text-base tracking-widest text-[#021c97] transition-all ease-in-out duration-300`}
        >
          Come and meet us
        </p>

        {error && <p className="text-red-500 mt-2">{error}</p>}
        <p className="text-sm sm:text-xs lg:text-sm text-center">
          1344 Mount Zion Road, Morrow, Georgia 30260
        </p>
      </div>
    </>
  );
};
