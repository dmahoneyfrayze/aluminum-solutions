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
import PorchEnclosuresFAQ from "@/components/ui/PorchEnclosuresFAQ";

export const metadata: Metadata = {
    title: "Porch Enclosures Toronto | Glass Enclosures & Sunrooms",
    description: "Custom glass porch enclosures and sunrooms in Toronto & GTA. 3-season and 4-season vestibules. Keep cold out and add value. Free quotes.",
    openGraph: {
        title: "Porch Enclosures Toronto | Glass Enclosures & Sunrooms",
        description: "Custom glass porch enclosures and sunrooms in Toronto & GTA. 3-season and 4-season vestibules. Keep cold out and add value. Free quotes.",
        images: [
            {
                url: '/images/generated/glass_enclosure_project_1764312838961.webp',
                alt: 'Glass Porch Enclosures Toronto'
            }
        ],
    },
};

export default function PorchEnclosuresPage() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />

            <Breadcrumbs />

            <JsonLd
                data={{
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "serviceType": "Sunroom & Porch Enclosure Installation",
                    "provider": {
                        "@type": "LocalBusiness",
                        "name": "Aluminum Solutions"
                    },
                    "areaServed": [
                        { "@type": "City", "name": "Toronto" },
                        { "@type": "City", "name": "Mississauga" },
                        { "@type": "City", "name": "Vaughan" },
                        { "@type": "City", "name": "Richmond Hill" },
                        { "@type": "City", "name": "Brampton" },
                        { "@type": "City", "name": "Newmarket" }
                    ]
                }}
            />

            <main className="flex-grow">
                {/* Hero */}
                <Hero
                    title="Glass Porch Enclosures & Sunrooms in Toronto & the GTA"
                    subtitle="Custom-manufactured glass porch enclosures, three-season rooms, and four-season sunrooms — engineered for Canadian weather and built in the GTA."
                    ctaText="Get Enclosure Pricing"
                    ctaLink="/contact"
                    secondaryCtaText="View Gallery"
                    secondaryCtaLink="/gallery?category=Glass%20Enclosures"
                    backgroundImage="/images/generated/glass_enclosure_project_1764312838961.webp"
                />

                {/* Trust Strip */}
                <div className="bg-brand-navy text-white text-center py-4 px-6 border-b border-slate-700">
                    <p className="text-sm md:text-base font-medium">
                        🛡️ Energy Efficient • ❄️ Built for Winter • 🇨🇦 Manufactured in GTA
                    </p>
                </div>

                {/* Built for Toronto Weather (NEW) */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <span className="text-brand-copper font-bold tracking-widest uppercase text-sm mb-2 block">
                                Canadian Climate Ready
                            </span>
                            <h2 className="text-3xl font-serif font-bold text-brand-dark mb-6">
                                Built for Toronto Weather
                            </h2>
                            <p className="text-slate-600 text-lg">
                                Our enclosures are not just glass walls; they are engineered barriers against Toronto's harsh winters and humid summers.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 text-center hover:shadow-md transition-shadow">
                                <div className="text-4xl mb-4">🌬️</div>
                                <h3 className="font-bold text-lg text-brand-dark mb-2">Wind Resistance</h3>
                                <p className="text-slate-600 text-sm">Heavy-duty aluminum frames designed to withstand high winds on exposed porches.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 text-center hover:shadow-md transition-shadow">
                                <div className="text-4xl mb-4">❄️</div>
                                <h3 className="font-bold text-lg text-brand-dark mb-2">Snow Load</h3>
                                <p className="text-slate-600 text-sm">Engineered roofs and frames capable of handling heavy snow accumulation without warping.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 text-center hover:shadow-md transition-shadow">
                                <div className="text-4xl mb-4">💧</div>
                                <h3 className="font-bold text-lg text-brand-dark mb-2">Condensation Control</h3>
                                <p className="text-slate-600 text-sm">Proper ventilation systems to manage moisture and prevent buildup in changing temperatures.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 text-center hover:shadow-md transition-shadow">
                                <div className="text-4xl mb-4">🧱</div>
                                <h3 className="font-bold text-lg text-brand-dark mb-2">Rot & Rust Proof</h3>
                                <p className="text-slate-600 text-sm">We use premium aluminum and glass that won't rot like wood or rust like steel.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Types of Enclosures */}
                <section className="py-24 bg-slate-50">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">
                                Choose Your Enclosure Style
                            </h2>
                            <p className="text-slate-600 max-w-2xl mx-auto">
                                From basic vestibules to fully insulated living spaces.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* 3-Season */}
                            <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm flex flex-col">
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Three-Season Rooms</h3>
                                <p className="text-brand-copper font-bold text-sm uppercase tracking-wider mb-6">Spring • Summer • Fall</p>
                                <p className="text-slate-600 mb-6 flex-grow">
                                    The most popular choice for front porch enclosures. Create a buffer zone that keeps snow and rain off your doorstep.
                                </p>
                                <ul className="text-sm text-slate-600 space-y-3 mb-8">
                                    <li className="flex gap-2"><span>✓</span> Single-pane tempered glass</li>
                                    <li className="flex gap-2"><span>✓</span> Light aluminum frame</li>
                                    <li className="flex gap-2"><span>✓</span> Operational windows for airflow</li>
                                </ul>
                                <Link href="/contact" className="block w-full text-center py-3 border-2 border-brand-navy text-brand-navy font-bold rounded hover:bg-brand-navy hover:text-white transition-colors">
                                    Get 3-Season Quote
                                </Link>
                            </div>

                            {/* 4-Season */}
                            <div className="bg-white p-8 rounded-xl border-2 border-brand-navy shadow-lg relative flex flex-col transform md:-translate-y-4">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-navy text-white px-4 py-1 text-xs font-bold uppercase tracking-wider rounded-full">
                                    Year-Round Comfort
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Four-Season Sunrooms</h3>
                                <p className="text-brand-copper font-bold text-sm uppercase tracking-wider mb-6">All Year Round</p>
                                <p className="text-slate-600 mb-6 flex-grow">
                                    A true extension of your home. Insulated specifically to be heated in winter and cooled in summer.
                                </p>
                                <ul className="text-sm text-slate-600 space-y-3 mb-8">
                                    <li className="flex gap-2"><span>✓</span> Double-pane Low-E insulated glass</li>
                                    <li className="flex gap-2"><span>✓</span> Thermally broken insulated frames</li>
                                </ul>
                                <Link href="/contact" className="block w-full text-center py-3 bg-brand-navy text-white font-bold rounded hover:bg-brand-copper transition-colors">
                                    Get 4-Season Quote
                                </Link>
                            </div>

                            {/* Solariums */}
                            <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm flex flex-col">
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Solariums</h3>
                                <p className="text-brand-copper font-bold text-sm uppercase tracking-wider mb-6">Maximum Light</p>
                                <p className="text-slate-600 mb-6 flex-grow">
                                    Immersive glass structures with glass roofs. Perfect for indoor gardens or stargazing from the comfort of indoors.
                                </p>
                                <ul className="text-sm text-slate-600 space-y-3 mb-8">
                                    <li className="flex gap-2"><span>✓</span> Architectural glass designs</li>
                                    <li className="flex gap-2"><span>✓</span> Panoramic floor-to-ceiling views</li>
                                    <li className="flex gap-2"><span>✓</span> Low-Iron super clear glass</li>
                                </ul>
                                <Link href="/contact" className="block w-full text-center py-3 border-2 border-brand-navy text-brand-navy font-bold rounded hover:bg-brand-navy hover:text-white transition-colors">
                                    Get Solarium Quote
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mid-Page Conversion Anchor */}
                <section className="bg-brand-copper py-12">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Not Sure Which Enclosure Is Right for You?
                        </h2>
                        <p className="text-white/90 mb-8 text-lg">
                            Send us a photo of your specific porch and we'll recommend the best solution.
                        </p>
                        <Link href="/contact" className="inline-block px-10 py-4 bg-white text-brand-copper font-bold shadow-lg hover:bg-slate-100 transition-colors rounded-sm">
                            Get Free Design Advice →
                        </Link>
                    </div>
                </section>

                {/* Why Professional Installation Matters (Refocused) */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col md:flex-row gap-16 items-center">
                            <div className="w-full md:w-1/2">
                                <div className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="/images/projects/porch-enclosure-glass-black.jpg"
                                        alt="Professionally installed glass porch enclosure"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="w-full md:w-1/2">
                                <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">
                                    Why Professional Installation Matters
                                </h2>
                                <p className="text-slate-600 mb-8 leading-relaxed">
                                    A porch enclosure is a structural addition to your home. Improper installation can lead to leaks, drafts, and even structural damage. Our licensed GTA team ensures it's done right.
                                </p>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-brand-navy text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">1</div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 mb-1">Structural Anchoring</h3>
                                            <p className="text-sm text-slate-600">We securely anchor walls to your existing brick or stone, ensuring stability against high winds.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-brand-navy text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">2</div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 mb-1">Weather-Tight Sealing</h3>
                                            <p className="text-sm text-slate-600">Expert caulking and flashing application prevents water infiltration and drafty gaps.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-brand-navy text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">3</div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 mb-1">Code Compliance</h3>
                                            <p className="text-sm text-slate-600">We ensure all glazing materials and door hardware meet Ontario Building Code safety standards.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <PorchEnclosuresFAQ />

                {/* CTA */}
                <section className="py-24 bg-brand-navy text-white text-center">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                            Get Ready for Winter
                        </h2>
                        <p className="text-slate-300 max-w-2xl mx-auto mb-10 text-lg">
                            Don't wait for the first snowfall. Schedule your porch enclosure installation today.
                        </p>
                        <Link href="/contact" className="inline-block px-10 py-4 bg-brand-copper text-white font-bold tracking-wide hover:bg-orange-700 transition-colors shadow-lg rounded-sm">
                            Get a Free Quote
                        </Link>
                    </div>
                </section>

                {/* Related Articles */}
                <RelatedArticles
                    posts={blogPosts.filter(post =>
                        ['2025-outdoor-design-trends', 'cleaning-maintaining-glass-railings'].includes(post.slug)
                    )}
                    title="Home Improvement Tips"
                />
            </main>

            <Footer />
        </div>
    );
}
