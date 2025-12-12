"use client";

import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/ui/Hero";
import ManufacturingHighlight from "@/components/ui/ManufacturingHighlight";

export default function AboutContent() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <Hero
                title="About Aluminum Solutions"
                subtitle="Precision engineering. Local manufacturing. Dedicated craftsmanship."
                ctaText="Get a Free Quote"
                ctaLink="/contact"
                backgroundImage="/images/generated/railing_hero_detail_1764312850877.webp"
            />

            <main className="flex-grow">
                {/* Story Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">Our Story</h2>
                                <p className="text-slate-600 mb-4 leading-relaxed">
                                    Aluminum Solutions started with a simple mission: to provide Toronto homeowners with high-quality, durable, and stylish aluminum products without the middleman markup.
                                </p>
                                <p className="text-slate-600 mb-4 leading-relaxed">
                                    What began as a small workshop has grown into a premier manufacturing facility in the GTA. We control every step of the process—from the initial design and raw aluminum extrusion to the final powder coating and installation.
                                </p>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    Because we manufacture everything locally, we can guarantee timelines and quality that importers simply cannot match.
                                </p>
                            </div>
                            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                                <Image
                                    src="/images/projects/deck-glass-railing-privacy.jpg"
                                    alt="Aluminum Solutions Workshop"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Founder's Message */}
                <section className="py-20 bg-slate-50">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden text-center">
                            <div className="relative z-10 flex flex-col items-center">
                                <div>
                                    <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">A Message from the Owner</h2>
                                    <p className="text-slate-600 italic mb-4 text-lg leading-relaxed">
                                        "We don't just build railings; we build peace of mind. Every product that leaves our factory is something I would be proud to install in my own home. That's my personal guarantee to you."
                                    </p>
                                    <div className="font-bold text-brand-dark text-xl">– Founder, Aluminum Solutions</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <ManufacturingHighlight />

                {/* CTA */}
                <section className="py-20 bg-brand-dark text-white text-center">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-serif font-bold mb-6">See the Quality for Yourself</h2>
                        <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                            Visit our showroom or book a free on-site consultation to see our samples and get a precise quote.
                        </p>
                        <Link href="/contact" className="inline-block px-8 py-3 bg-brand-copper text-white font-bold rounded hover:bg-white hover:text-brand-dark transition-all">
                            Get a Free Quote
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
