import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/ui/Hero";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import PrivacyScreensFAQ from "@/components/ui/PrivacyScreensFAQ";
import RelatedArticles from "@/components/blog/RelatedArticles";
import { blogPosts } from "@/data/blog";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Screens Toronto | Aluminum & Frosted Glass Dividers",
    description: "Custom aluminum and frosted glass privacy screens for decks, balconies, and patios in Toronto & GTA. High-quality, wind-resistant, and maintenance-free.",
    openGraph: {
        title: "Privacy Screens Toronto | Aluminum & Frosted Glass Dividers",
        description: "Custom aluminum and frosted glass privacy screens for decks, balconies, and patios in Toronto & GTA. High-quality, wind-resistant, and maintenance-free.",
        images: [
            {
                url: '/images/projects/privacy-screen-black-aluminum.jpg',
                alt: 'Aluminum Privacy Screens Toronto'
            }
        ],
    },
};

export default function PrivacyScreensPage() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />

            <Breadcrumbs />

            <JsonLd
                data={{
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "serviceType": "Privacy Screen Installation",
                    "provider": {
                        "@type": "LocalBusiness",
                        "name": "Aluminum Solutions"
                    },
                    "areaServed": [
                        { "@type": "City", "name": "Toronto" },
                        { "@type": "City", "name": "Mississauga" },
                        { "@type": "City", "name": "Vaughan" },
                        { "@type": "City", "name": "Richmond Hill" },
                        { "@type": "City", "name": "Markham" },
                        { "@type": "City", "name": "Oakville" }
                    ]
                }}
            />

            <main className="flex-grow">
                {/* Hero */}
                <Hero
                    title="Aluminum & Frosted Glass Privacy Screens in Toronto & the GTA"
                    subtitle="Custom privacy screens for decks, patios, balconies, and hot tub areas — manufactured in the GTA for year-round durability."
                    ctaText="Get Privacy Screen Pricing"
                    ctaLink="/contact"
                    secondaryCtaText="View Gallery"
                    secondaryCtaLink="/gallery?category=Privacy%20Screens"
                    backgroundImage="/images/projects/privacy-screen-black-aluminum.jpg"
                />

                {/* Trust Strip */}
                <div className="bg-brand-navy text-white text-center py-4 px-6 border-b border-slate-700">
                    <p className="text-sm md:text-base font-medium">
                        🛡️ Acid-Etched Glass • 💨 Wind Resistant • 🇨🇦 Manufactured in GTA
                    </p>
                </div>

                {/* Intro / Differentiation */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            <div className="w-full md:w-1/2">
                                <span className="text-brand-copper font-bold tracking-widest uppercase text-sm mb-2 block">
                                    Urban Living Solutions
                                </span>
                                <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
                                    Why Our Privacy Screens Are Different
                                </h2>
                                <div className="prose text-slate-600 leading-relaxed text-lg">
                                    <p className="mb-6">
                                        In dense urban neighborhoods, privacy is a luxury. But standard big-box store panels often look cheap, wobble in the wind, and degrade quickly.
                                    </p>
                                    <p className="mb-6">
                                        Our <strong>custom aluminum privacy screens</strong> are engineered structures, not temporary fixes. We use heavy-gauge aluminum frames that won't rust, rot, or warp, paired with premium acid-etched glass that lets light in while keeping prying eyes out.
                                    </p>
                                    <ul className="space-y-3 mt-8">
                                        <li className="flex items-center gap-3">
                                            <span className="w-6 h-6 bg-green-100 text-green-700 rounded-full flex items-center justify-center font-bold text-xs">✓</span>
                                            <span>Custom Height up to 6 Feet (No "one-size fits all")</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <span className="w-6 h-6 bg-green-100 text-green-700 rounded-full flex items-center justify-center font-bold text-xs">✓</span>
                                            <span>Permanent Acid-Etched Glass (Won't peel or yellow)</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <span className="w-6 h-6 bg-green-100 text-green-700 rounded-full flex items-center justify-center font-bold text-xs">✓</span>
                                            <span>Concealed Mounting Hardware for a Clean Look</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2">
                                <div className="aspect-[4/3] bg-slate-100 rounded-xl overflow-hidden relative shadow-2xl">
                                    <Image
                                        src="/images/projects/privacy-screen-frosted-glass.jpg"
                                        alt="Frosted glass privacy screen on a modern deck Toronto"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute bottom-4 right-4 bg-brand-navy/90 backdrop-blur-sm text-white px-4 py-2 rounded shadow text-sm font-bold flex items-center gap-2">
                                        <span>👁️‍🗨️</span> 100% Privacy
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pricing Guide (NEW) */}
                <section className="py-20 bg-slate-50 border-y border-slate-200">
                    <div className="container mx-auto px-6">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl font-serif font-bold text-brand-dark mb-4">Privacy Screen Pricing in Toronto</h2>
                            <p className="text-slate-600">
                                Estimated supply and installation costs per linear foot.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

                            <div className="bg-white p-8 text-center rounded-xl shadow-lg border-2 border-brand-navy relative transform md:-translate-y-2">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-navy text-white px-3 py-1 text-xs font-bold uppercase rounded-full">Most Popular</div>
                                <h3 className="font-bold text-xl text-slate-900 mb-2">Frosted Glass Screen</h3>
                                <div className="text-3xl font-bold text-brand-copper mb-2">$170 - $240</div>
                                <div className="text-sm text-slate-500 mb-6">per linear foot</div>
                                <p className="text-sm text-slate-600 mb-6">Solid privacy with maximum light transmission. 10mm or 12mm acid-etched safety glass.</p>
                                <Link href="/contact" className="inline-block px-6 py-2 bg-brand-copper text-white text-sm font-bold rounded hover:bg-white hover:text-brand-copper border border-brand-copper transition-colors">Get Glass Screen Quote</Link>
                            </div>
                            {/* Custom/Commercial */}
                            <div className="bg-white p-8 text-center rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                                <h3 className="font-bold text-xl text-slate-900 mb-2">Commercial / Condo</h3>
                                <div className="text-3xl font-bold text-brand-copper mb-2">Volume Quote</div>
                                <div className="text-sm text-slate-500 mb-6">Volume Pricing</div>
                                <p className="text-sm text-slate-600 mb-6">Dividers for multi-unit balconies, restaurants, and patio enclosures. Engineered to code.</p>
                                <Link href="/contact" className="text-brand-navy font-bold text-sm hover:underline">Request Site Visit &rarr;</Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features (Refocused) */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-serif font-bold text-center text-slate-900 mb-12">Features & Benefits of Privacy Screens</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="p-6 border border-slate-100 rounded-lg bg-slate-50">
                                <h3 className="font-bold text-lg mb-2 text-brand-dark">Instant Privacy</h3>
                                <p className="text-slate-600 text-sm">Effectively block sightlines from neighbors and street traffic immediately upon installation.</p>
                            </div>
                            <div className="p-6 border border-slate-100 rounded-lg bg-slate-50">
                                <h3 className="font-bold text-lg mb-2 text-brand-dark">Wind Reduction</h3>
                                <p className="text-slate-600 text-sm">Glass screens act as an effective windbreak, protecting your dining area or fire pit from gusts.</p>
                            </div>
                            <div className="p-6 border border-slate-100 rounded-lg bg-slate-50">
                                <h3 className="font-bold text-lg mb-2 text-brand-dark">Noise Buffering</h3>
                                <p className="text-slate-600 text-sm">Solid glass panels help dampen street noise and conversation, creating a quieter outdoor environment.</p>
                            </div>
                            <div className="p-6 border border-slate-100 rounded-lg bg-slate-50">
                                <h3 className="font-bold text-lg mb-2 text-brand-dark">Light Transmission</h3>
                                <p className="text-slate-600 text-sm">Our etched glass obscures the view but glows with sunlight, keeping your deck bright and airy.</p>
                            </div>
                            <div className="p-6 border border-slate-100 rounded-lg bg-slate-50">
                                <h3 className="font-bold text-lg mb-2 text-brand-dark">Safety Compliant</h3>
                                <p className="text-slate-600 text-sm">Engineered to meet Ontario Building Code loads for guards and dividers.</p>
                            </div>
                            <div className="p-6 border border-slate-100 rounded-lg bg-slate-50">
                                <h3 className="font-bold text-lg mb-2 text-brand-dark">Zero Maintenance</h3>
                                <p className="text-slate-600 text-sm">No sanding, staining, or painting required. Just a simple wipe-down with water.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Applications */}
                <section className="py-20 bg-slate-50">
                    <div className="container mx-auto px-6 text-center mb-16">
                        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">
                            Where to Use Privacy Screens
                        </h2>
                    </div>
                    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {['Hot Tub Areas', 'Shared Balconies', 'Patio Dining', 'Pool Equipment Enclosures'].map((item, i) => (
                            <div key={i} className="bg-white p-6 rounded-lg text-center font-bold text-slate-700 shadow-sm border border-slate-200">
                                {item}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Reviews */}
                <section className="py-20 bg-brand-copper/5">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-serif font-bold text-center text-brand-dark mb-12">What Our Customers Say</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white p-8 shadow-sm rounded-xl border border-slate-100">
                                <div className="flex text-brand-copper mb-4">★★★★★</div>
                                <p className="text-slate-600 italic mb-6 text-sm">"We weren't sure about getting glass railings... but I'm so glad I was able to find this company. Global Aluminum Solutions was professional, efficient and had competitive pricing! Highly recommend!"</p>
                                <div className="font-bold text-brand-navy">- Graham D.</div>
                            </div>
                            <div className="bg-white p-8 shadow-sm rounded-xl border border-slate-100">
                                <div className="flex text-brand-copper mb-4">★★★★★</div>
                                <p className="text-slate-600 italic mb-6 text-sm">"Response was quick, service, delivery and install was faster than expected and excellent quality. I am thrilled with the new railings on my deck."</p>
                                <div className="font-bold text-brand-navy">- Violetta I.</div>
                            </div>
                            <div className="bg-white p-8 shadow-sm rounded-xl border border-slate-100">
                                <div className="flex text-brand-copper mb-4">★★★★★</div>
                                <p className="text-slate-600 italic mb-6 text-sm">"Exceptional experience working with Global Aluminum Solutions. Everything was done in such a professional manner and exceeded expectations."</p>
                                <div className="font-bold text-brand-navy">- Saleem A.</div>
                            </div>
                        </div>
                        <div className="text-center mt-10">
                            <Link href="/reviews" className="text-brand-navy font-bold hover:underline">
                                Read More Reviews &rarr;
                            </Link>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <PrivacyScreensFAQ />

                {/* CTA */}
                <section className="py-24 bg-brand-navy text-white text-center">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
                            Reclaim Your Backyard Privacy
                        </h2>
                        <p className="text-slate-300 max-w-2xl mx-auto mb-10 text-lg">
                            Don't feel like you're on display. Use our calculator or send us a photo for a custom quote.
                        </p>
                        <Link href="/contact" className="inline-block px-10 py-4 bg-brand-copper text-white font-bold tracking-wide hover:bg-orange-700 transition-colors shadow-lg rounded-sm">
                            Get a Free Quote
                        </Link>
                    </div>
                </section>

                {/* Related Articles */}
                <RelatedArticles
                    posts={blogPosts.filter(post =>
                        ['cleaning-maintaining-glass-railings', '2025-outdoor-design-trends'].includes(post.slug)
                    )}
                    title="Design Ideas & Tips"
                />
            </main>

            <Footer />
        </div>
    );
}
