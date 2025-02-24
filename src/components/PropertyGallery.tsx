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
        className="relative w-full h-[300px] min-[448px]:h-[350px] min-[512px]:h-[400px] sm:h-[450px] min-[704px]:h-[500px] md:h-[550px] min-[896px]:h-[600px] lg:h-[650px]"
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
        <div className="absolute w-full min-[384px]:w-[73%] min-[448px]:w-[68%] min-[512px]:w-[63%] min-[576px]:w-[58%] sm:w-[53%] min-[704px]:w-[48%] md:w-[43%] min-[896px]:w-[38%] lg:w-[33%] space-y-2 :min-[512px]:space-y-3 sm:space-y-4 text-white bottom-0 left-0 min-[448px]:bottom-2 min-[448px]:left-2 min-[512px]:bottom-4 min-[512px]:left-4 min-[576px]bottom-6 min-[576px]:left-6 sm:bottom-8 sn:left-8 md:bottom-10 md:left-10 z-10 bg-black/40 p-4 min-[704px]:p-6 min-[896px]:p-8 tracking-wide">
          <h2 className="text-sm min-[512px]:text-base md:text-lg text-[#c2fff0] font-ubuntu uppercase">
            {property.title}
          </h2>
          <div className="space-x-0 min-[512px]:space-y-1 sm:space-y-2">
            <p className="text-xs min-[512px]:text-sm md:text-base uppercase font-bold">
              {property.status}
            </p>
            <p className="text-xs min-[512px]:text-sm md:text-base font-semibold">
              {property.price}
            </p>
          </div>
        </div>
      </Swiper>

      <Swiper
        onSwiper={(swiper) => setThumbsSwiper(swiper)} // Initialize thumbs swiper
        breakpoints={{
          // When the window width is >= 384px
          384: {
            slidesPerView: 3,
            spaceBetween: 6,
          },
          // When the window width is >= 512px
          512: {
            slidesPerView: 4,
            spaceBetween: 4,
          },
        }}
        spaceBetween={8}
        slidesPerView={2}
        freeMode={true}
        navigation={true}
        watchSlidesProgress={true}
        modules={[Thumbs, FreeMode, Navigation]}
        className="thumbs w-[95%] min-[576px]:w-[85%] sm:w-[75%] min-[704px]:w-[65%] min-[896px]:w-[55%] h-32 mt-3 px-4 flex-wrap"
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
