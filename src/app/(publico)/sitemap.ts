import { MetadataRoute } from "next";
import { properties } from "@/lib/properties";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const URL = "${process.env.NEXT_PUBLIC_SITE_URL}";

  const postEntries = properties.map(({ slug }) => ({
    url: `${URL}/propiedades/${slug}`,
    lastModified: new Date(),
  }));

  return [
    { url: `${URL}/`, lastModified: new Date() },
    { url: `${URL}/acerca`, lastModified: new Date() },
    { url: `${URL}/contacto`, lastModified: new Date() },
    { url: `${URL}/cookies`, lastModified: new Date() },
    { url: `${URL}/privacidad`, lastModified: new Date() },
    { url: `${URL}/propiedades`, lastModified: new Date() },
    { url: `${URL}/terminos`, lastModified: new Date() },
    ...postEntries,
  ];
}
