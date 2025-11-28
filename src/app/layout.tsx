import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import JsonLd from "@/components/seo/JsonLd";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aluminum Solutions | Premium Railings & Enclosures in Toronto & GTA",
  description: "Transform your home with high-end aluminum railings, glass enclosures, and custom gates. Serving Toronto, Mississauga, Oakville, and the GTA.",
  robots: {
    index: false,
    follow: false,
  },
};

import ChatWidget from "@/components/ui/ChatWidget";
import TrackingScript from "@/components/analytics/TrackingScript";
import CookieConsent from "@/components/ui/CookieConsent";
import ExitIntentPopup from "@/components/ui/ExitIntentPopup";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${playfair.variable} antialiased font-sans bg-gray-50 text-slate-900`}
      >
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
              "streetAddress": "123 Manufacturing Blvd", // Placeholder
              "addressLocality": "Toronto",
              "addressRegion": "ON",
              "postalCode": "M9W 1A1", // Placeholder
              "addressCountry": "CA"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 43.6532,
              "longitude": -79.3832
            },
            "url": "https://aluminumsolutions.ca",
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
        <ExitIntentPopup />
      </body>
    </html>
  );
}
