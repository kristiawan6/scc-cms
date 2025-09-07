export async function GET() {
  const baseUrl = 'https://gbiscc.org'
  const currentDate = new Date().toISOString().split('T')[0] // Format YYYY-MM-DD
  
  const urls = [
    {
      url: baseUrl,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '1.0'
    },
    // {
    //   url: `${baseUrl}/tentang`,
    //   lastmod: currentDate,
    //   changefreq: 'monthly',
    //   priority: '0.8'
    // },
    {
      url: `${baseUrl}/jadwal-ibadah`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.9'
    },
    {
      url: `${baseUrl}/komunitas`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.8'
    }
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urls.map(url => `  <url>
    <loc>${url.url}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    },
  })
}