export async function GET() {
  return new Response(
    `User-agent: *
Allow: /
Disallow: /private/

Sitemap: https://gbiscc.org/sitemap.xml`,
    {
      headers: {
        'Content-Type': 'text/plain',
      },
    }
  )
}