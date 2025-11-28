"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/ui/Hero";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />

            <main className="flex-grow">
                <Hero
                    title="Craftsmanship. Integrity. Local Manufacturing."
                    subtitle="We are a family-owned manufacturer dedicated to elevating Toronto homes with premium aluminum and glass solutions."
                    ctaText="Visit Our Showroom"
                    ctaLink="/contact"
                    backgroundImage="/images/generated/railing_hero_detail_1764312850877.png"
                />

                {/* Founder's Note - The "Personal" Touch */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col md:flex-row items-center gap-16">
                            <div className="w-full md:w-1/2 relative">
                                <div className="aspect-[4/5] bg-slate-100 rounded-lg overflow-hidden relative shadow-2xl">
                                    <Image
                                        src="/images/generated/founder_portrait_1764313198224.png"
                                        alt="Max Catreau, Owner of Aluminum Solutions"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="absolute -bottom-6 -right-6 bg-brand-navy text-white p-8 rounded-lg shadow-xl max-w-xs hidden md:block">
                                    <p className="font-serif italic text-lg">"We build every piece as if it were for our own home."</p>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2">
                                <h2 className="text-sm font-bold text-brand-copper uppercase tracking-widest mb-4">A Message from the Owner</h2>
                                <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-8">
                                    Building Trust, One Installation at a Time.
                                </h3>
                                <div className="prose prose-lg text-slate-600 space-y-6">
                                    <p>
                                        Welcome to Aluminum Solutions. When we started this company, we noticed a gap in the market. Homeowners were forced to choose between cheap, flimsy kits from big-box stores or overpriced custom work that took months to arrive.
                                    </p>
                                    <p>
                                        We knew there was a better way. By manufacturing everything right here in the GTA, we control the quality, the timeline, and the cost.
                                    </p>
                                    <p>
                                        Our philosophy is simple: <strong>No shortcuts.</strong> We use heavier gauge aluminum, thicker glass, and better hardware than our competitors. Why? Because we believe your home deserves a railing system that will look as good in 20 years as it does today.
                                    </p>
                                    <p>
                                        I invite you to visit our factory, meet our team, and see the difference for yourself.
                                    </p>
                                    <div className="pt-6">
                                        <p className="font-serif font-bold text-xl text-slate-900">Max Catreau</p>
                                        <p className="text-slate-500">Owner, Aluminum Solutions</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* The Factory Difference */}
                <section className="py-24 bg-slate-50">
                    <div className="container mx-auto px-6 text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
                            The Aluminum Solutions Standard
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Situated in the bustling heart of the Greater Toronto Area (GTA), we take immense pride in delivering top-notch aluminum and glass railing services.
                        </p>
                    </div>

                    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 text-3xl">
                                🏭
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Direct Manufacturer</h3>
                            <p className="text-slate-600">
                                We take the reins in directly manufacturing an extensive array of aluminum railings, glass showers, and office partitions. Our fabrication expertise enables us to craft systems that cater to virtually every homeowner’s need.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 text-3xl">
                                📍
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Your Local Specialists</h3>
                            <p className="text-slate-600">
                                Our service ambit covers Toronto, Mississauga, Brampton, Vaughan, and Markham. With a deep understanding of the GTA’s unique architectural styles and stringent building requirements, we position ourselves as your first choice.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 text-3xl">
                                ✨
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Custom Perfection</h3>
                            <p className="text-slate-600">
                                Every home is unique. We custom fabricate every panel and post to fit your specific layout perfectly. No "making it work" with standard sizes.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Team Section - "Meet the Experts" */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
                                Meet Your Installation Team
                            </h2>
                            <p className="text-slate-600 max-w-2xl mx-auto">
                                Our installers are full-time employees, not subcontractors. They are trained, insured, and dedicated to treating your home with respect.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            {/* Team Member 1 - Generated */}
                            <div className="group">
                                <div className="aspect-[3/4] bg-slate-100 rounded-lg overflow-hidden mb-4 relative shadow-md">
                                    <Image
                                        src="/images/generated/team_member_1_installer_1764313211230.png"
                                        alt="Expert Aluminum Railing Installer"
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <h3 className="font-bold text-slate-900">Lead Installer</h3>
                                <p className="text-sm text-slate-500">Senior Technician</p>
                            </div>

                            {/* Team Member 2 - Placeholder */}
                            <div className="group">
                                <div className="aspect-[3/4] bg-slate-100 rounded-lg overflow-hidden mb-4 relative shadow-md flex items-center justify-center">
                                    <div className="absolute inset-0 bg-slate-200 group-hover:scale-105 transition-transform duration-500" />
                                    <svg className="w-20 h-20 text-slate-300 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                    </svg>
                                </div>
                                <h3 className="font-bold text-slate-900">Project Manager</h3>
                                <p className="text-sm text-slate-500">Operations</p>
                            </div>

                            {/* Team Member 3 - Placeholder */}
                            <div className="group">
                                <div className="aspect-[3/4] bg-slate-100 rounded-lg overflow-hidden mb-4 relative shadow-md flex items-center justify-center">
                                    <div className="absolute inset-0 bg-slate-200 group-hover:scale-105 transition-transform duration-500" />
                                    <svg className="w-20 h-20 text-slate-300 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                    </svg>
                                </div>
                                <h3 className="font-bold text-slate-900">Master Fabricator</h3>
                                <p className="text-sm text-slate-500">Manufacturing</p>
                            </div>

                            {/* Team Member 4 - Placeholder */}
                            <div className="group">
                                <div className="aspect-[3/4] bg-slate-100 rounded-lg overflow-hidden mb-4 relative shadow-md flex items-center justify-center">
                                    <div className="absolute inset-0 bg-slate-200 group-hover:scale-105 transition-transform duration-500" />
                                    <svg className="w-20 h-20 text-slate-300 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                    </svg>
                                </div>
                                <h3 className="font-bold text-slate-900">Customer Support</h3>
                                <p className="text-sm text-slate-500">Service</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-24 bg-brand-navy text-white text-center">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
                            Ready to Work with the Best?
                        </h2>
                        <p className="text-slate-300 max-w-2xl mx-auto mb-10 text-lg">
                            Experience the Aluminum Solutions difference. Book your free consultation today.
                        </p>
                        <Link href="/contact" className="inline-block px-10 py-4 bg-brand-copper text-white font-bold tracking-wide hover:bg-orange-700 transition-colors shadow-lg rounded-sm">
                            Get My Free Quote
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
