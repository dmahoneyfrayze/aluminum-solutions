import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import JsonLd from "@/components/seo/JsonLd";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aluminumsolutions.ca"),
  alternates: {
    canonical: './',
  },
  title: {
    default: "Aluminum Solutions | Premium Railings & Enclosures in Toronto & GTA",
    template: "%s | Aluminum Solutions",
  },
  description: "Transform your home with high-end aluminum railings, glass enclosures, and custom gates. Serving Toronto, Mississauga, Oakville, and the GTA.",
  keywords: ["Aluminum Railings", "Glass Railings", "Porch Enclosures", "Toronto", "GTA", "Aluminum Solutions", "Deck Railings", "Outdoor Railings"],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://aluminumsolutions.ca/",
    siteName: "Aluminum Solutions",
    title: "Aluminum Solutions | Premium Railings & Enclosures",
    description: "Factory-direct aluminum railings, glass showers, and porch enclosures. Installed in 4 weeks.",
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Aluminum Solutions'
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aluminum Solutions",
    description: "Premium aluminum railings and glass enclosures in Toronto.",
    images: ['/opengraph-image.png'],
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
};

import ChatWidget from "@/components/ui/ChatWidget";
import TrackingScript from "@/components/analytics/TrackingScript";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import CookieConsent from "@/components/ui/CookieConsent";
import ExitIntentPopup from "@/components/ui/ExitIntentPopup";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://appcdn.leadconnectorhq.com" />
        <link rel="preconnect" href="https://services.leadconnectorhq.com" />
      </head>
      <body
        className={`${montserrat.variable} ${playfair.variable} antialiased font-sans bg-gray-50 text-slate-900 pt-28`}
      >
        <GoogleAnalytics gaId="G-EBYSGT31GD" />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Aluminum Solutions",
            "image": "https://aluminumsolutions.ca/images/logo.png", // Placeholder
            "telephone": "(416) 555-0123",
            "email": "info@aluminumsolutions.ca",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "41 Bradwick Dr Unit #3",
              "addressLocality": "Vaughan",
              "addressRegion": "ON",
              "postalCode": "L4K 1K5",
              "addressCountry": "CA"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 43.6532,
              "longitude": -79.3832
            },
            "url": "https://aluminumsolutions.ca/",
            "priceRange": "$$",
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
              ],
              "opens": "09:00",
              "closes": "18:00"
            },
            "areaServed": [
              "Toronto",
              "Mississauga",
              "Oakville",
              "Vaughan",
              "Richmond Hill",
              "Markham",
              "Brampton",
              "Burlington",
              "Milton",
              "Newmarket"
            ]
          }}
        />
        {children}
        <ChatWidget />
        <TrackingScript />
        <CookieConsent />
        {/* <ExitIntentPopup /> */}
      </body>
    </html >
  );
}
