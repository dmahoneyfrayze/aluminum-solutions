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
import PremiumFeatures from "@/components/ui/PremiumFeatures";
import GlassRailingsFAQ from "@/components/ui/GlassRailingsFAQ";
import ServiceAreasList from "@/components/ui/ServiceAreasList";

export const metadata: Metadata = {
    title: "Glass Railing Systems Toronto & GTA | Frameless & Custom",
    description: "Premium glass railing systems for decks, porches, and pools. Frameless, post-mounted, and shoe designs. Ontario Building Code compliant. Get a free quote.",
    openGraph: {
        title: "Glass Railing Systems Toronto & GTA | Frameless & Custom",
        description: "Premium glass railing systems for decks, porches, and pools. Frameless, post-mounted, and shoe designs.",
        images: [
            {
                url: '/images/projects/glass-railing-stairs-hero.jpg',
                alt: 'Glass Railing Systems Toronto'
            }
        ],
    },
};

export default function GlassRailingsPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <Breadcrumbs />

            {/* Product Schema */}
            <JsonLd
                data={{
                    "@context": "https://schema.org",
                    "@type": "Product",
                    "name": "Glass Railing Systems",
                    "description": "Elegant frameless and post glass railing systems for stairs, porches, and decks. Professional installation in Toronto.",
                    "brand": {
                        "@type": "Brand",
                        "name": "Aluminum Solutions"
                    },
                    "offers": {
                        "@type": "Offer",
                        "priceCurrency": "CAD",
                        "availability": "https://schema.org/InStock",
                        "areaServed": "Toronto, GTA",
                        "priceSpecification": {
                            "@type": "UnitPriceSpecification",
                            "price": "100.00",
                            "priceCurrency": "CAD",
                            "unitCode": "FOT" // Foot
                        }
                    },
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "4.9",
                        "reviewCount": "85"
                    }
                }}
            />

            {/* Service Schema */}
            <JsonLd
                data={{
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "serviceType": "Glass Railing Installation",
                    "provider": {
                        "@type": "LocalBusiness",
                        "name": "Aluminum Solutions"
                    },
                    "areaServed": [
                        { "@type": "City", "name": "Toronto" },
                        { "@type": "City", "name": "Mississauga" },
                        { "@type": "City", "name": "Vaughan" },
                        { "@type": "City", "name": "Oakville" },
                        { "@type": "City", "name": "Richmond Hill" }
                    ]
                }}
            />

            <main className="flex-grow">
                {/* Hero */}
                <Hero
                    title="Glass Railing Systems in Toronto & the GTA"
                    subtitle="Frameless and post-mounted glass railings engineered for safety, clarity, and modern design — manufactured and installed by GTA experts."
                    ctaText="Get Glass Railing Pricing"
                    ctaLink="/contact"
                    secondaryCtaText="View Gallery"
                    secondaryCtaLink="/gallery?category=Glass%20Railings"
                    backgroundImage="/images/projects/glass-railing-stairs-hero.jpg"
                />

                {/* Proof Line / Trust Strip */}
                <div className="bg-brand-navy text-white text-center py-4 px-6 border-b border-slate-700">
                    <p className="text-sm md:text-base font-medium">
                        🛡️ Residential & Commercial Systems • 📜 Ontario Building Code (SB-13) Compliant • 🇨🇦 Made in Canada
                    </p>
                </div>

                {/* Why Glass in Toronto (NEW) */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <span className="text-brand-copper font-bold tracking-widest uppercase text-sm mb-2 block">
                                Engineered for Canada
                            </span>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-6">
                                Why Glass Railings Are Ideal for Toronto Properties
                            </h2>
                            <p className="text-slate-600 text-lg">
                                Enhance your property value with a modern aesthetic that withstands our unique climate.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 text-center hover:shadow-md transition-shadow">
                                <div className="text-4xl mb-4">🏙️</div>
                                <h3 className="font-bold text-lg text-brand-dark mb-2">Preserve Views</h3>
                                <p className="text-slate-600 text-sm">Perfect for dense urban settings or backyard oases. Keep your sightlines clear and unobstructed.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 text-center hover:shadow-md transition-shadow">
                                <div className="text-4xl mb-4">🌬️</div>
                                <h3 className="font-bold text-lg text-brand-dark mb-2">Wind Protection</h3>
                                <p className="text-slate-600 text-sm">Block cold winds on elevated decks, balconies, and rooftops while letting the sunlight in.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 text-center hover:shadow-md transition-shadow">
                                <div className="text-4xl mb-4">🏊</div>
                                <h3 className="font-bold text-lg text-brand-dark mb-2">Pool Safety</h3>
                                <p className="text-slate-600 text-sm">Climb-resistant barriers that allow full visibility of your pool area for maximum safety.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 text-center hover:shadow-md transition-shadow">
                                <div className="text-4xl mb-4">❄️</div>
                                <h3 className="font-bold text-lg text-brand-dark mb-2">Weather Ready</h3>
                                <p className="text-slate-600 text-sm">Tempered safety glass engineered to withstand Toronto's freeze-thaw cycles without cracking.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Applications Grid (Reordered: Styles First) */}
                <section className="py-24 bg-slate-50">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                            <div>
                                <h2 className="text-3xl font-serif font-bold text-brand-dark mb-2">Choose Your Glass Railing Style</h2>
                                <p className="text-slate-600">From frameless minimalism to robust post-mounted systems.</p>
                            </div>
                            <Link href="/gallery" className="hidden md:inline-block text-brand-copper font-bold hover:underline">
                                View Usage Gallery &rarr;
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {/* Frameless / Base Shoe */}
                            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100 flex flex-col md:flex-row gap-6 items-center group">
                                <div className="w-full md:w-1/3 h-48 bg-slate-200 relative rounded overflow-hidden">
                                    <Image src="/images/projects/frameless-glass-deck-railing.jpg" alt="Frameless Glass Deck Railing" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="w-full md:w-2/3">
                                    <h3 className="text-xl font-bold text-brand-dark mb-2">Frameless (Base Shoe)</h3>
                                    <p className="text-slate-600 text-sm mb-4">
                                        The ultimate pure glass look. The glass is supported by a sturdy aluminum shoe at the bottom, offering a complete uninterrupted view.
                                    </p>
                                    <Link href="/contact" className="text-brand-copper font-bold text-sm hover:underline">Get Frameless Quote &rarr;</Link>
                                </div>
                            </div>

                            {/* Semi-Frameless / Standoffs */}
                            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100 flex flex-col md:flex-row gap-6 items-center group">
                                <div className="w-full md:w-1/3 h-48 bg-slate-200 relative rounded overflow-hidden">
                                    <Image src="/images/projects/staircase-frameless-glass.jpg" alt="Standoff Glass Railing" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="w-full md:w-2/3">
                                    <h3 className="text-xl font-bold text-brand-dark mb-2">Semi-Frameless (Stand-offs)</h3>
                                    <p className="text-slate-600 text-sm mb-4">
                                        Modern and architectural. Heavy-duty stainless steel pins (stand-offs) hold the glass in place, popularly used on staircases and balconies.
                                    </p>
                                    <Link href="/contact" className="text-brand-copper font-bold text-sm hover:underline">Get Standoff Quote &rarr;</Link>
                                </div>
                            </div>

                            {/* Post Systems */}
                            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100 flex flex-col md:flex-row gap-6 items-center group">
                                <div className="w-full md:w-1/3 h-48 bg-slate-200 relative rounded overflow-hidden">
                                    <Image src="/images/projects/glass-railing-tall-posts.jpg" alt="Post Glass Railing System" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="w-full md:w-2/3">
                                    <h3 className="text-xl font-bold text-brand-dark mb-2">Post-Mounted Glass</h3>
                                    <p className="text-slate-600 text-sm mb-4">
                                        A classic blend of strength and clarity. Aluminum or stainless steel posts provide structural support with glass panels in between.
                                    </p>
                                    <Link href="/contact" className="text-brand-copper font-bold text-sm hover:underline">Get Post System Quote &rarr;</Link>
                                </div>
                            </div>

                            {/* Pool Fences */}
                            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100 flex flex-col md:flex-row gap-6 items-center group">
                                <div className="w-full md:w-1/3 h-48 bg-slate-200 relative rounded overflow-hidden">
                                    <Image src="/images/Frameless-Glass.jpg" alt="Glass Pool Guards" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="w-full md:w-2/3">
                                    <h3 className="text-xl font-bold text-brand-dark mb-2">Swimming Pool Guards</h3>
                                    <p className="text-slate-600 text-sm mb-4">
                                        Safety meets sophistication. Our clamp or spigot systems ensure code compliance for pool enclosures without blocking the view.
                                    </p>
                                    <Link href="/services/pool-fences" className="text-brand-copper font-bold text-sm hover:underline">View Pool Solutions &rarr;</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pricing Guide (NEW) */}
                <section className="py-20 bg-white border-y border-slate-100">
                    <div className="container mx-auto px-6">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl font-serif font-bold text-brand-dark mb-4">Glass Railing Pricing in Toronto</h2>
                            <p className="text-slate-600">
                                Honest estimates to help you plan your project. Final pricing depends on layout, glass thickness, and access.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            {/* Post-Mounted */}
                            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 text-center relative">
                                <h3 className="font-bold text-xl text-brand-dark mb-2">Post-Mounted Systems</h3>
                                <div className="text-3xl font-bold text-brand-copper mb-2">$160 - $230</div>
                                <div className="text-sm text-slate-500 mb-6">per linear foot</div>
                                <ul className="text-left space-y-3 text-slate-600 mb-8 text-sm">
                                    <li className="flex items-center">✓ 10mm Tempered Glass</li>
                                    <li className="flex items-center">✓ Steel Posts</li>
                                    <li className="flex items-center">✓ Cost-Effective Glass Option</li>
                                </ul>
                                <Link href="/contact" className="block w-full py-3 bg-white border border-brand-copper text-brand-copper font-bold rounded hover:bg-brand-copper hover:text-white transition-colors">
                                    Get Quote
                                </Link>
                            </div>

                            {/* Frameless */}
                            <div className="bg-white p-8 rounded-xl border-2 border-brand-navy shadow-lg text-center relative transform md:-translate-y-4">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-navy text-white px-4 py-1 text-xs font-bold uppercase tracking-wider rounded-full">
                                    Most Popular
                                </div>
                                <h3 className="font-bold text-xl text-brand-dark mb-2">Frameless & Base Shoe</h3>
                                <div className="text-3xl font-bold text-brand-copper mb-2">$140 - $200+</div>
                                <div className="text-sm text-slate-500 mb-6">per linear foot</div>
                                <ul className="text-left space-y-3 text-slate-600 mb-8 text-sm">
                                    <li className="flex items-center">✓ 12mm+ Tempered/Laminated Glass</li>
                                    <li className="flex items-center">✓ Unobstructed Views</li>
                                    <li className="flex items-center">✓ Premium High-End Look</li>
                                </ul>
                                <Link href="/contact" className="block w-full py-3 bg-brand-navy text-white font-bold rounded hover:bg-brand-copper transition-colors">
                                    Get Quote
                                </Link>
                            </div>

                            {/* Custom / Commercial */}
                            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 text-center relative">
                                <h3 className="font-bold text-xl text-brand-dark mb-2">Commercial & Custom</h3>
                                <div className="text-3xl font-bold text-brand-copper mb-2">Project Quote</div>
                                <div className="text-sm text-slate-500 mb-6">based on specs</div>
                                <ul className="text-left space-y-3 text-slate-600 mb-8 text-sm">
                                    <li className="flex items-center">✓ Engineered Systems</li>
                                    <li className="flex items-center">✓ Multi-Unit Discounts</li>
                                    <li className="flex items-center">✓ Architectural Glazing</li>
                                </ul>
                                <Link href="/commercial" className="block w-full py-3 bg-white border border-brand-copper text-brand-copper font-bold rounded hover:bg-brand-copper hover:text-white transition-colors">
                                    Commercial Request
                                </Link>
                            </div>
                        </div>
                        <p className="text-center text-xs text-slate-400 mt-8">
                            *Prices are estimates only and include standard installation. Custom glass or complex sites may affect final price.
                        </p>
                    </div>
                </section>

                {/* Commercial Callout (NEW) */}
                <section className="bg-brand-dark py-16 text-white overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-copper/10 skew-x-12 transform translate-x-12"></div>
                    <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
                        <div className="w-full md:w-2/3">
                            <h2 className="text-3xl font-serif font-bold mb-4">Commercial Glass Railing Systems</h2>
                            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                                We specialize in high-traffic, code-engineered <Link href="/services/glass-railings" className="text-brand-copper hover:underline font-bold">glass systems</Link> for condos, restaurants, and office buildings across the GTA. From rooftop patios to mezzanine stairwells, we deliver on time and to spec.
                            </p>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                <li className="flex items-center gap-2"><span className="text-brand-copper">✓</span> Condos & Multi-Unit Buildings</li>
                                <li className="flex items-center gap-2"><span className="text-brand-copper">✓</span> Restaurants & Rooftop Patios</li>
                                <li className="flex items-center gap-2"><span className="text-brand-copper">✓</span> Offices & Retail Spaces</li>
                                <li className="flex items-center gap-2"><span className="text-brand-copper">✓</span> Fully Insured & WSIB Compliant</li>
                            </ul>
                            <Link href="/commercial" className="inline-block px-8 py-3 bg-brand-copper text-white font-bold rounded hover:bg-white hover:text-brand-dark transition-colors">
                                Request Commercial Quote &rarr;
                            </Link>
                        </div>
                        <div className="w-full md:w-1/3">
                            <div className="aspect-square bg-slate-800 rounded-lg relative overflow-hidden border border-slate-700 shadow-2xl">
                                <Image src="/images/projects/railing-balcony-apartment-replacement.jpg" alt="Commercial Glass Railing" fill className="object-cover" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Hardware Details (Reordered: Now after Styles) */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="text-center max-w-4xl mx-auto mb-16">
                            <h2 className="text-3xl font-serif font-bold text-brand-dark mb-6">Technical Hardware Details</h2>
                            <p className="text-slate-600">
                                We use only high-grade aluminum and 316 stainless steel to ensure your railing withstands the Canadian environment without corroding.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Baseshoe */}
                            <div className="bg-slate-50 rounded-xl overflow-hidden border border-slate-100 shadow-sm flex flex-col">
                                <div className="h-64 relative bg-white p-6">
                                    <Image src="/images/projects/glass-railing-baseshoe.jpg" alt="Baseshoe Hardware" fill className="object-contain" />
                                </div>
                                <div className="p-8 flex-grow">
                                    <h3 className="text-xl font-bold text-brand-dark mb-2">Base Shoe</h3>
                                    <p className="text-brand-copper font-bold text-sm uppercase tracking-wider mb-4">Continuous Track</p>
                                    <ul className="space-y-2 text-slate-600 text-sm">
                                        <li className="flex gap-2"><span>•</span> Heavy-duty aluminum channel</li>
                                        <li className="flex gap-2"><span>•</span> Can be recessed or surface mounted</li>
                                        <li className="flex gap-2"><span>•</span> Cladding available to match finishes</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Mini-Posts */}
                            <div className="bg-slate-50 rounded-xl overflow-hidden border border-slate-100 shadow-sm flex flex-col">
                                <div className="h-64 relative bg-white p-6">
                                    <Image src="/images/projects/glass-railing-mini-posts.jpg" alt="Mini-Post Hardware" fill className="object-contain" />
                                </div>
                                <div className="p-8 flex-grow">
                                    <h3 className="text-xl font-bold text-brand-dark mb-2">Mini-Posts (Spigots)</h3>
                                    <p className="text-brand-copper font-bold text-sm uppercase tracking-wider mb-4">Clamp System</p>
                                    <ul className="space-y-2 text-slate-600 text-sm">
                                        <li className="flex gap-2"><span>•</span> Marine-grade stainless steel</li>
                                        <li className="flex gap-2"><span>•</span> Non-intrusive low profile design</li>
                                        <li className="flex gap-2"><span>•</span> Ideal for pool surrounds</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Tall Posts */}
                            <div className="bg-slate-50 rounded-xl overflow-hidden border border-slate-100 shadow-sm flex flex-col">
                                <div className="h-64 relative bg-white p-6">
                                    <Image src="/images/projects/glass-railing-tall-posts.jpg" alt="Tall Post Hardware" fill className="object-contain" />
                                </div>
                                <div className="p-8 flex-grow">
                                    <h3 className="text-xl font-bold text-brand-dark mb-2">Tall Posts</h3>
                                    <p className="text-brand-copper font-bold text-sm uppercase tracking-wider mb-4">Structural Support</p>
                                    <ul className="space-y-2 text-slate-600 text-sm">
                                        <li className="flex gap-2"><span>•</span> Classic aluminum post design</li>
                                        <li className="flex gap-2"><span>•</span> Maximum wind protection</li>
                                        <li className="flex gap-2"><span>•</span> Cost-effective glass solution</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Stand-offs */}
                            <div className="bg-slate-50 rounded-xl overflow-hidden border border-slate-100 shadow-sm flex flex-col">
                                <div className="h-64 relative bg-white p-6">
                                    <Image src="/images/projects/glass-railing-standoffs.jpg" alt="Stand-off Hardware" fill className="object-contain" />
                                </div>
                                <div className="p-8 flex-grow">
                                    <h3 className="text-xl font-bold text-brand-dark mb-2">Stand-offs</h3>
                                    <p className="text-brand-copper font-bold text-sm uppercase tracking-wider mb-4">Point-Supported</p>
                                    <ul className="space-y-2 text-slate-600 text-sm">
                                        <li className="flex gap-2"><span>•</span> Solid 316 stainless steel pins</li>
                                        <li className="flex gap-2"><span>•</span> Side-mounted for floating effect</li>
                                        <li className="flex gap-2"><span>•</span> Custom adjustable depth</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="text-center mt-12">
                            <PremiumFeatures />
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <GlassRailingsFAQ />

                {/* Mid-Page Conversion Anchor */}
                <section className="bg-brand-copper py-12">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Have Your Measurements Ready?
                        </h2>
                        <p className="text-white/90 mb-8 text-lg">
                            Get a fast ballpark quote today. No site visit needed for initial estimates.
                        </p>
                        <Link href="/contact" className="inline-block px-10 py-4 bg-white text-brand-copper font-bold shadow-lg hover:bg-slate-100 transition-colors rounded-sm">
                            Get Exact Price →
                        </Link>
                    </div>
                </section>

                {/* Related Articles */}
                <RelatedArticles
                    posts={blogPosts.filter(post =>
                        ['cleaning-maintaining-glass-railings', '2025-outdoor-design-trends', 'ontario-building-code-railing-safety'].includes(post.slug)
                    )}
                    title="Glass Railing Insights"
                />

                <ServiceAreasList />
            </main>

            <Footer />
        </div>
    );
}
