import { properties } from "@/lib/properties";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function PropertyFeatures() {
  const { slug } = useParams();
  const property = properties.find((property) => property.slug === slug);

  if (!property) return <p>Propiedad no encontrada.</p>;

  const features = property.features;
  const featureCategories = [
    { title: "Exterior", data: features.exterior },
    { title: "Interior", data: features.interior },
    { title: "Extras", data: features.extras },
  ];

  return (
    <section className="relative w-full h-full flex items-center justify-center px-4 sm:px-8 lg:px-16 2xl:px-32 py-16 lg:py-20 xl:py-24">
      <Image
        src={"/palm-tree-background.jpg"}
        alt="Palm Tree Header Background"
        sizes="100vw"
        fill
        className="absolute object-cover"
      />
      <div className="absolute inset-0 bg-white/90" />

      <div className="flex flex-col items-center justify-center gap-12 md:gap-14 lg:gap-16 z-10">
        <h2 className="text-3xl min-[448px]:text-4xl lg:text-5xl xl:text-6xl text-center text-[#afe6d8] font-benedict text-shadow-sm shadow-[#4e6660] tracking-wide capitalize">
          Características & amenidades
        </h2>
        <div className="w-full grid grid-cols-1 min-[512px]:grid-cols-2 min-[704px]:grid-cols-3 gap-6 md:gap-8 xl:gap-10">
          {featureCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-lg md:text-xl text-[#f93a97] font-semibold mb-2 sm:mb-4 lg:mb-6">
                {category.title}
              </h3>
              <ul className="text-sm lg:text-base list-disc list-inside space-y-2">
                {category.data.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
