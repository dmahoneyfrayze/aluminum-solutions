"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/ui/Hero";
import Link from "next/link";

export default function ResourcesPage() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />

            <main className="flex-grow">
                <Hero
                    title="Technical Resources & Warranty"
                    subtitle="Everything you need to know about our materials, installation process, and lifetime guarantee."
                    ctaText="Download Specs PDF"
                    ctaLink="#"
                />

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

                {/* FAQ */}
                <section className="py-20" id="faq">
                    <div className="container mx-auto px-6 max-w-3xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                        </div>

                        <div className="space-y-6">
                            <div className="border-b border-slate-200 pb-6">
                                <h3 className="text-lg font-bold text-slate-900 mb-2">Do I need a building permit?</h3>
                                <p className="text-slate-600">
                                    For most standard railing replacements, a permit is not required. However, for new decks or structural changes, one may be needed. We can assist with providing engineering drawings if your municipality requires them.
                                </p>
                            </div>
                            <div className="border-b border-slate-200 pb-6">
                                <h3 className="text-lg font-bold text-slate-900 mb-2">What is the typical lead time?</h3>
                                <p className="text-slate-600">
                                    Since we manufacture in-house, our typical lead time is 3-5 weeks from final measurements to installation. Custom glass or special colors may take slightly longer.
                                </p>
                            </div>
                            <div className="border-b border-slate-200 pb-6">
                                <h3 className="text-lg font-bold text-slate-900 mb-2">How do I clean my glass railings?</h3>
                                <p className="text-slate-600">
                                    We recommend using a mixture of water and mild dish soap with a soft cloth or squeegee. Avoid abrasive cleaners or pads that could scratch the glass or aluminum finish.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-24 bg-slate-50 text-center">
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
        </div>
    );
}
