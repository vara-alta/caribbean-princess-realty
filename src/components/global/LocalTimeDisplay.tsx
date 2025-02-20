"use client";

import { useState, useEffect } from "react";

export default function LocalTimeDisplay() {
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "America/Tegucigalpa",
        hour: "2-digit",
        minute: "2-digit",
        // second: "2-digit",
        hour12: true,
      };

      const formatter = new Intl.DateTimeFormat("es-HN", options);
      setLocalTime(formatter.format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed text-white font-ubuntu font-semibold bg-[#afe6d8] bg-gradient-to-r from-[#afe6d8] to-[#f93a97] px-2 py-1 rounded-3xl tracking-wide md:bottom-4 left-4 z-10">
      {localTime}
    </div>
  );
}
