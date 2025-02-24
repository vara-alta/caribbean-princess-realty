import ServicesDetails from "@/components/ServicesDetails";

export default function Acerca() {
  return (
    <section className="px-4 sm:px-8 lg:px-16 2xl:px-32">
      {/* QUIENES SOMOS */}
      <div className="py-16 lg:py-20 xl:py-24">
        <section className="w-full flex flex-col items-center gap-8 sm:gap-12 md:gap-16">
          <h2 className="text-4xl min-[448px]:text-5xl lg:text-6xl xl:text-7xl text-center text-[#f93a97] font-benedict text-shadow-sm shadow-[#64173c] tracking-wide capitalize">
            Quiénes somos
          </h2>
          <section className="w-full min-[448px]:w-[80%] min-[512px]:w-[70%] sm:w-[60%] min-[832px]:w-[50%] text-center text-sm min-[448px]:text-base space-y-8 tracking-wide leading-relaxed">
            <p>
              <span className="font-semibold font-benedict text-3xl text-[#afe6d8] text-shadow-sm shadow-[#4e6660] tracking-widest ">
                Caribbean Princess Realty{" "}
              </span>
              es una empresa <span className="underline">hondureña</span>{" "}
              dedicada al{" "}
              <span className="font-semibold">sector inmobiliario</span>{" "}
              establecida en La Ceiba, ciudad portuaria al norte de Honduras.
              Estamos al servicio del público{" "}
              <span className="font-semibold">local</span> e{" "}
              <span className="font-semibold">internacional</span> pero con un
              mayor enfoque en los{" "}
              <span className="font-semibold text-[#f93a97]">extranjeros</span>{" "}
              que quieran invertir sus recursos ya sea en un lugar para llamar
              hogar, un lugar de vacaciones o un activo para obtener ingresos.
            </p>
            <p>
              Somos conscientes de que cualquiera que sea su objetivo en materia
              inmobiliaria, llámese{" "}
              <span className="font-semibold text-[#f93a97]">
                compra, venta, alquiler o gestión,
              </span>{" "}
              puede resultar abrumador sin los conocimientos especializados
              necesarios. Nos aseguramos de crear una conexión con vendedores,
              compradores e inversionistas con el propósito de facilitar
              compras, ventas, arrendamientos, e inversión de propiedades.
            </p>
          </section>
        </section>
      </div>

      {/* NUESTROS SERVICIOS */}
      <ServicesDetails />
    </section>
  );
}
