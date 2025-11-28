import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocationBySlug, locations } from "@/data/locations";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/ui/Hero";
import Link from "next/link";

interface Props {
    params: Promise<{
        city: string;
    }>;
}

export async function generateStaticParams() {
    return locations.map((location) => ({
        city: location.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { city } = await params;
    const location = getLocationBySlug(city);

    if (!location) {
        return {
            title: "Location Not Found",
        };
    }

    return {
        title: `Aluminum Railings & Glass Enclosures in ${location.name} | Aluminum Solutions`,
        description: location.metaDescription,
        openGraph: {
            title: `Aluminum Railings & Glass Enclosures in ${location.name}`,
            description: location.metaDescription,
            images: ["/images/og-default.jpg"], // We should add dynamic images later
        },
    };
}

export default async function LocationPage({ params }: Props) {
    const { city } = await params;
    const location = getLocationBySlug(city);

    if (!location) {
        notFound();
    }

    // Schema Markup for Local SEO
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": `Aluminum Railings Installation in ${location.name}`,
        "provider": {
            "@type": "LocalBusiness",
            "name": "Aluminum Solutions",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Toronto",
                "addressRegion": "ON",
                "addressCountry": "CA"
            },
            "telephone": "+14165550123",
            "priceRange": "$$"
        },
        "areaServed": {
            "@type": "City",
            "name": location.name
        },
        "description": location.metaDescription,
        "url": `https://aluminumsolutions.ca/locations/${location.slug}`
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow">
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />

                <Hero
                    title={`Premium Aluminum Railings in ${location.name}`}
                    subtitle={`Transform your ${location.name} home with our high-end glass enclosures, custom gates, and durable aluminum solutions.`}
                    ctaText="Get a Free Estimate"
                    ctaLink="/contact"
                />

                {/* Localized Intro */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-3xl font-serif font-bold mb-6 text-slate-900">
                                Serving {location.name} with Excellence
                            </h2>
                            <p className="text-slate-600 leading-relaxed mb-8">
                                For over a decade, Aluminum Solutions has been the trusted choice for homeowners in <strong>{location.name}</strong> looking to upgrade their exterior.
                                Whether you're in a modern condo or a traditional detached home, our custom aluminum and glass products are designed to withstand the Canadian climate while adding significant curb appeal.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                                    ✓ {location.name} Building Code Compliant
                                </span>
                                <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                                    ✓ Local Installation Team
                                </span>
                                <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                                    ✓ Lifetime Warranty
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Dynamic Services Grid (Could be filtered by popularity in that city if we had data) */}
                <section className="py-20 bg-slate-50">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-serif font-bold mb-12 text-center text-slate-900">
                            Our Services in {location.name}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Reusing the service card structure - ideally this would be a component */}
                            <div className="bg-white p-8 shadow-lg hover:shadow-xl transition-all">
                                <h3 className="text-xl font-bold mb-3 font-serif">Glass Railings</h3>
                                <p className="text-slate-600 mb-6 text-sm">Modern, unobstructed views for your {location.name} property.</p>
                                <Link href="/services/glass-railings" className="text-slate-900 font-bold uppercase text-sm">View Details &rarr;</Link>
                            </div>
                            <div className="bg-white p-8 shadow-lg hover:shadow-xl transition-all">
                                <h3 className="text-xl font-bold mb-3 font-serif">Porch Enclosures</h3>
                                <p className="text-slate-600 mb-6 text-sm">Keep the snow and wind out of your {location.name} front entrance.</p>
                                <Link href="/services/porch-enclosures" className="text-slate-900 font-bold uppercase text-sm">View Details &rarr;</Link>
                            </div>
                            <div className="bg-white p-8 shadow-lg hover:shadow-xl transition-all">
                                <h3 className="text-xl font-bold mb-3 font-serif">Aluminum Columns</h3>
                                <p className="text-slate-600 mb-6 text-sm">Replace rotting wood columns with durable aluminum.</p>
                                <Link href="/services/columns" className="text-slate-900 font-bold uppercase text-sm">View Details &rarr;</Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 bg-slate-900 text-white text-center">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
                            Live in {location.name}?
                        </h2>
                        <p className="text-slate-300 max-w-2xl mx-auto mb-10 text-lg">
                            Get a free, no-obligation on-site consultation. Our expert team is in {location.name} weekly.
                        </p>
                        <Link href="/contact" className="inline-block px-10 py-4 bg-white text-slate-900 font-bold tracking-wide hover:bg-slate-100 transition-colors shadow-lg">
                            Book Your Free Estimate
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
