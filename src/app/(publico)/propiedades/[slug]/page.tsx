"use client";

import LocationMap from "@/components/LocationMap";
import { useParams } from "next/navigation";
import { properties } from "@/lib/properties";
import PropertyGallery from "@/components/PropertyGallery";
import Breadcrumbs from "@/components/Breadcrumbs";
import PropertyVideo from "@/components/PropertyVideo";
import PropertyFeatures from "@/components/PropertyFeatures";
import { Button } from "@/components/ui/Button";

export default function Propiedad() {
  const { slug } = useParams();
  const property = properties.find((property) => property.slug === slug);

  const isFeaturesEmpty =
    property?.features.exterior.length === 0 &&
    property?.features.interior.length === 0 &&
    property?.features.extras.length === 0;

  if (!property) return <p>Propiedad no encontrada.</p>;

  return (
    <section className="w-full">
      <section className="w-full space-y-12 pb-12">
        <section className="w-full">
          {/* PROPERTY GALLERY */}
          <PropertyGallery />
        </section>

        {/* PROPERTY DESCRIPTION */}
        <section className="w-full h-auto space-y-12 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
          {/* TEXTO */}
          <Breadcrumbs />
          <div className="flex gap-12 w-full text-sm">
            <div className="w-1/3 space-y-12">
              <div className="space-y-4">
                <p className="leading-relaxed">{property.description}</p>
                <p>
                  <span className="font-semibold">Ubicación:</span>{" "}
                  {property.location}
                </p>
                <p>
                  <span className="font-semibold">Área Superficial:</span>{" "}
                  {property.area}
                </p>
              </div>
              <div className="w-full flex items-center justify-center gap-6">
                <a href="tel:50495827099">
                  <Button variant="primary" size="md">
                    Hacer llamada
                  </Button>
                </a>
                <a href="mailto:info@caribbeanprincessrealty.com">
                  <Button variant="primary" size="md">
                    Enviar correo
                  </Button>
                </a>
              </div>
            </div>
            <div className="w-2/3">
              {/* PROPERTY VIDEO */}
              <PropertyVideo />
            </div>
          </div>
        </section>
      </section>

      {/* PROPERTY FEATURES */}
      <div>{!isFeaturesEmpty && <PropertyFeatures />}</div>

      {/* PROPERTY LOCATION */}
      <section className="w-full h-96">
        {/* MAP*/}
        <LocationMap
          latitude={property.latitude}
          longitude={property.longitude}
        />
      </section>
    </section>
  );
}
