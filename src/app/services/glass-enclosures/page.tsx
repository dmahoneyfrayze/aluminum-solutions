import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/ui/Hero";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { blogPosts } from "@/data/blog";
import RelatedArticles from "@/components/blog/RelatedArticles";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
    title: "Glass Porch Enclosures & Sunrooms Toronto | Aluminum Solutions",
    description: "Custom glass enclosures for porches, patios, and balconies. Extend your outdoor season with our wind-protection systems.",
};

export default function EnclosuresPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <Breadcrumbs />

            <JsonLd
                data={{
                    "@context": "https://schema.org",
                    "@type": "Product",
                    "name": "Glass Porch Enclosures",
                    "description": "Custom glass enclosures for porches and sunrooms. Extend your outdoor season with wind protection.",
                    "brand": {
                        "@type": "Brand",
                        "name": "Aluminum Solutions"
                    },
                    "offers": {
                        "@type": "Offer",
                        "priceCurrency": "CAD",
                        "availability": "https://schema.org/InStock",
                        "areaServed": "Toronto, GTA"
                    }
                }}
            />

            <main className="flex-grow">
                <Hero
                    title="Architectural Glass Enclosures"
                    subtitle="Seamlessly blend indoor comfort with outdoor views. Custom-manufactured frameless and semi-frameless systems."
                    ctaText="Request Design Consultation"
                    ctaLink="/contact"
                    backgroundImage="/images/generated/glass_enclosure_project_1764312838961.png"
                />

                {/* Overview */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-brand-copper font-bold tracking-widest uppercase text-sm mb-2 block">
                                Year-Round Comfort
                            </span>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-brand-dark">
                                Extend Your Living Space
                            </h2>
                            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                                <p>
                                    A glass enclosure transforms your front porch, patio, or balcony into a functional, protected sanctuary. It creates a thermal buffer zone that keeps your home warmer in winter and cleaner year-round, without sacrificing natural light.
                                </p>
                                <p>
                                    <strong>Factory Direct Advantage:</strong> Unlike resellers, we cut, temper, and polish our glass in-house. This allows for custom shapes, precise fits for uneven stone, and faster turnaround times.
                                </p>
                            </div>
                            <div className="mt-10">
                                <Link href="/contact" className="text-brand-dark font-bold border-b-2 border-brand-dark pb-1 hover:text-brand-copper hover:border-brand-copper transition-colors text-lg">
                                    Schedule a Free Measurement &rarr;
                                </Link>
                            </div>
                        </div>
                        <div className="h-[500px] bg-slate-100 relative rounded-sm overflow-hidden shadow-2xl">
                            <Image
                                src="/images/generated/glass_enclosure_project_1764312838961.png"
                                alt="Custom glass porch enclosure in winter"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* Technical Specs - Manufacturer Credibility */}
                <section className="py-24 bg-brand-dark text-white">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-serif font-bold mb-4">Technical Specifications</h2>
                            <p className="text-slate-400 max-w-2xl mx-auto">
                                Engineered for Canadian winters and high-wind loads.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {/* Spec 1 */}
                            <div className="border border-white/10 p-8 rounded-sm hover:bg-white/5 transition-colors">
                                <h3 className="text-xl font-bold mb-4 text-brand-copper">Glass Options</h3>
                                <ul className="space-y-3 text-slate-300 text-sm">
                                    <li className="flex items-start"><span className="mr-2">•</span> 10mm or 12mm Tempered Safety Glass</li>
                                    <li className="flex items-start"><span className="mr-2">•</span> Clear, Frosted, or Grey Tint</li>
                                    <li className="flex items-start"><span className="mr-2">•</span> Polished Edges for Safety</li>
                                </ul>
                            </div>
                            {/* Spec 2 */}
                            <div className="border border-white/10 p-8 rounded-sm hover:bg-white/5 transition-colors">
                                <h3 className="text-xl font-bold mb-4 text-brand-copper">Hardware</h3>
                                <ul className="space-y-3 text-slate-300 text-sm">
                                    <li className="flex items-start"><span className="mr-2">•</span> Marine-Grade Stainless Steel (316)</li>
                                    <li className="flex items-start"><span className="mr-2">•</span> Heavy-Duty Aluminum Channels</li>
                                    <li className="flex items-start"><span className="mr-2">•</span> Soft-Close Hinges Available</li>
                                </ul>
                            </div>
                            {/* Spec 3 */}
                            <div className="border border-white/10 p-8 rounded-sm hover:bg-white/5 transition-colors">
                                <h3 className="text-xl font-bold mb-4 text-brand-copper">Performance</h3>
                                <ul className="space-y-3 text-slate-300 text-sm">
                                    <li className="flex items-start"><span className="mr-2">•</span> Wind Load Tested</li>
                                    <li className="flex items-start"><span className="mr-2">•</span> UV Resistant Seals</li>
                                    <li className="flex items-start"><span className="mr-2">•</span> 10-Year Warranty on Glass</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits Grid */}
                <section className="py-24 bg-slate-50">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-serif font-bold mb-12 text-center text-brand-dark">Why Enclose Your Porch?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                                <div className="text-4xl mb-4">🌡️</div>
                                <h3 className="text-xl font-bold mb-4 text-brand-dark">Energy Efficiency</h3>
                                <p className="text-slate-600">Creates an airlock that prevents cold drafts from entering your home when the front door is opened, lowering heating bills.</p>
                            </div>
                            <div className="bg-white p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                                <div className="text-4xl mb-4">🛡️</div>
                                <h3 className="text-xl font-bold mb-4 text-brand-dark">Weather Protection</h3>
                                <p className="text-slate-600">Keeps snow, rain, and leaves off your porch. No more shoveling your front step before you can leave the house.</p>
                            </div>
                            <div className="bg-white p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                                <div className="text-4xl mb-4">🔒</div>
                                <h3 className="text-xl font-bold mb-4 text-brand-dark">Added Security</h3>
                                <p className="text-slate-600">Adds an extra layer of security to your main entrance with robust, lockable storm doors and difficult-to-break tempered glass.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sticky Mobile CTA */}
                <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 z-40 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
                    <Link href="/contact" className="block w-full py-3 bg-brand-copper text-white text-center font-bold rounded shadow-lg">
                        Get a Free Quote
                    </Link>
                </div>

                {/* Related Articles */}
                <RelatedArticles
                    posts={blogPosts.filter(post =>
                        ['project-spotlight-oakville-waterfront', 'cmhc-insurance-home-upgrades', '2025-outdoor-design-trends'].includes(post.slug)
                    )}
                    title="Enclosure Design & Tips"
                />

                {/* CTA Section */}
                <section className="py-24 bg-brand-navy text-white text-center">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
                            Ready to Enclose Your Porch?
                        </h2>
                        <p className="text-slate-300 max-w-2xl mx-auto mb-10 text-lg">
                            Send us a photo of your porch for a fast, accurate estimate. No site visit required for rough pricing.
                        </p>
                        <Link href="/contact" className="inline-block px-10 py-4 bg-brand-copper text-white font-bold tracking-wide hover:bg-orange-700 transition-colors shadow-lg rounded-sm">
                            Get a Free Estimate
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
