import { Button } from "@/components/ui/Button";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 error",
};

// Optional: Explicitly define static generation
export function getStaticProps() {
  return { props: {} };
}

export const dynamic = "force-static"; // This ensures the page is statically generated

export default function notFound() {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 pt-[216px] md:pt-[248px]">
      <div className="flex py-16">
        <div className="flex flex-col items-center justify-center gap-y-4 border shadow-lg rounded-2xl p-16 m-auto space-y-5 text-center">
          <h1 className="font-monserrat text-3xl text-[#f93a97]">
            Página no encontrada
          </h1>
          <p className="text-fontsecondary">
            La página que buscas no se encuentra o está temporalmente no
            disponible.
          </p>
          <div className="w-full flex justify-center">
            <Link href="/">
              <Button variant="primary" size="lg">
                Regresar al inicio
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
