import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/ui/Hero";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Glass Porch Enclosures & Sunrooms Toronto | Aluminum Solutions",
    description: "Custom glass enclosures for porches, patios, and balconies. Extend your outdoor season with our wind-protection systems.",
};

export default function EnclosuresPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow">
                <Hero
                    title="Glass Porch Enclosures"
                    subtitle="Enjoy your outdoor space year-round. Protect your entrance from snow, wind, and rain without blocking the light."
                    ctaText="Get a Quote"
                    ctaLink="/contact"
                />

                {/* Overview */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-slate-900">
                                Extend Your Living Space
                            </h2>
                            <div className="space-y-6 text-slate-600 leading-relaxed">
                                <p>
                                    A glass enclosure transforms your front porch or patio into a functional, protected space. It creates a buffer zone that keeps your home warmer in the winter and cleaner year-round.
                                </p>
                                <p>
                                    Our systems are custom-designed to fit your existing architecture perfectly. We use high-quality tempered safety glass and heavy-duty aluminum frames that are built to last.
                                </p>
                            </div>
                            <div className="mt-8">
                                <Link href="/contact" className="text-slate-900 font-bold border-b-2 border-slate-900 pb-1 hover:text-slate-700 hover:border-slate-700 transition-colors">
                                    Request a Design Consultation &rarr;
                                </Link>
                            </div>
                        </div>
                        <div className="h-96 bg-slate-100 relative rounded-lg overflow-hidden shadow-2xl">
                            {/* Image Placeholder */}
                            <div className="absolute inset-0 bg-slate-200" />
                            <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium">
                                [Glass Enclosure Project Image]
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits Grid */}
                <section className="py-20 bg-slate-50">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-serif font-bold mb-12 text-center text-slate-900">Benefits of Enclosing Your Porch</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-8 shadow-lg">
                                <h3 className="text-xl font-bold mb-4">Energy Efficiency</h3>
                                <p className="text-slate-600">Creates an airlock that prevents cold drafts from entering your home when the front door is opened.</p>
                            </div>
                            <div className="bg-white p-8 shadow-lg">
                                <h3 className="text-xl font-bold mb-4">Weather Protection</h3>
                                <p className="text-slate-600">Keeps snow, rain, and leaves off your porch, reducing maintenance and shoveling.</p>
                            </div>
                            <div className="bg-white p-8 shadow-lg">
                                <h3 className="text-xl font-bold mb-4">Security</h3>
                                <p className="text-slate-600">Adds an extra layer of security to your main entrance with lockable storm doors.</p>
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
                            Ready to Enclose Your Porch?
                        </h2>
                        <p className="text-slate-300 max-w-2xl mx-auto mb-10 text-lg">
                            Contact us today for a free estimate. We serve Toronto, Mississauga, and the entire GTA.
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
