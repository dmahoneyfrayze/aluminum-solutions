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

                {/* Manufacturer Advantage - Comparison */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
                                The Manufacturer Advantage
                            </h2>
                            <p className="text-slate-600 max-w-2xl mx-auto">
                                Why smart builders buy direct. Eliminate the middleman markup and delays.
                            </p>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full max-w-4xl mx-auto text-left border-collapse">
                                <thead>
                                    <tr>
                                        <th className="p-4 border-b-2 border-slate-200 bg-slate-50 text-slate-500 font-bold uppercase text-sm">Feature</th>
                                        <th className="p-4 border-b-2 border-brand-navy bg-brand-navy/5 text-brand-navy font-bold text-lg">Aluminum Solutions (Direct)</th>
                                        <th className="p-4 border-b-2 border-slate-200 bg-slate-50 text-slate-400 font-medium">Distributors / Middlemen</th>
                                    </tr>
                                </thead>
                                <tbody className="text-slate-700">
                                    <tr>
                                        <td className="p-4 border-b border-slate-100 font-bold">Cost</td>
                                        <td className="p-4 border-b border-slate-100 text-green-700 font-bold">Factory Direct Pricing (No Markup)</td>
                                        <td className="p-4 border-b border-slate-100 text-slate-500">Retail Markup (20-40% Higher)</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 border-b border-slate-100 font-bold">Lead Time</td>
                                        <td className="p-4 border-b border-slate-100 text-green-700 font-bold">4-6 Weeks (Controlled Production)</td>
                                        <td className="p-4 border-b border-slate-100 text-slate-500">8-12 Weeks (Dependent on Suppliers)</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 border-b border-slate-100 font-bold">Customization</td>
                                        <td className="p-4 border-b border-slate-100 text-green-700 font-bold">Full Custom Fabrication</td>
                                        <td className="p-4 border-b border-slate-100 text-slate-500">Standard Sizes Only</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 border-b border-slate-100 font-bold">Accountability</td>
                                        <td className="p-4 border-b border-slate-100 text-green-700 font-bold">Single Point of Contact</td>
                                        <td className="p-4 border-b border-slate-100 text-slate-500">Blame Shifting</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Solutions by Role */}
                <section className="py-20 bg-slate-50">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-12 text-center">Tailored Solutions</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Developers */}
                            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
                                <div className="text-4xl mb-6">🏗️</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">For Developers</h3>
                                <p className="text-slate-600 mb-6">
                                    Maximize ROI with volume pricing and reliable scheduling. We understand the critical path of multi-unit developments and high-rise projects.
                                </p>
                                <ul className="text-sm text-slate-500 space-y-2">
                                    <li className="flex items-center">✓ Volume Discounts</li>
                                    <li className="flex items-center">✓ Phased Installation</li>
                                    <li className="flex items-center">✓ Bonded & Insured</li>
                                </ul>
                            </div>

                            {/* Architects */}
                            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
                                <div className="text-4xl mb-6">📐</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">For Architects</h3>
                                <p className="text-slate-600 mb-6">
                                    Realize your vision without compromise. We offer custom extrusions, precise engineering, and full CAD/BIM support to bring your designs to life.
                                </p>
                                <ul className="text-sm text-slate-500 space-y-2">
                                    <li className="flex items-center">✓ Custom Extrusions</li>
                                    <li className="flex items-center">✓ Engineering Stamped Drawings</li>
                                    <li className="flex items-center">✓ LEED Compliance Support</li>
                                </ul>
                            </div>

                            {/* Contractors */}
                            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
                                <div className="text-4xl mb-6">🔨</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">For Contractors</h3>
                                <p className="text-slate-600 mb-6">
                                    Install with confidence. Our pre-assembled panels and exact measurements mean less time on site and zero headaches.
                                </p>
                                <ul className="text-sm text-slate-500 space-y-2">
                                    <li className="flex items-center">✓ Pre-Assembled Panels</li>
                                    <li className="flex items-center">✓ Rush Orders Available</li>
                                    <li className="flex items-center">✓ Installation Support</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Project Capabilities */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-12 text-center">Project Capabilities</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="group relative h-80 rounded-lg overflow-hidden">
                                <Image
                                    src="/images/generated/glass_enclosure_project_1764312838961.png"
                                    alt="High-Rise Condos"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                                    <h3 className="text-white font-bold text-xl">High-Rise Condos</h3>
                                    <p className="text-slate-300 text-sm">Balcony railings & dividers</p>
                                </div>
                            </div>
                            <div className="group relative h-80 rounded-lg overflow-hidden">
                                <Image
                                    src="/images/generated/pool_fence_glass_detail_1764312810331.png"
                                    alt="Subdivisions"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                                    <h3 className="text-white font-bold text-xl">Subdivisions</h3>
                                    <p className="text-slate-300 text-sm">Volume porch railings</p>
                                </div>
                            </div>
                            <div className="group relative h-80 rounded-lg overflow-hidden">
                                <Image
                                    src="/images/generated/glass_office_partition_hero_1764346564712.png"
                                    alt="Commercial Interiors"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                                    <h3 className="text-white font-bold text-xl">Commercial Interiors</h3>
                                    <p className="text-slate-300 text-sm">Office partitions & gyms</p>
                                </div>
                            </div>
                            <div className="group relative h-80 rounded-lg overflow-hidden">
                                <Image
                                    src="/images/generated/railing_hero_detail_1764312850877.png"
                                    alt="Custom Luxury"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                                    <h3 className="text-white font-bold text-xl">Custom Luxury</h3>
                                    <p className="text-slate-300 text-sm">Bespoke architectural glass</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* B2B FAQ */}
                <section className="py-20 bg-slate-50">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-12 text-center">Builder FAQ</h2>
                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="font-bold text-lg text-slate-900 mb-2">What are your standard lead times?</h3>
                                <p className="text-slate-600">For standard aluminum profiles, we typically manufacture in 3-4 weeks. Custom glass or special order colors may take 5-6 weeks. We also offer a "Rush Service" for urgent deadlines.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="font-bold text-lg text-slate-900 mb-2">Do you offer credit terms?</h3>
                                <p className="text-slate-600">Yes, we offer Net 30 terms for approved commercial accounts. Please contact our finance department to submit a credit application.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="font-bold text-lg text-slate-900 mb-2">Do you provide installation?</h3>
                                <p className="text-slate-600">Absolutely. We have our own team of WSIB-insured, certified installers. We do not subcontract, ensuring quality control from factory to finish.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="font-bold text-lg text-slate-900 mb-2">Are your products code compliant?</h3>
                                <p className="text-slate-600">Yes, all our railing and glass systems are engineered to meet or exceed the Ontario Building Code (SB-13) and National Building Code requirements.</p>
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
