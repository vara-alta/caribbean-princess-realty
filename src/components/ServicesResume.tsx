import Image from "next/image";
import { services } from "@/lib/services";
import { Button } from "./ui/Button";
import Link from "next/link";

export default function ServicesResume() {
  return (
    <div className="py-16 lg:py-20 xl:py-24">
      <div className="flex flex-col gap-12 sm:gap-14 md:gap-16">
        <h2 className="text-4xl min-[448px]:text-5xl lg:text-6xl xl:text-7xl text-center text-[#f93a97] font-benedict text-shadow-sm shadow-[#64173c] tracking-wide capitalize">
          Nuestros servicios
        </h2>
        <div className="w-[95%] min-[384px]:w-[80%] min-[448px]:w-[70%] min-[512px]:w-[60%] min-[576px]:w-[50%] sm:w-[95%] min-[704px]:w-[85%] md:w-[75%] min-[896px]:w-[65%] lg:w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-10 lg:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-white flex flex-col gap-6 items-center justify-center p-6 rounded-xl shadow-2xl shadow-[#feebf5] min-h-[400px] before:absolute before:inset-0 before:-z-10 before:bg-[#feebf5] before:blur-lg"
            >
              {/* Image art */}
              <div className="flex items-center justify-center min-h-[50%]">
                <Image
                  src={service.art}
                  alt={service.title}
                  width={service.width}
                  height={service.height}
                  className="w-48 min-[384px]:w-44 sm:w-40 min-[1152px]:w-44 2xl:w-48 h-auto object-contain"
                />
              </div>

              {/* Text content */}
              <div className="h-full flex flex-col items-center gap-4">
                <h3 className="text-xl sm:text-lg 2xl:text-xl text-[#f93a97] font-ubuntu tracking-wide uppercase">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-xs 2xl:text-sm text-center">
                  {service.snippet}
                </p>
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
