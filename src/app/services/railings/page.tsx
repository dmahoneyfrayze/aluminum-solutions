import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/ui/Hero";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Aluminum Railings Toronto | Custom Porch & Deck Railings",
    description: "High-quality aluminum railings for porches, balconies, and decks. Rust-free, maintenance-free, and professionally installed in Toronto & GTA.",
};

export default function RailingsPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow">
                <Hero
                    title="Custom Aluminum Railings"
                    subtitle="The perfect blend of safety, style, and durability. Maintenance-free solutions for your porch, deck, or balcony."
                    ctaText="Get a Quote"
                    ctaLink="/contact"
                    backgroundImage="/images/generated/railing_hero_detail_1764312850877.png"
                />

                {/* Overview */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-brand-copper font-bold tracking-widest uppercase text-sm mb-2 block">
                                Built for Canada
                            </span>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-brand-dark">
                                Why Choose Aluminum Railings?
                            </h2>
                            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                                <p>
                                    Unlike wood that rots or wrought iron that rusts, aluminum is the superior choice for Canadian homes. It withstands our harsh winters and humid summers without ever needing painting or staining.
                                </p>
                                <p>
                                    <strong>Factory Direct Quality:</strong> At Aluminum Solutions, we fabricate our railings locally to ensure the highest quality control. Our powder-coated finishes are designed to resist fading, chipping, and peeling for decades.
                                </p>
                            </div>
                            <div className="mt-10">
                                <Link href="/contact" className="text-brand-dark font-bold border-b-2 border-brand-dark pb-1 hover:text-brand-copper hover:border-brand-copper transition-colors text-lg">
                                    Schedule a Free Measurement &rarr;
                                </Link>
                            </div>
                        </div>
                        <div className="h-[500px] bg-slate-100 relative rounded-sm overflow-hidden shadow-2xl">
                            <Image
                                src="/images/generated/railing_hero_detail_1764312850877.png"
                                alt="High-quality aluminum railing installation"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* Styles / Options */}
                <section className="py-24 bg-slate-50">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-serif font-bold mb-12 text-center text-brand-dark">Popular Railing Styles</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Style 1 */}
                            <div className="bg-white p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                                <div className="h-48 bg-slate-200 mb-6 rounded-sm" />
                                <h3 className="text-xl font-bold mb-2 text-brand-dark">Standard Picket</h3>
                                <p className="text-slate-600 text-sm">Classic vertical pickets suitable for any architectural style. Safe, secure, and timeless.</p>
                            </div>
                            {/* Style 2 */}
                            <div className="bg-white p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                                <div className="h-48 bg-slate-200 mb-6 rounded-sm" />
                                <h3 className="text-xl font-bold mb-2 text-brand-dark">Glass Panel</h3>
                                <p className="text-slate-600 text-sm">Tempered glass panels with aluminum frames for an unobstructed view and wind protection.</p>
                            </div>
                            {/* Style 3 */}
                            <div className="bg-white p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                                <div className="h-48 bg-slate-200 mb-6 rounded-sm" />
                                <h3 className="text-xl font-bold mb-2 text-brand-dark">Double Top Rail</h3>
                                <p className="text-slate-600 text-sm">Adds an extra horizontal bar at the top for a unique, sophisticated look.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sticky Mobile CTA (Visible on mobile only) */}
                <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 z-40 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
                    <Link href="/contact" className="block w-full py-3 bg-brand-copper text-white text-center font-bold rounded shadow-lg">
                        Get a Free Quote
                    </Link>
                </div>

                {/* CTA Section */}
                <section className="py-24 bg-brand-navy text-white text-center">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
                            Upgrade Your Curb Appeal
                        </h2>
                        <p className="text-slate-300 max-w-2xl mx-auto mb-10 text-lg">
                            Don't settle for rotting wood or rusting iron. Invest in a lifetime solution.
                        </p>
                        <Link href="/contact" className="inline-block px-10 py-4 bg-brand-copper text-white font-bold tracking-wide hover:bg-orange-700 transition-colors shadow-lg rounded-sm">
                            Get a Free Estimate
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
