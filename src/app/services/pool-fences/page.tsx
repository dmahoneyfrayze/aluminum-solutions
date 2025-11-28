"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/ui/Hero";
import Link from "next/link";
import Image from "next/image";

export default function PoolFencesPage() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />

            <main className="flex-grow">
                <Hero
                    title="Enhance Safety with Aluminum & Glass Pool Railings"
                    subtitle="Secure your outdoor oasis with high-quality, durable railings that meet all local safety codes without compromising on style."
                    ctaText="Get a Free Estimate"
                    ctaLink="/contact"
                    backgroundImage="/images/pool-fences-hero.jpg"
                />

                {/* Intro / Safety First */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            <div className="w-full md:w-1/2">
                                <h2 className="text-sm font-bold text-brand-copper uppercase tracking-widest mb-4">Safety First</h2>
                                <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
                                    Your Safety is Our #1 Concern
                                </h3>
                                <div className="prose text-slate-600 leading-relaxed">
                                    <p className="mb-4">
                                        At Aluminum Solutions, we understand the importance of safety and style in your swimming pool area. Our railings are meticulously designed to provide optimal safety, serving as a reliable barrier to prevent accidental falls and secure the area for children and pets.
                                    </p>
                                    <p className="mb-4">
                                        We proactively engage with local authorities to verify and adhere to all specific safety requirements in your municipality. Whether you choose aluminum or glass, every system is crafted to meet and exceed local by-laws.
                                    </p>
                                    <ul className="list-disc pl-5 space-y-2 mt-4">
                                        <li><strong>Child-Proof Gates:</strong> All gates feature self-closing, self-latching hardware with locks positioned out of reach of small children.</li>
                                        <li><strong>Climb-Resistant:</strong> Our designs minimize horizontal rails to prevent climbing.</li>
                                        <li><strong>Durable Materials:</strong> Built to withstand harsh Canadian winters and scorching summers.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2">
                                <div className="aspect-square bg-slate-100 rounded-xl overflow-hidden relative shadow-lg">
                                    {/* Placeholder for Pool Image */}
                                    <div className="absolute inset-0 flex items-center justify-center text-slate-400 bg-slate-200">
                                        [Pool Fence Image]
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Options */}
                <section className="py-20 bg-slate-50">
                    <div className="container mx-auto px-6 text-center mb-16">
                        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">
                            Two Premium Choices
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Choose the style that best fits your landscape design.
                        </p>
                    </div>

                    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Option 1 */}
                        <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
                            <div className="h-64 bg-slate-200 relative">
                                <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                                    [Frameless Glass Image]
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Frameless Glass</h3>
                                <p className="text-slate-600 mb-6">
                                    The ultimate in luxury. 12mm tempered safety glass mounted on stainless steel spigots. Provides an invisible barrier that keeps your pool safe without blocking the view.
                                </p>
                                <ul className="space-y-2 text-sm text-slate-500 mb-8">
                                    <li>✓ Unobstructed views</li>
                                    <li>✓ 12mm Tempered Safety Glass</li>
                                    <li>✓ Marine-grade Stainless Steel Hardware</li>
                                </ul>
                                <Link href="/contact" className="text-brand-copper font-bold uppercase text-sm hover:underline">
                                    Request Quote &rarr;
                                </Link>
                            </div>
                        </div>

                        {/* Option 2 */}
                        <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
                            <div className="h-64 bg-slate-200 relative">
                                <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                                    [Aluminum Picket Image]
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Aluminum Picket</h3>
                                <p className="text-slate-600 mb-6">
                                    Classic, secure, and cost-effective. Our aluminum picket fences are designed with specific spacing to meet pool codes while offering a clean, modern look.
                                </p>
                                <ul className="space-y-2 text-sm text-slate-500 mb-8">
                                    <li>✓ Cost-effective solution</li>
                                    <li>✓ Maintenance-free powder coat</li>
                                    <li>✓ Available in Black, White, & Bronze</li>
                                </ul>
                                <Link href="/contact" className="text-brand-copper font-bold uppercase text-sm hover:underline">
                                    Request Quote &rarr;
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="py-20 bg-brand-navy text-white">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                            <div>
                                <div className="text-4xl mb-6">🛡️</div>
                                <h3 className="text-xl font-bold mb-4">Code Compliant</h3>
                                <p className="text-slate-300">
                                    We guarantee our installations meet all local by-laws for pool enclosures in the GTA.
                                </p>
                            </div>
                            <div>
                                <div className="text-4xl mb-6">❄️</div>
                                <h3 className="text-xl font-bold mb-4">Weather Resistant</h3>
                                <p className="text-slate-300">
                                    Engineered to withstand freezing winters and hot summers without rusting or fading.
                                </p>
                            </div>
                            <div>
                                <div className="text-4xl mb-6">🔒</div>
                                <h3 className="text-xl font-bold mb-4">Self-Closing Gates</h3>
                                <p className="text-slate-300">
                                    High-quality hinges and latches ensure your gate always closes and locks behind you.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

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
            </main>

            <Footer />
        </div>
    );
}
