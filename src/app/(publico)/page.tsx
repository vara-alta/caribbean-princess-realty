import PropertiesResume from "@/components/PropertiesResume";
import PropertyRecruitment from "@/components/PropertyRecruitment";
import ServicesResume from "@/components/ServicesResume";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Caribbean Princess Realty",
  description:
    "Empresa dedicada al sector inmobiliario establecida en La Ceiba, Honduras. Prestamos servicios de compra, venta, arrendamiento, y administración de inmuebles. Servimos tanto al público local como internacional.",
};

export const dynamic = "force-static"; // This ensures the page is statically generated

export default function Home() {
  return (
    <section className="w-full">
      <section className="w-full px-4 sm:px-8 lg:px-16 2xl:px-32">
        {/* md:px-8 lg:px-16 xl:px-32 2xl:px-64 */}
        <section className="py-16 lg:py-20 xl:py-24">
          <div className="flex flex-col items-center gap-8 sm:gap-12 md:gap-16">
            <h2 className="text-4xl min-[448px]:text-5xl lg:text-6xl xl:text-7xl text-center text-[#f93a97] font-benedict text-shadow-sm shadow-[#64173c] tracking-wide capitalize">
              Sobre nosotros
            </h2>
            <p className="w-full min-[448px]:w-[80%] min-[512px]:w-[70%] sm:w-[60%] min-[832px]:w-[50%] text-center text-sm min-[448px]:text-base tracking-wide leading-relaxed">
              <span className="font-semibold font-benedict text-2xl min-[448px]:text-3xl text-[#afe6d8] text-shadow-sm shadow-[#4e6660] tracking-widest">
                Caribbean Princess Realty{" "}
              </span>
              es una empresa <span className="underline">hondureña</span>{" "}
              dedicada al{" "}
              <span className="font-semibold">sector inmobiliario</span>,
              ubicada en la ciudad de La Ceiba, protegida por la cordillera de
              Nombre de Dios. Estamos al servicio del público{" "}
              <span className="font-semibold">local</span> e{" "}
              <span className="font-semibold">internacional</span> pero con un
              mayor enfoque en los{" "}
              <span className="font-semibold text-[#f93a97]">extranjeros</span>{" "}
              que quieran invertir sus recursos ya sea en un lugar para llamar
              hogar, un lugar de vacaciones, un activo para generar ingresos o
              la administración de sus patrimonios.
            </p>
          </div>
        </section>
        <ServicesResume />
        <PropertiesResume />
      </section>
      <PropertyRecruitment />
    </section>
  );
}
