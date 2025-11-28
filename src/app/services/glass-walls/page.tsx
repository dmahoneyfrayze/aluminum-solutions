"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/ui/Hero";
import Link from "next/link";
import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Glass Walls & Office Partitions Toronto | Custom Glass Dividers",
    description: "Modern frameless glass walls for offices, home gyms, and wine cellars. Custom designed and installed in Toronto & GTA. Create bright, open spaces.",
};

export default function GlassWallsPage() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />

            <main className="flex-grow">
                <Hero
                    title="Modern Glass Walls & Office Partitions"
                    subtitle="Redefine your space with sleek, frameless glass dividers. Perfect for offices, gyms, and home interiors."
                    ctaText="Get a Free Estimate"
                    ctaLink="/contact"
                    backgroundImage="/images/generated/glass_office_partition_hero_1764346564712.png"
                />

                {/* Intro */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            <div className="w-full md:w-1/2">
                                <h2 className="text-sm font-bold text-brand-copper uppercase tracking-widest mb-4">Interior Glass Solutions</h2>
                                <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
                                    Transparency Meets Privacy
                                </h3>
                                <div className="prose text-slate-600 leading-relaxed">
                                    <p className="mb-4">
                                        Transform your workspace or home with our custom glass wall systems. Whether you're looking to create a collaborative open-concept office or a dedicated home gym, our frameless glass partitions offer the perfect balance of separation and light.
                                    </p>
                                    <p className="mb-4">
                                        As part of the <strong>Easy Glass GTA</strong> family, now fully integrated with Aluminum Solutions, we bring over a decade of specialized experience in interior glass fabrication and installation.
                                    </p>
                                    <p>
                                        Our systems are designed for acoustic performance, aesthetic appeal, and structural integrity.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2">
                                <div className="aspect-[4/3] bg-slate-100 rounded-xl overflow-hidden relative shadow-lg">
                                    <Image
                                        src="/images/generated/glass_office_partition_hero_1764346564712.png"
                                        alt="Glass Office Partition"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Applications */}
                <section className="py-20 bg-slate-50">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Versatile Applications</h2>
                            <p className="text-slate-600 max-w-2xl mx-auto">
                                From commercial offices to luxury residential upgrades, our glass walls fit any environment.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                                <div className="text-4xl mb-6">🏢</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Office Partitions</h3>
                                <p className="text-slate-600">
                                    Create meeting rooms and executive offices without blocking natural light. Foster collaboration while maintaining acoustic privacy.
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                                <div className="text-4xl mb-6">🏋️</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Home Gyms</h3>
                                <p className="text-slate-600">
                                    Enclose your workout area to contain noise and humidity while keeping the space open and inviting.
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                                <div className="text-4xl mb-6">🍷</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Wine Cellars</h3>
                                <p className="text-slate-600">
                                    Showcase your collection with temperature-controlled glass enclosures. Custom hardware to match your decor.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div className="order-2 md:order-1">
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="bg-slate-50 p-6 rounded-lg text-center">
                                        <div className="font-bold text-3xl text-brand-copper mb-2">10mm+</div>
                                        <div className="text-sm text-slate-600">Tempered Glass</div>
                                    </div>
                                    <div className="bg-slate-50 p-6 rounded-lg text-center">
                                        <div className="font-bold text-3xl text-brand-copper mb-2">STC</div>
                                        <div className="text-sm text-slate-600">Sound Rated</div>
                                    </div>
                                    <div className="bg-slate-50 p-6 rounded-lg text-center">
                                        <div className="font-bold text-3xl text-brand-copper mb-2">Custom</div>
                                        <div className="text-sm text-slate-600">Hardware Finishes</div>
                                    </div>
                                    <div className="bg-slate-50 p-6 rounded-lg text-center">
                                        <div className="font-bold text-3xl text-brand-copper mb-2">5yr</div>
                                        <div className="text-sm text-slate-600">Warranty</div>
                                    </div>
                                </div>
                            </div>
                            <div className="order-1 md:order-2">
                                <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">Why Choose Glass Walls?</h2>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <span className="text-brand-copper mr-3 mt-1">✓</span>
                                        <div>
                                            <strong className="block text-slate-900">Natural Light Flow</strong>
                                            <span className="text-slate-600">Maximize daylight penetration deep into the building, improving well-being and reducing energy costs.</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-brand-copper mr-3 mt-1">✓</span>
                                        <div>
                                            <strong className="block text-slate-900">Acoustic Privacy</strong>
                                            <span className="text-slate-600">High-quality seals and thick glass provide excellent sound insulation for private conversations.</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-brand-copper mr-3 mt-1">✓</span>
                                        <div>
                                            <strong className="block text-slate-900">Modern Aesthetics</strong>
                                            <span className="text-slate-600">Sleek, minimal hardware and floor-to-ceiling glass create a sophisticated, high-end look.</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-24 bg-brand-navy text-white text-center">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
                            Plan Your Glass Partition Project
                        </h2>
                        <p className="text-slate-300 max-w-2xl mx-auto mb-10 text-lg">
                            Send us your floor plan or dimensions for a quick preliminary quote.
                        </p>
                        <Link href="/contact" className="inline-block px-10 py-4 bg-brand-copper text-white font-bold tracking-wide hover:bg-orange-700 transition-colors shadow-lg rounded-sm">
                            Get a Quote
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
