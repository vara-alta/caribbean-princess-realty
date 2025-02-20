import Link from "next/link";
import PropertiesList from "./PropertiesList";
import { properties } from "@/lib/properties";
import { Button } from "./ui/Button";

export default function PropertiesResume() {
  const numItems = 4;

  return (
    <div className="py-16 lg:py-20 xl:py-24">
      <div className="flex flex-col gap-16">
        <h2 className="text-7xl text-center text-[#f93a97] font-benedict text-shadow-sm shadow-[#64173c] tracking-wide capitalize">
          Propiedades Recientes
        </h2>
        <PropertiesList properties={properties} numItems={numItems} />
        <Link href={"/propiedades"}>
          <div className="w-full flex justify-center">
            <Button variant="primary" size="lg">
              Explorar todas
            </Button>
          </div>
        </Link>
      </div>
    </div>
  );
}
