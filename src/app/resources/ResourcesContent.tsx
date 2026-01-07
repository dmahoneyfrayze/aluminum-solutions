"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/ui/Hero";
import Link from "next/link";
import LeadMagnetModal from "@/components/ui/LeadMagnetModal";

export default function ResourcesContent() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />

            <main className="flex-grow">
                <Hero
                    title="Technical Resources & Warranty"
                    subtitle="Everything you need to know about our materials, installation process, and lifetime guarantee."
                    ctaText="Download Specs PDF"
                    ctaLink="#"
                    backgroundImage="/images/generated/glass_enclosure_project_1764312838961.webp"
                // Override default link behavior to open modal
                />

                {/* Custom Button Overlay for Hero - A bit of a hack but effective without modifying Hero props deeply */}
                <div className="absolute top-[60vh] left-0 right-0 flex justify-center z-30 pointer-events-none">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="pointer-events-auto opacity-0 w-64 h-16 cursor-pointer"
                        aria-label="Download Specs"
                    />
                </div>

                {/* Warranty Section */}
                <section className="py-20" id="warranty">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Lifetime Limited Warranty</h2>
                                <p className="text-slate-600">
                                    We stand behind our manufacturing. Our products are engineered to last a lifetime with minimal maintenance.
                                </p>
                            </div>

                            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 shadow-sm">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-3">Aluminum Structure</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                            Aluminum Solutions warrants that our aluminum railings and columns will be free from defects in material and workmanship for the lifetime of the original purchaser. This includes structural integrity and freedom from rust or corrosion.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-3">Powder Coat Finish</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                            Our AAMA 2604 compliant powder coating is warranted against cracking, peeling, or blistering. We ensure your railings look as good in 20 years as they do today.
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-8 pt-8 border-t border-slate-200">
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">Installation Warranty</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        We provide a 2-year labor warranty on all installations, covering any issues related to workmanship or hardware.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Technical Specs */}
                <section className="py-20 bg-slate-900 text-white" id="specs">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-serif font-bold mb-4">Technical Specifications</h2>
                            <p className="text-slate-400">Architect-grade materials for superior performance.</p>

                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="mt-8 inline-block px-8 py-3 bg-brand-copper text-white font-bold rounded hover:bg-orange-700 transition-colors"
                            >
                                Download Full Spec Sheet (PDF)
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            <div className="bg-slate-800 p-8 rounded-lg border border-slate-700">
                                <div className="text-4xl mb-4">🏗️</div>
                                <h3 className="text-xl font-bold mb-2">Aluminum Alloy</h3>
                                <p className="text-slate-400 text-sm">6063-T5 & 6061-T6</p>
                                <p className="text-slate-500 text-xs mt-2">High strength-to-weight ratio, excellent corrosion resistance.</p>
                            </div>
                            <div className="bg-slate-800 p-8 rounded-lg border border-slate-700">
                                <div className="text-4xl mb-4">💎</div>
                                <h3 className="text-xl font-bold mb-2">Tempered Glass</h3>
                                <p className="text-slate-400 text-sm">10mm & 12mm Safety Glass</p>
                                <p className="text-slate-500 text-xs mt-2">Heat-treated for 4x strength. Polished edges standard.</p>
                            </div>
                            <div className="bg-slate-800 p-8 rounded-lg border border-slate-700">
                                <div className="text-4xl mb-4">🎨</div>
                                <h3 className="text-xl font-bold mb-2">Finish</h3>
                                <p className="text-slate-400 text-sm">Electrostatic Powder Coat</p>
                                <p className="text-slate-500 text-xs mt-2">Environmentally friendly, durable, and weather-resistant.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Link */}
                <section className="py-20 bg-slate-50 text-center">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">
                            Common Questions
                        </h2>
                        <p className="text-slate-600 mb-8">
                            Find answers to questions about permits, timelines, and maintenance.
                        </p>
                        <Link href="/faq" className="text-brand-navy font-bold underline hover:text-brand-copper">
                            View Full FAQ Page
                        </Link>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-24 bg-white text-center">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">
                            Have More Questions?
                        </h2>
                        <Link href="/contact" className="inline-block px-8 py-4 bg-slate-900 text-white font-bold rounded hover:bg-slate-800 transition-colors">
                            Contact Our Team
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />

            <LeadMagnetModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                resourceName="Technical Specifications PDF"
            />
        </div>
    );
}
