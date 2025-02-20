import PropertiesList from "@/components/PropertiesList";
import { properties } from "@/lib/properties";

export default function Propiedades() {
  const numItems = properties.length;

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 py-16 lg:py-20 xl:py-24">
      <PropertiesList properties={properties} numItems={numItems} />
    </div>
  );
}
