import ContactForm from "@/components/forms/ContactForm";
import LocationMap from "@/components/LocationMap";

export default function Contacto() {
  // Company's location
  const companyLatitude = 15.780229299186804; // company's latitude
  const companyLongitude = -86.78938435331692; // company's longitude

  return (
    <section className="w-full">
      {/* FORM SECTION */}
      <section className="flex px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 py-16 lg:py-20 xl:py-24">
        {/* Left side */}
        <div className="w-3/4 space-y-6 border-r border-solid border-[#f93a97] pr-16">
          <p className="text-sm leading-relaxed">
            ¿Buscando la casa de sus sueños? o ¿Necesita una guía experta para
            comprar o vender?. Estamos aquí para ayudar. Llene nuestro
            formulario de abajo y discutamos como podemos ayudarle a encontrar
            la casa perfecta o inversión para usted. Su propiedad ideal está a
            un solo click de distancia.{" "}
          </p>
          {/*  CONTACT FORM */}
          <ContactForm />
        </div>
        {/* Right side */}
        <section className="w-1/4 flex flex-col gap-8 pl-16">
          <div className="space-y-1">
            <h3 className="uppercase tracking-wide">Teléfono</h3>
            <a
              href="tel:50495827099"
              className="text-[#f93a97] text-sm inline-block relative no-underline after:content-[''] after:absolute after:w-[100%] after:scale-x-100 after:h-[1px] after:bottom-0 after:right-0 after:bg-[#f93a97] after:origin-bottom-left after:transition-transform hover:after:scale-x-0 hover:after:origin-bottom-right"
            >
              (504) 9582-7099
            </a>
          </div>
          <div className="space-y-1">
            <h3 className="uppercase tracking-wide">Correo electrónico</h3>
            <a
              href="mailto:info@caribbeanprincessrealty.com"
              className="text-[#f93a97] text-sm inline-block relative no-underline after:content-[''] after:absolute after:w-[100%] after:scale-x-100 after:h-[1px] after:bottom-0 after:right-0 after:bg-[#f93a97] after:origin-bottom-left after:transition-transform hover:after:scale-x-0 hover:after:origin-bottom-right"
            >
              info@caribbeanprincessrealty.com
            </a>
          </div>
          <div className="space-y-1">
            <h3 className="uppercase tracking-wide">Dirección</h3>
            <p className="text-[#f93a97] text-sm">
              2do piso del Edificio Banco Lafise, Bo. Solares Nuevos, Avenida
              San Isidro entre calle 12 y 13, La Ceiba, Atlántida, Honduras,
              C.A.
            </p>
          </div>
          <div className="space-y-1">
            <h3 className="uppercase tracking-wide">Horario de oficina</h3>
            <div className="flex flex-col text-[#f93a97] text-sm capitalize">
              <p>
                lun - vie, 8 <span className="uppercase">am</span> - 4{" "}
                <span className="uppercase">pm</span>
              </p>
              <p>
                sab, 9 <span className="uppercase">am</span> - 12{" "}
                <span className="uppercase">pm</span>
              </p>
            </div>
          </div>
        </section>
      </section>
      {/* MAP SECTION */}
      <section className="w-full h-96">
        {/* LOCATION MAP*/}
        <LocationMap latitude={companyLatitude} longitude={companyLongitude} />
      </section>
    </section>
  );
}
