"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/ui/Hero";
import Link from "next/link";

export default function ShowersPage() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />

            <main className="flex-grow">
                <Hero
                    title="Custom Frameless Glass Showers"
                    subtitle="Transform your bathroom into a spa with our premium 10mm tempered glass enclosures. Measured, manufactured, and installed by experts."
                    ctaText="Get a Free Estimate"
                    ctaLink="/contact"
                    backgroundImage="/images/migrated/manufacturing-glass.jpg"
                />

                {/* Intro / Value Prop */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                            <div>
                                <span className="text-brand-copper font-bold tracking-widest uppercase text-sm mb-2 block">
                                    Spa-Like Luxury
                                </span>
                                <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-6">
                                    The Centerpiece of Your Bathroom
                                </h2>
                                <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                                    Off-the-shelf shower doors rarely fit perfectly. Our custom frameless systems are laser-measured to fit your specific space, ensuring a watertight seal and a sleek, modern look.
                                </p>
                                <ul className="space-y-4 mb-10">
                                    <li className="flex items-center">
                                        <span className="w-6 h-6 bg-brand-navy text-white rounded-full flex items-center justify-center mr-3 font-bold text-xs">✓</span>
                                        <span className="text-slate-700 font-medium">10mm or 12mm Tempered Safety Glass</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-6 h-6 bg-brand-navy text-white rounded-full flex items-center justify-center mr-3 font-bold text-xs">✓</span>
                                        <span className="text-slate-700 font-medium">Premium Hardware (Matte Black, Chrome, Gold)</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-6 h-6 bg-brand-navy text-white rounded-full flex items-center justify-center mr-3 font-bold text-xs">✓</span>
                                        <span className="text-slate-700 font-medium">Treated Glass (Easy-Clean Coating)</span>
                                    </li>
                                </ul>
                                <Link href="/contact" className="inline-block px-8 py-4 bg-brand-dark text-white font-bold rounded-sm hover:bg-brand-navy transition-colors">
                                    Request a Quote
                                </Link>
                            </div>
                            <div className="h-[500px] bg-slate-200 rounded-sm relative overflow-hidden shadow-2xl">
                                {/* Placeholder for Shower Image */}
                                <div className="absolute inset-0 bg-slate-300" />
                                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded shadow text-sm font-bold text-brand-dark">
                                    Custom Corner Enclosure
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Styles Grid */}
                <section className="py-24 bg-slate-50">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-serif font-bold text-brand-dark mb-4">Popular Configurations</h2>
                            <p className="text-slate-600">From simple doors to complex steam showers, we do it all.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Style 1 */}
                            <div className="bg-white p-6 rounded-sm shadow-sm hover:shadow-md transition-shadow">
                                <div className="h-48 bg-slate-200 mb-6 rounded-sm" />
                                <h3 className="text-xl font-bold mb-2 text-brand-dark">Inline Door & Panel</h3>
                                <p className="text-slate-600 text-sm mb-4">Perfect for alcove showers. A clean, single wall of glass.</p>
                            </div>
                            {/* Style 2 */}
                            <div className="bg-white p-6 rounded-sm shadow-sm hover:shadow-md transition-shadow">
                                <div className="h-48 bg-slate-200 mb-6 rounded-sm" />
                                <h3 className="text-xl font-bold mb-2 text-brand-dark">Corner Enclosure (90°)</h3>
                                <p className="text-slate-600 text-sm mb-4">Two glass panels meeting at a corner. Ideal for maximizing space.</p>
                            </div>
                            {/* Style 3 */}
                            <div className="bg-white p-6 rounded-sm shadow-sm hover:shadow-md transition-shadow">
                                <div className="h-48 bg-slate-200 mb-6 rounded-sm" />
                                <h3 className="text-xl font-bold mb-2 text-brand-dark">Sliding Barn Door</h3>
                                <p className="text-slate-600 text-sm mb-4">Smooth rolling hardware for a modern industrial look.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Hardware Finishes */}
                <section className="py-24">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-3xl font-serif font-bold text-brand-dark mb-12">Hardware Finishes</h2>
                        <div className="flex flex-wrap justify-center gap-12">
                            <div className="flex flex-col items-center group">
                                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gray-300 to-gray-100 shadow-lg mb-4 border-4 border-white group-hover:scale-110 transition-transform" />
                                <span className="font-bold text-slate-700">Chrome</span>
                            </div>
                            <div className="flex flex-col items-center group">
                                <div className="w-24 h-24 rounded-full bg-slate-900 shadow-lg mb-4 border-4 border-white group-hover:scale-110 transition-transform" />
                                <span className="font-bold text-slate-700">Matte Black</span>
                            </div>
                            <div className="flex flex-col items-center group">
                                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-yellow-200 to-yellow-500 shadow-lg mb-4 border-4 border-white group-hover:scale-110 transition-transform" />
                                <span className="font-bold text-slate-700">Brushed Gold</span>
                            </div>
                            <div className="flex flex-col items-center group">
                                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 shadow-lg mb-4 border-4 border-white group-hover:scale-110 transition-transform" />
                                <span className="font-bold text-slate-700">Brushed Nickel</span>
                            </div>
                        </div>
                    </div>
                </section>

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
            </main>

            <Footer />
        </div>
    );
}
