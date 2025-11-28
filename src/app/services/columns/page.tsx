import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/ui/Hero";
import Link from "next/link";
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
                    title="Aluminum Columns"
                    subtitle="Add elegance and structural integrity to your porch. The permanent solution to rotting wood columns."
                    ctaText="Get a Quote"
                    ctaLink="/contact"
                />

                {/* Overview */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-slate-900">
                                A Permanent Solution
                            </h2>
                            <div className="space-y-6 text-slate-600 leading-relaxed">
                                <p>
                                    Wood columns are prone to rot, insect damage, and peeling paint. Aluminum columns provide the same classic look but with zero maintenance.
                                </p>
                                <p>
                                    Our columns are load-bearing and come in a variety of styles, including round fluted, square recessed, and plain. They can be used to support porch roofs or simply as a decorative accent.
                                </p>
                            </div>
                            <div className="mt-8">
                                <Link href="/contact" className="text-slate-900 font-bold border-b-2 border-slate-900 pb-1 hover:text-slate-700 hover:border-slate-700 transition-colors">
                                    Get a Free Quote &rarr;
                                </Link>
                            </div>
                        </div>
                        <div className="h-96 bg-slate-100 relative rounded-lg overflow-hidden shadow-2xl">
                            {/* Image Placeholder */}
                            <div className="absolute inset-0 bg-slate-200" />
                            <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium">
                                [Aluminum Column Project Image]
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sticky Mobile CTA */}
                <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 z-40 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
                    <Link href="/contact" className="block w-full py-3 bg-slate-900 text-white text-center font-bold rounded shadow-lg">
                        Get a Free Quote
                    </Link>
                </div>

                {/* CTA Section */}
                <section className="py-24 bg-slate-900 text-white text-center">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
                            Upgrade Your Porch Columns
                        </h2>
                        <p className="text-slate-300 max-w-2xl mx-auto mb-10 text-lg">
                            Contact us today to discuss your project. We offer professional installation across the GTA.
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
