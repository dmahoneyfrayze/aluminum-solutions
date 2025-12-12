import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/ui/Hero";
import TrustBadges from "@/components/ui/TrustBadges";
import ProcessSteps from "@/components/ui/ProcessSteps";
import ManufacturingHighlight from "@/components/ui/ManufacturingHighlight";
import MaterialComparison from "@/components/ui/MaterialComparison";
import MiniCaseStudies from "@/components/ui/MiniCaseStudies";
import ReputationWidget from "@/components/ui/ReputationWidget";
import QuoteCalculator from "@/components/tools/QuoteCalculator";
import StyleExplorer from "@/components/tools/StyleExplorer";
import Link from "next/link";
import Image from "next/image";
import TrustSection from "@/components/ui/TrustSection";
import SafetyFocus from "@/components/ui/SafetyFocus";
import PremiumFeatures from "@/components/ui/PremiumFeatures";
import ServiceMap from "@/components/ui/ServiceMap";
import JsonLd from "@/components/seo/JsonLd";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aluminum Solutions | Factory Direct Railings & Glass in Toronto",
  description: "Upgrade your home with premium aluminum railings, glass porch enclosures, and frameless showers. Factory direct pricing and expert installation in the GTA.",
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
          title="Modernize Your Home with Premium Glass Railings"
          subtitle="Factory Direct. Installed in 4 Weeks. Lifetime Warranty."
          ctaText="Get a Free Estimate"
          ctaLink="/contact"
          backgroundImage="/images/hero-final-update.jpg"
        />

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

        <SafetyFocus />

        <QuoteCalculator />

        <ManufacturingHighlight />

        <PremiumFeatures />

        <ProcessSteps />

        <MiniCaseStudies />

        <ReputationWidget />



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
              <p className="text-slate-500 text-sm mt-2">
                Building on the legacy of Global Aluminum Solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Service 1 */}
              <div className="group text-center">
                <div className="h-64 bg-slate-100 mb-6 overflow-hidden relative rounded-lg shadow-md">
                  <Image
                    src="/images/projects/aluminum-railing-pickets-black.png"
                    alt="Aluminum Railings - Pickets"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 font-serif">Aluminum Railings - Pickets</h3>
                <p className="text-slate-600 text-sm mb-4">Maintenance-free durability.</p>
                <Link href="/services/railings" aria-label="Learn more about Aluminum Railings" className="text-slate-900 font-bold text-sm border-b border-slate-900 pb-1 hover:text-slate-600 hover:border-slate-600 transition-colors">
                  Learn More
                </Link>
              </div>
              {/* Service 2 */}
              <div className="group text-center">
                <div className="h-64 bg-slate-100 mb-6 overflow-hidden relative rounded-lg shadow-md">
                  <Image
                    src="/images/Frameless-Glass.jpg"
                    alt="Glass / Frameless Railings"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 font-serif">Glass / Frameless Railings</h3>
                <p className="text-slate-600 text-sm mb-4">Frameless, Stand-offs, Base shoe.</p>
                <Link href="/services/glass-railings" aria-label="Learn more about Glass Railings" className="text-slate-900 font-bold text-sm border-b border-slate-900 pb-1 hover:text-slate-600 hover:border-slate-600 transition-colors">
                  Learn More
                </Link>
              </div>
              {/* Service 3 */}
              <div className="group text-center">
                <div className="h-64 bg-slate-100 mb-6 overflow-hidden relative rounded-lg shadow-md">
                  <Image
                    src="/images/Glass-Enclosures-and-Offices.jpg"
                    alt="Glass Enclosures & Offices"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 font-serif">Glass Enclosures & Offices</h3>
                <p className="text-slate-600 text-sm mb-4">Wind protection & views.</p>
                <Link href="/services/glass-enclosures" aria-label="Learn more about Glass Enclosures" className="text-slate-900 font-bold text-sm border-b border-slate-900 pb-1 hover:text-slate-600 hover:border-slate-600 transition-colors">
                  Learn More
                </Link>
              </div>
              {/* Service 4 */}
              <div className="group text-center">
                <div className="h-64 bg-slate-100 mb-6 overflow-hidden relative rounded-lg shadow-md">
                  <Image
                    src="/images/projects/frameless-glass-shower-custom.jpg"
                    alt="Frameless Showers"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 font-serif">Frameless Showers</h3>
                <p className="text-slate-600 text-sm mb-4">Spa-like luxury glass.</p>
                <Link href="/services/showers" aria-label="Learn more about Frameless Showers" className="text-slate-900 font-bold text-sm border-b border-slate-900 pb-1 hover:text-slate-600 hover:border-slate-600 transition-colors">
                  Learn More
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
