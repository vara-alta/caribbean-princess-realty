"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper/types";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { properties } from "@/lib/properties";

export default function PropertyGallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null); // Initialize thumbs swiper
  const [selectedThumbnail, setSelectedThumbnail] = useState<number>(0); // Control selected thumbnail

  const handleSlideChange = (swiper: SwiperClass) => {
    const currentSlide = swiper.realIndex; // Get the real index (ignores loop duplicates)
    setSelectedThumbnail(currentSlide); // Update selected thumbnail
  };

  const { slug } = useParams();
  const property = properties.find((property) => property.slug === slug);

  if (!property) return <p>Propiedad no encontrada.</p>;

  return (
    <div className="flex flex-col gap-3">
      <Swiper
        spaceBetween={10}
        loop={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Thumbs, FreeMode]}
        className="relative h-[650px] w-full"
        onSlideChange={handleSlideChange} // Update selected thumbnail on slide change
      >
        {property.gallery.map((property, index) => (
          <SwiperSlide key={index} className="cursor-pointer">
            <div className="flex h-full w-full items-center justify-center relative">
              <Image
                src={property?.src ?? "/no-image-available.webp"}
                alt={property.alt || "No visible image"}
                priority
                fill
                sizes="100vw"
                className="block h-full w-full object-cover absolute"
              />
            </div>
          </SwiperSlide>
        ))}
        <div className="absolute w-[33%] space-y-4 text-white bottom-10 left-10 z-10 bg-black/40 p-8 tracking-wide">
          <h2 className="text-lg text-[#c2fff0] font-ubuntu uppercase">
            {property.title}
          </h2>
          <div className="space-y-2">
            <p className="uppercase font-bold">{property.status}</p>
            <p className="font-semibold">{property.price}</p>
          </div>
        </div>
      </Swiper>

      <Swiper
        onSwiper={(swiper) => setThumbsSwiper(swiper)} // Initialize thumbs swiper
        spaceBetween={4}
        slidesPerView={4}
        freeMode={true}
        navigation={true}
        watchSlidesProgress={true}
        modules={[Thumbs, FreeMode, Navigation]}
        className="thumbs w-[55%] h-32 mt-3 flex-wrap"
      >
        {property.gallery.map((property, index) => (
          <SwiperSlide key={index}>
            <button
              className={`flex h-full w-full items-center justify-center rounded-lg relative ${
                selectedThumbnail === index
                  ? "border-[3px] border-solid border-[#f93a97]"
                  : ""
              }`}
            >
              <Image
                src={property.src ?? "/no-image-available.webp"}
                alt={property.alt || "No visible image"}
                fill
                sizes="50vw"
                className="block h-full w-full rounded-lg object-cover cursor-pointer absolute"
              />
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
