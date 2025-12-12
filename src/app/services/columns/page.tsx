import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/ui/Hero";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Aluminum Columns Toronto | Structural & Decorative Columns",
    description: "Replace rotting wood columns with maintenance-free aluminum. Load-bearing and decorative options available in Toronto.",
};

export default function ColumnsPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow">
                <Hero
                    title="Structural Aluminum Columns"
                    subtitle="Add elegance and structural integrity to your porch. The permanent, load-bearing solution to rotting wood columns."
                    ctaText="Get a Quote"
                    ctaLink="/contact"
                    backgroundImage="/images/generated/railing_hero_detail_1764312850877.webp"
                />

                {/* Overview */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-brand-copper font-bold tracking-widest uppercase text-sm mb-2 block">
                                A Permanent Solution
                            </span>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-brand-dark">
                                Never Paint Your Columns Again
                            </h2>
                            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                                <p>
                                    Wood columns are prone to rot, insect damage, and peeling paint. Aluminum columns provide the same classic look but with zero maintenance. They are impervious to moisture and pests.
                                </p>
                                <p>
                                    <strong>Load-Bearing Strength:</strong> Our columns are not just decorative covers; they are fully structural, capable of supporting heavy porch roofs and balconies.
                                </p>
                            </div>
                            <div className="mt-10">
                                <Link href="/contact" className="text-brand-dark font-bold border-b-2 border-brand-dark pb-1 hover:text-brand-copper hover:border-brand-copper transition-colors text-lg">
                                    Get a Free Quote &rarr;
                                </Link>
                            </div>
                        </div>
                        <div className="h-[500px] bg-slate-100 relative rounded-sm overflow-hidden shadow-2xl">
                            <Image
                                src="/images/generated/railing_hero_detail_1764312850877.webp"
                                alt="Aluminum Column Project"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* Styles Grid */}
                <section className="py-24 bg-slate-50">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-serif font-bold mb-12 text-center text-brand-dark">Column Styles</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow text-center">
                                <div className="h-48 bg-slate-200 mb-6 rounded-sm mx-auto w-24" />
                                <h3 className="text-xl font-bold mb-2 text-brand-dark">Round Fluted</h3>
                                <p className="text-slate-600">Traditional elegance with vertical grooves. Perfect for colonial and victorian homes.</p>
                            </div>
                            <div className="bg-white p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow text-center">
                                <div className="h-48 bg-slate-200 mb-6 rounded-sm mx-auto w-24" />
                                <h3 className="text-xl font-bold mb-2 text-brand-dark">Square Recessed</h3>
                                <p className="text-slate-600">A clean, craftsman style look with recessed panels. Ideal for bungalows and modern homes.</p>
                            </div>
                            <div className="bg-white p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow text-center">
                                <div className="h-48 bg-slate-200 mb-6 rounded-sm mx-auto w-24" />
                                <h3 className="text-xl font-bold mb-2 text-brand-dark">Square Plain</h3>
                                <p className="text-slate-600">Minimalist and modern. Smooth surfaces for a sleek, contemporary appearance.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sticky Mobile CTA */}
                <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 z-40 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
                    <Link href="/contact" className="block w-full py-3 bg-brand-copper text-white text-center font-bold rounded shadow-lg">
                        Get a Free Quote
                    </Link>
                </div>

                {/* CTA Section */}
                <section className="py-24 bg-brand-navy text-white text-center">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
                            Upgrade Your Porch Columns
                        </h2>
                        <p className="text-slate-300 max-w-2xl mx-auto mb-10 text-lg">
                            Contact us today to discuss your project. We offer professional installation across the GTA.
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
