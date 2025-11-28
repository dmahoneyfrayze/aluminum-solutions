import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/ui/Hero";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Porch Enclosures Newmarket & GTA | Custom Glass Vestibules",
    description: "Protect your home with custom glass porch enclosures. Serving Newmarket, Brampton, and the GTA. Keep snow and cold out.",
};

export default function PorchEnclosuresPage() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />

            <main className="flex-grow">
                <Hero
                    title="Custom Glass Porch Enclosures"
                    subtitle="Protect your front entrance from snow, rain, and wind. Create a vestibule that adds value and comfort to your home."
                    ctaText="Get a Free Estimate"
                    ctaLink="/contact"
                />

                {/* Benefits Section */}
                <section className="py-20">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">
                                    Why Enclose Your Porch?
                                </h2>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    In the GTA, winter can be harsh. A glass porch enclosure acts as a buffer zone, keeping your front door dry and reducing heat loss when you enter or exit your home.
                                </p>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-center">
                                        <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3 font-bold">✓</span>
                                        <span className="text-slate-700">Keep Snow & Rain Out</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3 font-bold">✓</span>
                                        <span className="text-slate-700">Reduce Energy Bills (Air Lock)</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3 font-bold">✓</span>
                                        <span className="text-slate-700">Added Security & Package Protection</span>
                                    </li>
                                </ul>
                                <Link href="/contact" className="inline-block px-8 py-4 bg-slate-900 text-white font-bold rounded hover:bg-slate-800 transition-colors">
                                    Request a Quote
                                </Link>
                            </div>
                            <div className="h-96 bg-slate-200 rounded-lg relative overflow-hidden">
                                {/* Placeholder for Porch Image */}
                                <div className="absolute inset-0 bg-slate-300" />
                                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded shadow text-sm font-bold">
                                    Newmarket Porch Enclosure
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="py-20 bg-slate-50">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Designed for Canadian Winters</h2>
                            <p className="text-slate-600">Built tough to withstand freezing temperatures and heavy snow loads.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Feature 1 */}
                            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100">
                                <div className="text-4xl mb-4">🚪</div>
                                <h3 className="text-xl font-bold mb-2">Storm Doors</h3>
                                <p className="text-slate-600 text-sm">Heavy-duty aluminum storm doors with retractable screens for summer ventilation.</p>
                            </div>
                            {/* Feature 2 */}
                            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100">
                                <div className="text-4xl mb-4">🔒</div>
                                <h3 className="text-xl font-bold mb-2">Secure Locking</h3>
                                <p className="text-slate-600 text-sm">Deadbolt options available to keep your packages and front entrance secure.</p>
                            </div>
                            {/* Feature 3 */}
                            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100">
                                <div className="text-4xl mb-4">🎨</div>
                                <h3 className="text-xl font-bold mb-2">Custom Colors</h3>
                                <p className="text-slate-600 text-sm">Match your existing windows, doors, or brickwork with our custom powder coating.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-24 bg-slate-900 text-white text-center">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                            Get Ready for Winter
                        </h2>
                        <p className="text-slate-300 max-w-2xl mx-auto mb-10">
                            Don't wait for the first snowfall. Schedule your porch enclosure installation today.
                        </p>
                        <Link href="/contact" className="inline-block px-10 py-4 bg-white text-slate-900 font-bold tracking-wide hover:bg-slate-100 transition-colors shadow-lg">
                            Get a Free Quote
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
