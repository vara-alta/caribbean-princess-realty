import { FaEnvelope, FaMobile } from "react-icons/fa";
import SocialMediaIcons from "../global/SocialMediaIcons";
import Link from "next/link";

export default function Footer() {
  const date = new Date();
  return (
    <footer className="w-full flex flex-col items-center pb-6">
      <SocialMediaIcons />
      <section className="w-[90%] min:[384px]:w-[80%] min-[448px]:w-[70%] min-[512px]:w-[60%] sm:w-[50%] flex flex-col items-center gap-12 sm:gap-16">
        {/* DIRECCION */}
        <div className="flex flex-col items-center gap-2">
          <h3 className="font-benedict text-[#afe6d8] text-3xl sm:text-4xl text-shadow-sm shadow-[#4e6660] tracking-wide">
            Dirección
          </h3>
          <p className="text-sm sm:text-base text-center leading-relaxed">
            2do piso del Edificio Banco Lafise, Bo. Solares Nuevos, Avenida San
            Isidro entre calle 12 y 13, La Ceiba, Atlántida, Honduras, C.A.
          </p>
        </div>
        {/* HORARIOS DE OFICINA */}
        <div className="flex flex-col items-center gap-2">
          <h3 className="font-benedict text-[#afe6d8] text-3xl sm:text-4xl text-shadow-sm shadow-[#4e6660] tracking-wide">
            Horario de oficina
          </h3>
          <div className="flex flex-col text-sm sm:text-base text-center capitalize">
            <p>
              lunes - viernes, 8 <span className="uppercase">am</span> - 4{" "}
              <span className="uppercase">pm</span>
            </p>
            <p>
              sábado, 9 <span className="uppercase">am</span> - 12{" "}
              <span className="uppercase">pm</span>
            </p>
          </div>
        </div>
        {/* CONTACTO */}
        <div className="flex flex-col items-center gap-3">
          <h3 className="font-benedict text-[#afe6d8] text-3xl sm:text-4xl text-shadow-sm shadow-[#4e6660] tracking-wide">
            Contacto
          </h3>
          <div className="flex gap-8 items-center">
            {/* MOBILE */}
            <a href="tel:50495827099">
              <FaMobile size={30} className="text-[#f93a97]" />
            </a>
            {/* EMAIL */}
            <a href="mailto:info@caribbeanprincessrealty.com">
              <FaEnvelope size={30} className="text-[#f93a97]" />
            </a>
          </div>
        </div>
        {/* MENU */}
        <nav className="flex flex-col sm:flex-row gap-12 text-xl text-[#f93a97] text-shadow-sm shadow-[#64173c] font-ubuntu tracking-wide">
          <Link
            href={"/"}
            className="flex items-center justify-center h-full relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[0px] after:h-[2px] after:bg-[#f93a97] after:transition-all hover:after:w-[100%] focus-visible:after:w-[100%]"
          >
            Inicio
          </Link>
          <Link
            href={"/acerca"}
            className="flex items-center justify-center h-full relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[0px] after:h-[2px] after:bg-[#f93a97] after:transition-all hover:after:w-[100%] focus-visible:after:w-[100%]"
          >
            Acerca
          </Link>
          <Link
            href={"/propiedades"}
            className="flex items-center justify-center h-full relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[0px] after:h-[2px] after:bg-[#f93a97] after:transition-all hover:after:w-[100%] focus-visible:after:w-[100%]"
          >
            Propiedades
          </Link>
          <Link
            href={"/contacto"}
            className="flex items-center justify-center h-full relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[0px] after:h-[2px] after:bg-[#f93a97] after:transition-all hover:after:w-[100%] focus-visible:after:w-[100%]"
          >
            Contacto
          </Link>
        </nav>

        <div className="w-full flex flex-col items-center gap-2">
          {/* COPYRIGHT */}
          <div className="flex flex-col">
            <p className="text-sm sm:text-base text-center">
              &#169; {date.getFullYear()} Caribbean Princess Realty
            </p>
          </div>
          {/* POLITICS */}
          <nav
            className="flex gap-4 sm:gap-6 text-[10px] sm:text-xs"
            aria-label="Footer Navigation - Policies"
          >
            <div className="flex">
              <Link
                href="/privacidad"
                className="inline-block relative no-underline tracking-wider after:content-[''] after:absolute after:w-[100%] after:scale-x-100 after:h-[1px] after:bottom-0 after:right-0 after:bg-[#808080] after:origin-bottom-left after:transition-transform hover:after:scale-x-0 hover:after:origin-bottom-right"
              >
                Privacidad
              </Link>
            </div>
            <div className="flex">
              <Link
                href="/terminos"
                className="inline-block relative no-underline tracking-wider after:content-[''] after:absolute after:w-[100%] after:scale-x-100 after:h-[1px] after:bottom-0 after:right-0 after:bg-[#808080] after:origin-bottom-left after:transition-transform hover:after:scale-x-0 hover:after:origin-bottom-right"
              >
                Términos{" "}
              </Link>
            </div>
            <div className="flex">
              <Link
                href="/cookies"
                className="inline-block relative no-underline tracking-wider after:content-[''] after:absolute after:w-[100%] after:scale-x-100 after:h-[1px] after:bottom-0 after:right-0 after:bg-[#808080] after:origin-bottom-left after:transition-transform hover:after:scale-x-0 hover:after:origin-bottom-right"
              >
                Cookies
              </Link>
            </div>
          </nav>
          {/* extra space when sharing buttons are at the bottom in small screens */}
          <div className="visible h-11 md:hidden"></div>
        </div>
      </section>
    </footer>
  );
}
