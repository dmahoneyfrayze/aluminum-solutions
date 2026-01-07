import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/ui/Hero";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import GlassShowersFAQ from "@/components/ui/GlassShowersFAQ";
import RelatedArticles from "@/components/blog/RelatedArticles";
import { blogPosts } from "@/data/blog";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Custom Glass Showers Toronto | Frameless Shower Enclosures",
    description: "Premium custom glass shower enclosures, steam showers, and tub shields in Toronto & GTA. 10mm tempered safety glass, leak-proof guarantee. Get a quote.",
    openGraph: {
        title: "Custom Glass Showers Toronto | Frameless Shower Enclosures",
        description: "Premium custom glass shower enclosures, steam showers, and tub shields in Toronto & GTA. 10mm tempered safety glass, leak-proof guarantee. Get a quote.",
        images: [
            {
                url: '/images/projects/frameless-glass-shower-custom.jpg',
                alt: 'Custom Glass Showers Toronto'
            }
        ],
    },
};

export default function ShowersPage() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />

            <Breadcrumbs />

            <JsonLd
                data={{
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "serviceType": "Shower Glass Installation",
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
                    title="Custom Glass Shower Enclosures in Toronto & the GTA"
                    subtitle="Bespoke frameless showers, steam enclosures, and tub shields — precision-measured and professionally installed for a perfect, leak-proof fit."
                    ctaText="Get Shower Pricing"
                    ctaLink="/contact"
                    secondaryCtaText="View Gallery"
                    secondaryCtaLink="/gallery?category=Glass%20Showers"
                    backgroundImage="/images/projects/frameless-glass-shower-custom.jpg"
                />

                {/* Trust Strip */}
                <div className="bg-brand-navy text-white text-center py-4 px-6 border-b border-slate-700">
                    <p className="text-sm md:text-base font-medium">
                        🛡️ 10mm Safety Glass • 💧 Leak-Proof Guarantee • 🇨🇦 Manufactured in GTA
                    </p>
                </div>

                {/* Intro / The Custom Difference */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col md:flex-row items-center gap-16">
                            <div className="w-full md:w-1/2">
                                <span className="text-brand-copper font-bold tracking-widest uppercase text-sm mb-2 block">
                                    Why Go Custom?
                                </span>
                                <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
                                    Stop Settling for "Standard" Sizes
                                </h2>
                                <div className="prose text-slate-600 leading-relaxed text-lg">
                                    <p className="mb-6">
                                        Big box store kits are designed for perfectly square walls—something that rarely exists in real homes. This leads to gap-filling shims, wobbly doors, and eventual water leaks.
                                    </p>
                                    <p className="mb-6">
                                        At <strong>Aluminum Solutions</strong>, we laser-measure your finished tile to the millimeter. Our glass is CNC-cut to match the exact slope and angle of your walls and floor, ensuring a tight, high-end fit without unsightly plastic seals or excessive silicone.
                                    </p>
                                    <ul className="space-y-3 mt-8">
                                        <li className="flex items-center gap-3">
                                            <span className="w-6 h-6 bg-green-100 text-green-700 rounded-full flex items-center justify-center font-bold text-xs">✓</span>
                                            <span>Heavy 10mm or 12mm Tempered Safety Glass</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <span className="w-6 h-6 bg-green-100 text-green-700 rounded-full flex items-center justify-center font-bold text-xs">✓</span>
                                            <span>Heavy-Duty Solid Brass Hinges (No sagging)</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <span className="w-6 h-6 bg-green-100 text-green-700 rounded-full flex items-center justify-center font-bold text-xs">✓</span>
                                            <span>Diamond-Fusion Easy Clean Coating available</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2">
                                <div className="aspect-[4/5] relative rounded-xl overflow-hidden shadow-2xl border border-slate-100">
                                    <Image
                                        src="/images/projects/frameless-glass-shower-custom.jpg"
                                        alt="Custom frameless glass shower installation Toronto"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded shadow text-sm font-bold text-brand-navy flex items-center gap-2">
                                        <span>📏</span> Laser Measured Fit
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
                            <h2 className="text-3xl font-serif font-bold text-brand-dark mb-4">Ballpark Shower Pricing</h2>
                            <p className="text-slate-600">
                                Estimated supply and installation costs for 10mm clear tempered glass.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                            {/* Tub Screen */}
                            <div className="bg-white p-8 text-center rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                                <h3 className="font-bold text-xl text-slate-900 mb-2">Tub Screen / Shield</h3>
                                <div className="text-3xl font-bold text-brand-copper mb-2">$800 - $1,500</div>
                                <div className="text-sm text-slate-500 mb-6">Installed</div>
                                <p className="text-sm text-slate-600 mb-6">A single fixed or pivoting panel on a bathtub. Modern alternative to shower curtains.</p>
                                <Link href="/contact" className="text-brand-navy font-bold text-sm hover:underline">Get Exact Quote &rarr;</Link>
                            </div>
                            {/* Standard In-line Shower */}
                            <div className="bg-white p-8 text-center rounded-xl shadow-lg border-2 border-brand-navy relative transform md:-translate-y-2">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-navy text-white px-3 py-1 text-xs font-bold uppercase rounded-full">Most Popular</div>
                                <h3 className="font-bold text-xl text-slate-900 mb-2">Standard In-line Shower</h3>
                                <div className="text-3xl font-bold text-brand-copper mb-2">$1,100 - $1,700</div>
                                <div className="text-sm text-slate-500 mb-6">Installed</div>
                                <p className="text-sm text-slate-600 mb-6">Standard In-line shower, sliding or pivoting doors.</p>
                                <Link href="/contact" className="inline-block px-6 py-2 bg-brand-copper text-white text-sm font-bold rounded hover:bg-white hover:text-brand-copper border border-brand-copper transition-colors">Get Shower Quote</Link>
                            </div>
                            {/* Custom / Steam */}
                            <div className="bg-white p-8 text-center rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                                <h3 className="font-bold text-xl text-slate-900 mb-2">Corner Enclosure & Complex</h3>
                                <div className="text-3xl font-bold text-brand-copper mb-2">$1,800 - $3,500+</div>
                                <div className="text-sm text-slate-500 mb-6">Installed</div>
                                <p className="text-sm text-slate-600 mb-6">Glass on two sides (e.g. door and return panel), as well as transoms, custom shapes, etc.</p>
                                <Link href="/contact" className="text-brand-navy font-bold text-sm hover:underline">Request Consultation &rarr;</Link>
                            </div>
                            {/* Mirrors */}
                            <div className="bg-white p-8 text-center rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                                <h3 className="font-bold text-xl text-slate-900 mb-2">Custom Mirrors</h3>
                                <div className="text-3xl font-bold text-brand-copper mb-2">$17 - $28</div>
                                <div className="text-sm text-slate-500 mb-6">per sq. ft.</div>
                                <p className="text-sm text-slate-600 mb-6">High-quality 5mm or 6mm silver mirror. Polished edges, custom cut-outs for outlets/lights.</p>
                                <Link href="/contact" className="text-brand-navy font-bold text-sm hover:underline">Get Mirror Quote &rarr;</Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Popular Styles */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-serif font-bold text-brand-dark mb-4">Shower Styles</h2>
                            <p className="text-slate-600">Custom configurations to suit any bathroom layout.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="group text-center">
                                <div className="bg-slate-100 rounded-lg h-64 mb-4 relative overflow-hidden">
                                    {/* Placeholder for Inline Image */}
                                    <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-20">🚿</div>
                                </div>
                                <h3 className="text-lg font-bold text-slate-900">Inline (Door & Panel)</h3>
                                <p className="text-sm text-slate-500">Wall-to-wall glass front.</p>
                            </div>
                            <div className="group text-center">
                                <div className="bg-slate-100 rounded-lg h-64 mb-4 relative overflow-hidden">
                                    {/* Placeholder for Corner Image */}
                                    <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-20">📐</div>
                                </div>
                                <h3 className="text-lg font-bold text-slate-900">Corner Unit</h3>
                                <p className="text-sm text-slate-500">Two glass sides meeting at 90°.</p>
                            </div>
                            <div className="group text-center">
                                <div className="bg-slate-100 rounded-lg h-64 mb-4 relative overflow-hidden">
                                    {/* Placeholder for Sliding Image */}
                                    <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-20">🚪</div>
                                </div>
                                <h3 className="text-lg font-bold text-slate-900">Barn Door Slider</h3>
                                <p className="text-sm text-slate-500">Smooth rolling top-hung hardware.</p>
                            </div>
                            <div className="group text-center">
                                <div className="bg-slate-100 rounded-lg h-64 mb-4 relative overflow-hidden">
                                    {/* Placeholder for Tub Image */}
                                    <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-20">🛀</div>
                                </div>
                                <h3 className="text-lg font-bold text-slate-900">Tub Shield</h3>
                                <p className="text-sm text-slate-500">Modern fixed panel on bathtub.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Hardware Finishes (NEW) */}
                <section className="py-20 bg-slate-50">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-3xl font-serif font-bold text-brand-dark mb-12">Premium Hardware Finishes</h2>
                        <div className="flex flex-wrap justify-center gap-12 lg:gap-20">
                            <div className="flex flex-col items-center group">
                                <div className="w-20 h-20 rounded-full bg-slate-900 shadow-lg mb-4 border-4 border-white ring-2 ring-slate-200 group-hover:scale-110 transition-transform"></div>
                                <span className="font-bold text-slate-900">Matte Black</span>
                            </div>
                            <div className="flex flex-col items-center group">
                                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-200 to-yellow-600 shadow-lg mb-4 border-4 border-white ring-2 ring-slate-200 group-hover:scale-110 transition-transform"></div>
                                <span className="font-bold text-slate-900">Brushed Gold</span>
                            </div>
                            <div className="flex flex-col items-center group">
                                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-100 to-gray-400 shadow-lg mb-4 border-4 border-white ring-2 ring-slate-200 group-hover:scale-110 transition-transform"></div>
                                <span className="font-bold text-slate-900">Polished Chrome</span>
                            </div>
                            <div className="flex flex-col items-center group">
                                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-300 to-gray-500 shadow-lg mb-4 border-4 border-white ring-2 ring-slate-200 group-hover:scale-110 transition-transform"></div>
                                <span className="font-bold text-slate-900">Brushed Nickel</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <GlassShowersFAQ />

                {/* CTA */}
                <section className="py-24 bg-brand-navy text-white text-center">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
                            Ready to Upgrade Your Bathroom?
                        </h2>
                        <p className="text-slate-300 max-w-2xl mx-auto mb-10 text-lg">
                            Get a fast quote for your custom glass shower. Upload a photo or sketch for the most accurate estimate.
                        </p>
                        <Link href="/contact" className="inline-block px-10 py-4 bg-brand-copper text-white font-bold tracking-wide hover:bg-orange-700 transition-colors shadow-lg rounded-sm">
                            Get a Free Quote
                        </Link>
                    </div>
                </section>

                {/* Related Articles */}
                <RelatedArticles
                    posts={blogPosts.filter(post =>
                        ['modern-bathroom-glass-shower-trends', 'cleaning-maintaining-glass-railings'].includes(post.slug)
                    )}
                    title="Bathroom Design & Tips"
                />
            </main>

            <Footer />
        </div>
    );
}
