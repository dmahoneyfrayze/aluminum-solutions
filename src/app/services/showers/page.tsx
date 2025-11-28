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
                />

                {/* Intro / Value Prop */}
                <section className="py-20">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">
                                    The Centerpiece of Your Bathroom
                                </h2>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    Off-the-shelf shower doors rarely fit perfectly. Our custom frameless systems are laser-measured to fit your specific space, ensuring a watertight seal and a sleek, modern look.
                                </p>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-center">
                                        <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3 font-bold">✓</span>
                                        <span className="text-slate-700">10mm or 12mm Tempered Safety Glass</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3 font-bold">✓</span>
                                        <span className="text-slate-700">Premium Hardware (Matte Black, Chrome, Gold)</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3 font-bold">✓</span>
                                        <span className="text-slate-700">Treated Glass (Easy-Clean Coating)</span>
                                    </li>
                                </ul>
                                <Link href="/contact" className="inline-block px-8 py-4 bg-slate-900 text-white font-bold rounded hover:bg-slate-800 transition-colors">
                                    Request a Quote
                                </Link>
                            </div>
                            <div className="h-96 bg-slate-200 rounded-lg relative overflow-hidden">
                                {/* Placeholder for Shower Image */}
                                <div className="absolute inset-0 bg-slate-300" />
                                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded shadow text-sm font-bold">
                                    Custom Corner Enclosure
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Styles Grid */}
                <section className="py-20 bg-slate-50">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Popular Configurations</h2>
                            <p className="text-slate-600">From simple doors to complex steam showers, we do it all.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Style 1 */}
                            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <div className="h-48 bg-slate-200 mb-6 rounded" />
                                <h3 className="text-xl font-bold mb-2">Inline Door & Panel</h3>
                                <p className="text-slate-600 text-sm mb-4">Perfect for alcove showers. A clean, single wall of glass.</p>
                            </div>
                            {/* Style 2 */}
                            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <div className="h-48 bg-slate-200 mb-6 rounded" />
                                <h3 className="text-xl font-bold mb-2">Corner Enclosure (90°)</h3>
                                <p className="text-slate-600 text-sm mb-4">Two glass panels meeting at a corner. Ideal for maximizing space.</p>
                            </div>
                            {/* Style 3 */}
                            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <div className="h-48 bg-slate-200 mb-6 rounded" />
                                <h3 className="text-xl font-bold mb-2">Sliding Barn Door</h3>
                                <p className="text-slate-600 text-sm mb-4">Smooth rolling hardware for a modern industrial look.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Hardware Finishes */}
                <section className="py-20">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-12">Hardware Finishes</h2>
                        <div className="flex flex-wrap justify-center gap-8">
                            <div className="flex flex-col items-center">
                                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-300 to-gray-100 shadow-inner mb-3 border border-gray-200" />
                                <span className="font-bold text-slate-700">Chrome</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-20 h-20 rounded-full bg-slate-900 shadow-inner mb-3 border border-slate-700" />
                                <span className="font-bold text-slate-700">Matte Black</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-200 to-yellow-500 shadow-inner mb-3 border border-yellow-600" />
                                <span className="font-bold text-slate-700">Brushed Gold</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 shadow-inner mb-3 border border-gray-500" />
                                <span className="font-bold text-slate-700">Brushed Nickel</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-24 bg-slate-900 text-white text-center">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                            Ready to Upgrade Your Bathroom?
                        </h2>
                        <p className="text-slate-300 max-w-2xl mx-auto mb-10">
                            Get a fast quote for your custom glass shower. Upload a photo or sketch for the most accurate estimate.
                        </p>
                        <Link href="/contact" className="inline-block px-10 py-4 bg-white text-slate-900 font-bold tracking-wide hover:bg-slate-100 transition-colors shadow-lg">
                            Get a Free Quote
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
