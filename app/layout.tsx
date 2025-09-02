import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Soho City Church - Welcome Home | GBI SCC ",
    template: "%s | Soho City Church"
  },
  description: "See what God can do through you. Join GBI Soho City Church Jakarta for worship, fellowship, and spiritual growth. Find your place in God's family through our vibrant community and life-changing services.",
  keywords: ["GBI Soho City Church", "GBI SCC", "Soho City Church", "Jakarta church", "gereja Jakarta", "gereja Pancoran", "Christian worship", "ibadah Kristen", "fellowship", "spiritual growth", "God", "Jesus", "community", "faith", "prayer", "Bible study", "church Jakarta Selatan", "SOHO Pancoran", "gereja SOHO"],
  authors: [{ name: "GBI Soho City Church" }],
  creator: "GBI Soho City Church",
  publisher: "GBI Soho City Church",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://gbiscc.org'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Soho City Church - Welcome Home | GBI SCC Jakarta",
    description: "See what God can do through you. Join GBI Soho City Church Jakarta for worship, fellowship, and spiritual growth. Find your place in God's family.",
    url: 'https://gbiscc.org',
    siteName: 'Soho City Church',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'GBI Soho City Church - Welcome Home Jakarta',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Soho City Church - Welcome Home | GBI SCC Jakarta",
    description: "See what God can do through you. Join GBI Soho City Church Jakarta for worship, fellowship, and spiritual growth.",
    images: ['/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification=your-actual-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="geo.region" content="ID-JK" />
        <meta name="geo.placename" content="Jakarta" />
        <meta name="geo.position" content="-6.2088;106.8456" />
        <meta name="ICBM" content="-6.2088, 106.8456" />
        <meta name="business.name" content="GBI Soho City Church" />
        <meta name="business.address" content="Gedung SOHO Pancoran LT.UG, Jl. Letjen M.T. Haryono No.Kav. 2, Tebet Bar., Kec. Pancoran, Kota Jakarta Selatan, DKI Jakarta 12810" />
        <meta name="business.phone" content="+62-21-xxxx-xxxx" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Church",
              "name": "GBI Soho City Church",
              "alternateName": "Soho City Church",
              "description": "See what God can do through you. Join GBI Soho City Church Jakarta for worship, fellowship, and spiritual growth.",
              "url": "https://gbiscc.org",
              "logo": "https://gbiscc.org/scc-logo.svg",
              "image": "https://gbiscc.org/og-image.jpg",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Jakarta",
                "addressCountry": "ID"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "-6.2088",
                "longitude": "106.8456"
              },
              "sameAs": [
                "https://www.youtube.com/@sohocitychurch",
                "https://www.tiktok.com/@sohocitychurch"
              ],
              "potentialAction": {
                "@type": "ReserveAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://gbiscc.org/jadwal-ibadah"
                },
                "result": {
                  "@type": "Reservation",
                  "name": "Church Service Reservation"
                }
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
