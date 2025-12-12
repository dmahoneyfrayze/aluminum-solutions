import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/ui/Hero";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Careers at Aluminum Solutions | Join Our Team",
    description: "Join the leading aluminum railing and glass enclosure manufacturer in the GTA. We are hiring installers, fabricators, and sales professionals.",
};

export default function CareersPage() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />

            <main className="flex-grow">
                <Hero
                    title="Build Your Career With Us"
                    subtitle="Join a team dedicated to craftsmanship, safety, and innovation. We are always looking for talent to help us build the future of aluminum and glass."
                    ctaText="View Openings"
                    ctaLink="#openings"
                    backgroundImage="/images/migrated/manufacturing-glass.webp"
                />

                {/* Intro */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6 max-w-4xl text-center">
                        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">Why Work at Aluminum Solutions?</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-12">
                            We are not just a railing company; we are a manufacturing powerhouse. With our own facility in the GTA, we control every step of the process. This means stability, growth opportunities, and a pride in work that you won't find elsewhere.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                            <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                                <div className="text-3xl mb-4">🛡️</div>
                                <h3 className="font-bold text-slate-900 mb-2">Safety First</h3>
                                <p className="text-slate-600 text-sm">We adhere to strict safety protocols and provide all necessary training and equipment.</p>
                            </div>
                            <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                                <div className="text-3xl mb-4">📈</div>
                                <h3 className="font-bold text-slate-900 mb-2">Growth Potential</h3>
                                <p className="text-slate-600 text-sm">From apprentice to lead installer, we believe in promoting from within.</p>
                            </div>
                            <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                                <div className="text-3xl mb-4">💰</div>
                                <h3 className="font-bold text-slate-900 mb-2">Competitive Pay</h3>
                                <p className="text-slate-600 text-sm">We offer top-tier wages, performance bonuses, and benefits packages.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Open Positions */}
                <section id="openings" className="py-20 bg-slate-50">
                    <div className="container mx-auto px-6 max-w-5xl">
                        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-12 text-center">Current Openings</h2>

                        <div className="space-y-6">
                            {/* Job 1 */}
                            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:shadow-md transition-shadow">
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900">Lead Installer (Aluminum & Glass)</h3>
                                    <div className="flex gap-4 text-sm text-slate-500 mt-2">
                                        <span>📍 Toronto & GTA</span>
                                        <span>💼 Full-Time</span>
                                        <span>💲 $35 - $45/hr</span>
                                    </div>
                                    <p className="text-slate-600 mt-4 max-w-2xl">
                                        Experienced installer needed for residential and commercial projects. Must have 3+ years experience with glass railings and aluminum systems.
                                    </p>
                                </div>
                                <Link href="/contact?subject=Job Application - Lead Installer" className="px-6 py-3 bg-brand-navy text-white font-bold rounded hover:bg-slate-800 transition-colors whitespace-nowrap">
                                    Apply Now
                                </Link>
                            </div>

                            {/* Job 2 */}
                            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:shadow-md transition-shadow">
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900">Production Fabricator</h3>
                                    <div className="flex gap-4 text-sm text-slate-500 mt-2">
                                        <span>📍 Concord Factory</span>
                                        <span>💼 Full-Time</span>
                                        <span>💲 $25 - $32/hr</span>
                                    </div>
                                    <p className="text-slate-600 mt-4 max-w-2xl">
                                        Operate cutting and assembly machinery. Read blueprints and assemble aluminum railing panels. Training provided for the right candidate.
                                    </p>
                                </div>
                                <Link href="/contact?subject=Job Application - Fabricator" className="px-6 py-3 bg-brand-navy text-white font-bold rounded hover:bg-slate-800 transition-colors whitespace-nowrap">
                                    Apply Now
                                </Link>
                            </div>

                            {/* Job 3 */}
                            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:shadow-md transition-shadow">
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900">Sales Representative</h3>
                                    <div className="flex gap-4 text-sm text-slate-500 mt-2">
                                        <span>📍 Remote / On-Road</span>
                                        <span>💼 Commission Based</span>
                                        <span>💲 Uncapped</span>
                                    </div>
                                    <p className="text-slate-600 mt-4 max-w-2xl">
                                        Connect with builders and homeowners. Provide quotes and manage client relationships. Experience in construction sales preferred.
                                    </p>
                                </div>
                                <Link href="/contact?subject=Job Application - Sales Rep" className="px-6 py-3 bg-brand-navy text-white font-bold rounded hover:bg-slate-800 transition-colors whitespace-nowrap">
                                    Apply Now
                                </Link>
                            </div>
                        </div>

                        <div className="mt-12 text-center">
                            <p className="text-slate-600 mb-4">Don't see a role for you?</p>
                            <Link href="/contact?subject=General Application" className="text-brand-copper font-bold hover:underline">
                                Send us your resume anyway
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
