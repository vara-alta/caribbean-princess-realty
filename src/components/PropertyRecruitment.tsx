import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/Button";

export default function PropertyRecruitment() {
  return (
    <section className="relative w-full h-[calc(100vh-100px)] flex items-center justify-center text-white">
      <Image
        src={"/reclutamiento-propiedad.jpg"}
        alt={"Reclutamiento de Propiedad"}
        fill
        sizes="100vw"
        className="absolute object-cover"
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      <div className="w-[50%] flex flex-col items-center gap-8 z-10">
        <h2 className="text-7xl text-center text-[#afe6d8] font-benedict text-shadow-sm shadow-[#4e6660] tracking-wide capitalize">
          Trabaje con nosotros
        </h2>
        <p className="tracking-wide leading-relaxed text-center">
          ¿Es propietario(a) de un inmueble? En Caribbean Princess Realty nos
          encargaremos de que obtenga la mayor rentabilidad posible de su
          propiedad en cualquiera de los servicios que ofrecemos, sea compra,
          venta, alquiler y administración y gestión de los mismos.
        </p>
        <Link href={"/contacto"}>
          <Button variant="primary" size="lg">
            Contáctenos
          </Button>
        </Link>
      </div>
    </section>
  );
}
