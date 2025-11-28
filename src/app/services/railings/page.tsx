import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/ui/Hero";
import Link from "next/link";
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
                />

                {/* Overview */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-slate-900">
                                Why Choose Aluminum Railings?
                            </h2>
                            <div className="space-y-6 text-slate-600 leading-relaxed">
                                <p>
                                    Unlike wood that rots or wrought iron that rusts, aluminum is the superior choice for Canadian homes. It withstands our harsh winters and humid summers without ever needing painting or staining.
                                </p>
                                <p>
                                    At Aluminum Solutions, we fabricate our railings locally to ensure the highest quality control. Our powder-coated finishes are designed to resist fading, chipping, and peeling for decades.
                                </p>
                            </div>
                            <div className="mt-8">
                                <Link href="/contact" className="text-slate-900 font-bold border-b-2 border-slate-900 pb-1 hover:text-slate-700 hover:border-slate-700 transition-colors">
                                    Schedule a Free Measurement &rarr;
                                </Link>
                            </div>
                        </div>
                        <div className="h-96 bg-slate-100 relative rounded-lg overflow-hidden shadow-2xl">
                            {/* Image Placeholder */}
                            <div className="absolute inset-0 bg-slate-200" />
                            <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium">
                                [High-Quality Railing Image]
                            </div>
                        </div>
                    </div>
                </section>

                {/* Styles / Options */}
                <section className="py-20 bg-slate-50">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-serif font-bold mb-12 text-center text-slate-900">Popular Railing Styles</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Style 1 */}
                            <div className="bg-white p-6 shadow-md">
                                <div className="h-48 bg-slate-200 mb-6 rounded" />
                                <h3 className="text-xl font-bold mb-2">Standard Picket</h3>
                                <p className="text-slate-600 text-sm">Classic vertical pickets suitable for any architectural style. Safe, secure, and timeless.</p>
                            </div>
                            {/* Style 2 */}
                            <div className="bg-white p-6 shadow-md">
                                <div className="h-48 bg-slate-200 mb-6 rounded" />
                                <h3 className="text-xl font-bold mb-2">Glass Panel</h3>
                                <p className="text-slate-600 text-sm">Tempered glass panels with aluminum frames for an unobstructed view and wind protection.</p>
                            </div>
                            {/* Style 3 */}
                            <div className="bg-white p-6 shadow-md">
                                <div className="h-48 bg-slate-200 mb-6 rounded" />
                                <h3 className="text-xl font-bold mb-2">Double Top Rail</h3>
                                <p className="text-slate-600 text-sm">Adds an extra horizontal bar at the top for a unique, sophisticated look.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sticky Mobile CTA (Visible on mobile only) */}
                <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 z-40 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
                    <Link href="/contact" className="block w-full py-3 bg-slate-900 text-white text-center font-bold rounded shadow-lg">
                        Get a Free Quote
                    </Link>
                </div>

                {/* CTA Section */}
                <section className="py-24 bg-slate-900 text-white text-center">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
                            Upgrade Your Curb Appeal
                        </h2>
                        <p className="text-slate-300 max-w-2xl mx-auto mb-10 text-lg">
                            Don't settle for rotting wood or rusting iron. Invest in a lifetime solution.
                        </p>
                        <Link href="/contact" className="inline-block px-10 py-4 bg-white text-slate-900 font-bold tracking-wide hover:bg-slate-100 transition-colors shadow-lg">
                            Get a Free Estimate
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
