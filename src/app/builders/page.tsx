"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/ui/Hero";
import Link from "next/link";
import Image from "next/image";

export default function BuildersPage() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />

            <main className="flex-grow">
                <Hero
                    title="Partner with the Manufacturer"
                    subtitle="Reliable supply and installation for builders, architects, and developers. We control the timeline because we control the production."
                    ctaText="Request Builder Package"
                    ctaLink="#contact-form"
                    backgroundImage="/images/generated/railing_hero_detail_1764312850877.png"
                />

                {/* Value Props */}
                <section className="py-20">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
                                    🏭
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Factory Direct Pricing</h3>
                                <p className="text-slate-600">
                                    Cut out the middleman. We extrude, fabricate, and powder-coat in-house, offering you competitive margins.
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
                                    ⚡
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Guaranteed Timelines</h3>
                                <p className="text-slate-600">
                                    Our local manufacturing facility means we aren't waiting on shipments. We hit your closing dates.
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
                                    📐
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Code Compliance</h3>
                                <p className="text-slate-600">
                                    All systems are engineered to meet or exceed Ontario Building Code (SB-13) requirements. TSSA certified.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Resources Section */}
                <section className="py-20 bg-slate-50 border-y border-slate-200">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                            <div>
                                <h2 className="text-3xl font-serif font-bold text-slate-900 mb-2">Technical Resources</h2>
                                <p className="text-slate-600">Download specs, CAD files, and installation guides.</p>
                            </div>
                            <button className="mt-4 md:mt-0 px-6 py-3 bg-white border border-slate-300 font-bold text-slate-700 rounded hover:bg-slate-50 transition-colors">
                                Access Full Library &rarr;
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {["Aluminum Railing Specs", "Glass Shoe Detail (CAD)", "Wind Load Engineering", "Standard Colour Chart"].map((item, i) => (
                                <div key={i} className="bg-white p-6 rounded border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all cursor-pointer group">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-3xl text-slate-300 group-hover:text-blue-500 transition-colors">📄</span>
                                        <span className="text-xs font-bold bg-slate-100 text-slate-600 px-2 py-1 rounded">PDF</span>
                                    </div>
                                    <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{item}</h4>
                                    <p className="text-xs text-slate-400 mt-2">Updated: Nov 2025</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Commercial Gallery Preview */}
                <section className="py-20">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-12 text-center">Recent Commercial Projects</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="h-64 bg-slate-200 rounded-lg relative overflow-hidden group">
                                <Image
                                    src="/images/generated/glass_enclosure_project_1764312838961.png"
                                    alt="Condo Balconies"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="text-white font-bold">Condo Balconies - Etobicoke</span>
                                </div>
                            </div>
                            <div className="h-64 bg-slate-300 rounded-lg relative overflow-hidden group">
                                <Image
                                    src="/images/generated/railing_hero_detail_1764312850877.png"
                                    alt="Office Staircase"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="text-white font-bold">Office Staircase - Toronto</span>
                                </div>
                            </div>
                            <div className="h-64 bg-slate-400 rounded-lg relative overflow-hidden group">
                                <Image
                                    src="/images/generated/pool_fence_glass_detail_1764312810331.png"
                                    alt="Restaurant Patio"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="text-white font-bold">Restaurant Patio - Yorkville</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* B2B Contact Form */}
                <section id="contact-form" className="py-24 bg-slate-900 text-white">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                                    Let's Discuss Your Project
                                </h2>
                                <p className="text-slate-300 mb-8 leading-relaxed">
                                    Whether you need a bid for a multi-unit development or specs for a custom home, our commercial team is ready to assist.
                                </p>
                                <ul className="space-y-4 text-slate-300">
                                    <li className="flex items-center">✓ Priority Estimating Service</li>
                                    <li className="flex items-center">✓ Dedicated Project Manager</li>
                                    <li className="flex items-center">✓ Volume Pricing Available</li>
                                </ul>
                            </div>

                            <form className="bg-white p-8 rounded-lg text-slate-900">
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <label className="block text-sm font-bold mb-2">First Name</label>
                                        <input className="w-full p-3 border border-slate-300 rounded bg-slate-50" placeholder="John" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold mb-2">Last Name</label>
                                        <input className="w-full p-3 border border-slate-300 rounded bg-slate-50" placeholder="Smith" />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-bold mb-2">Company Name</label>
                                    <input className="w-full p-3 border border-slate-300 rounded bg-slate-50" placeholder="Acme Construction" />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-bold mb-2">Email</label>
                                    <input className="w-full p-3 border border-slate-300 rounded bg-slate-50" placeholder="john@acme.com" />
                                </div>
                                <div className="mb-6">
                                    <label className="block text-sm font-bold mb-2">Project Details</label>
                                    <textarea className="w-full p-3 border border-slate-300 rounded bg-slate-50" rows={3} placeholder="Tell us about the scope..." />
                                </div>
                                <button className="w-full py-4 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition-colors">
                                    Request Builder Package
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
