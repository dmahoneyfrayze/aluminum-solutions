import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
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
};

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
        {children}
      </body>
    </html>
  );
}
