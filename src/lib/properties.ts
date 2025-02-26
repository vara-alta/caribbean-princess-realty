export interface Property {
  _id: string;
  thumbnail: string;
  video?: string;
  title: string;
  slug: string;
  snippet: string;
  description: string;
  gallery: { src: string; alt: string }[]; // Array of images
  features: {
    exterior: string[];
    interior: string[];
    extras: string[];
  };
  location: string;
  area: string;
  status: string;
  price: string;
  latitude: number;
  longitude: number;
}
export const properties: Property[] = [
  {
    _id: "8",
    thumbnail:
      "/propiedades/propiedad_8/lote-con-vista-panoramica-en-residencial-las-colinas.jpg",
    video: "/palm-tree-video.mp4",
    slug: "lote-con-vista-panoramica-en-residencial-las-colinas",
    title: "Lote con vista panorámica en residencial Las Colinas",
    snippet:
      "Lote en Residencial Las Colinas, ofrece una vista panorámica de la ciudad y está localizado cerca de la Universidad Católica de Honduras.",
    description:
      "Lote en Residencial Las Colinas, ofrece una vista panorámica de la ciudad y está localizado cerca de la Universidad Católica de Honduras.",
    gallery: [
      {
        src: "/propiedades/propiedad_8/lote-con-vista-panoramica-en-residencial-las-colinas.jpg",
        alt: "Lote con vista panorámica en residencial Las Colinas",
      },
      {
        src: "/propiedades/propiedad_8/lote-con-vista-panoramica-en-residencial-las-colinas-2.jpg",
        alt: "Lote con vista panorámica en residencial Las Colinas 2",
      },
      {
        src: "/propiedades/propiedad_8/lote-con-vista-panoramica-en-residencial-las-colinas-3.jpg",
        alt: "Lote con vista panorámica en residencial Las Colinas 3",
      },
    ],
    features: {
      exterior: [],
      interior: [],
      extras: [],
    },
    location: "La Ceiba, Atlántida",
    area: "718.46 m²",
    status: "En venta",
    price: "$75,000.00 (negociable)",
    latitude: 15.76399155125985,
    longitude: -86.80433794648427,
  },
  {
    _id: "7",
    thumbnail:
      "/propiedades/propiedad_7/propiedad-de-2-casas-de-habitacion.jpg",
    video: "/palm-tree-video.mp4",
    slug: "propiedad-de-2-casas-de-habitacion",
    title: "Propiedad de 2 casas de habitación",
    snippet:
      "Propiedad que consta de dos casas de habitación ubicada en un vecindario céntrico de la ciudad lindante al Club de Golf Dantoni y diversidad de comercios.",
    description:
      "Propiedad que consta de dos casas de habitación, ubicada en un vecindario céntrico de la ciudad, rodeada de una extensa área verde al ser lindante al Club de Golf Dantoni y diversidad de comercios como: farmacias, supermercados, centros comerciales, cafeterías, bancos y más.",
    gallery: [
      {
        src: "/propiedades/propiedad_7/propiedad-de-2-casas-de-habitacion.jpg",
        alt: "Propiedad de 2 casas de habitación",
      },
      {
        src: "/propiedades/propiedad_7/propiedad-de-2-casas-de-habitacion-2.jpg",
        alt: "Propiedad de 2 casas de habitación 2",
      },
      {
        src: "/propiedades/propiedad_7/propiedad-de-2-casas-de-habitacion-3.jpg",
        alt: "Propiedad de 2 casas de habitación 3",
      },
      {
        src: "/propiedades/propiedad_7/propiedad-de-2-casas-de-habitacion-4.jpg",
        alt: "Propiedad de 2 casas de habitación 4",
      },
      {
        src: "/propiedades/propiedad_7/propiedad-de-2-casas-de-habitacion-5.jpg",
        alt: "Propiedad de 2 casas de habitación 5",
      },
    ],
    features: {
      exterior: [
        "3 dormitorios",
        "2 Baños (uno privado y otro compartido)",
        "Sala de estar",
        "Comedor",
        "Cocina",
      ],
      interior: [
        "3 habitaciones",
        "1 baño",
        "Sala de estar",
        "Comedor",
        "Cocina",
      ],
      extras: ["Bodega", "2 pilas"],
    },
    location: "La Ceiba, Atlántida",
    area: "355.7 m²",
    status: "En venta",
    price: "$125,000.00 (negociable)",
    latitude: 15.776640483655482,
    longitude: -86.78899671292189,
  },
  {
    _id: "6",
    thumbnail:
      "/propiedades/propiedad_6/lote-con-vista-al-oceano-atlantico-y-montanas-en-coco-pando.jpg",
    video:
      "/propiedades/propiedad_6/lote-con-vista-al-oceano-atlantico-y-montanas-en-coco-pando.mp4",
    slug: "lote-con-vista-al-oceano-atlantico-y-montanas-en-coco-pando",
    title: "Lote con vista al océano Atlántico y montañas en Coco Pando",
    snippet:
      "Lote en Coco Pando con una hermosa vista del Oceano y una vista panorámica de las montañas.",
    description:
      "Lote en Coco Pando con una hermosa vista del Oceano y una vista panorámica de las montañas.",
    gallery: [
      {
        src: "/propiedades/propiedad_6/lote-con-vista-al-oceano-atlantico-y-montanas-en-coco-pando.jpg",
        alt: "Lote con vista al océano Atlántico y montañas en Coco Pando",
      },
      {
        src: "/propiedades/propiedad_6/lote-con-vista-al-oceano-atlantico-y-montanas-en-coco-pando-2.jpg",
        alt: "Lote con vista al océano Atlántico y montañas en Coco Pando 2",
      },
      {
        src: "/propiedades/propiedad_6/lote-con-vista-al-oceano-atlantico-y-montanas-en-coco-pando-3.jpg",
        alt: "Lote con vista al océano Atlántico y montañas en Coco Pando 3",
      },
      {
        src: "/propiedades/propiedad_6/lote-con-vista-al-oceano-atlantico-y-montanas-en-coco-pando-4.jpg",
        alt: "Lote con vista al océano Atlántico y montañas en Coco Pando 4",
      },
      {
        src: "/propiedades/propiedad_6/lote-con-vista-al-oceano-atlantico-y-montanas-en-coco-pando-5.jpg",
        alt: "Lote con vista al océano Atlántico y montañas en Coco Pando 5",
      },
      {
        src: "/propiedades/propiedad_6/lote-con-vista-al-oceano-atlantico-y-montanas-en-coco-pando-6.jpg",
        alt: "Lote con vista al océano Atlántico y montañas en Coco Pando 6",
      },
      {
        src: "/propiedades/propiedad_6/lote-con-vista-al-oceano-atlantico-y-montanas-en-coco-pando-7.jpg",
        alt: "Lote con vista al océano Atlántico y montañas en Coco Pando 7",
      },
      {
        src: "/propiedades/propiedad_6/lote-con-vista-al-oceano-atlantico-y-montanas-en-coco-pando-8.jpg",
        alt: "Lote con vista al océano Atlántico y montañas en Coco Pando 8",
      },
      {
        src: "/propiedades/propiedad_6/lote-con-vista-al-oceano-atlantico-y-montanas-en-coco-pando-9.jpg",
        alt: "Lote con vista al océano Atlántico y montañas en Coco Pando 9",
      },
      {
        src: "/propiedades/propiedad_6/lote-con-vista-al-oceano-atlantico-y-montanas-en-coco-pando-10.jpg",
        alt: "Lote con vista al océano Atlántico y montañas en Coco Pando 10",
      },
      {
        src: "/propiedades/propiedad_6/lote-con-vista-al-oceano-atlantico-y-montanas-en-coco-pando-11.jpg",
        alt: "Lote con vista al océano Atlántico y montañas en Coco Pando 11",
      },
      {
        src: "/propiedades/propiedad_6/lote-con-vista-al-oceano-atlantico-y-montanas-en-coco-pando-12.jpg",
        alt: "Lote con vista al océano Atlántico y montañas en Coco Pando 12",
      },
      {
        src: "/propiedades/propiedad_6/lote-con-vista-al-oceano-atlantico-y-montanas-en-coco-pando-13.jpg",
        alt: "Lote con vista al océano Atlántico y montañas en Coco Pando 13",
      },
    ],
    features: {
      exterior: [],
      interior: [],
      extras: [],
    },
    location: "La Ceiba, Atlántida",
    area: "656.14 m²",
    status: "En venta",
    price: "$60,000.00 (negociable)",
    latitude: 15.765760290306021,
    longitude: -86.83678706182796,
  },
  {
    _id: "5",
    thumbnail:
      "/propiedades/propiedad_5/villas-pico-bonito-en-la-cuenca-el-cangrejal.jpeg",
    video:
      "/propiedades/propiedad_5/villas-pico-bonito-en-la-cuenca-el-cangrejal.mp4",
    slug: "villas-pico-bonito-en-la-cuenca-el-cangrejal",
    title: "Villas Pico Bonito en la Cuenca El Cangrejal",
    snippet:
      "Villas Pico Bonito es un Eco-Resort dentro del Parque Pico Bonito junto al río Cangrejal que consta de 7 cabañas, bar, restaurante, piscina estilo infinita y más.",
    description:
      "Ubicado frente al Rio Cangrejal, con vista a la espectacular cascada de El Bejuco, y Pico Bonito, la cual mide 1 Manzana y media (1 ½ Mnz.) de extensión superficial, rodeado por la más variada colección de heliconias, y flores tropicales de Honduras, y consta de 7 cabañas, las cuales están dotadas cada una con sala, comedor, cocineta, dormitorio, y baño completo. Tiene una enorme piscina estilo infinito, instalaciones de bar, y restaurante, cocina de restaurante, baños, oficinas, cuarto de filtración para piscina, pozo de agua, con muro perimetral.",
    gallery: [
      {
        src: "/propiedades/propiedad_5/villas-pico-bonito-en-la-cuenca-el-cangrejal.jpeg",
        alt: "Villas Pico Bonito en la Cuenca El Cangrejal",
      },
      {
        src: "/propiedades/propiedad_5/villas-pico-bonito-en-la-cuenca-el-cangrejal-2.jpeg",
        alt: "Villas Pico Bonito en la Cuenca El Cangrejal 2",
      },
      {
        src: "/propiedades/propiedad_5/villas-pico-bonito-en-la-cuenca-el-cangrejal-3.jpeg",
        alt: "Villas Pico Bonito en la Cuenca El Cangrejal 3",
      },
      {
        src: "/propiedades/propiedad_5/villas-pico-bonito-en-la-cuenca-el-cangrejal-4.jpg",
        alt: "Villas Pico Bonito en la Cuenca El Cangrejal 4",
      },
      {
        src: "/propiedades/propiedad_5/villas-pico-bonito-en-la-cuenca-el-cangrejal-5.jpg",
        alt: "Villas Pico Bonito en la Cuenca El Cangrejal 5",
      },
      {
        src: "/propiedades/propiedad_5/villas-pico-bonito-en-la-cuenca-el-cangrejal-6.jpg",
        alt: "Villas Pico Bonito en la Cuenca El Cangrejal 6",
      },
      {
        src: "/propiedades/propiedad_5/villas-pico-bonito-en-la-cuenca-el-cangrejal-7.jpeg",
        alt: "Villas Pico Bonito en la Cuenca El Cangrejal 7",
      },
      {
        src: "/propiedades/propiedad_5/villas-pico-bonito-en-la-cuenca-el-cangrejal-8.jpeg",
        alt: "Villas Pico Bonito en la Cuenca El Cangrejal 8",
      },
      {
        src: "/propiedades/propiedad_5/villas-pico-bonito-en-la-cuenca-el-cangrejal-9.jpg",
        alt: "Villas Pico Bonito en la Cuenca El Cangrejal 9",
      },
      {
        src: "/propiedades/propiedad_5/villas-pico-bonito-en-la-cuenca-el-cangrejal-10.jpeg",
        alt: "Villas Pico Bonito en la Cuenca El Cangrejal 10",
      },
      {
        src: "/propiedades/propiedad_5/villas-pico-bonito-en-la-cuenca-el-cangrejal-11.jpg",
        alt: "Villas Pico Bonito en la Cuenca El Cangrejal 11",
      },
      {
        src: "/propiedades/propiedad_5/villas-pico-bonito-en-la-cuenca-el-cangrejal-12.jpg",
        alt: "Villas Pico Bonito en la Cuenca El Cangrejal 12",
      },
      {
        src: "/propiedades/propiedad_5/villas-pico-bonito-en-la-cuenca-el-cangrejal-13.jpg",
        alt: "Villas Pico Bonito en la Cuenca El Cangrejal 13",
      },
      {
        src: "/propiedades/propiedad_5/villas-pico-bonito-en-la-cuenca-el-cangrejal-14.jpg",
        alt: "Villas Pico Bonito en la Cuenca El Cangrejal 14",
      },
      {
        src: "/propiedades/propiedad_5/villas-pico-bonito-en-la-cuenca-el-cangrejal-15.jpg",
        alt: "Villas Pico Bonito en la Cuenca El Cangrejal 15",
      },
      {
        src: "/propiedades/propiedad_5/villas-pico-bonito-en-la-cuenca-el-cangrejal-16.jpg",
        alt: "Villas Pico Bonito en la Cuenca El Cangrejal 16",
      },
      {
        src: "/propiedades/propiedad_5/villas-pico-bonito-en-la-cuenca-el-cangrejal-17.jpg",
        alt: "Villas Pico Bonito en la Cuenca El Cangrejal 17",
      },
      {
        src: "/propiedades/propiedad_5/villas-pico-bonito-en-la-cuenca-el-cangrejal-18.jpg",
        alt: "Villas Pico Bonito en la Cuenca El Cangrejal 18",
      },
      {
        src: "/propiedades/propiedad_5/villas-pico-bonito-en-la-cuenca-el-cangrejal-19.jpg",
        alt: "Villas Pico Bonito en la Cuenca El Cangrejal 19",
      },
      {
        src: "/propiedades/propiedad_5/villas-pico-bonito-en-la-cuenca-el-cangrejal-20.jpg",
        alt: "Villas Pico Bonito en la Cuenca El Cangrejal 20",
      },
      {
        src: "/propiedades/propiedad_5/villas-pico-bonito-en-la-cuenca-el-cangrejal-21.jpg",
        alt: "Villas Pico Bonito en la Cuenca El Cangrejal 21",
      },
    ],
    features: {
      exterior: [],
      interior: [],
      extras: [],
    },
    location: "La Ceiba, Atlántida",
    area: "12,547.44 m²",
    status: "En venta",
    price: "Consultar precio",
    latitude: 15.72793533647114,
    longitude: -86.74181250415685,
  },
  {
    _id: "4",
    thumbnail:
      "/propiedades/propiedad_4/casa-de-dos-pisos-en-la-comunidad-de-boca-vieja.jpeg",
    video: "/palm-tree-video.mp4",
    slug: "casa-de-dos-pisos-en-la-comunidad-de-boca-vieja",
    title: "Casa espaciosa de dos pisos en la comunidad de Boca Vieja",
    snippet:
      "Casa de dos pisos espaciosa en la comunidad de Boca Vieja ubicada aproximadamente a 100 metros de la playa.",
    description:
      "Casa de dos pisos espaciosa en la comunidad de Boca Vieja ubicada aproximadamente a 100 metros de la playa.",
    gallery: [
      {
        src: "/propiedades/propiedad_4/casa-de-dos-pisos-en-la-comunidad-de-boca-vieja.jpeg",
        alt: "Casa de dos pisos en la comunidad de Boca Vieja",
      },
      {
        src: "/propiedades/propiedad_4/casa-de-dos-pisos-en-la-comunidad-de-boca-vieja-2.jpeg",
        alt: "Casa de dos pisos en la comunidad de Boca Vieja 2",
      },
      {
        src: "/propiedades/propiedad_4/casa-de-dos-pisos-en-la-comunidad-de-boca-vieja-3.jpeg",
        alt: "Casa de dos pisos en la comunidad de Boca Vieja 3",
      },
      {
        src: "/propiedades/propiedad_4/casa-de-dos-pisos-en-la-comunidad-de-boca-vieja-4.jpeg",
        alt: "Casa de dos pisos en la comunidad de Boca Vieja 4",
      },
      {
        src: "/propiedades/propiedad_4/casa-de-dos-pisos-en-la-comunidad-de-boca-vieja-5.jpg",
        alt: "Casa de dos pisos en la comunidad de Boca Vieja 5",
      },
      {
        src: "/propiedades/propiedad_4/casa-de-dos-pisos-en-la-comunidad-de-boca-vieja-6.jpg",
        alt: "Casa de dos pisos en la comunidad de Boca Vieja 6",
      },
      {
        src: "/propiedades/propiedad_4/casa-de-dos-pisos-en-la-comunidad-de-boca-vieja-7.jpg",
        alt: "Casa de dos pisos en la comunidad de Boca Vieja 7",
      },
      {
        src: "/propiedades/propiedad_4/casa-de-dos-pisos-en-la-comunidad-de-boca-vieja-8.jpg",
        alt: "Casa de dos pisos en la comunidad de Boca Vieja 8",
      },
      {
        src: "/propiedades/propiedad_4/casa-de-dos-pisos-en-la-comunidad-de-boca-vieja-9.jpg",
        alt: "Casa de dos pisos en la comunidad de Boca Vieja 9",
      },
      {
        src: "/propiedades/propiedad_4/casa-de-dos-pisos-en-la-comunidad-de-boca-vieja-10.jpg",
        alt: "Casa de dos pisos en la comunidad de Boca Vieja 10",
      },
      {
        src: "/propiedades/propiedad_4/casa-de-dos-pisos-en-la-comunidad-de-boca-vieja-11.jpg",
        alt: "Casa de dos pisos en la comunidad de Boca Vieja 11",
      },
      {
        src: "/propiedades/propiedad_4/casa-de-dos-pisos-en-la-comunidad-de-boca-vieja-12.jpg",
        alt: "Casa de dos pisos en la comunidad de Boca Vieja 12",
      },
      {
        src: "/propiedades/propiedad_4/casa-de-dos-pisos-en-la-comunidad-de-boca-vieja-13.jpg",
        alt: "Casa de dos pisos en la comunidad de Boca Vieja 13",
      },
      {
        src: "/propiedades/propiedad_4/casa-de-dos-pisos-en-la-comunidad-de-boca-vieja-14.jpg",
        alt: "Casa de dos pisos en la comunidad de Boca Vieja 14",
      },
      {
        src: "/propiedades/propiedad_4/casa-de-dos-pisos-en-la-comunidad-de-boca-vieja-15.jpg",
        alt: "Casa de dos pisos en la comunidad de Boca Vieja 15",
      },
      {
        src: "/propiedades/propiedad_4/casa-de-dos-pisos-en-la-comunidad-de-boca-vieja-16.jpg",
        alt: "Casa de dos pisos en la comunidad de Boca Vieja 16",
      },
      {
        src: "/propiedades/propiedad_4/casa-de-dos-pisos-en-la-comunidad-de-boca-vieja-17.jpg",
        alt: "Casa de dos pisos en la comunidad de Boca Vieja 17",
      },
    ],
    features: {
      exterior: [
        "Amplio pasillo",
        "1 dormitorio",
        "1 Baño",
        "Lavandería",
        "Armario de escobas",
        "Escaleras",
      ],
      interior: [
        "Terraza",
        "Sala de estar",
        "Comedor",
        "Cocina",
        "2 dormitorios principales",
        "Oficina",
      ],
      extras: [
        "Muro a sus cuatro extremos",
        "Área de estacionamiento para 2 autos, completamente techado",
        "Pozo con sistema de filtración de agua",
        "Bomba eléctrica",
        "Pozo séptico",
        "Amplia zona verde",
        "A 3 minutos de la playa",
      ],
    },
    location: "La Ceiba, Atlántida",
    area: "980 m²",
    status: "En venta",
    price: "$200,000.00 (negociable)",
    latitude: 15.791649934728676,
    longitude: -86.74499513299155,
  },
  {
    _id: "3",
    thumbnail:
      "/propiedades/propiedad_3/lote-con-mar-de-frente-a-la-ensenada.jpg",
    video: "/propiedades/propiedad_3/lote-con-mar-de-frente-a-la-ensenada.mp4",
    slug: "lote-con-mar-de-frente-en-la-ensenada",
    title: "Lote con mar de frente en La Ensenada",
    snippet: "Lote con mar de frente, ubicado en La Ensenada.",
    description: "Lote con mar de frente, ubicado en La Ensenada.",
    gallery: [
      {
        src: "/propiedades/propiedad_3/lote-con-mar-de-frente-a-la-ensenada.jpg",
        alt: "Lote con mar de frente en La Ensenada",
      },
      {
        src: "/propiedades/propiedad_3/lote-con-mar-de-frente-a-la-ensenada-2.jpg",
        alt: "Lote con mar de frente en La Ensenada 2",
      },
      {
        src: "/propiedades/propiedad_3/lote-con-mar-de-frente-a-la-ensenada-3.jpg",
        alt: "Lote con mar de frente en La Ensenada 3",
      },
      {
        src: "/propiedades/propiedad_3/lote-con-mar-de-frente-a-la-ensenada-4.jpg",
        alt: "Lote con mar de frente en La Ensenada 4",
      },
      {
        src: "/propiedades/propiedad_3/lote-con-mar-de-frente-a-la-ensenada-5.jpg",
        alt: "Lote con mar de frente en La Ensenada 5",
      },
      {
        src: "/propiedades/propiedad_3/lote-con-mar-de-frente-a-la-ensenada-6.jpg",
        alt: "Lote con mar de frente en La Ensenada 6",
      },
      {
        src: "/propiedades/propiedad_3/lote-con-mar-de-frente-a-la-ensenada-7.jpg",
        alt: "Lote con mar de frente en La Ensenada 7",
      },
      {
        src: "/propiedades/propiedad_3/lote-con-mar-de-frente-a-la-ensenada-8.jpg",
        alt: "Lote con mar de frente en La Ensenada 8",
      },
    ],
    features: {
      exterior: [],
      interior: [],
      extras: [],
    },
    location: "La Ceiba, Atlántida",
    area: "4,358.72 m² equivalente a 1.07 Acre",
    status: "En venta",
    price: "$150,000.00 (negociable)",
    latitude: 15.792935257072378,
    longitude: -86.64517190415552,
  },
  {
    _id: "2",
    thumbnail:
      "/propiedades/propiedad_2/lote-frente-al-mar-caribe-en-playa-helen.jpg",
    video:
      "/propiedades/propiedad_2/lote-frente-al-mar-caribe-en-playa-helen.mp4",
    slug: "lote-frente-al-mar-caribe-en-playa-helen",
    title: "Lote frente al Mar Caribe en Playa Helen",
    snippet:
      "Lote frente al Mar Caribe, ubicado  en Playa Helen, comunidad de Sambo Creek con alta plusvalía por su ubicación en área turística, a 2 minutos del Hotel Helen, y el Hotel Canadien.",
    description:
      "Lote frente al Mar Caribe, ubicado  en Playa Helen, comunidad de Sambo Creek con alta plusvalía por su ubicación en área turística, a 2 minutos del Hotel Helen, y el Hotel Canadien.",
    gallery: [
      {
        src: "/propiedades/propiedad_2/lote-frente-al-mar-caribe-en-playa-helen.jpg",
        alt: "Lote frente al Mar Caribe en Playa Helen",
      },
      {
        src: "/propiedades/propiedad_2/lote-frente-al-mar-caribe-en-playa-helen-2.jpg",
        alt: "Lote frente al Mar Caribe en Playa Helen 2",
      },
      {
        src: "/propiedades/propiedad_2/lote-frente-al-mar-caribe-en-playa-helen-3.jpg",
        alt: "Lote frente al Mar Caribe en Playa Helen 3",
      },
      {
        src: "/propiedades/propiedad_2/lote-frente-al-mar-caribe-en-playa-helen-4.jpg",
        alt: "Lote frente al Mar Caribe en Playa Helen 4",
      },
      {
        src: "/propiedades/propiedad_2/lote-frente-al-mar-caribe-en-playa-helen-5.jpg",
        alt: "Lote frente al Mar Caribe en Playa Helen 5",
      },
      {
        src: "/propiedades/propiedad_2/lote-frente-al-mar-caribe-en-playa-helen-6.jpg",
        alt: "Lote frente al Mar Caribe en Playa Helen 6",
      },
      {
        src: "/propiedades/propiedad_2/lote-frente-al-mar-caribe-en-playa-helen-7.jpg",
        alt: "Lote frente al Mar Caribe en Playa Helen 7",
      },
      {
        src: "/propiedades/propiedad_2/lote-frente-al-mar-caribe-en-playa-helen-8.jpg",
        alt: "Lote frente al Mar Caribe en Playa Helen 8",
      },
    ],
    features: {
      exterior: [],
      interior: [],
      extras: [],
    },
    location: "La Ceiba, Atlántida",
    area: "5,922.62 m²",
    status: "En venta",
    price: "$250,000.00 (negociable)",
    latitude: 15.79523525425705,
    longitude: -86.62362013299145,
  },
  {
    _id: "1",
    thumbnail:
      "/propiedades/propiedad_1/casa-frente-al-mar-caribe-en-playa-helen-exterior.jpg",
    video:
      "/propiedades/propiedad_1/casa-frente-al-mar-caribe-en-playa-helen.mp4",
    slug: "casa-frente-al-mar-caribe-en-playa-helen",
    title: "Casa frente al Mar Caribe en Playa Helen",
    snippet:
      "Ubicada en el área turística de Playa Helen en la comunidad de Sambo Creek, cerca del Hotel Canadien.",
    description:
      "Ubicada en el área turística de Playa Helen en la comunidad de Sambo Creek, cerca del Hotel Canadien.",
    gallery: [
      {
        src: "/propiedades/propiedad_1/casa-frente-al-mar-caribe-en-playa-helen-exterior.jpg",
        alt: "Casa frente al Mar Caribe en Playa Helen",
      },
      {
        src: "/propiedades/propiedad_1/casa-frente-al-mar-caribe-en-playa-helen-exterior-2.jpg",
        alt: "Casa frente al Mar Caribe en Playa Helen 2",
      },
      {
        src: "/propiedades/propiedad_1/casa-frente-al-mar-caribe-en-playa-helen-exterior-3.jpg",
        alt: "Casa frente al Mar Caribe en Playa Helen 3",
      },
      {
        src: "/propiedades/propiedad_1/casa-frente-al-mar-caribe-en-playa-helen-exterior-4.jpg",
        alt: "Casa frente al Mar Caribe en Playa Helen 4",
      },
      {
        src: "/propiedades/propiedad_1/casa-frente-al-mar-caribe-en-playa-helen-exterior-5.jpg",
        alt: "Casa frente al Mar Caribe en Playa Helen 5",
      },
      {
        src: "/propiedades/propiedad_1/casa-frente-al-mar-caribe-en-playa-helen-interior-6.jpg",
        alt: "Casa frente al Mar Caribe en Playa Helen 6",
      },
      {
        src: "/propiedades/propiedad_1/casa-frente-al-mar-caribe-en-playa-helen-interior-7.jpg",
        alt: "Casa frente al Mar Caribe en Playa Helen 7",
      },
      {
        src: "/propiedades/propiedad_1/casa-frente-al-mar-caribe-en-playa-helen-interior-8.jpg",
        alt: "Casa frente al Mar Caribe en Playa Helen 8",
      },
      {
        src: "/propiedades/propiedad_1/casa-frente-al-mar-caribe-en-playa-helen-interior-9.jpg",
        alt: "Casa frente al Mar Caribe en Playa Helen 9",
      },
      {
        src: "/propiedades/propiedad_1/casa-frente-al-mar-caribe-en-playa-helen-interior-10.jpg",
        alt: "Casa frente al Mar Caribe en Playa Helen 10",
      },
      {
        src: "/propiedades/propiedad_1/casa-frente-al-mar-caribe-en-playa-helen-interior-11.jpg",
        alt: "Casa frente al Mar Caribe en Playa Helen 11",
      },
    ],
    features: {
      exterior: [
        "2 dormitorios",
        "1 ½ Baños",
        "Sala de estar",
        "Comedor",
        "Cocina",
        "Despensa",
        "Vestidor",
        "Lavandería",
      ],
      interior: ["Garaje", "Palapa con área de barbacoa", "Ducha Jardín"],
      extras: [
        "Bodega de almacenamiento de bomba eléctrica",
        "Cisterna de agua con capacidad para 1,500 galones",
        "Calentador de agua para toda la casa",
        "Aire acondicionado central para toda la casa",
        "Sistema de cámaras de seguridad",
        "Muro perimetral a sus 4 extremos",
      ],
    },
    location: "La Ceiba, Atlántida",
    area: "1,158.76 m²",
    status: "En venta",
    price: "$185,000.00 (negociable)",
    latitude: 15.796364605521797,
    longitude: -86.6217763329914,
  },
];
