"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/ui/Hero";
import ReputationWidget from "@/components/ui/ReputationWidget";
import Link from "next/link";

export default function ReviewsPage() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />

            <main className="flex-grow">
                <Hero
                    title="Loved by Homeowners Across the GTA"
                    subtitle="We believe our work speaks for itself, but we prefer to let our happy clients do the talking."
                    ctaText="Join Our Happy Clients"
                    ctaLink="/contact"
                />

                {/* Intro Stats */}
                <section className="py-16 bg-white border-b border-slate-100">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
                            <div className="p-4">
                                <div className="text-5xl font-bold text-brand-copper mb-2">5.0</div>
                                <div className="text-slate-600 font-medium">Average Rating</div>
                            </div>
                            <div className="p-4">
                                <div className="text-5xl font-bold text-brand-navy mb-2">100%</div>
                                <div className="text-slate-600 font-medium">Satisfaction Guarantee</div>
                            </div>
                            <div className="p-4">
                                <div className="text-5xl font-bold text-brand-navy mb-2">5k+</div>
                                <div className="text-slate-600 font-medium">Successful Installs</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* The Widget */}
                <ReputationWidget />

                {/* Featured Stories - Static Content for SEO */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">
                                Featured Stories
                            </h2>
                            <p className="text-slate-600 max-w-2xl mx-auto">
                                Read detailed experiences from your neighbors.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
                                <div className="flex items-center gap-2 mb-4 text-brand-copper">
                                    ★★★★★
                                </div>
                                <p className="text-slate-700 italic mb-6">
                                    "Val and his team installed glass panel aluminum railings at my house. I was blown away by how professional and quick they were. Measurements were done Sunday morning and by Friday noon my railings were manufactured and installed. They were very reasonably priced and super professional. I would highly recommend!"
                                </p>
                                <div className="font-bold text-slate-900">- Milos Radicevic</div>
                            </div>

                            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
                                <div className="flex items-center gap-2 mb-4 text-brand-copper">
                                    ★★★★★
                                </div>
                                <p className="text-slate-700 italic mb-6">
                                    "I wasn't sure about getting glass railings for our deck as we have a young child... but my husband wanted glass railings. I'm so glad I was able to find this company... Vlad and his team worked and installed the deck rails efficiently this week. They arrived on time, worked until the rails were installed, cleaned up and left; they were so professional!"
                                </p>
                                <div className="font-bold text-slate-900">- Graham Diana</div>
                            </div>

                            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
                                <div className="flex items-center gap-2 mb-4 text-brand-copper">
                                    ★★★★★
                                </div>
                                <p className="text-slate-700 italic mb-6">
                                    "Exceptional experience working with Global Aluminum Solutions. Everything was done in such a professional manner and exceeded expectations."
                                </p>
                                <div className="font-bold text-slate-900">- Saleem Akhtar</div>
                            </div>

                            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
                                <div className="flex items-center gap-2 mb-4 text-brand-copper">
                                    ★★★★★
                                </div>
                                <p className="text-slate-700 italic mb-6">
                                    "Contacted Global Aluminum Railings to get a quote after reading the positive reviews... Spoke with Tatiana who was very professional and helpful... Once the railings were ready, she immediately contacted me and had Val Jr come to complete the installation. We are very happy with the railings for our deck."
                                </p>
                                <div className="font-bold text-slate-900">- NR BH737</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-24 bg-slate-50 text-center">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">
                            Your Home Could Be Next
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto mb-10">
                            Don't settle for average. Choose the team that your neighbors trust.
                        </p>
                        <Link href="/contact" className="inline-block px-10 py-4 bg-brand-navy text-white font-bold tracking-wide hover:bg-slate-800 transition-colors shadow-lg rounded-sm">
                            Get a Free Estimate
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
