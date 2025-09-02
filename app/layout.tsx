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
    default: "Soho City Church - Welcome Home | GBI SCC Jakarta",
    template: "%s | Soho City Church"
  },
  description: "See what God can do through you. Join GBI Soho City Church Jakarta for worship, fellowship, and spiritual growth. Find your place in God's family through our vibrant community and life-changing services.",
  keywords: ["GBI Soho City Church", "Jakarta church", "Christian worship", "fellowship", "spiritual growth", "God", "Jesus", "community", "faith", "prayer", "Bible study"],
  authors: [{ name: "GBI Soho City Church" }],
  creator: "GBI Soho City Church",
  publisher: "GBI Soho City Church",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://sohocitychurch.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Soho City Church - Welcome Home | GBI SCC Jakarta",
    description: "See what God can do through you. Join GBI Soho City Church Jakarta for worship, fellowship, and spiritual growth. Find your place in God's family.",
    url: 'https://sohocitychurch.com',
    siteName: 'Soho City Church',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Soho City Church - Welcome Home',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Soho City Church - Welcome Home | GBI SCC Jakarta",
    description: "See what God can do through you. Join GBI Soho City Church Jakarta for worship, fellowship, and spiritual growth.",
    images: ['/og-image.jpg'],
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
    google: 'your-google-verification-code',
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
              "url": "https://sohocitychurch.com",
              "logo": "https://sohocitychurch.com/scc-logo.svg",
              "image": "https://sohocitychurch.com/og-image.jpg",
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
                  "urlTemplate": "https://sohocitychurch.com/jadwal-ibadah"
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
