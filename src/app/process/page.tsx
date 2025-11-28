"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/ui/Hero";
import Link from "next/link";

import Image from "next/image";

export default function ProcessPage() {
    const steps = [
        {
            number: "01",
            title: "Consultation & Estimate",
            description: "It starts with a conversation. We discuss your vision, style preferences, and budget. You can visit our showroom or we can provide a rough estimate based on your photos and measurements.",
            icon: "💬",
            image: "/images/generated/process_consultation_blueprint_1764350167105.png"
        },
        {
            number: "02",
            title: "Precision Measurement",
            description: "Once you approve the estimate, our expert technician visits your site to take laser-precise measurements. We account for every slope, angle, and unique feature of your property.",
            icon: "📏",
            image: "/images/generated/process_measurement_laser_1764350203708.png"
        },
        {
            number: "03",
            title: "Custom Fabrication",
            description: "Your order goes to our GTA factory. We cut, drill, and powder coat your aluminum profiles to the exact specifications. Glass is tempered and polished. Quality control checks every piece.",
            icon: "🏭",
            image: "/images/generated/railing_hero_detail_1764312850877.png"
        },
        {
            number: "04",
            title: "Professional Installation",
            description: "Our in-house team arrives on the scheduled day. We protect your property, install efficiently, and clean up thoroughly. We don't leave until you are 100% satisfied.",
            icon: "✨",
            image: "/images/generated/team_member_1_installer_1764313211230.png"
        }
    ];

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />

            <main className="flex-grow">
                <Hero
                    title="Our Concierge Process"
                    subtitle="From the first call to the final polish, we handle every detail so you don't have to."
                    ctaText="Start Your Project"
                    ctaLink="/contact"
                    backgroundImage="/images/generated/railing_hero_detail_1764312850877.png"
                />

                {/* Intro */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">
                            A Seamless Experience from Start to Finish
                        </h2>
                        <p className="text-slate-600 max-w-3xl mx-auto leading-relaxed">
                            Renovations can be stressful. We've designed our process to be the opposite. Clear communication, strict timelines, and respect for your home are the pillars of our service.
                        </p>
                    </div>
                </section>

                {/* The Steps */}
                <section className="py-10 pb-32">
                    <div className="container mx-auto px-6">
                        <div className="space-y-24 relative">
                            {/* Connecting Line (Desktop) */}
                            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2 z-0" />

                            {steps.map((step, index) => (
                                <div key={index} className={`relative z-10 flex flex-col md:flex-row items-center gap-12 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                                    {/* Image Side */}
                                    <div className="w-full md:w-1/2">
                                        <div className="aspect-video bg-slate-100 rounded-xl shadow-lg relative overflow-hidden group">
                                            <Image
                                                src={step.image}
                                                alt={step.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                            />
                                        </div>
                                    </div>

                                    {/* Center Dot */}
                                    <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white border-4 border-brand-copper rounded-full items-center justify-center font-bold text-brand-dark shadow-lg z-20">
                                        {step.number}
                                    </div>

                                    {/* Text Side */}
                                    <div className="w-full md:w-1/2 text-center md:text-left">
                                        <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                            <span className="md:hidden inline-block px-3 py-1 bg-brand-copper text-white text-xs font-bold rounded-full mb-4">
                                                Step {step.number}
                                            </span>
                                            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">
                                                {step.title}
                                            </h3>
                                            <p className="text-slate-600 leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
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
