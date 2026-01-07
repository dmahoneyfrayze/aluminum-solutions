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
import ServiceAreasList from "@/components/ui/ServiceAreasList";

export const metadata: Metadata = {
    title: "Glass Porch Enclosures & Sunrooms Toronto | Aluminum Solutions",
    description: "Custom glass enclosures for porches, patios, and balconies. Extend your outdoor season with our wind-protection systems.",
    openGraph: {
        title: "Glass Porch Enclosures & Sunrooms Toronto | Aluminum Solutions",
        description: "Custom glass enclosures for porches, patios, and balconies. Extend your outdoor season with our wind-protection systems.",
        images: [
            {
                url: '/images/projects/glass-enclosure-porch-front.jpg',
                alt: 'Glass Porch Enclosures Toronto'
            }
        ],
    },
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
                    title="Custom Glass Porch Enclosures"
                    subtitle="Seamlessly blend indoor comfort with outdoor views. Custom-manufactured frameless and semi-frameless systems."
                    ctaText="Request Design Consultation"
                    ctaLink="/contact"
                    backgroundImage="/images/projects/glass-enclosure-porch-front.jpg"
                />

                {/* Design Considerations */}
                <section className="py-20 bg-slate-900 text-white">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col md:flex-row gap-16">
                            <div className="w-full md:w-1/2">
                                <h2 className="text-3xl font-serif font-bold mb-8">Design Considerations</h2>
                                <div className="space-y-8">
                                    <div>
                                        <h3 className="text-xl font-bold text-brand-copper mb-2">Size & Layout</h3>
                                        <p className="text-slate-300">
                                            Assess your available area and consider how you intend to use the space. A cozy reading nook requires different planning than a large entertaining area.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-brand-copper mb-2">Glass Options</h3>
                                        <p className="text-slate-300">
                                            Choose clear glass for views, or frosted/tinted options for privacy and UV protection. Each choice impacts the aesthetic and performance of your enclosure.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-brand-copper mb-2">Fixtures & Hardware</h3>
                                        <p className="text-slate-300">
                                            We use marine-grade stainless steel fixtures for unmatched strength and rust resistance. This ensures your enclosure remains sturdy and secure in all weather conditions.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-brand-copper mb-2">Ventilation</h3>
                                        <p className="text-slate-300">
                                            Proper airflow is essential. We incorporate operable windows, sliding doors, or ceiling vents to allow fresh air circulation during warmer months.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2">
                                <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
                                    <h3 className="text-2xl font-bold mb-6">Professional Installation</h3>
                                    <p className="text-slate-300 mb-6">
                                        Hiring a professional contractor is essential for high-quality results. Here is why you should choose our installers:
                                    </p>
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <span className="text-brand-copper mt-1">✓</span>
                                            <div>
                                                <strong>Expertise:</strong> We have the skills to handle complex structural requirements.
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-brand-copper mt-1">✓</span>
                                            <div>
                                                <strong>Experience:</strong> Over 10 years of experience allows us to anticipate and overcome challenges.
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-brand-copper mt-1">✓</span>
                                            <div>
                                                <strong>Time-Saving:</strong> We handle everything from permits to final cleanup.
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Maintenance Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl font-serif font-bold text-brand-dark mb-8">Maintenance Tips</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                                <div className="p-6 bg-slate-50 rounded border border-slate-100">
                                    <h3 className="font-bold text-lg mb-2 text-brand-navy">Regular Cleaning</h3>
                                    <p className="text-slate-600 text-sm">Clean interior and exterior glass surfaces using manufacturer-recommended products to keep views crystal clear.</p>
                                </div>
                                <div className="p-6 bg-slate-50 rounded border border-slate-100">
                                    <h3 className="font-bold text-lg mb-2 text-brand-navy">Inspect for Damage</h3>
                                    <p className="text-slate-600 text-sm">Regularly check for any cracks or seal failures. addressing small issues promptly prevents costly repairs.</p>
                                </div>
                                <div className="p-6 bg-slate-50 rounded border border-slate-100">
                                    <h3 className="font-bold text-lg mb-2 text-brand-navy">Lubricate Parts</h3>
                                    <p className="text-slate-600 text-sm">Keep hinges, tracks, and locks operating smoothly by lubricating moving parts annually.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section className="py-20 bg-brand-copper/5">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-serif font-bold text-center text-brand-dark mb-12">Our Customers Say The Best About Us</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            <div className="bg-white p-8 shadow-sm rounded-xl">
                                <div className="flex text-brand-copper mb-4">★★★★★</div>
                                <p className="text-slate-600 italic mb-6">"Aluminum Solutions transformed our porch. We used to sit inside and look at the rain, now we sit in our enclosure and enjoy it. The installation was flawless."</p>
                                <div className="font-bold text-brand-navy">- Sarah M., Oakville</div>
                            </div>
                            <div className="bg-white p-8 shadow-sm rounded-xl">
                                <div className="flex text-brand-copper mb-4">★★★★★</div>
                                <p className="text-slate-600 italic mb-6">"The best investment we've made for our home. It adds so much curb appeal and keeps the snow off our front door. Highly recommend their team."</p>
                                <div className="font-bold text-brand-navy">- David K., Toronto</div>
                            </div>
                        </div>
                        <div className="text-center mt-10">
                            <Link href="/reviews" className="text-brand-navy font-bold hover:underline">
                                Read More Reviews &rarr;
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Overview & Why Use */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-brand-copper font-bold tracking-widest uppercase text-sm mb-2 block">
                                Year-Round Comfort
                            </span>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-brand-dark">
                                Why Use Glass Porch Enclosures?
                            </h2>
                            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                                <p>
                                    Frameless glass enclosures offer a range of benefits for homeowners looking to maximize their living space. They pair perfectly with our <Link href="/services/glass-railings" className="text-brand-copper hover:underline">glass railing systems</Link> for a complete modern look:
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <span className="text-brand-copper mt-1">✓</span>
                                        <span><strong>Increased Living Space:</strong> Enjoy an additional area for relaxation or entertaining guests, protected from the elements.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-brand-copper mt-1">✓</span>
                                        <span><strong>Natural Light & Views:</strong> Unobstructed views create a bright, airy atmosphere while keeping you sheltered.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-brand-copper mt-1">✓</span>
                                        <span><strong>Durability:</strong> Aluminum frames and tempered safety glass offer superior protection against wind, rain, and snow.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-brand-copper mt-1">✓</span>
                                        <span><strong>Custom Design:</strong> Versatile configurations to suit your home's unique architecture and your personal style.</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-10">
                                <Link href="/contact" className="text-brand-dark font-bold border-b-2 border-brand-dark pb-1 hover:text-brand-copper hover:border-brand-copper transition-colors text-lg">
                                    Schedule a Free Measurement &rarr;
                                </Link>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <div className="aspect-[4/3] bg-slate-100 rounded-xl overflow-hidden relative shadow-lg">
                                <Image
                                    src="/images/projects/glass-enclosure-porch-side.jpg"
                                    alt="Modern glass porch enclosure"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Types of Enclosures */}
                <section className="py-20 bg-slate-50">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">
                                Types of Glass Porch Enclosures
                            </h2>
                            <p className="text-slate-600 max-w-2xl mx-auto">
                                Choose the perfect level of protection for your lifestyle.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Three-Season Enclosures</h3>
                                <p className="text-slate-600 mb-4">
                                    A versatile and affordable solution for spring, summer, and fall. Perfect for soaking up the beauty of the changing seasons without dealing with rain, wind, or bugs.
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                                <div className="absolute top-0 right-0 bg-brand-copper text-white text-xs font-bold px-3 py-1 rounded-bl">POPULAR</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Four-Season Enclosures</h3>
                                <p className="text-slate-600 mb-4">
                                    Designed to transform your porch into a versatile living space you can enjoy year-round. Ideal for expanding your living area without the cost of a traditional addition.
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Solariums & Sunrooms</h3>
                                <p className="text-slate-600 mb-4">
                                    Stunning indoor-outdoor spaces designed to let in ample natural light while protecting you from the elements. Enjoy a seamless connection to nature from your home sanctuary.
                                </p>
                            </div>
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

                <ServiceAreasList />
            </main>

            <Footer />
        </div>
    );
}
