"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Property {
  thumbnail: string;
  title: string;
  slug: string;
  snippet: string;
  description: string;
  location: string;
  area: string;
  status: string;
  price: string;
}

interface PropertiesListProps {
  properties: Property[];
  numItems: number;
}

export default function PropertiesList({
  properties,
  numItems,
}: PropertiesListProps) {
  const [hoveredProperty, setHoveredProperty] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
      {properties.slice(0, numItems).map((property, index) => (
        <div key={index}>
          <Link
            href={{
              pathname: `/propiedades/${property.slug}`,
            }}
            className="relative w-full h-[620px] bg-white flex flex-col items-center rounded-xl border border-solid border-[#afe6d8] transition-opacity duration-200 ease-in-out"
            onMouseEnter={() => setHoveredProperty(index)}
            onMouseLeave={() => setHoveredProperty(null)}
          >
            {/* White Background with Opacity Transition */}
            <div
              className={`absolute inset-0 z-10 flex items-center justify-center rounded-xl transition-colors duration-500 ${
                hoveredProperty === index ? "bg-white/80" : ""
              }`}
            >
              {/* Text inside overlay */}
              <span
                className={`text-3xl sm:text-4xl text-[#f93a97] text-shadow-sm shadow-[#64173c] font-benedict tracking-wide transition-opacity duration-500 ${
                  hoveredProperty === index ? "opacity-100" : "opacity-0"
                }`}
              >
                Ver propiedad
              </span>
            </div>
            <div className="w-full min-h-[60%] sm:min-h-[50%] min-[896px]:min-h-[55%] lg:min-h-[60%] relative overflow-hidden rounded-t-xl">
              <Image
                src={property.thumbnail}
                alt={property.title}
                fill
                sizes="50vw"
                className={`absolute object-cover rounded-t-xl transition-all duration-1000 ease-in-out ${
                  hoveredProperty == index ? "scale-110" : ""
                }`}
              />
            </div>
            <div className="flex flex-col min-[448px]:flex-row sm:flex-col md:flex-row gap-4 p-4">
              <h3 className="w-full min-[448px]:w-1/3 sm:w-full md:w-1/3 text-[#f93a97] text-sm xl:text-base font-ubuntu tracking-wide uppercase">
                {property.title}
              </h3>
              <div className="w-full min-[448px]:w-2/3 sm:w-full md:w-2/3 flex flex-col gap-2 text-xs min-[448px]:text-sm">
                <p>{property.snippet}</p>
                <p>
                  <strong>Ubicación:</strong> {property.location}
                </p>
                <p>
                  <strong>Área:</strong> {property.area}
                </p>
                <p>
                  <strong>Estado:</strong> {property.status}
                </p>
                <p>
                  <strong>Precio:</strong> {property.price}
                </p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
