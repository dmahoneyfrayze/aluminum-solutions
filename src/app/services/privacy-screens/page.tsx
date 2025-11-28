"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/ui/Hero";
import Link from "next/link";

export default function PrivacyScreensPage() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />

            <main className="flex-grow">
                <Hero
                    title="Aluminum & Glass Privacy Screens"
                    subtitle="Create a secluded oasis in your urban backyard with our stylish, durable privacy solutions."
                    ctaText="Get a Free Estimate"
                    ctaLink="/contact"
                    backgroundImage="/images/privacy-screens-hero.jpg"
                />

                {/* Intro */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            <div className="w-full md:w-1/2">
                                <h2 className="text-sm font-bold text-brand-copper uppercase tracking-widest mb-4">Urban Living Solutions</h2>
                                <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
                                    Privacy Without Compromising Light
                                </h3>
                                <div className="prose text-slate-600 leading-relaxed">
                                    <p className="mb-4">
                                        In today’s urban living spaces, privacy is more important than ever. At Aluminum Solutions, we offer a unique solution: Privacy Screens with an aluminum frame and acid-etched glass.
                                    </p>
                                    <p className="mb-4">
                                        These screens provide much-needed seclusion from neighbors and passersby while adding a touch of elegance to your outdoor living areas. The acid-etched glass allows natural light to filter through, ensuring your space feels bright and airy, not closed in.
                                    </p>
                                    <p>
                                        Perfect for decks, patios, balconies, or hot tub areas where you want to create a private retreat.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2">
                                <div className="aspect-[4/3] bg-slate-100 rounded-xl overflow-hidden relative shadow-lg">
                                    {/* Placeholder for Privacy Screen Image */}
                                    <div className="absolute inset-0 flex items-center justify-center text-slate-400 bg-slate-200">
                                        [Privacy Screen Image]
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features */}
                <section className="py-20 bg-slate-50">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-6 text-2xl">
                                    📏
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Perfect Height</h3>
                                <p className="text-slate-600">
                                    Our privacy screens are designed to stand as high as 6 feet (or custom heights), providing optimal coverage to block unwanted views while complying with local by-laws.
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-6 text-2xl">
                                    🌫️
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Acid-Etched Glass</h3>
                                <p className="text-slate-600">
                                    We use premium acid-etched glass that is translucent. It obscures the view completely but lets in a soft, diffused light. It gives a sophisticated, frosted appearance.
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-6 text-2xl">
                                    💪
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Durable Frames</h3>
                                <p className="text-slate-600">
                                    Constructed with sturdy aluminum frames known for their strength and resistance to weather. They won't warp, rot, or rust like wood privacy fences.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Applications */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6 text-center mb-16">
                        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">
                            Where to Use Privacy Screens
                        </h2>
                    </div>
                    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {['Hot Tub Areas', 'Shared Balconies', 'Patio Dining', 'Pool Equipment'].map((item, i) => (
                            <div key={i} className="bg-slate-50 p-6 rounded-lg text-center font-bold text-slate-700 border border-slate-200">
                                {item}
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="py-24 bg-brand-navy text-white text-center">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
                            Invest in Your Outdoor Oasis
                        </h2>
                        <p className="text-slate-300 max-w-2xl mx-auto mb-10 text-lg">
                            Enjoy your outdoor space without worrying about prying eyes. Contact us for a custom privacy solution.
                        </p>
                        <Link href="/contact" className="inline-block px-10 py-4 bg-brand-copper text-white font-bold tracking-wide hover:bg-orange-700 transition-colors shadow-lg rounded-sm">
                            Get a Free Quote
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
