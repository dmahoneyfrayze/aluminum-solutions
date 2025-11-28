"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/ui/Hero";
import Link from "next/link";

export default function ManufacturingPage() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />

            <main className="flex-grow">
                <Hero
                    title="We Don't Just Install. We Manufacture."
                    subtitle="See inside our GTA facility where we extrude, cut, and coat every railing system to order."
                    ctaText="Visit Our Showroom"
                    ctaLink="/contact"
                />

                {/* Video Tour Section */}
                <section className="py-20 bg-slate-900 text-white">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-3xl font-serif font-bold mb-8">Inside the Factory</h2>
                        <div className="max-w-4xl mx-auto aspect-video bg-slate-800 rounded-xl overflow-hidden shadow-2xl relative group cursor-pointer border border-slate-700">
                            {/* Placeholder for Video */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform">
                                    <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-1" />
                                </div>
                            </div>
                            <div className="absolute bottom-6 left-6 text-left">
                                <p className="font-bold text-lg">Virtual Tour</p>
                                <p className="text-slate-400 text-sm">2:30 • 4K Quality</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* The Process */}
                <section className="py-24">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
                                The Manufacturing Process
                            </h2>
                            <p className="text-slate-600 max-w-2xl mx-auto">
                                Total quality control from raw aluminum to final installation.
                            </p>
                        </div>

                        <div className="space-y-24">
                            {/* Step 1 */}
                            <div className="flex flex-col md:flex-row items-center gap-12">
                                <div className="w-full md:w-1/2">
                                    <div className="h-80 bg-slate-100 rounded-lg relative overflow-hidden">
                                        <div className="absolute inset-0 bg-slate-200" />
                                        <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded shadow text-sm font-bold">Step 01</div>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Precision Extrusion & Cutting</h3>
                                    <p className="text-slate-600 leading-relaxed mb-6">
                                        We start with premium-grade raw aluminum. Using computer-controlled saws, we cut profiles to the exact millimeter required for your project, ensuring a perfect fit that pre-fabricated kits can't match.
                                    </p>
                                    <ul className="space-y-2 text-slate-700">
                                        <li className="flex items-center">✓ 6063-T5 Architectural Grade Aluminum</li>
                                        <li className="flex items-center">✓ CNC Precision Cutting</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                                <div className="w-full md:w-1/2">
                                    <div className="h-80 bg-slate-100 rounded-lg relative overflow-hidden">
                                        <div className="absolute inset-0 bg-slate-200" />
                                        <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded shadow text-sm font-bold">Step 02</div>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Powder Coating Line</h3>
                                    <p className="text-slate-600 leading-relaxed mb-6">
                                        Our in-house powder coating line applies a durable, weather-resistant finish. We can match any custom color and ensure a thick, uniform coat that resists chipping and fading for decades.
                                    </p>
                                    <ul className="space-y-2 text-slate-700">
                                        <li className="flex items-center">✓ AAMA 2604 Compliant Finishes</li>
                                        <li className="flex items-center">✓ Custom Color Matching</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="flex flex-col md:flex-row items-center gap-12">
                                <div className="w-full md:w-1/2">
                                    <div className="h-80 bg-slate-100 rounded-lg relative overflow-hidden">
                                        <div className="absolute inset-0 bg-slate-200" />
                                        <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded shadow text-sm font-bold">Step 03</div>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Glass Tempering & Polishing</h3>
                                    <p className="text-slate-600 leading-relaxed mb-6">
                                        Safety is paramount. We use only tempered safety glass, cut and polished to eliminate sharp edges. Our quality control team inspects every panel for clarity and strength before it leaves the shop.
                                    </p>
                                    <ul className="space-y-2 text-slate-700">
                                        <li className="flex items-center">✓ 10mm & 12mm Tempered Glass</li>
                                        <li className="flex items-center">✓ Polished Edges for Safety</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats / Trust */}
                <section className="py-20 bg-slate-50 border-y border-slate-200">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            <div>
                                <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
                                <div className="text-sm font-bold text-slate-600 uppercase tracking-wide">Years in Business</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-blue-600 mb-2">5,000+</div>
                                <div className="text-sm font-bold text-slate-600 uppercase tracking-wide">Projects Installed</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                                <div className="text-sm font-bold text-slate-600 uppercase tracking-wide">WSIB Insured</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-blue-600 mb-2">Lifetime</div>
                                <div className="text-sm font-bold text-slate-600 uppercase tracking-wide">Product Warranty</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-24 text-center">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">
                            See the Difference Quality Makes
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto mb-10">
                            Visit our showroom to see samples and meet the team, or request a free on-site consultation.
                        </p>
                        <div className="flex flex-col md:flex-row justify-center gap-4">
                            <Link href="/contact" className="px-8 py-4 bg-slate-900 text-white font-bold rounded hover:bg-slate-800 transition-colors">
                                Get a Free Quote
                            </Link>
                            <Link href="/contact" className="px-8 py-4 bg-white text-slate-900 border-2 border-slate-200 font-bold rounded hover:border-slate-900 transition-colors">
                                Book Showroom Visit
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
