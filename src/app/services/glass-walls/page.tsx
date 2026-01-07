import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/ui/Hero";
import Link from "next/link";
import Image from "next/image";
import GlassPartitionGuideForm from "@/components/ui/GlassPartitionGuideForm";
import FloorPlanUploadForm from "@/components/ui/FloorPlanUploadForm";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import GlassWallsFAQ from "@/components/ui/GlassWallsFAQ";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Glass Walls & Office Partitions Toronto | Custom Office Dividers",
    description: "Custom frameless glass walls and office partitions in Toronto & GTA. Acoustic soundproofing for offices, home gyms, and clinics. Get a free quote.",
    openGraph: {
        title: "Glass Walls & Office Partitions Toronto | Custom Office Dividers",
        description: "Custom frameless glass walls and office partitions in Toronto & GTA. Acoustic soundproofing for offices, home gyms, and clinics. Get a free quote.",
        images: [
            {
                url: '/images/projects/glass-office-partition-modern.jpg',
                alt: 'Glass Office Partitions Toronto'
            }
        ],
    },
};

export default function GlassWallsPage() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />

            <Breadcrumbs />

            <JsonLd
                data={{
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "serviceType": "Glass Partition Installation",
                    "provider": {
                        "@type": "LocalBusiness",
                        "name": "Aluminum Solutions"
                    },
                    "areaServed": [
                        { "@type": "City", "name": "Toronto" },
                        { "@type": "City", "name": "Mississauga" },
                        { "@type": "City", "name": "Vaughan" },
                        { "@type": "City", "name": "Richmond Hill" },
                        { "@type": "City", "name": "Markham" }
                    ]
                }}
            />

            <main className="flex-grow">
                {/* Hero */}
                <Hero
                    title="Glass Walls & Office Partitions in Toronto & the GTA"
                    subtitle="Custom frameless glass walls, office partitions, and interior dividers — engineered for acoustic privacy and modern design."
                    ctaText="Get Partition Pricing"
                    ctaLink="/contact"
                    secondaryCtaText="View Gallery"
                    secondaryCtaLink="/gallery?category=Glass%20Walls"
                    backgroundImage="/images/projects/glass-office-divider-system.jpg"
                />

                {/* Trust Strip */}
                <div className="bg-brand-navy text-white text-center py-4 px-6 border-b border-slate-700">
                    <p className="text-sm md:text-base font-medium">
                        🛡️ 10mm+ Tempered Glass • 🔊 Acoustic Privacy • 🇨🇦 Manufactured in GTA
                    </p>
                </div>

                {/* Lead Magnet: Planning Guide */}
                <section className="py-12 bg-slate-50 border-b border-slate-200">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            <div className="w-full md:w-1/2">
                                <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">
                                    Planning a Glass Partition?
                                </h2>
                                <p className="text-lg text-slate-600 mb-6">
                                    Avoid common mistakes with our free <strong>Glass Partition Planning Guide</strong>. Learn about:
                                </p>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-center text-slate-700">
                                        <span className="text-brand-copper mr-3">✓</span> Optimal glass thickness for soundproofing
                                    </li>
                                    <li className="flex items-center text-slate-700">
                                        <span className="text-brand-copper mr-3">✓</span> Privacy options (Frosted vs. Smart Glass)
                                    </li>
                                    <li className="flex items-center text-slate-700">
                                        <span className="text-brand-copper mr-3">✓</span> Budget ranges for different styles
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full md:w-1/2">
                                <GlassPartitionGuideForm />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Intro / Brand Clarity */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col md:flex-row items-center gap-16">
                            <div className="w-full md:w-1/2">
                                <span className="text-brand-copper font-bold tracking-widest uppercase text-sm mb-2 block">
                                    Interior Glass Specialists
                                </span>
                                <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
                                    Transparency Meets Privacy
                                </h2>
                                <div className="prose text-slate-600 leading-relaxed text-lg">
                                    <p className="mb-6">
                                        Transform your workspace or home with our custom glass wall systems. Whether you're looking to create a collaborative open-concept office or a dedicated home gym, our frameless glass partitions offer the perfect balance of separation and light.
                                    </p>
                                    <div className="bg-slate-50 border-l-4 border-brand-copper p-6 rounded-r-lg mb-6">
                                        <p className="text-slate-800 font-medium">
                                            <strong>Easy Glass GTA</strong> is our dedicated interior glass division, now fully integrated under Aluminum Solutions for end-to-end manufacturing and installation.
                                        </p>
                                    </div>
                                    <p>
                                        We bring over a decade of specialized experience in interior glass fabrication, ensuring your project meets the highest standards of acoustic performance and structural integrity.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2">
                                <div className="aspect-[4/3] bg-slate-100 rounded-xl overflow-hidden relative shadow-2xl">
                                    <Image
                                        src="/images/projects/glass-wall-meeting-room.jpg"
                                        alt="Custom glass office partition Toronto"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute bottom-4 right-4 bg-brand-navy/90 backdrop-blur-sm text-white px-4 py-2 rounded shadow text-sm font-bold flex items-center gap-2">
                                        <span>🔊</span> Sound Rated Systems
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pricing Guide (NEW) */}
                <section className="py-20 bg-white border-y border-slate-100">
                    <div className="container mx-auto px-6">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl font-serif font-bold text-brand-dark mb-4">Glass Partition Pricing in Toronto</h2>
                            <p className="text-slate-600">
                                Estimated costs for supply and installation of 10mm-12mm tempered glass systems.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            {/* Single Wall */}
                            <div className="p-8 text-center border border-slate-100 rounded-xl hover:shadow-lg transition-shadow">
                                <h3 className="font-bold text-xl text-slate-900 mb-2">Single Glass Wall</h3>
                                <div className="text-3xl font-bold text-brand-copper mb-2">$2,000 - $4,000</div>
                                <div className="text-sm text-slate-500 mb-6">Installed</div>
                                <p className="text-sm text-slate-600 mb-6">Perfect for home gyms or dividing a large room. Includes channel and 10mm glass.</p>
                                <Link href="/contact" className="text-brand-navy font-bold text-sm hover:underline">Get Exact Quote &rarr;</Link>
                            </div>
                            {/* Full Office */}
                            <div className="p-8 text-center bg-slate-50 border border-slate-200 rounded-xl shadow-md relative transform md:-translate-y-2">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-navy text-white px-3 py-1 text-xs font-bold uppercase rounded-full">Most Popular</div>
                                <h3 className="font-bold text-xl text-slate-900 mb-2">Office / Meeting Room</h3>
                                <div className="text-3xl font-bold text-brand-copper mb-2">$4,000 - $12,000+</div>
                                <div className="text-sm text-slate-500 mb-6">Installed</div>
                                <p className="text-sm text-slate-600 mb-6">Complete enclosure with hinged or sliding glass door and locking hardware.</p>
                                <Link href="/contact" className="inline-block px-6 py-2 bg-brand-copper text-white text-sm font-bold rounded hover:bg-white hover:text-brand-copper border border-brand-copper transition-colors">Get Office Quote</Link>
                            </div>
                            {/* Commercial */}
                            <div className="p-8 text-center border border-slate-100 rounded-xl hover:shadow-lg transition-shadow">
                                <h3 className="font-bold text-xl text-slate-900 mb-2">Commercial Projects</h3>
                                <div className="text-3xl font-bold text-brand-copper mb-2">Custom</div>
                                <div className="text-sm text-slate-500 mb-6">Volume Pricing</div>
                                <p className="text-sm text-slate-600 mb-6">Multi-office fit-outs, clinic dividers, and retail storefronts. Fast turnaround.</p>
                                <Link href="/contact" className="text-brand-navy font-bold text-sm hover:underline">Request Site Visit &rarr;</Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Applications (Optimized for Commercial) */}
                <section className="py-20 bg-slate-50">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Designed for Commercial & Residential</h2>
                            <p className="text-slate-600 max-w-2xl mx-auto">
                                Tailored solutions for businesses and premium home upgrades.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                                <div className="text-4xl mb-4">🏢</div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">Corporate Offices</h3>
                                <p className="text-sm text-slate-600">Executive suites and conference rooms that foster transparency and collaboration.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                                <div className="text-4xl mb-4">🏥</div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">Clinics & Medical</h3>
                                <p className="text-sm text-slate-600">Hygienic, easy-to-clean dividers for waiting areas and consultation rooms.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                                <div className="text-4xl mb-4">🏋️</div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">Gyms & Studios</h3>
                                <p className="text-sm text-slate-600">Acoustically separated yoga and fitness studios that feel open and spacious.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                                <div className="text-4xl mb-4">🛍️</div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">Retail & Display</h3>
                                <p className="text-sm text-slate-600">Secure storefronts and interior product showcases that maximize visibility.</p>
                            </div>
                        </div>
                        <div className="text-center mt-12">
                            <Link href="/contact" className="text-brand-copper font-bold border-b-2 border-brand-copper hover:text-brand-dark hover:border-brand-dark transition-colors">
                                Request Commercial Quote &rarr;
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Lead Magnet: Floor Plan Upload */}
                <section id="upload-plan" className="py-20 bg-brand-navy relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern-grid.png')]"></div>

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="flex flex-col md:flex-row items-center gap-16">
                            <div className="w-full md:w-1/2 text-white">
                                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                                    Already have a layout in mind?
                                </h2>
                                <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                                    Don't wait for a site visit. Upload your floor plan, sketch, or even a photo of the space, and our estimators will provide a <strong>preliminary budget and design options within 24 hours</strong>.
                                </p>
                                <div className="flex items-center gap-4 text-slate-400 text-sm">
                                    <span>⚡ Fast Turnaround</span>
                                    <span>🔒 Secure Upload</span>
                                    <span>📋 Free Estimate</span>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2">
                                <FloorPlanUploadForm />
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <GlassWallsFAQ />

                {/* CTA */}
                <section className="py-24 bg-white text-center">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
                            Plan Your Glass Partition Project
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto mb-10 text-lg">
                            Send us your floor plan or dimensions for a quick preliminary quote.
                        </p>
                        <Link href="/contact" className="inline-block px-10 py-4 bg-brand-copper text-white font-bold tracking-wide hover:bg-orange-700 transition-colors shadow-lg rounded-sm">
                            Get a Quote
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
