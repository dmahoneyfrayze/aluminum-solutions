

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/ui/Hero";
import Link from "next/link";
import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Custom Frameless Glass Showers Toronto | Luxury Bathroom Enclosures",
    description: "Premium custom glass shower enclosures, steam showers, and tub shields. Measured and installed by experts in Toronto. 10mm tempered safety glass.",
};

export default function ShowersPage() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />

            <main className="flex-grow">
                <Hero
                    title="Custom Glass Showers & Interiors Toronto"
                    subtitle="Bespoke frameless showers, glass partitions, and custom mirrors. Precision-measured and professionally installed."
                    ctaText="Get a Free Estimate"
                    ctaLink="/contact"
                    backgroundImage="/images/generated/frameless_glass_shower_modern_1764347088164.png"
                />

                {/* Trust Signals Strip */}
                <section className="py-12 bg-slate-50 border-b border-slate-200">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                            <div className="flex flex-col items-center">
                                <span className="text-3xl mb-2">💎</span>
                                <span className="font-bold text-brand-dark">10mm Safety Glass</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="text-3xl mb-2">📏</span>
                                <span className="font-bold text-brand-dark">Laser Precision</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="text-3xl mb-2">🛡️</span>
                                <span className="font-bold text-brand-dark">Leak-Proof Guarantee</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="text-3xl mb-2">⏱️</span>
                                <span className="font-bold text-brand-dark">Fast Turnaround</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Product Silos */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-6">
                                Complete Interior Glass Solutions
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                We don't just do showers. We transform your entire home with custom architectural glass.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {/* Frameless Showers */}
                            <div className="group">
                                <div className="aspect-[4/5] relative rounded-lg overflow-hidden shadow-lg mb-6">
                                    <Image
                                        src="/images/generated/frameless_glass_shower_modern_1764347088164.png"
                                        alt="Custom Frameless Glass Shower Toronto"
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <h3 className="text-2xl font-bold text-brand-dark mb-3">Frameless Showers</h3>
                                <p className="text-slate-600 mb-4">
                                    From inline sliders to corner units and steam enclosures. We use heavy 10mm tempered glass and premium hardware for a spa-like feel.
                                </p>
                                <ul className="text-sm text-slate-500 space-y-2 mb-6">
                                    <li>✓ Custom sizing for any layout</li>
                                    <li>✓ Steam-tight sealing options</li>
                                    <li>✓ Matte Black, Gold, & Chrome hardware</li>
                                </ul>
                                <Link href="/contact" className="text-brand-copper font-bold hover:underline">
                                    Design Your Shower &rarr;
                                </Link>
                            </div>

                            {/* Glass Walls & Partitions */}
                            <div className="group">
                                <div className="aspect-[4/5] relative rounded-lg overflow-hidden shadow-lg mb-6">
                                    <Image
                                        src="/images/generated/glass_office_partition_hero_1764346564712.png"
                                        alt="Glass Office Partitions & Gym Walls"
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <h3 className="text-2xl font-bold text-brand-dark mb-3">Glass Walls & Partitions</h3>
                                <p className="text-slate-600 mb-4">
                                    Define your space without blocking light. Perfect for home offices, wine cellars, and home gyms.
                                </p>
                                <ul className="text-sm text-slate-500 space-y-2 mb-6">
                                    <li>✓ Acoustic sound dampening</li>
                                    <li>✓ Floor-to-ceiling installation</li>
                                    <li>✓ Sliding or pivot door integration</li>
                                </ul>
                                <Link href="/services/glass-walls" className="text-brand-copper font-bold hover:underline">
                                    Explore Glass Walls &rarr;
                                </Link>
                            </div>

                            {/* Custom Mirrors */}
                            <div className="group">
                                <div className="aspect-[4/5] relative rounded-lg overflow-hidden shadow-lg mb-6">
                                    <Image
                                        src="/images/generated/glass_enclosure_project_1764312838961.png"
                                        alt="Custom Wall Mirrors"
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <h3 className="text-2xl font-bold text-brand-dark mb-3">Custom Mirrors</h3>
                                <p className="text-slate-600 mb-4">
                                    The perfect finishing touch. Wall-to-wall vanity mirrors, gym walls, and decorative feature mirrors cut to any shape.
                                </p>
                                <ul className="text-sm text-slate-500 space-y-2 mb-6">
                                    <li>✓ Polished or beveled edges</li>
                                    <li>✓ LED backlight integration ready</li>
                                    <li>✓ Safety backing available</li>
                                </ul>
                                <Link href="/contact" className="text-brand-copper font-bold hover:underline">
                                    Get a Mirror Quote &rarr;
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* The Custom Process */}
                <section className="py-24 bg-slate-900 text-white">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col md:flex-row items-center gap-16">
                            <div className="w-full md:w-1/2">
                                <h2 className="text-3xl font-serif font-bold mb-6">The Custom Fit Difference</h2>
                                <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                                    Big box store kits never fit quite right. Our process ensures a watertight seal and a flawless finish that adds real value to your home.
                                </p>
                                <div className="space-y-8">
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-brand-copper rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">1</div>
                                        <div>
                                            <h3 className="font-bold text-xl mb-2">Laser Measurement</h3>
                                            <p className="text-slate-400">We measure your finished tile to the millimeter, accounting for any walls that aren't perfectly plumb.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-brand-copper rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">2</div>
                                        <div>
                                            <h3 className="font-bold text-xl mb-2">CNC Fabrication</h3>
                                            <p className="text-slate-400">Your glass is cut and tempered specifically for your opening. No shims, no gaps.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-brand-copper rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">3</div>
                                        <div>
                                            <h3 className="font-bold text-xl mb-2">Expert Installation</h3>
                                            <p className="text-slate-400">Our specialists install your glass using mildew-resistant silicone and heavy-duty hardware.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2">
                                <div className="relative h-[600px] rounded-lg overflow-hidden shadow-2xl border-4 border-slate-800">
                                    <Image
                                        src="/images/projects/frameless-shower-black-hardware.jpg"
                                        alt="Custom Shower Installation Process"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Popular Configurations (Updated Grid) */}
                <section className="py-24 bg-slate-50">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-serif font-bold text-brand-dark mb-4">Popular Configurations</h2>
                            <p className="text-slate-600">From simple doors to complex steam showers, we do it all.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                            {/* Style 4 */}
                            <div className="bg-white p-6 rounded-sm shadow-sm hover:shadow-md transition-shadow">
                                <div className="h-48 bg-slate-200 mb-6 rounded-sm relative overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center text-4xl">🧖</div>
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-brand-dark">Steam Showers</h3>
                                <p className="text-slate-600 text-sm mb-4">Floor-to-ceiling glass with operable transoms for steam control.</p>
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
