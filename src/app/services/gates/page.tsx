import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/ui/Hero";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Custom Aluminum Gates Toronto | Driveway & Garden Gates",
    description: "Secure and stylish aluminum gates for driveways, gardens, and side entrances. Custom fabricated in Toronto.",
};

import Image from "next/image";

export default function GatesPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow">
                <Hero
                    title="Custom Aluminum Gates"
                    subtitle="Secure your property with style. Custom-fabricated gates that combine security with architectural beauty."
                    ctaText="Get a Quote"
                    ctaLink="/contact"
                    backgroundImage="/images/migrated/hero-commercial.jpg"
                />

                {/* Overview */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-brand-copper font-bold tracking-widest uppercase text-sm mb-2 block">
                                Security Meets Style
                            </span>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-brand-dark">
                                Custom Fabricated for Your Home
                            </h2>
                            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                                <p>
                                    Whether you need a side entrance gate for security or a decorative garden gate, our custom aluminum solutions are the perfect choice. We fabricate every gate to the exact dimensions of your opening.
                                </p>
                                <p>
                                    <strong>Built to Last:</strong> We use heavy-duty hinges and lockable latches to ensure your gate is secure. And because it's aluminum, it will never rust, sag, or warp like wood or steel gates often do.
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
                                src="/images/generated/custom_gate_modern_1764314098362.png"
                                alt="Custom Aluminum Driveway Gate"
                                fill
                                className="object-cover"
                            />
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
                            Secure Your Home Today
                        </h2>
                        <p className="text-slate-300 max-w-2xl mx-auto mb-10 text-lg">
                            Contact us for a free consultation on your custom gate project.
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
