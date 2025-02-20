"use client";

import { properties } from "@/lib/properties";
import { useParams } from "next/navigation";

export default function PropertyVideo() {
  const { slug } = useParams();
  const property = properties.find((property) => property.slug === slug);

  if (!property) return <p>Propiedad no encontrada.</p>;

  return (
    <video
      autoPlay
      loop
      muted
      controls
      className="w-full h-full rounded-xl object-cover"
    >
      <source src={property.video} type="video/mp4" />
      Tu navegador no soporta video.
    </video>
  );
}
