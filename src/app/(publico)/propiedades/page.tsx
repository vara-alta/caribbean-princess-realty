import PropertiesList from "@/components/PropertiesList";
import { properties } from "@/lib/properties";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Nuestro listado de propiedades en venta y alquiler. Encuentre su próximo hogar en Honduras o ponga su propiedad en el mercado y nosotros nos encargaremos de ser el vínculo con potenciales compradores o arrendatarios.",
};

export const dynamic = "force-static"; // This ensures the page is statically generated

export default function Propiedades() {
  const numItems = properties.length;

  return (
    <div className="px-4 sm:px-8 lg:px-16 2xl:px-32 py-16 lg:py-20 xl:py-24">
      <PropertiesList properties={properties} numItems={numItems} />
    </div>
  );
}
