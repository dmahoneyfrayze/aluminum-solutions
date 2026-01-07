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
import RailingsWhoThisIsFor from "@/components/ui/RailingsWhoThisIsFor";
import RailingsFAQ from "@/components/ui/RailingsFAQ";
import ServiceAreasList from "@/components/ui/ServiceAreasList";

export const metadata: Metadata = {
    title: "Aluminum Railings Toronto | Custom Porch & Deck Railings",
    description: "High-quality aluminum railings for porches, balconies, and decks. Rust-free, maintenance-free, and professionally installed in Toronto & GTA.",
    keywords: ["Aluminum Railings Toronto", "Deck Railings", "Porch Railings", "Maintenance Free Railings", "Exterior Railings"],
    openGraph: {
        title: "Aluminum Railings Toronto | Custom Porch & Deck Railings",
        description: "High-quality aluminum railings for porches, balconies, and decks. Rust-free, maintenance-free, and professionally installed.",
        images: [
            {
                url: '/images/projects/black-aluminum-railing-stone.png',
                alt: 'Custom Aluminum Railings in Toronto'
            }
        ],
    },
};

export default function RailingsPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <Breadcrumbs />

            {/* Product Schema */}
            <JsonLd
                data={{
                    "@context": "https://schema.org",
                    "@type": "Product",
                    "name": "Custom Aluminum Railings",
                    "description": "High-quality, rust-free aluminum railings for porches and decks. Custom made in Toronto.",
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
                            "price": "60.00",
                            "priceCurrency": "CAD",
                            "unitCode": "FOT" // Foot
                        }
                    },
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "4.9",
                        "reviewCount": "128"
                    }
                }}
            />

            {/* Service Schema */}
            <JsonLd
                data={{
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "serviceType": "Aluminum Railing Installation",
                    "provider": {
                        "@type": "LocalBusiness",
                        "name": "Aluminum Solutions"
                    },
                    "areaServed": [
                        { "@type": "City", "name": "Toronto" },
                        { "@type": "City", "name": "Mississauga" },
                        { "@type": "City", "name": "Vaughan" }
                    ]
                }}
            />

            <main className="flex-grow">
                {/* H1 is here */}
                <Hero
                    title="Custom Aluminum Railings in Toronto"
                    subtitle={
                        <>
                            The perfect blend of safety, style, and durability. Maintenance-free solutions for your{" "}
                            <Link href="/services/porch-enclosures" className="underline hover:text-brand-copper">
                                porch
                            </Link>, deck, or balcony.
                        </>
                    }
                    ctaText="Get a Quote"
                    ctaLink="/contact"
                    backgroundImage="/images/projects/black-aluminum-railing-stone.png"
                />

                {/* Quick Navigation Bar */}
                <div className="bg-slate-50 border-b border-slate-200 sticky top-0 md:relative z-30">
                    <div className="container mx-auto px-6 py-4 overflow-x-auto">
                        <div className="flex flex-nowrap md:justify-center gap-4 text-sm font-bold whitespace-nowrap">
                            <span className="text-slate-400 hidden md:inline">Quick Links:</span>
                            <Link href="/services/glass-railings" className="px-4 py-2 bg-white rounded-full border border-slate-200 text-slate-700 hover:border-brand-copper hover:text-brand-copper transition-colors shadow-sm">
                                ✨ Glass Railings
                            </Link>
                            <Link href="/services/porch-enclosures" className="px-4 py-2 bg-white rounded-full border border-slate-200 text-slate-700 hover:border-brand-copper hover:text-brand-copper transition-colors shadow-sm">
                                🏠 Porch Enclosures
                            </Link>
                            <Link href="/gallery?category=Railings" className="px-4 py-2 bg-white rounded-full border border-slate-200 text-slate-700 hover:border-brand-copper hover:text-brand-copper transition-colors shadow-sm">
                                🖼️ View Gallery
                            </Link>
                            <Link href="/process" className="px-4 py-2 bg-white rounded-full border border-slate-200 text-slate-700 hover:border-brand-copper hover:text-brand-copper transition-colors shadow-sm">
                                ⚙️ Our Process
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Who This Is For (Micro-Section) */}
                <RailingsWhoThisIsFor />

                {/* Overview */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-brand-copper font-bold tracking-widest uppercase text-sm mb-2 block">
                                Built for Canada
                            </span>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-brand-dark">
                                Why Choose an Aluminium Railing System?
                            </h2>
                            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                                <p>
                                    Unlike wood that rots or wrought iron that rusts, aluminum is the superior choice for Canadian homes. It withstands our harsh winters and humid summers without ever needing painting or staining.
                                </p>
                                <p>
                                    <strong>Factory Direct Quality:</strong> At Aluminum Solutions, we fabricate our railings locally to ensure the highest quality control. Our powder-coated finishes are designed to resist fading, chipping, and peeling for decades.
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
                                src="/images/projects/railing-aluminum-brown-glass.jpg"
                                alt="High-quality aluminum railing installation"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* Technical Specs & "Made in Canada" Trust Signals */}
                <section className="py-16 bg-brand-navy text-white">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                            <div className="p-4 border border-slate-700 rounded-lg bg-slate-800/50">
                                <div className="text-3xl mb-2">🇨🇦</div>
                                <h3 className="font-bold text-lg mb-1">Made in Canada</h3>
                                <p className="text-slate-400 text-sm">Fabricated locally in the GTA</p>
                            </div>
                            <div className="p-4 border border-slate-700 rounded-lg bg-slate-800/50">
                                <div className="text-3xl mb-2">🛡️</div>
                                <h3 className="font-bold text-lg mb-1">6063-T5 Alloy</h3>
                                <p className="text-slate-400 text-sm">Architectural grade aluminum</p>
                            </div>
                            <div className="p-4 border border-slate-700 rounded-lg bg-slate-800/50">
                                <div className="text-3xl mb-2">📜</div>
                                <h3 className="font-bold text-lg mb-1">OBC Compliant</h3>
                                <p className="text-slate-400 text-sm">Meets SB-13 Building Code</p>
                            </div>
                            <div className="p-4 border border-slate-700 rounded-lg bg-slate-800/50">
                                <div className="text-3xl mb-2">🎨</div>
                                <h3 className="font-bold text-lg mb-1">AAMA 2604</h3>
                                <p className="text-slate-400 text-sm">Premium powder coat finish</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Premium Hardware Features */}
                <PremiumFeatures />

                {/* Explore Our Products */}
                <section className="py-24 bg-slate-50">
                    <div className="container mx-auto px-6">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-6">
                                Explore Our Aluminum Products
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                From decks to balconies, we have a solution for every part of your home.
                            </p>
                        </div>

                        <div className="space-y-20">
                            {/* Deck Railings */}
                            <div className="flex flex-col md:flex-row gap-12 items-center">
                                <div className="w-full md:w-1/2">
                                    <div className="aspect-video relative rounded-lg overflow-hidden shadow-lg">
                                        <Image src="/images/projects/aluminum-railing-pickets-black.webp" alt="Aluminum Deck Railings Toronto" fill className="object-cover" />
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2">
                                    <h3 className="text-2xl font-bold text-brand-dark mb-4">Toronto Aluminum Deck Railings</h3>
                                    <p className="text-slate-600 mb-6 leading-relaxed">
                                        Elevate your outdoor living experience with our premium Aluminum Deck Railings. Crafted from high-grade aluminum, they are designed to withstand harsh weather conditions, ensuring durability and longevity. Our deck railings come in a variety of designs and finishes, allowing you to customize them to match your home’s aesthetic. Consider pairing with <Link href="/services/glass-railings" className="text-brand-copper hover:underline font-bold">glass panels</Link> for an unobstructed view.
                                    </p>
                                    <Link href="/contact" className="text-brand-copper font-bold hover:underline">
                                        Get a Quote for Deck Railings &rarr;
                                    </Link>
                                </div>
                            </div>

                            {/* Porch Railings */}
                            <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
                                <div className="w-full md:w-1/2">
                                    <div className="aspect-video relative rounded-lg overflow-hidden shadow-lg">
                                        <Image src="/images/projects/aluminum-columns-glass-railing.jpg" alt="Aluminum Porch Railings GTA" fill className="object-cover" />
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2">
                                    <h3 className="text-2xl font-bold text-brand-dark mb-4">Toronto Aluminum Porch Railings</h3>
                                    <p className="text-slate-600 mb-6 leading-relaxed">
                                        Our Aluminum Porch Railings are the perfect blend of functionality and curb appeal. Designed to enhance safety and accessibility, these railings add an elegant touch that can significantly increase your home’s value. If you need complete protection, explore our <Link href="/services/porch-enclosures" className="text-brand-copper hover:underline font-bold">porch enclosures</Link>.
                                    </p>
                                    <Link href="/contact" className="text-brand-copper font-bold hover:underline">
                                        Get a Quote for Porch Railings &rarr;
                                    </Link>
                                </div>
                            </div>

                            {/* Balcony Railings */}
                            <div className="flex flex-col md:flex-row gap-12 items-center">
                                <div className="w-full md:w-1/2">
                                    <div className="aspect-video relative rounded-lg overflow-hidden shadow-lg">
                                        <Image src="/images/projects/railing-balcony-apartment-replacement.jpg" alt="Aluminum Balcony Railings" fill className="object-cover" />
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2">
                                    <h3 className="text-2xl font-bold text-brand-dark mb-4">Toronto Aluminum Balcony Railings</h3>
                                    <p className="text-slate-600 mb-6 leading-relaxed">
                                        Transform your balcony into a safe and stylish sanctuary. These railings are designed to provide optimal safety without obstructing your view, making them perfect for high-rise apartments and residential homes alike.
                                    </p>
                                    <Link href="/contact" className="text-brand-copper font-bold hover:underline">
                                        Get a Quote for Balcony Railings &rarr;
                                    </Link>
                                </div>
                            </div>

                            {/* Commercial & Restaurant Patios (NEW) */}
                            <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
                                <div className="w-full md:w-1/2">
                                    <div className="aspect-video relative rounded-lg overflow-hidden shadow-lg">
                                        <Image src="/images/projects/DSC_0037.JPG" alt="Restaurant Patio Railings Toronto" fill className="object-cover" />
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2">
                                    <h3 className="text-2xl font-bold text-brand-dark mb-4">Restaurant & Commercial Patio Railings</h3>
                                    <p className="text-slate-600 mb-6 leading-relaxed">
                                        Create an inviting outdoor dining space with our commercial-grade aluminum and glass railings. Perfect for restaurants, cafes, and rooftop patios in Toronto. Visit our <Link href="/commercial" className="text-brand-copper hover:underline font-bold">Commercial Services</Link> page for more details.
                                    </p>
                                    <ul className="mb-6 space-y-2 text-slate-600">
                                        <li className="flex items-center">✓ Wind walls & privacy dividers</li>
                                        <li className="flex items-center">✓ Custom branding options</li>
                                        <li className="flex items-center">✓ Quick installation to minimize downtime</li>
                                    </ul>
                                    <Link href="/contact" className="text-brand-copper font-bold hover:underline">
                                        Get a Commercial Quote &rarr;
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pricing Guide */}
                <section className="py-20 bg-white border-y border-slate-100">
                    <div className="container mx-auto px-6">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl font-serif font-bold text-brand-dark mb-4">Transparent Pricing Guide</h2>
                            <p className="text-slate-600">
                                Estimated supply and installation costs per linear foot. Final price depends on complexity, height, and specific finish options.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            {/* Standard Picket */}
                            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 text-center">
                                <h3 className="font-bold text-xl text-brand-dark mb-2">Standard Picket Railing</h3>
                                <div className="text-4xl font-bold text-brand-copper mb-2">$70 - $85</div>
                                <div className="text-sm text-slate-500 mb-6">per linear foot</div>
                                <ul className="text-left space-y-3 text-slate-600 mb-8 text-sm">
                                    <li className="flex items-center">✓ Standard colors: Black, Grey, White, Beige, Commercial Brown</li>
                                    <li className="flex items-center">✓ 36-48" heights</li>
                                    <li className="flex items-center">✓ Professional Installation</li>
                                </ul>
                                <Link href="/contact" className="block w-full py-3 bg-white border border-brand-copper text-brand-copper font-bold rounded hover:bg-brand-copper hover:text-white transition-colors">
                                    Get Exact Price
                                </Link>
                            </div>

                            {/* Glass Railing */}
                            <div className="bg-white p-8 rounded-xl border-2 border-brand-navy shadow-lg text-center relative transform md:-translate-y-4">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-navy text-white px-4 py-1 text-xs font-bold uppercase tracking-wider rounded-full">
                                    Most Popular
                                </div>
                                <h3 className="font-bold text-xl text-brand-dark mb-2">Glass Railing</h3>
                                <div className="text-4xl font-bold text-brand-copper mb-2">$75 - $105</div>
                                <div className="text-sm text-slate-500 mb-6">per linear foot</div>
                                <ul className="text-left space-y-3 text-slate-600 mb-8 text-sm">
                                    <li className="flex items-center">✓ 6mm tempered glass</li>
                                    <li className="flex items-center">✓ Clear or Tinted Options</li>
                                    <li className="flex items-center">✓ Unobstructed Views</li>
                                </ul>
                                <Link href="/contact" className="block w-full py-3 bg-brand-navy text-white font-bold rounded hover:bg-brand-copper transition-colors">
                                    Get Exact Price
                                </Link>
                            </div>

                            {/* Custom / Commercial */}
                            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 text-center">
                                <h3 className="font-bold text-xl text-brand-dark mb-2">Custom & Commercial</h3>
                                <div className="text-4xl font-bold text-brand-copper mb-2">Contact Us</div>
                                <div className="text-sm text-slate-500 mb-6">for project quote</div>
                                <ul className="text-left space-y-3 text-slate-600 mb-8 text-sm">
                                    <li className="flex items-center">✓ Standard color palette</li>
                                    <li className="flex items-center">✓ Volume Discounts</li>
                                    <li className="flex items-center">✓ Architectural Specs</li>
                                </ul>
                                <Link href="/contact" className="block w-full py-3 bg-white border border-brand-copper text-brand-copper font-bold rounded hover:bg-brand-copper hover:text-white transition-colors">
                                    Request Bid
                                </Link>
                            </div>
                        </div>
                        <p className="text-center text-xs text-slate-400 mt-8">
                            *Prices are estimates only and subject to change. Minimum order quantities may apply.
                        </p>
                    </div>
                </section>

                {/* Mid-Page Conversion Anchor (NEW) */}
                <section className="bg-brand-copper py-12">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Ready to Price Your Railing Project?
                        </h2>
                        <p className="text-white/90 mb-8 text-lg">
                            Upload a photo and get a same-day estimate. No site visit required for rough pricing.
                        </p>
                        <Link href="/contact" className="inline-block px-10 py-4 bg-white text-brand-copper font-bold shadow-lg hover:bg-slate-100 transition-colors rounded-sm">
                            Get My Free Estimate →
                        </Link>
                    </div>
                </section>

                {/* Installation Process */}
                <section className="py-24 bg-slate-900 text-white">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-serif font-bold mb-4">Our Installation Process</h2>
                            <p className="text-slate-400">Simple, transparent, and professional from start to finish.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            <div className="relative">
                                <div className="text-6xl font-bold text-slate-800 absolute -top-4 -left-4 z-0">01</div>
                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold text-brand-copper mb-4">Consultation</h3>
                                    <p className="text-slate-300 text-sm">
                                        We visit your property to take precise measurements, discuss design options, and provide a detailed estimate.
                                    </p>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="text-6xl font-bold text-slate-800 absolute -top-4 -left-4 z-0">02</div>
                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold text-brand-copper mb-4">Fabrication</h3>
                                    <p className="text-slate-300 text-sm">
                                        Your railings are custom-fabricated in our GTA facility using high-grade aluminum and premium powder coating.
                                    </p>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="text-6xl font-bold text-slate-800 absolute -top-4 -left-4 z-0">03</div>
                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold text-brand-copper mb-4">Installation</h3>
                                    <p className="text-slate-300 text-sm">
                                        Our certified team installs your system efficiently, ensuring structural integrity and a clean job site.
                                    </p>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="text-6xl font-bold text-slate-800 absolute -top-4 -left-4 z-0">04</div>
                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold text-brand-copper mb-4">Inspection</h3>
                                    <p className="text-slate-300 text-sm">
                                        We perform a final walkthrough with you to ensure everything meets our high standards and your satisfaction.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Comparison Table */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-serif font-bold text-brand-dark mb-4">Is Aluminum The Best Material?</h2>
                            <p className="text-slate-600">See how aluminum stacks up against the competition.</p>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse text-left text-sm md:text-base">
                                <thead>
                                    <tr className="bg-brand-navy text-white">
                                        <th className="p-4 border border-slate-700">Aspect</th>
                                        <th className="p-4 border border-slate-700 bg-brand-copper">Aluminum Railings</th>
                                        <th className="p-4 border border-slate-700">PVC (Vinyl)</th>
                                        <th className="p-4 border border-slate-700">Steel Railings</th>
                                        <th className="p-4 border border-slate-700">Wood Railings</th>
                                    </tr>
                                </thead>
                                <tbody className="text-slate-700">
                                    <tr>
                                        <td className="p-4 border border-slate-200 font-bold">Maintenance</td>
                                        <td className="p-4 border border-slate-200 bg-orange-50 font-bold text-brand-dark">Minimal (Cleaning only)</td>
                                        <td className="p-4 border border-slate-200">Low</td>
                                        <td className="p-4 border border-slate-200">Moderate (Repainting)</td>
                                        <td className="p-4 border border-slate-200">High (Staining/Sealing)</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 border border-slate-200 font-bold">Longevity</td>
                                        <td className="p-4 border border-slate-200 bg-orange-50 font-bold text-brand-dark">High (No Rust)</td>
                                        <td className="p-4 border border-slate-200">Moderate (Can Crack)</td>
                                        <td className="p-4 border border-slate-200">High (If maintained)</td>
                                        <td className="p-4 border border-slate-200">Low to Moderate (Rot)</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 border border-slate-200 font-bold">Aesthetics</td>
                                        <td className="p-4 border border-slate-200 bg-orange-50 font-bold text-brand-dark">Modern & Sleek</td>
                                        <td className="p-4 border border-slate-200">Plastic Look</td>
                                        <td className="p-4 border border-slate-200">Industrial</td>
                                        <td className="p-4 border border-slate-200">Natural / Rustic</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 border border-slate-200 font-bold">Cost</td>
                                        <td className="p-4 border border-slate-200 bg-orange-50 font-bold text-brand-dark">Best Long-Term Value</td>
                                        <td className="p-4 border border-slate-200">Low Upfront</td>
                                        <td className="p-4 border border-slate-200">High</td>
                                        <td className="p-4 border border-slate-200">Varies</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Styles & Colors */}
                <section className="py-24 bg-slate-50">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-serif font-bold text-center text-brand-dark mb-16">Styles & Colors</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
                            <div>
                                <h3 className="text-xl font-bold mb-6 border-b border-slate-200 pb-2">Picket Styles</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-center justify-between p-4 bg-white rounded shadow-sm">
                                        <span className="font-bold">Cascade</span>
                                        <span className="text-sm text-slate-500">Classic Top Rail</span>
                                    </li>
                                    <li className="flex items-center justify-between p-4 bg-white rounded shadow-sm">
                                        <span className="font-bold">Milena</span>
                                        <span className="text-sm text-slate-500">Modern Profile</span>
                                    </li>
                                    <li className="flex items-center justify-between p-4 bg-white rounded shadow-sm">
                                        <span className="font-bold">Evolution</span>
                                        <span className="text-sm text-slate-500">Sleek & Minimal</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-6 border-b border-slate-200 pb-2">Glass Styles</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-center justify-between p-4 bg-white rounded shadow-sm">
                                        <span className="font-bold">Aqua</span>
                                        <span className="text-sm text-slate-500">Clear View</span>
                                    </li>
                                    <li className="flex items-center justify-between p-4 bg-white rounded shadow-sm">
                                        <span className="font-bold">Argo</span>
                                        <span className="text-sm text-slate-500">Tinted Options</span>
                                    </li>
                                    <li className="flex items-center justify-between p-4 bg-white rounded shadow-sm">
                                        <span className="font-bold">Rapsody</span>
                                        <span className="text-sm text-slate-500">Frosted Privacy</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="text-center">
                            <h3 className="text-xl font-bold mb-8">Available Colors</h3>
                            <div className="flex flex-wrap justify-center gap-6">
                                {[
                                    { name: 'Black', hex: '#000000' },
                                    { name: 'White', hex: '#FFFFFF', border: true },
                                    { name: 'Brown', hex: '#5D4037' },
                                    { name: 'Gunmetal', hex: '#455A64' },
                                    { name: 'Sandstone', hex: '#D7CCC8' },
                                    { name: 'Tan', hex: '#A1887F' },
                                ].map((color) => (
                                    <div key={color.name} className="flex flex-col items-center gap-2">
                                        <div
                                            className={`w-16 h-16 rounded-full shadow-md ${color.border ? 'border border-slate-200' : ''}`}
                                            style={{ backgroundColor: color.hex }}
                                        />
                                        <span className="text-sm font-medium text-slate-600">{color.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Aluminum Deck Railings Content */}
                <section className="py-24 bg-slate-50">
                    <div className="container mx-auto px-6">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-6">
                                Aluminum Deck Railings: Elegance & Durability
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                Your deck is more than just an outdoor space; it’s a sanctuary. Elevate its charm with our Aluminum Deck Railings, crafted from premium aluminum and tempered glass. These railings offer a seamless blend of style and functionality, allowing you to enjoy an uninterrupted view of your lush garden.
                            </p>
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100">
                                <h3 className="text-xl font-bold text-brand-dark mb-4">Weather Resistance</h3>
                                <p className="text-slate-600">
                                    Aluminum railings excel in weather resistance, enduring harsh Canadian climates without rusting or corroding. This resilience ensures lasting beauty and functionality.
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100">
                                <h3 className="text-xl font-bold text-brand-dark mb-4">Low Maintenance</h3>
                                <p className="text-slate-600">
                                    Enjoy the convenience of low maintenance. They require just simple cleaning, no repainting or pest control, saving time and effort.
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100">
                                <h3 className="text-xl font-bold text-brand-dark mb-4">Versatility</h3>
                                <p className="text-slate-600">
                                    Whether for modern or traditional aesthetics, they can be customized to fit any setting, including homes, offices, or cottages.
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100">
                                <h3 className="text-xl font-bold text-brand-dark mb-4">Increased Property Value</h3>
                                <p className="text-slate-600">
                                    Installing aluminum railings enhances your property’s market value. Their sleek design and durability appeal to potential buyers.
                                </p>
                            </div>
                        </div>

                    </div>
                </section>

                {/* Clients */}
                <section className="py-16 bg-white border-b border-slate-100">
                    <div className="container mx-auto px-6 text-center">
                        <h3 className="text-xl font-bold text-slate-400 uppercase tracking-widest mb-10">Our Toronto Aluminum Railings Clients Who Trust Us</h3>
                        <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                            <div className="relative h-12 w-32">
                                <Image src="/images/clients/university-waterloo.png" alt="University of Waterloo" fill className="object-contain" />
                            </div>
                            <div className="relative h-12 w-32">
                                <Image src="/images/clients/downsview-group.png" alt="The Downsview Group" fill className="object-contain" />
                            </div>
                            <div className="relative h-12 w-32">
                                <Image src="/images/clients/scotiabank.png" alt="Scotiabank" fill className="object-contain" />
                            </div>
                            <div className="relative h-12 w-32">
                                <Image src="/images/clients/sunny-morning.png" alt="Sunny Morning" fill className="object-contain" />
                            </div>
                            <div className="relative h-12 w-32">
                                <Image src="/images/clients/savaria.png" alt="Savaria" fill className="object-contain" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <RailingsFAQ />

                {/* Testimonials */}
                <section className="py-20 bg-brand-copper/5">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-serif font-bold text-center text-brand-dark mb-12">Why Our Clients Choose Us</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            <div className="bg-white p-8 shadow-sm rounded-xl border border-slate-100">
                                <div className="flex text-brand-copper mb-4">★★★★★</div>
                                <p className="text-slate-600 italic mb-6">&quot;Val and his team installed glass panel aluminum railings at my house. I was blown away by how professional and quick they were... They were very reasonably priced and super professional. I would highly recommend!&quot;</p>
                                <div className="font-bold text-brand-navy">- Milos Radicevic</div>
                            </div>
                            <div className="bg-white p-8 shadow-sm rounded-xl border border-slate-100">
                                <div className="flex text-brand-copper mb-4">★★★★★</div>
                                <p className="text-slate-600 italic mb-6">&quot;I wasn't sure about getting glass railings for our deck as we have a young child... but I'm so glad I was able to find this company. Vlad and his team worked and installed the deck rails efficiently this week... Highly recommend!&quot;</p>
                                <div className="font-bold text-brand-navy">- Graham Diana</div>
                            </div>
                            <div className="bg-white p-8 shadow-sm rounded-xl border border-slate-100">
                                <div className="flex text-brand-copper mb-4">★★★★★</div>
                                <p className="text-slate-600 italic mb-6">&quot;Exceptional experience working with Global Aluminum Solutions. Everything was done in such a professional manner and exceeded expectations.&quot;</p>
                                <div className="font-bold text-brand-navy">- Saleem Akhtar</div>
                            </div>
                            <div className="bg-white p-8 shadow-sm rounded-xl border border-slate-100">
                                <div className="flex text-brand-copper mb-4">★★★★★</div>
                                <p className="text-slate-600 italic mb-6">&quot;Global Aluminum was very professional and expedient. From their quotation accuracy, to on-site measure and final installation, time spanned less thank 2 weeks. Most importantly amazing quality and value.&quot;</p>
                                <div className="font-bold text-brand-navy">- Steve Sottile</div>
                            </div>
                        </div>
                        <div className="text-center mt-10">
                            <Link href="/reviews" className="text-brand-navy font-bold hover:underline">
                                Read More Reviews &rarr;
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Sticky Mobile CTA (Visible on mobile only) */}
                <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 z-40 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
                    <Link href="/contact" className="block w-full py-3 bg-brand-copper text-white text-center font-bold rounded shadow-lg">
                        Get a Free Quote
                    </Link>
                </div>

                {/* Related Articles */}
                <RelatedArticles
                    posts={blogPosts.filter(post =>
                        ['the-advantages-of-aluminum-railings', 'increasing-home-value-curb-appeal', 'ontario-building-code-railing-safety'].includes(post.slug)
                    )}
                    title="Railings & Renovation Tips"
                />

                {/* CTA Section */}
                <section className="py-24 bg-brand-navy text-white text-center">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
                            Upgrade Your Curb Appeal
                        </h2>
                        <p className="text-slate-300 max-w-2xl mx-auto mb-10 text-lg">
                            Don't settle for rotting wood or rusting iron. Invest in a lifetime solution.
                        </p>
                        <Link href="/contact" className="inline-block px-10 py-4 bg-brand-copper text-white font-bold tracking-wide hover:bg-orange-700 transition-colors shadow-lg rounded-sm">
                            Get a Free Estimate
                        </Link>
                    </div>
                </section>

                <ServiceAreasList />
            </main>

            <Footer />
        </div>
    );
}
