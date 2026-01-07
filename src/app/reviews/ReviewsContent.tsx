"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/ui/Hero";
import ReputationWidget from "@/components/ui/ReputationWidget";
import Link from "next/link";

export default function ReviewsContent() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />

            <main className="flex-grow">
                <Hero
                    title="Loved by Homeowners Across the GTA"
                    subtitle="We believe our work speaks for itself, but we prefer to let our happy clients do the talking."
                    ctaText="Join Our Happy Clients"
                    ctaLink="/contact"
                    backgroundImage="/images/projects/glass-railing-stairs-hero.jpg"
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
                            {/* Review 1 */}
                            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
                                <div className="flex items-center gap-2 mb-4 text-brand-copper">★★★★★</div>
                                <p className="text-slate-700 italic mb-6">
                                    "Val and his team installed glass panel aluminum railings at my house. I was blown away by how professional and quick they were. Measurements were done Sunday morning and by Friday noon my railings were manufactured and installed. They were very reasonably priced and super professional. I would highly recommend!"
                                </p>
                                <div className="font-bold text-slate-900">- Milos Radicevic</div>
                                <div className="text-xs text-slate-400 mt-1">2 years ago</div>
                            </div>

                            {/* Review 2 */}
                            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
                                <div className="flex items-center gap-2 mb-4 text-brand-copper">★★★★★</div>
                                <p className="text-slate-700 italic mb-6">
                                    "We would highly recommend this company based on our experience. I wasn't sure about getting glass railings for our deck as we have a young child... Vlad and his team worked and installed the deck rails efficiently this week. They arrived on time, worked until the rails were installed, cleaned up and left; they were so professional! ... Global Aluminum Solutions Inc. was professional, efficient and had competitive pricing! Highly recommend!"
                                </p>
                                <div className="font-bold text-slate-900">- Graham Diana</div>
                                <div className="text-xs text-slate-400 mt-1">2 years ago</div>
                            </div>

                            {/* Review 3 */}
                            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
                                <div className="flex items-center gap-2 mb-4 text-brand-copper">★★★★★</div>
                                <p className="text-slate-700 italic mb-6">
                                    "In 2017 had my railing on the veranda put up ..great job and from the advice of the man the right colour was chosen..I think I have already did a review ..but looking forward in the future to call them again .."
                                </p>
                                <div className="font-bold text-slate-900">- Lorna Zancai</div>
                                <div className="text-xs text-slate-400 mt-1">2 years ago</div>
                            </div>

                            {/* Review 4 */}
                            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
                                <div className="flex items-center gap-2 mb-4 text-brand-copper">★★★★★</div>
                                <p className="text-slate-700 italic mb-6">
                                    "Exceptional experience working with Global Aluminum Solutions. Everything was done in such a professional manner and exceeded expectations."
                                </p>
                                <div className="font-bold text-slate-900">- Saleem Akhtar</div>
                                <div className="text-xs text-slate-400 mt-1">3 years ago</div>
                            </div>

                            {/* Review 5 */}
                            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
                                <div className="flex items-center gap-2 mb-4 text-brand-copper">★★★★★</div>
                                <p className="text-slate-700 italic mb-6">
                                    "As others have noted, this is a wonderful company to work with. Highly recommended. Response was quick, service, deliver and instal was faster than expected and excellent quality. I am thrilled with the new railings on my deck and stairs. It all looks fabulous."
                                </p>
                                <div className="font-bold text-slate-900">- Violetta Ilkiw</div>
                                <div className="text-xs text-slate-400 mt-1">3 years ago</div>
                            </div>

                            {/* Review 6 */}
                            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
                                <div className="flex items-center gap-2 mb-4 text-brand-copper">★★★★★</div>
                                <p className="text-slate-700 italic mb-6">
                                    "This company and it's employees are No1 in my book such an amazing job so professional and so great to deal with the installation was perfection"
                                </p>
                                <div className="font-bold text-slate-900">- Chris Seifert</div>
                                <div className="text-xs text-slate-400 mt-1">3 years ago</div>
                            </div>

                            {/* Review 7 */}
                            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
                                <div className="flex items-center gap-2 mb-4 text-brand-copper">★★★★★</div>
                                <p className="text-slate-700 italic mb-6">
                                    "Contacted Global Aluminum Railings to get a quote... Spoke with Tatiana who was very professional and helpful... Once the railings were ready, she immediately contacted me and had Val Jr come to complete the installation. We are very happy with the railings for our deck. All in all it was a good experience working with Tatiana and her team."
                                </p>
                                <div className="font-bold text-slate-900">- NR BH737</div>
                                <div className="text-xs text-slate-400 mt-1">4 years ago</div>
                            </div>

                            {/* Review 8 */}
                            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
                                <div className="flex items-center gap-2 mb-4 text-brand-copper">★★★★★</div>
                                <p className="text-slate-700 italic mb-6">
                                    "Global Aluminum was very professional and expedient. From their quotation accuracy, to on-site measure and final installation, time spanned less thank 2 weeks. Most importantly amazing quality and value. Highly recommend using Global Aluminium far any of your projects"
                                </p>
                                <div className="font-bold text-slate-900">- Steve Sottile</div>
                                <div className="text-xs text-slate-400 mt-1">4 years ago</div>
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
