import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/ui/Hero";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import ColumnsFAQ from "@/components/ui/ColumnsFAQ";
import RelatedArticles from "@/components/blog/RelatedArticles";
import { blogPosts } from "@/data/blog";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Structural Aluminum Columns Toronto | Load-Bearing & Decorative",
    description: "Replace rotting wood porch columns with engineered structural aluminum columns. Load-bearing, code-compliant, and maintenance-free. Made in GTA.",
    openGraph: {
        title: "Structural Aluminum Columns Toronto | Load-Bearing & Decorative",
        description: "Replace rotting wood porch columns with engineered structural aluminum columns. Load-bearing, code-compliant, and maintenance-free. Made in GTA.",
        images: [
            {
                url: '/images/projects/aluminum-columns-glass-railing.jpg',
                alt: 'Structural Aluminum Columns Toronto'
            }
        ],
    },
};

export default function ColumnsPage() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />
            <Breadcrumbs />

            <JsonLd
                data={{
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "serviceType": "Structural Column Installation",
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
                    title="Structural Aluminum Columns in Toronto & the GTA"
                    subtitle="Load-bearing aluminum porch columns that replace rotting wood — engineered, manufactured, and installed in the GTA."
                    ctaText="Get Column Pricing"
                    ctaLink="/contact"
                    secondaryCtaText="View Gallery"
                    secondaryCtaLink="/gallery?category=Columns"
                    backgroundImage="/images/projects/aluminum-columns-glass-railing.jpg"
                />

                {/* Trust Strip */}
                <div className="bg-brand-navy text-white text-center py-4 px-6 border-b border-slate-700">
                    <p className="text-sm md:text-base font-medium">
                        🛡️ Lifetime Warranty • 🏗️ Load-Bearing Rated • 🇨🇦 Made in Ontario
                    </p>
                </div>

                {/* Intro / Problem Solution */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-brand-copper font-bold tracking-widest uppercase text-sm mb-2 block">
                                The Permanent Fix
                            </span>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-brand-dark">
                                Never Paint Your Columns Again
                            </h2>
                            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                                <p>
                                    Wood columns are prone to rot, insect damage, and peeling paint, often compromising the structural integrity of your porch roof.
                                </p>
                                <p>
                                    <strong>Aluminum is the superior alternative.</strong> It provides the same classic aesthetic as wood but is completely impervious to moisture, ants, and rot. Once installed, our powder-coated columns never need scraping or painting.
                                </p>
                            </div>
                            <ul className="space-y-3 mt-8">
                                <li className="flex items-center gap-3">
                                    <span className="w-6 h-6 bg-green-100 text-green-700 rounded-full flex items-center justify-center font-bold text-xs">✓</span>
                                    <span>Engineered for heavy roof loads (snow & tile)</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-6 h-6 bg-green-100 text-green-700 rounded-full flex items-center justify-center font-bold text-xs">✓</span>
                                    <span>Built to Ontario Building Code (SB-13)</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-6 h-6 bg-green-100 text-green-700 rounded-full flex items-center justify-center font-bold text-xs">✓</span>
                                    <span>Professional shoring & installation available</span>
                                </li>
                            </ul>
                        </div>
                        <div className="h-[500px] bg-slate-100 relative rounded-xl overflow-hidden shadow-2xl">
                            {/* Ideally this would be a before/after shot or a close up of a column base */}
                            <Image
                                src="/images/projects/aluminum-columns-glass-railing.jpg"
                                alt="Structural aluminum column details"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded shadow-lg text-center">
                                <div className="font-bold text-brand-navy">Structural & Decorative</div>
                                <div className="text-xs text-slate-500">Supports weight while looking beautiful</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Comparison Guide (NEW) */}
                <section className="py-20 bg-slate-50 border-y border-slate-200">
                    <div className="container mx-auto px-6">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h2 className="text-3xl font-serif font-bold text-brand-dark mb-4">Structural Columns vs. Decorative Wraps</h2>
                            <p className="text-slate-600">
                                Be careful when comparing quotes. Many "aluminum columns" on the market are just thin decorative sleeves that cannot support your roof.
                            </p>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-slate-200 text-left">
                                <thead className="bg-brand-navy text-white">
                                    <tr>
                                        <th className="p-4 md:p-6 font-bold w-1/3">Feature</th>
                                        <th className="p-4 md:p-6 font-bold w-1/3 border-l border-slate-600 bg-brand-copper/90">Our Structural Columns</th>
                                        <th className="p-4 md:p-6 font-bold w-1/3 border-l border-slate-600 bg-slate-800">Decorative Wraps</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 text-slate-700">
                                    <tr>
                                        <td className="p-4 md:p-6 font-bold">Load-Bearing Rated</td>
                                        <td className="p-4 md:p-6 bg-orange-50 font-bold text-green-700">✅ Yes (Heavy Duty)</td>
                                        <td className="p-4 md:p-6 text-red-600">❌ No (Cosmetic Only)</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 md:p-6 font-bold">Replaces Wood Posts</td>
                                        <td className="p-4 md:p-6 bg-orange-50 font-bold text-green-700">✅ Yes (Complete Replacement)</td>
                                        <td className="p-4 md:p-6 text-slate-500">❌ No (Wraps over rotting wood)</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 md:p-6 font-bold">Structural Engineering</td>
                                        <td className="p-4 md:p-6 bg-orange-50 font-bold text-green-700">✅ Engineered & Tested</td>
                                        <td className="p-4 md:p-6 text-slate-500">❌ Not Applicable</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 md:p-6 font-bold">Permit & Inspection Ready</td>
                                        <td className="p-4 md:p-6 bg-orange-50 font-bold text-green-700">✅ Yes</td>
                                        <td className="p-4 md:p-6 text-slate-500">❌ Often Fails</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 md:p-6 font-bold">Resistance to Decay</td>
                                        <td className="p-4 md:p-6 bg-orange-50 font-bold text-green-700">✅ 100% Rot Proof</td>
                                        <td className="p-4 md:p-6 text-slate-500">⚠️ Covers hidden rot</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Column Styles */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-serif font-bold mb-12 text-center text-brand-dark">Popular Column Styles</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-slate-50 p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow text-center rounded-lg group">
                                <div className="h-48 bg-white mb-6 rounded shadow-inner mx-auto w-24 border-x-2 border-slate-100 flex items-center justify-center text-4xl group-hover:scale-105 transition-transform">🏛️</div>
                                <h3 className="text-xl font-bold mb-2 text-brand-dark">Round Fluted</h3>
                                <p className="text-slate-600">Classic elegance with vertical grooves. The standard for colonial, Georgian, and Victorian homes.</p>
                            </div>
                            <div className="bg-slate-50 p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow text-center rounded-lg group">
                                <div className="h-48 bg-white mb-6 rounded shadow-inner mx-auto w-24 border border-slate-200 flex items-center justify-center text-4xl group-hover:scale-105 transition-transform">🔲</div>
                                <h3 className="text-xl font-bold mb-2 text-brand-dark">Square Recessed</h3>
                                <p className="text-slate-600">A clean, craftsman-style look with recessed panels. Ideal for bungalows and arts & crafts homes.</p>
                            </div>
                            <div className="bg-slate-50 p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow text-center rounded-lg group">
                                <div className="h-48 bg-white mb-6 rounded shadow-inner mx-auto w-24 border border-slate-200 flex items-center justify-center text-4xl group-hover:scale-105 transition-transform">⬛</div>
                                <h3 className="text-xl font-bold mb-2 text-brand-dark">Square Plain</h3>
                                <p className="text-slate-600">Minimalist and modern. Smooth surfaces with no detail work for a sleek, contemporary appearance.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pricing Guide (NEW) */}
                <section className="py-20 bg-brand-navy/5 border-y border-slate-200">
                    <div className="container mx-auto px-6">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl font-serif font-bold text-brand-dark mb-4">Column Pricing in Toronto</h2>
                            <p className="text-slate-600">
                                Estimated costs for supply and professional installation. Prices depend on height, diameter, and load requirements.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {/* Decorative/Light Load */}
                            <div className="bg-white p-8 text-center rounded-xl shadow-sm border border-slate-100">
                                <h3 className="font-bold text-xl text-slate-900 mb-2">Standard Wrapped Columns</h3>
                                <div className="text-3xl font-bold text-brand-copper mb-2">$300 - $650</div>
                                <div className="text-sm text-slate-500 mb-6">per column, installed</div>
                                <ul className="text-left space-y-3 mb-8 text-slate-600 text-sm max-w-xs mx-auto">
                                    <li>✓ No structure inside</li>
                                    <li>✓ Structural work not included</li>
                                    <li>✓ Standard heights (8' - 10')</li>
                                    <li>✓ Round or Square styles</li>
                                </ul>
                                <Link href="/contact" className="text-brand-navy font-bold text-sm hover:underline">Get a Quote &rarr;</Link>
                            </div>
                            {/* Heavy Load / Large */}
                            <div className="bg-white p-8 text-center rounded-xl shadow-lg border-2 border-brand-copper relative transform md:-translate-y-2">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-copper text-white px-3 py-1 text-xs font-bold uppercase rounded-full">Heavy Duty</div>
                                <h3 className="font-bold text-xl text-slate-900 mb-2">Large Load-Bearing Columns</h3>
                                <div className="text-3xl font-bold text-brand-copper mb-2">$1,500 - $2,700</div>
                                <div className="text-sm text-slate-500 mb-6">per column, installed</div>
                                <ul className="text-left space-y-3 mb-8 text-slate-600 text-sm max-w-xs mx-auto">
                                    <li>✓ Heavy roof load support</li>
                                    <li>✓ Custom heights & diameters</li>
                                    <li>✓ Structural shoring required</li>
                                    <li>✓ Engineering support available</li>
                                </ul>
                                <Link href="/contact" className="inline-block px-6 py-2 bg-brand-navy text-white text-sm font-bold rounded hover:bg-slate-700 transition-colors">Get Heavy Duty Quote</Link>
                            </div>
                        </div>
                        <p className="text-center text-xs text-slate-500 mt-8 max-w-2xl mx-auto">
                            *Prices are estimates for typical residential projects in the GTA. Complex sites requiring significant jacks/shoring or engineering permits will be quoted specifically.
                        </p>
                    </div>
                </section>

                {/* FAQ */}
                <ColumnsFAQ />

                {/* CTA */}
                <section className="py-24 bg-brand-navy text-white text-center">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
                            Restore Your Porch's Integrity
                        </h2>
                        <p className="text-slate-300 max-w-2xl mx-auto mb-10 text-lg">
                            Don't wait for wood rot to threaten your roof. Upgrade to permanent structural aluminum columns.
                        </p>
                        <Link href="/contact" className="inline-block px-10 py-4 bg-brand-copper text-white font-bold tracking-wide hover:bg-orange-700 transition-colors shadow-lg rounded-sm">
                            Get a Free Estimate
                        </Link>
                    </div>
                </section>

                {/* Related Articles */}
                <RelatedArticles
                    posts={blogPosts.filter(post =>
                        ['aluminum-vs-wood-railings-cost', 'porch-makeover-ideas-2025'].includes(post.slug)
                    )}
                    title="Porch Renovation Guides"
                />
            </main>

            <Footer />
        </div>
    );
}
