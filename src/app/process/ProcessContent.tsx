"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/ui/Hero";
import Link from "next/link";
import Image from "next/image";

const steps = [
    {
        number: "01",
        title: "Consultation & Measurement",
        description: "We start by understanding your vision. Send us photos for a custom railing manufacturing process estimate, or book a free on-site visit anywhere in Toronto & the GTA where we take precise measurements.",
        image: "/images/generated/process_consultation_blueprint_1764350167105.png"
    },
    {
        number: "02",
        title: "In-House Design & Fabrication",
        description: "Once approved, your project moves to our local facility. We precision-cut high-grade aluminum and temper our own glass, ensuring better quality control than installers who outsource.",
        image: "/images/migrated/manufacturing-glass.jpg"
    },
    {
        number: "03",
        title: "Factory Quality Assurance",
        description: "Every piece undergoes rigorous inspection before leaving our factory. We check for powder coat consistency, glass clarity, and structural integrity to guarantee a flawless finish.",
        image: "/images/generated/process_measurement_laser_1764350203708.png"
    },
    {
        number: "04",
        title: "Certified Installation & Walkthrough",
        description: "Our licensed Toronto railing installation team typically completes projects in 1-2 days. We treat your property with respect, clean up thoroughly, and perform a final walkthrough with you.",
        image: "/images/generated/railing_hero_detail_1764312850877.webp"
    }
];

export default function ProcessContent() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />

            <main className="flex-grow">
                <Hero
                    title="Our Concierge Process"
                    subtitle="From the first call to the final polish, we handle every detail of your custom railing project."
                    ctaText="Start Your Project"
                    ctaLink="/contact"
                    backgroundImage="/images/generated/railing_hero_detail_1764312850877.webp"
                />

                {/* Intro */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
                            A White-Glove Experience from Quote to Completion
                        </h2>
                        <p className="text-slate-600 max-w-3xl mx-auto leading-relaxed text-lg">
                            Renovations can be stressful. We've designed our comprehensive custom railing manufacturing process to be the opposite. Clear communication, strict timelines, and respect for your home are the pillars of our service.
                        </p>
                    </div>
                </section>

                {/* The Steps */}
                <section className="py-10 pb-32">
                    <div className="container mx-auto px-6">
                        <div className="space-y-24 relative">
                            {/* Connecting Line (Desktop) */}
                            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2 z-0" />

                            {/* Step 1 */}
                            <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 md:flex-row-reverse">
                                <div className="w-full md:w-1/2">
                                    <div className="aspect-video bg-slate-100 rounded-xl shadow-lg relative overflow-hidden group">
                                        <Image
                                            src={steps[0].image}
                                            alt={steps[0].title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                </div>
                                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white border-4 border-brand-copper rounded-full items-center justify-center font-bold text-brand-dark shadow-lg z-20">
                                    {steps[0].number}
                                </div>
                                <div className="w-full md:w-1/2 text-center md:text-left">
                                    <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                        <span className="md:hidden inline-block px-3 py-1 bg-brand-copper text-white text-xs font-bold rounded-full mb-4">Step {steps[0].number}</span>
                                        <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">{steps[0].title}</h3>
                                        <p className="text-slate-600 leading-relaxed">{steps[0].description}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                                <div className="w-full md:w-1/2">
                                    <div className="aspect-video bg-slate-100 rounded-xl shadow-lg relative overflow-hidden group">
                                        <Image
                                            src={steps[1].image}
                                            alt={steps[1].title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                </div>
                                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white border-4 border-brand-copper rounded-full items-center justify-center font-bold text-brand-dark shadow-lg z-20">
                                    {steps[1].number}
                                </div>
                                <div className="w-full md:w-1/2 text-center md:text-left">
                                    <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                        <span className="md:hidden inline-block px-3 py-1 bg-brand-copper text-white text-xs font-bold rounded-full mb-4">Step {steps[1].number}</span>
                                        <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">{steps[1].title}</h3>
                                        <p className="text-slate-600 leading-relaxed">{steps[1].description}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Micro-CTA Checkpoint */}
                            <div className="relative z-20 max-w-2xl mx-auto bg-brand-navy/5 rounded-xl p-8 text-center border border-brand-navy/10">
                                <h4 className="font-bold text-brand-dark mb-2">Want a quick idea of cost before moving forward?</h4>
                                <p className="text-slate-600 mb-6 text-sm">Upload a photo of your space for a same-day rough estimate.</p>
                                <Link href="/contact" className="inline-block px-6 py-3 bg-white border-2 border-brand-copper text-brand-copper font-bold rounded hover:bg-brand-copper hover:text-white transition-colors">
                                    Get a Quick Estimate &rarr;
                                </Link>
                            </div>

                            {/* Why Our Process Is Different (Manufacturer Advantage) */}
                            <div className="relative z-20 max-w-4xl mx-auto">
                                <div className="bg-slate-900 text-white p-8 rounded-xl shadow-xl text-center">
                                    <h3 className="text-2xl font-serif font-bold mb-6">Why Our Process Is Different</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                        <div>
                                            <div className="text-3xl mb-2">🏭</div>
                                            <div className="font-bold text-sm">In-House Fabrication</div>
                                        </div>
                                        <div>
                                            <div className="text-3xl mb-2">🔥</div>
                                            <div className="font-bold text-sm">Local Glass Tempering</div>
                                        </div>
                                        <div>
                                            <div className="text-3xl mb-2">🚫</div>
                                            <div className="font-bold text-sm">No Middlemen</div>
                                        </div>
                                        <div>
                                            <div className="text-3xl mb-2">✅</div>
                                            <div className="font-bold text-sm">Full Quality Control</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 md:flex-row-reverse">
                                <div className="w-full md:w-1/2">
                                    <div className="aspect-video bg-slate-100 rounded-xl shadow-lg relative overflow-hidden group">
                                        <Image
                                            src={steps[2].image}
                                            alt={steps[2].title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                </div>
                                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white border-4 border-brand-copper rounded-full items-center justify-center font-bold text-brand-dark shadow-lg z-20">
                                    {steps[2].number}
                                </div>
                                <div className="w-full md:w-1/2 text-center md:text-left">
                                    <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                        <span className="md:hidden inline-block px-3 py-1 bg-brand-copper text-white text-xs font-bold rounded-full mb-4">Step {steps[2].number}</span>
                                        <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">{steps[2].title}</h3>
                                        <p className="text-slate-600 leading-relaxed">{steps[2].description}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Step 4 */}
                            <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                                <div className="w-full md:w-1/2">
                                    <div className="aspect-video bg-slate-100 rounded-xl shadow-lg relative overflow-hidden group">
                                        <Image
                                            src={steps[3].image}
                                            alt={steps[3].title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                </div>
                                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white border-4 border-brand-copper rounded-full items-center justify-center font-bold text-brand-dark shadow-lg z-20">
                                    {steps[3].number}
                                </div>
                                <div className="w-full md:w-1/2 text-center md:text-left">
                                    <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                        <span className="md:hidden inline-block px-3 py-1 bg-brand-copper text-white text-xs font-bold rounded-full mb-4">Step {steps[3].number}</span>
                                        <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">{steps[3].title}</h3>
                                        <p className="text-slate-600 leading-relaxed">{steps[3].description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-24 bg-slate-50">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">
                                Frequently Asked Questions
                            </h2>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="font-bold text-lg text-slate-900 mb-2">How long does the whole process take?</h3>
                                <p className="text-slate-600">Typically 4-6 weeks from the time of final measurement to installation. Custom colors or complex glass shapes may add 1-2 weeks.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="font-bold text-lg text-slate-900 mb-2">Do I need to be home for the installation?</h3>
                                <p className="text-slate-600">We recommend being home at the start to confirm details and at the end to inspect the work, but you don't need to hover. Our team is self-sufficient.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="font-bold text-lg text-slate-900 mb-2">What kind of warranty do you offer?</h3>
                                <p className="text-slate-600">We offer a <Link href="/resources#warranty" className="text-brand-copper hover:underline">lifetime warranty</Link> on our aluminum products against rust and defects, and a 5-year warranty on installation workmanship.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-24 bg-slate-50 text-center">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
                            Ready to Get Started?
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto mb-10 text-lg">
                            The first step is easy. Request your free quote today.
                        </p>
                        <Link href="/contact" className="inline-block px-10 py-4 bg-brand-navy text-white font-bold tracking-wide hover:bg-slate-800 transition-colors shadow-lg rounded-sm">
                            Get My Free Quote
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
