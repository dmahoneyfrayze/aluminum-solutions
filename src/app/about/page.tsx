"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/ui/Hero";
import Link from "next/link";
import Image from "next/image";
import ManufacturingHighlight from "@/components/ui/ManufacturingHighlight";

export default function AboutPage() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />

            <main className="flex-grow">
                {/* Hero Section */}
                <Hero
                    title="Craftsmanship. Integrity. Local Manufacturing."
                    subtitle="We are a family-owned manufacturer dedicated to elevating Toronto homes with premium aluminum and glass solutions."
                    ctaText="Visit Our Showroom"
                    ctaLink="/contact"
                    backgroundImage="/images/generated/railing_hero_detail_1764312850877.png"
                />

                {/* Main About Content */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-8">
                                About Global Aluminum Solutions
                            </h2>
                            <div className="prose prose-lg text-slate-600 space-y-6">
                                <p>
                                    Global Aluminum Solutions specializes in high-quality aluminum and glass products designed to enhance residential, commercial, and architectural spaces. From custom glass walls, railings, and showers to precision aluminum framing, panels, and enclosures, we blend craftsmanship with innovation to deliver stunning, durable results.
                                </p>
                                <p>
                                    As a trusted name in architectural aluminum and glass fabrication, our mission is simple — to create lasting value for our clients through superior products, reliable service, and collaborative partnerships. Every project, whether a custom home installation or a large-scale commercial development, receives the same attention to detail, precision engineering, and exceptional customer care.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
                                <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
                                    <h3 className="text-xl font-bold text-brand-dark mb-4">For Homeowners</h3>
                                    <p className="text-slate-600">
                                        We bring modern aesthetics, functional elegance, and long-term performance to every installation. Our team works closely with clients to design and install solutions that reflect their unique vision while maintaining the highest standards of durability and safety.
                                    </p>
                                </div>
                                <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
                                    <h3 className="text-xl font-bold text-brand-dark mb-4">For Contractors & Builders</h3>
                                    <p className="text-slate-600">
                                        We’re more than a supplier — we’re a preferred fabrication and installation partner. Our advanced materials, flexible production capabilities, and responsive support ensure that every project stays on time, on spec, and on budget.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-16 prose prose-lg text-slate-600">
                                <p>
                                    At Global Aluminum Solutions, we believe that great spaces start with collaboration, craftsmanship, and a shared commitment to excellence. Whether you’re building a dream home or managing a commercial property, our aluminum and glass experts are here to help you bring your vision to life.
                                </p>
                                <p className="font-bold text-brand-dark text-xl mt-8">
                                    Global Aluminum Solutions — Crafting beauty. Building strength. Shaping the future of aluminum and glass design.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Manufacturer Advantage */}
                <ManufacturingHighlight />

                {/* Founder's Message */}
                <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5 bg-[url('/images/pattern.png')] bg-repeat" />

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="flex flex-col md:flex-row items-center gap-16">
                            <div className="w-full md:w-1/2">
                                <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-2xl border-4 border-white/10">
                                    <Image
                                        src="/images/generated/founder_portrait_1764313198224.png"
                                        alt="Val Catreau"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="w-full md:w-1/2">
                                <h2 className="text-brand-copper font-bold tracking-widest uppercase text-sm mb-4">
                                    A Message from the Owner
                                </h2>
                                <h3 className="text-3xl md:text-4xl font-serif font-bold mb-8">
                                    Welcome to Aluminum Solutions
                                </h3>
                                <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
                                    <p>
                                        When we started this company, we noticed a gap in the market. Homeowners were forced to choose between cheap, flimsy kits from big-box stores or overpriced custom work that took months to arrive.
                                    </p>
                                    <p>
                                        We knew there was a better way. By manufacturing everything right here in the GTA, we control the quality, the timeline, and the cost.
                                    </p>
                                    <p>
                                        Our philosophy is simple: <strong className="text-white">No shortcuts.</strong> We use heavier gauge aluminum, thicker glass, and better hardware than our competitors. Why? Because we believe your home deserves a railing system that will look as good in 20 years as it does today.
                                    </p>
                                    <p>
                                        I invite you to visit our factory, meet our team, and see the difference for yourself.
                                    </p>
                                    <div className="pt-8">
                                        <div className="text-2xl font-serif font-bold text-white">Val Catreau</div>
                                        <div className="text-brand-copper">Owner, Aluminum Solutions</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team & Gallery Grid */}
                <section className="py-24 bg-slate-50">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
                                Our Team in Action
                            </h2>
                            <p className="text-slate-600 max-w-2xl mx-auto">
                                From the factory floor to the final installation, meet the people who make it happen.
                            </p>
                        </div>

                        {/* Masonry-style or irregular grid for visual interest */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">

                            {/* Card 1: Large - Staff Waving */}
                            <div className="lg:col-span-2 lg:row-span-2 relative group rounded-2xl overflow-hidden shadow-lg">
                                <Image
                                    src="/images/Staff-Waving.jpeg"
                                    alt="Global Aluminum Solutions Team"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                                    <h3 className="text-white text-2xl font-bold">Dedicated to Excellence</h3>
                                </div>
                            </div>

                            {/* Card 2: Work Vehicle */}
                            <div className="relative group rounded-2xl overflow-hidden shadow-lg">
                                <Image
                                    src="/images/work-vehicle.jpg"
                                    alt="Our Fleet"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            {/* Card 3: Close Up Level */}
                            <div className="relative group rounded-2xl overflow-hidden shadow-lg">
                                <Image
                                    src="/images/Close-Up-Level.jpeg"
                                    alt="Precision Installation"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-black/50 backdrop-blur-sm">
                                    <p className="text-white font-medium">Precision in every detail</p>
                                </div>
                            </div>

                            {/* Card 4: Nighttime glass */}
                            <div className="lg:col-span-2 relative group rounded-2xl overflow-hidden shadow-lg">
                                <Image
                                    src="/images/Nighttime-glass-with-aluminum.jpg"
                                    alt="Nighttime Glass Aesthetics"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            {/* Card 5: Glass with aluminum and privacy */}
                            <div className="relative group rounded-2xl overflow-hidden shadow-lg">
                                <Image
                                    src="/images/Glass-with-aluminum-and-privacy.jpg"
                                    alt="Process and Manufacturing"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-24 bg-white text-center">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-dark mb-6">
                            Start Your Project Today
                        </h2>
                        <Link href="/contact" className="inline-block px-10 py-4 bg-brand-navy text-white font-bold tracking-wide hover:bg-slate-800 transition-colors shadow-lg rounded-sm">
                            Get a Free Quote
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
