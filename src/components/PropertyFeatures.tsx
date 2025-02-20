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
    <section className="relative w-full h-full flex items-center justify-center p-16">
      <Image
        src={"/palm-tree-background.jpg"}
        alt=""
        sizes="100vw"
        fill
        className="absolute object-cover"
      />
      <div className="absolute inset-0 bg-white/90" />

      <div className="flex flex-col items-center justify-center gap-16 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 z-10">
        <h2 className="font-semibold font-benedict text-5xl text-[#afe6d8] text-shadow-sm shadow-[#4e6660] tracking-widest capitalize ">
          Características & amenidades
        </h2>
        <div className="w-full grid grid-cols-3 gap-8">
          {featureCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-xl text-[#f93a97] font-semibold mb-6">
                {category.title}
              </h3>
              <ul className="list-disc list-inside space-y-2">
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
