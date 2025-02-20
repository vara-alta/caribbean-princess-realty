import Image from "next/image";
import { services } from "@/lib/services";
import { Button } from "./ui/Button";
import Link from "next/link";

export default function ServicesResume() {
  return (
    <div className="py-16 lg:py-20 xl:py-24">
      <div className="flex flex-col gap-16">
        <h2 className="text-7xl text-center text-[#f93a97] font-benedict text-shadow-sm shadow-[#64173c] tracking-wide capitalize">
          Nuestros servicios
        </h2>
        <div className="grid grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-white flex flex-col items-center p-6 rounded-xl shadow-2xl shadow-[#feebf5] before:absolute before:inset-0 before:-z-10 before:bg-[#feebf5] before:blur-lg"
            >
              <Image
                src={service.art}
                alt={service.title}
                width={service.width}
                height={service.height}
                className="w-64 h-64 object-contain"
              />

              <div className="flex flex-col items-center gap-4">
                <h3 className="text-xl text-[#f93a97] font-ubuntu tracking-wide uppercase">
                  {service.title}
                </h3>
                <p className="text-sm text-center">{service.snippet}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex justify-center">
          <Link href="/acerca">
            <Button variant="primary" size="lg">
              Explorar servicios
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
