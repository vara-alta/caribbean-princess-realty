export async function GET() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const pages = [
    "/",
    "/acerca",
    "/contacto",
    "/cookies",
    "/privacidad",
    "/propiedades",
    "/terminos",
  ]; // Add your public pages dynamically

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (page) => `
  <url>
    <loc>${siteUrl}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <priority>0.8</priority>
  </url>`
    )
    .join("")}
</urlset>`;

  return new Response(sitemap, {
    headers: { "Content-Type": "application/xml" },
  });
}
