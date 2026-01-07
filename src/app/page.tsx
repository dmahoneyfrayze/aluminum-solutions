import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import JsonLd from "@/components/seo/JsonLd";
import dynamic from "next/dynamic";

// Critical Components (Keep Static)
import Hero from "@/components/ui/Hero";
import TrustSection from "@/components/ui/TrustSection";
import IntentJumpBar from "@/components/ui/IntentJumpBar";
import BrandClarity from "@/components/ui/BrandClarity";

// Lazy Loaded Components
const ProcessSteps = dynamic(() => import("@/components/ui/ProcessSteps"));
const ManufacturingHighlight = dynamic(() => import("@/components/ui/ManufacturingHighlight"));
const MaterialComparison = dynamic(() => import("@/components/ui/MaterialComparison"));
const MiniCaseStudies = dynamic(() => import("@/components/ui/MiniCaseStudies"));
const ReputationWidget = dynamic(() => import("@/components/ui/ReputationWidget"));
const QuoteCalculator = dynamic(() => import("@/components/tools/QuoteCalculator"));
const StyleExplorer = dynamic(() => import("@/components/tools/StyleExplorer"));
const SafetyFocus = dynamic(() => import("@/components/ui/SafetyFocus"));
const PremiumFeatures = dynamic(() => import("@/components/ui/PremiumFeatures"));
const ServiceMap = dynamic(() => import("@/components/ui/ServiceMap"));
const HomepageFAQ = dynamic(() => import("@/components/ui/HomepageFAQ"));

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Factory Direct Aluminum & Glass Railings | Toronto & GTA",
  description: "Premium aluminum railings, glass systems, and frameless showers. Manufactured in the GTA and installed by certified experts. 24-hour quote turnaround.",
  keywords: ["Factory Direct Railings", "Aluminum Railing Manufacturer", "Glass Railing Installation Toronto", "Custom Railings GTA"],
  openGraph: {
    title: "Factory Direct Aluminum & Glass Railings | Toronto & GTA",
    description: "Premium aluminum railings, glass systems, and frameless showers. Manufactured in the GTA.",
    images: [
      {
        url: '/images/hero-final-update.jpg',
        alt: 'Factory Direct Aluminum & Glass Railings'
      }
    ],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Aluminum Solutions",
          "url": "https://aluminumsolutions.ca",
          "logo": "https://aluminumsolutions.ca/images/global-aluminum-solutions-logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-416-555-0123",
            "contactType": "customer service",
            "areaServed": "CA",
            "availableLanguage": "en"
          },
          "sameAs": [
            "https://www.facebook.com/aluminumsolutions",
            "https://www.instagram.com/aluminumsolutions"
          ]
        }}
      />

      <main className="flex-grow">
        <Hero
          title="Factory-Direct Aluminum & Glass Railings in Toronto"
          subtitle={
            <>
              Premium aluminum railings, glass systems, and frameless showers — manufactured in the GTA and installed by certified experts.
              <br className="hidden md:block" />
              <span className="block mt-4 text-lg text-slate-200 font-medium">Trusted by leading builders, architects, and homeowners across the GTA.</span>
            </>
          }
          ctaText="Get a Free Quote (24-Hour Turnaround)"
          ctaLink="/contact"
          secondaryCtaText="View Gallery"
          secondaryCtaLink="/gallery"
          showSecondaryCta={true}
          backgroundImage="/images/hero-final-update.jpg"
        />

        <IntentJumpBar />
        <BrandClarity />
        <TrustSection />

        {/* NEW: Style Explorer (Visualizer Gap) */}
        <StyleExplorer />

        {/* NEW: Express Service (Speed Gap) */}
        <section className="py-20 bg-brand-navy text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform translate-x-20" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2">
                <div className="inline-block px-4 py-1 bg-brand-copper text-white text-xs font-bold uppercase tracking-wider rounded-full mb-6">
                  New Service
                </div>
                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-white">
                  Need Railings Fast?
                </h2>
                <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                  Standard Lead Time: <strong className="text-white">1–3 weeks</strong>. <br />
                  Expedited Service: <strong className="text-white">Available selectively</strong> (week-to-week basis).
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <span className="text-brand-copper text-xl">✓</span>
                    <span className="text-slate-200">In Stock Systems frequently change</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-brand-copper text-xl">✓</span>
                    <span className="text-slate-200">Priority Fabrication Queue</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-brand-copper text-xl">✓</span>
                    <span className="text-slate-200">Same-Day Estimates</span>
                  </li>
                </ul>
                <Link href="/contact" className="inline-block px-8 py-3 bg-white text-brand-navy font-bold hover:bg-slate-100 transition-colors rounded-sm">
                  Check Availability
                </Link>
              </div>
              <div className="w-full md:w-1/2">
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 text-center">
                  <div className="text-6xl mb-4">⏱️</div>
                  <h3 className="text-2xl font-bold mb-2 text-white">7-Day Turnaround</h3>
                  <p className="text-slate-200 text-sm">
                    *Subject to stock availability and crew schedule.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <MaterialComparison />

        {/* Conversion Bridge */}
        <div className="bg-slate-50 py-10 text-center border-b border-slate-200">
          <div className="container mx-auto px-6">
            <p className="text-xl text-slate-800 font-medium mb-4">
              For most GTA homeowners and builders, aluminum offers the best balance of longevity, safety, and long-term value.
            </p>
            <Link href="/services/railings" className="text-brand-copper font-bold text-lg hover:underline flex items-center justify-center gap-2">
              See Aluminum Railing Options <span>&rarr;</span>
            </Link>
          </div>
        </div>

        <SafetyFocus />

        <QuoteCalculator />

        <ManufacturingHighlight />

        <PremiumFeatures />

        <ProcessSteps />

        <MiniCaseStudies />

        <ReputationWidget />

        <HomepageFAQ />

        {/* Services Overview */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
                Premium Aluminum & Glass Solutions
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Engineered for safety, designed for elegance. If you're looking for "<Link href="/services/railings" className="text-brand-copper hover:underline">aluminum railings near me</Link>" in the GTA, you've found the factory-direct source.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Service 1 */}
              <div className="group text-center">
                <div className="h-64 bg-slate-100 mb-6 overflow-hidden relative rounded-lg shadow-md">
                  <Image
                    src="/images/projects/aluminum-railing-pickets-black.webp"
                    alt="Aluminum Railings - Pickets"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 font-serif">Aluminum Railings - Pickets</h3>
                <p className="text-slate-600 text-sm mb-4">Maintenance-free durability.</p>
                <Link href="/services/railings" className="text-slate-900 font-bold text-sm border-b border-slate-900 pb-1 hover:text-slate-600 hover:border-slate-600 transition-colors">
                  View Railing Details
                </Link>
              </div>
              {/* Service 2 */}
              <div className="group text-center">
                <div className="h-64 bg-slate-100 mb-6 overflow-hidden relative rounded-lg shadow-md">
                  <Image
                    src="/images/Frameless-Glass.jpg"
                    alt="Glass / Frameless Railings"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 font-serif">Glass / Frameless Railings</h3>
                <p className="text-slate-600 text-sm mb-4">Frameless, Stand-offs, Base shoe.</p>
                <Link href="/services/glass-railings" className="text-slate-900 font-bold text-sm border-b border-slate-900 pb-1 hover:text-slate-600 hover:border-slate-600 transition-colors">
                  View Glass Options
                </Link>
              </div>
              {/* Service 3 */}
              <div className="group text-center">
                <div className="h-64 bg-slate-100 mb-6 overflow-hidden relative rounded-lg shadow-md">
                  <Image
                    src="/images/Glass-Enclosures-and-Offices.jpg"
                    alt="Glass Enclosures & Offices"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 font-serif">Glass Enclosures & Offices</h3>
                <p className="text-slate-600 text-sm mb-4">Wind protection & views.</p>
                <Link href="/services/glass-enclosures" className="text-slate-900 font-bold text-sm border-b border-slate-900 pb-1 hover:text-slate-600 hover:border-slate-600 transition-colors">
                  View Enclosures
                </Link>
              </div>
              {/* Service 4 */}
              <div className="group text-center">
                <div className="h-64 bg-slate-100 mb-6 overflow-hidden relative rounded-lg shadow-md">
                  <Image
                    src="/images/projects/frameless-glass-shower-custom.jpg"
                    alt="Frameless Showers"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 font-serif">Frameless Showers</h3>
                <p className="text-slate-600 text-sm mb-4">Spa-like luxury glass.</p>
                <Link href="/services/showers" className="text-slate-900 font-bold text-sm border-b border-slate-900 pb-1 hover:text-slate-600 hover:border-slate-600 transition-colors">
                  View Shower Models
                </Link>
              </div>

            </div>
          </div>
        </section>

        <ServiceMap />

        {/* Final CTA */}
        <section className="py-24 bg-brand-navy text-white text-center">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-white">
              Get a Quote in 24 Hours
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-10 text-lg">
              Upload a photo of your project for a fast, accurate estimate. No site visit required for rough pricing.
            </p>
            <Link href="/contact" className="inline-block px-10 py-4 bg-brand-copper text-white font-bold tracking-wide hover:bg-orange-700 transition-colors shadow-lg rounded-sm">
              Get My Free Quote
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </div >
  );
}


