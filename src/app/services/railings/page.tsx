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

                {/* Aluminum Deck Railings Content */}
                <section className="py-24 bg-slate-50">
                    <div className="container mx-auto px-6">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-6">
                                Aluminum Deck Railings: Elegance & Durability
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                Your deck is more than just an outdoor space; it’s a sanctuary. Elevate its charm with our Aluminum Deck Railings, crafted from premium aluminum and tempered glass. These railings offer a seamless blend of style and functionality, allowing you to enjoy an uninterrupted view of your lush garden.
                            </p>
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100">
                                <h3 className="text-xl font-bold text-brand-dark mb-4">Weather Resistance</h3>
                                <p className="text-slate-600">
                                    Aluminum railings excel in weather resistance, enduring harsh Canadian climates without rusting or corroding. This resilience ensures lasting beauty and functionality.
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100">
                                <h3 className="text-xl font-bold text-brand-dark mb-4">Low Maintenance</h3>
                                <p className="text-slate-600">
                                    Enjoy the convenience of low maintenance. They require just simple cleaning, no repainting or pest control, saving time and effort.
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100">
                                <h3 className="text-xl font-bold text-brand-dark mb-4">Versatility</h3>
                                <p className="text-slate-600">
                                    Whether for modern or traditional aesthetics, they can be customized to fit any setting, including homes, offices, or cottages.
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100">
                                <h3 className="text-xl font-bold text-brand-dark mb-4">Increased Property Value</h3>
                                <p className="text-slate-600">
                                    Installing aluminum railings enhances your property’s market value. Their sleek design and durability appeal to potential buyers.
                                </p>
                            </div>
                        </div>

                        {/* Portfolio / Gallery Preview */}
                        <h3 className="text-2xl font-serif font-bold text-center text-brand-dark mb-10">Recent Projects</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="aspect-square relative rounded-lg overflow-hidden shadow-md group">
                                <Image
                                    src="/images/projects/deck-glass-railing-pergola.jpg"
                                    alt="Deck with glass railing and pergola"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="aspect-square relative rounded-lg overflow-hidden shadow-md group">
                                <Image
                                    src="/images/projects/deck-glass-railing-privacy.jpg"
                                    alt="Deck with privacy screen"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="aspect-square relative rounded-lg overflow-hidden shadow-md group">
                                <Image
                                    src="/images/projects/black-aluminum-railing-stone.png"
                                    alt="Black aluminum railing on stone steps"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
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
