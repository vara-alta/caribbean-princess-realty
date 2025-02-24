import Image from "next/image";
import { services } from "@/lib/services";

export default function ServicesDetails() {
  return (
    <section className="">
      <div className="py-16 lg:py-20 xl:py-24">
        <section className="flex flex-col items-center gap-8 sm:gap-12 md:gap-16">
          <h2 className="text-4xl min-[448px]:text-5xl lg:text-6xl xl:text-7xl text-center text-[#f93a97] font-benedict text-shadow-sm shadow-[#64173c] tracking-wide capitalize">
            Nuestros servicios
          </h2>
          <section className="w-full min-[512px]:w-[80%] sm:w-[70%] md:w-[60%] min-[896px]:w-full grid grid-cols-1 min-[896px]:grid-cols-2 gap-12 min-[896px]:gap-8 lg:gap-10 xl:gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative min-h-[500px] w-full bg-white flex flex-col items-center rounded-xl shadow-2xl shadow-[#feebf5] overflow-hidden before:absolute before:inset-0 before:-z-10 before:bg-[#feebf5] before:blur-lg"
              >
                <Image
                  src={service.picture}
                  alt={service.title}
                  fill
                  sizes="25vw"
                  className="absolute object-cover rounded-xl"
                />
                <div className="w-full h-full flex flex-col justify-center gap-2 p-6 sm:p-10 absolute top-0 rounded-xl bg-black/60 text-white overflow-hidden z-10">
                  <h3 className="text-2xl font-ubuntu tracking-wider uppercase">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed tracking-wide">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </section>
        </section>
      </div>
    </section>
  );
}
