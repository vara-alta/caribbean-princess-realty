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
      className="w-full h-[300px] min-[384px]:h-[325px] min-[448px]:h-[350px] min-[512px]:h-[375px] min-[576px]:h-[400px] min-[704px]:h-[350px] min-[896px]:h-[400px] lg:h-[450px] min-[1152px]:h-[500px] xl:h-[550px] rounded-xl object-cover"
    >
      <source src={property.video} type="video/mp4" />
      Tu navegador no soporta video.
    </video>
  );
}
