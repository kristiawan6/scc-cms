export async function GET() {
  return new Response(
    `User-agent: *
Allow: /
Disallow: /private/
Disallow: /api/
Disallow: /_next/

# Sitemaps
Sitemap: https://gbiscc.org/sitemap.xml
Sitemap: https://gbiscc.org/sitemap_index.xml`,
    {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
      },
    }
  )
}