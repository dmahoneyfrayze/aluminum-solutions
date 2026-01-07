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
import PoolFencesFAQ from "@/components/ui/PoolFencesFAQ";

export const metadata: Metadata = {
    title: "Pool Fences Toronto | Glass & Aluminum Safety Fences",
    description: "Code-compliant swimming pool fences in Toronto & GTA. Frameless glass and aluminum options with self-closing gates. Get a free safety quote.",
    openGraph: {
        title: "Pool Fences Toronto | Glass & Aluminum Safety Fences",
        description: "Code-compliant swimming pool fences in Toronto & GTA. Frameless glass and aluminum options with self-closing gates. Get a free safety quote.",
        images: ['/images/projects/pool-fence-glass-guards.jpg'],
    },
};

export default function PoolFencesPage() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />

            <Breadcrumbs />

            <JsonLd
                data={{
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "serviceType": "Pool Fence Installation",
                    "provider": {
                        "@type": "LocalBusiness",
                        "name": "Aluminum Solutions"
                    },
                    "areaServed": [
                        { "@type": "City", "name": "Toronto" },
                        { "@type": "City", "name": "Mississauga" },
                        { "@type": "City", "name": "Vaughan" },
                        { "@type": "City", "name": "Richmond Hill" },
                        { "@type": "City", "name": "Oakville" }
                    ]
                }}
            />

            <main className="flex-grow">
                {/* Hero */}
                <Hero
                    title="Glass & Aluminum Pool Fences in Toronto & the GTA"
                    subtitle="Code-compliant pool fencing systems engineered for safety, visibility, and durability — manufactured and installed by GTA experts."
                    ctaText="Get Pool Fence Pricing"
                    ctaLink="/contact"
                    secondaryCtaText="View Gallery"
                    secondaryCtaLink="/gallery?category=Pool%20Fences"
                    backgroundImage="/images/projects/pool-fence-glass-guards.jpg"
                />

                {/* Trust / Code Compliance Strip */}
                <div className="bg-brand-navy text-white text-center py-4 px-6 border-b border-slate-700">
                    <p className="text-sm md:text-base font-medium">
                        🛡️ Safe & Secure • 📜 Toronto & GTA By-Law Compliant • 🇨🇦 Made in Canada
                    </p>
                </div>

                {/* Toronto Code Requirements (NEW) */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col md:flex-row items-center gap-16">
                            <div className="w-full md:w-1/2">
                                <span className="text-brand-copper font-bold tracking-widest uppercase text-sm mb-2 block">
                                    By-Law Compliance
                                </span>
                                <h2 className="text-3xl font-serif font-bold text-brand-dark mb-6">
                                    Pool Fence Code Requirements in Toronto & Ontario
                                </h2>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    Pool safety is not just about peace of mind; it's the law. In Toronto and the GTA, every swimming pool must be enclosed by a permit-approved fence. We handle all code verification so your project passes inspection the first time.
                                </p>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-start gap-3">
                                        <div className="w-6 h-6 bg-green-100 text-green-700 rounded-full flex items-center justify-center font-bold text-xs mt-1">✓</div>
                                        <div>
                                            <span className="font-bold text-slate-800">Minimum Height:</span>
                                            <p className="text-sm text-slate-600">Must be at least 1.2m (48 inches) high.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-6 h-6 bg-green-100 text-green-700 rounded-full flex items-center justify-center font-bold text-xs mt-1">✓</div>
                                        <div>
                                            <span className="font-bold text-slate-800">Non-Climbable:</span>
                                            <p className="text-sm text-slate-600">No horizontal bars or footholds that facilitate climbing.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-6 h-6 bg-green-100 text-green-700 rounded-full flex items-center justify-center font-bold text-xs mt-1">✓</div>
                                        <div>
                                            <span className="font-bold text-slate-800">Self-Closing Gates:</span>
                                            <p className="text-sm text-slate-600">Gates must close and latch automatically from a release point.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-6 h-6 bg-green-100 text-green-700 rounded-full flex items-center justify-center font-bold text-xs mt-1">✓</div>
                                        <div>
                                            <span className="font-bold text-slate-800">Ground Clearance:</span>
                                            <p className="text-sm text-slate-600">Maximum 100mm (4 inches) gap between ground and fence.</p>
                                        </div>
                                    </li>
                                </ul>
                                <Link href="/contact" className="text-brand-copper font-bold border-b-2 border-brand-copper hover:text-brand-dark hover:border-brand-dark transition-colors">
                                    Get a Compliant Quote &rarr;
                                </Link>
                            </div>
                            <div className="w-full md:w-1/2">
                                <div className="relative rounded-xl overflow-hidden shadow-2xl border border-slate-100">
                                    <Image
                                        src="/images/projects/pool-fence-glass-swimming.jpg"
                                        alt="Code compliant glass pool fence Toronto"
                                        width={800}
                                        height={600}
                                        className="object-cover"
                                    />
                                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded shadow text-sm font-bold text-green-700 flex items-center gap-2">
                                        <span>🛡️</span> Inspection Ready
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Two Premium Choices */}
                <section className="py-24 bg-slate-50">
                    <div className="container mx-auto px-6 text-center mb-16">
                        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">
                            Two Safe & Stylish Choices
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Choose the system that fits your budget and landscape design.
                        </p>
                    </div>

                    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {/* Option 1: Glass */}
                        <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group flex flex-col">
                            <div className="h-64 bg-slate-200 relative overflow-hidden">
                                <Image
                                    src="/images/generated/pool_fence_glass_detail_1764312810331.png"
                                    alt="Frameless glass pool fencing detail"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute top-4 right-4 bg-brand-navy text-white px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full">
                                    Premium View
                                </div>
                            </div>
                            <div className="p-8 flex-grow flex flex-col">
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Frameless Glass</h3>
                                <p className="text-brand-copper font-bold text-sm uppercase tracking-wider mb-6">Invisible Safety</p>
                                <p className="text-slate-600 mb-6 flex-grow">
                                    The ultimate layout for monitoring swimmers. 12mm tempered safety glass mounted on stainless steel spigots provides a secure barrier without blocking your view of the pool.
                                </p>
                                <ul className="space-y-2 text-sm text-slate-500 mb-8">
                                    <li className="flex items-center gap-2"><span className="text-brand-copper">✓</span> Unobstructed sightlines</li>
                                    <li className="flex items-center gap-2"><span className="text-brand-copper">✓</span> 12mm Tempered Safety Glass</li>
                                    <li className="flex items-center gap-2"><span className="text-brand-copper">✓</span> Marine-grade Stainless Hardware</li>
                                </ul>
                                <Link href="/contact" className="block w-full text-center py-3 border-2 border-brand-navy text-brand-navy font-bold rounded hover:bg-brand-navy hover:text-white transition-colors">
                                    Get Glass Pricing
                                </Link>
                            </div>
                        </div>

                        {/* Option 2: Aluminum */}
                        <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group flex flex-col">
                            <div className="h-64 bg-slate-200 relative overflow-hidden">
                                <Image
                                    src="/images/generated/pool_fence_picket_detail_1764312823826.png"
                                    alt="Aluminum picket pool fence detail"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute top-4 right-4 bg-slate-100 text-slate-700 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full">
                                    Cost Effective
                                </div>
                            </div>
                            <div className="p-8 flex-grow flex flex-col">
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Aluminum Picket</h3>
                                <p className="text-brand-copper font-bold text-sm uppercase tracking-wider mb-6">Durable & Classic</p>
                                <p className="text-slate-600 mb-6 flex-grow">
                                    Secure and maintenance-free. Our aluminum picket fences are designed with specific spacing to meet non-climbable pool codes while offering a clean, modern aesthetic.
                                </p>
                                <ul className="space-y-2 text-sm text-slate-500 mb-8">
                                    <li className="flex items-center gap-2"><span className="text-brand-copper">✓</span> Lower upfront cost</li>
                                    <li className="flex items-center gap-2"><span className="text-brand-copper">✓</span> Maintenance-free powder coat</li>
                                    <li className="flex items-center gap-2"><span className="text-brand-copper">✓</span> Black, White, & Bronze options</li>
                                </ul>
                                <Link href="/contact" className="block w-full text-center py-3 border-2 border-brand-navy text-brand-navy font-bold rounded hover:bg-brand-navy hover:text-white transition-colors">
                                    Get Aluminum Pricing
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pricing Context (NEW) */}
                <section className="py-20 bg-white border-y border-slate-100">
                    <div className="container mx-auto px-6">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl font-serif font-bold text-brand-dark mb-4">Pool Fence Pricing in Toronto</h2>
                            <p className="text-slate-600">
                                Approximate supply and installation costs detailed below.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-8 max-w-5xl mx-auto divide-y md:divide-y-0 md:divide-x divide-slate-100">
                            <div className="p-8 text-center">
                                <h3 className="font-bold text-lg text-slate-900 mb-2">Aluminum Picket</h3>
                                <div className="text-3xl font-bold text-brand-copper mb-2">$70 - $110</div>
                                <div className="text-sm text-slate-500 mb-4">per linear foot</div>
                                <p className="text-sm text-slate-600">Most economical choice. Includes panels, posts, and installation.</p>
                            </div>
                            <div className="p-8 text-center bg-slate-50 md:bg-transparent -mx-6 md:mx-0">
                                <h3 className="font-bold text-lg text-slate-900 mb-2">Frameless Glass</h3>
                                <div className="text-3xl font-bold text-brand-copper mb-2">$140 - $220+</div>
                                <div className="text-sm text-slate-500 mb-4">per linear foot</div>
                                <p className="text-sm text-slate-600">Premium choice. Includes 12mm glass, spigots, and installation.</p>
                            </div>
                            <div className="p-8 text-center">
                                <h3 className="font-bold text-lg text-slate-900 mb-2">Gates & Custom</h3>
                                <div className="text-3xl font-bold text-brand-copper mb-2">Variable</div>
                                <div className="text-sm text-slate-500 mb-4">quoted per project</div>
                                <p className="text-sm text-slate-600">Self-closing gates, magnetic latches, and custom terrain adjustments.</p>
                            </div>
                        </div>
                        <div className="text-center mt-12 bg-brand-navy text-white p-8 rounded-lg max-w-4xl mx-auto">
                            <h3 className="text-xl font-bold mb-2">Don't Wait Until June</h3>
                            <p className="text-slate-300 mb-6">Permit approval and installation can take time. Book now to ensure your pool is ready for the first swim of summer.</p>
                            <Link href="/contact" className="inline-block px-10 py-3 bg-brand-copper text-white font-bold rounded shadow-lg hover:bg-white hover:text-brand-copper transition-colors">
                                Get a Quote Today
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Why Homeowners Trust Us (Refocused on Pool Safety) */}
                <section className="py-24 bg-slate-50">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">
                                Why Homeowners Trust Us for Pool Safety
                            </h2>
                            <p className="text-slate-600 max-w-2xl mx-auto">
                                We prioritize safety and speed so you can enjoy your pool sooner.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                                <div className="text-4xl mb-4">📜</div>
                                <h3 className="font-bold text-lg text-brand-dark mb-2">Permit Experts</h3>
                                <p className="text-slate-600 text-sm">We know the local by-laws for Toronto, Vaughan, and Mississauga inside out, ensuring smooth inspections.</p>
                            </div>
                            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                                <div className="text-4xl mb-4">🔒</div>
                                <h3 className="font-bold text-lg text-brand-dark mb-2">Child-Safe Gates</h3>
                                <p className="text-slate-600 text-sm">We use MagnaLatch and premium hinges that are self-closing and key-lockable for maximum security.</p>
                            </div>
                            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                                <div className="text-4xl mb-4">⏱️</div>
                                <h3 className="font-bold text-lg text-brand-dark mb-2">Deadlines Met</h3>
                                <p className="text-slate-600 text-sm">We understand you want to swim. We commit to installation dates so your pool isn't sitting empty.</p>
                            </div>
                            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                                <div className="text-4xl mb-4">🧱</div>
                                <h3 className="font-bold text-lg text-brand-dark mb-2">Impeccable Install</h3>
                                <p className="text-slate-600 text-sm">Core drilling into concrete or stone is done with precision, leaving your pool deck clean and undamaged.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <PoolFencesFAQ />

                {/* CTA */}
                <section className="py-24 bg-white text-center">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
                            Ready to Secure Your Pool?
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto mb-10 text-lg">
                            Get a free consultation and ensure your pool is safe for the season.
                        </p>
                        <Link href="/contact" className="inline-block px-10 py-4 bg-brand-copper text-white font-bold tracking-wide hover:bg-orange-700 transition-colors shadow-lg rounded-sm">
                            Get a Free Quote
                        </Link>
                    </div>
                </section>

                {/* Related Articles */}
                <RelatedArticles
                    posts={blogPosts.filter(post =>
                        ['ontario-building-code-railing-safety', 'choosing-aluminum-glass-railings-guide', '2025-outdoor-design-trends'].includes(post.slug)
                    )}
                    title="Pool Safety & Design Tips"
                />
            </main>

            <Footer />
        </div>
    );
}
