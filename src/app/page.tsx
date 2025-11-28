import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/ui/Hero";
import TrustBadges from "@/components/ui/TrustBadges";
import ProcessSteps from "@/components/ui/ProcessSteps";
import ManufacturingHighlight from "@/components/ui/ManufacturingHighlight";
import MiniCaseStudies from "@/components/ui/MiniCaseStudies";
import QuoteCalculator from "@/components/tools/QuoteCalculator";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <Hero
          title="Architect-Grade Aluminum & Glass Railings"
          subtitle="Manufactured locally in the GTA. Installed in 4-6 weeks. Direct from the factory to your home or project."
          ctaText="Get a Free Estimate"
          ctaLink="/contact"
        />

        <TrustBadges />

        <QuoteCalculator />

        <ManufacturingHighlight />

        <ProcessSteps />

        <MiniCaseStudies />

        {/* Services Overview */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
                Premium Exterior Solutions
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Engineered for safety, designed for elegance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Service 1 */}
              <div className="group text-center">
                <div className="h-64 bg-slate-100 mb-6 overflow-hidden relative rounded-lg">
                  <div className="absolute inset-0 bg-slate-200 group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="text-xl font-bold mb-2 font-serif">Aluminum Railings</h3>
                <p className="text-slate-600 text-sm mb-4">Maintenance-free durability.</p>
                <Link href="/services/railings" className="text-slate-900 font-bold text-sm border-b border-slate-900 pb-1 hover:text-slate-600 hover:border-slate-600 transition-colors">
                  Learn More
                </Link>
              </div>
              {/* Service 2 */}
              <div className="group text-center">
                <div className="h-64 bg-slate-100 mb-6 overflow-hidden relative rounded-lg">
                  <div className="absolute inset-0 bg-slate-200 group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="text-xl font-bold mb-2 font-serif">Glass Enclosures</h3>
                <p className="text-slate-600 text-sm mb-4">Wind protection & views.</p>
                <Link href="/services/glass-enclosures" className="text-slate-900 font-bold text-sm border-b border-slate-900 pb-1 hover:text-slate-600 hover:border-slate-600 transition-colors">
                  Learn More
                </Link>
              </div>
              {/* Service 3 */}
              <div className="group text-center">
                <div className="h-64 bg-slate-100 mb-6 overflow-hidden relative rounded-lg">
                  <div className="absolute inset-0 bg-slate-200 group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="text-xl font-bold mb-2 font-serif">Custom Gates</h3>
                <p className="text-slate-600 text-sm mb-4">Security meets style.</p>
                <Link href="/services/gates" className="text-slate-900 font-bold text-sm border-b border-slate-900 pb-1 hover:text-slate-600 hover:border-slate-600 transition-colors">
                  Learn More
                </Link>
              </div>
              {/* Service 4 */}
              <div className="group text-center">
                <div className="h-64 bg-slate-100 mb-6 overflow-hidden relative rounded-lg">
                  <div className="absolute inset-0 bg-slate-200 group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="text-xl font-bold mb-2 font-serif">Aluminum Columns</h3>
                <p className="text-slate-600 text-sm mb-4">Structural elegance.</p>
                <Link href="/services/columns" className="text-slate-900 font-bold text-sm border-b border-slate-900 pb-1 hover:text-slate-600 hover:border-slate-600 transition-colors">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-slate-900 text-white text-center">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
              Get a Quote in 24 Hours
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-10 text-lg">
              Upload a photo of your project for a fast, accurate estimate. No site visit required for rough pricing.
            </p>
            <Link href="/contact" className="inline-block px-10 py-4 bg-white text-slate-900 font-bold tracking-wide hover:bg-slate-100 transition-colors shadow-lg">
              Get My Free Quote
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
