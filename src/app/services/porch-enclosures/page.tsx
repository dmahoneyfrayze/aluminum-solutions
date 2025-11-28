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
                    backgroundImage="/images/migrated/manufacturing-glass.jpg"
                />

                {/* Benefits Section */}
                <section className="py-24">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                            <div>
                                <span className="text-brand-copper font-bold tracking-widest uppercase text-sm mb-2 block">
                                    Winter Protection
                                </span>
                                <h2 className="text-3xl font-serif font-bold text-brand-dark mb-6">
                                    Why Enclose Your Porch?
                                </h2>
                                <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                                    In the GTA, winter can be harsh. A glass porch enclosure acts as a buffer zone, keeping your front door dry and reducing heat loss when you enter or exit your home.
                                </p>
                                <ul className="space-y-4 mb-10">
                                    <li className="flex items-center">
                                        <span className="w-6 h-6 bg-brand-navy text-white rounded-full flex items-center justify-center mr-3 font-bold text-xs">✓</span>
                                        <span className="text-slate-700 font-medium">Keep Snow & Rain Out</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-6 h-6 bg-brand-navy text-white rounded-full flex items-center justify-center mr-3 font-bold text-xs">✓</span>
                                        <span className="text-slate-700 font-medium">Reduce Energy Bills (Air Lock)</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-6 h-6 bg-brand-navy text-white rounded-full flex items-center justify-center mr-3 font-bold text-xs">✓</span>
                                        <span className="text-slate-700 font-medium">Added Security & Package Protection</span>
                                    </li>
                                </ul>
                                <Link href="/contact" className="inline-block px-8 py-4 bg-brand-dark text-white font-bold rounded-sm hover:bg-brand-navy transition-colors">
                                    Request a Quote
                                </Link>
                            </div>
                            <div className="h-[500px] bg-slate-200 rounded-sm relative overflow-hidden shadow-2xl">
                                {/* Placeholder for Porch Image */}
                                <div className="absolute inset-0 bg-slate-300" />
                                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded shadow text-sm font-bold text-brand-dark">
                                    Newmarket Porch Enclosure
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="py-24 bg-slate-50">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-serif font-bold text-brand-dark mb-4">Designed for Canadian Winters</h2>
                            <p className="text-slate-600">Built tough to withstand freezing temperatures and heavy snow loads.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Feature 1 */}
                            <div className="bg-white p-8 rounded-sm shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                                <div className="text-4xl mb-4">🚪</div>
                                <h3 className="text-xl font-bold mb-2 text-brand-dark">Storm Doors</h3>
                                <p className="text-slate-600 text-sm">Heavy-duty aluminum storm doors with retractable screens for summer ventilation.</p>
                            </div>
                            {/* Feature 2 */}
                            <div className="bg-white p-8 rounded-sm shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                                <div className="text-4xl mb-4">🔒</div>
                                <h3 className="text-xl font-bold mb-2 text-brand-dark">Secure Locking</h3>
                                <p className="text-slate-600 text-sm">Deadbolt options available to keep your packages and front entrance secure.</p>
                            </div>
                            {/* Feature 3 */}
                            <div className="bg-white p-8 rounded-sm shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                                <div className="text-4xl mb-4">🎨</div>
                                <h3 className="text-xl font-bold mb-2 text-brand-dark">Custom Colors</h3>
                                <p className="text-slate-600 text-sm">Match your existing windows, doors, or brickwork with our custom powder coating.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Types of Enclosures - Enhanced Content */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">
                                Types of Glass Porch Enclosures
                            </h2>
                            <p className="text-slate-600 max-w-2xl mx-auto">
                                We offer versatile solutions tailored to how you want to use your space.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Three-Season Enclosures</h3>
                                <p className="text-slate-600 mb-4">
                                    A versatile and affordable solution for spring, summer, and fall. Perfect for enjoying the outdoors without rain, wind, or bugs.
                                </p>
                                <ul className="text-sm text-slate-500 space-y-2">
                                    <li>• Single-pane glass</li>
                                    <li>• Non-insulated frames</li>
                                    <li>• Maximum ventilation</li>
                                </ul>
                            </div>
                            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 relative overflow-hidden">
                                <div className="absolute top-0 right-0 bg-brand-copper text-white text-xs font-bold px-3 py-1 rounded-bl">POPULAR</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Four-Season Enclosures</h3>
                                <p className="text-slate-600 mb-4">
                                    Transform your porch into a true extension of your living space. Designed to be heated and cooled for year-round comfort.
                                </p>
                                <ul className="text-sm text-slate-500 space-y-2">
                                    <li>• Double-pane insulated glass (Low-E)</li>
                                    <li>• Thermally broken frames</li>
                                    <li>• Integrated HVAC options</li>
                                </ul>
                            </div>
                            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Solariums & Sunrooms</h3>
                                <p className="text-slate-600 mb-4">
                                    Stunning indoor-outdoor spaces designed to let in ample natural light. A seamless connection to nature from your home sanctuary.
                                </p>
                                <ul className="text-sm text-slate-500 space-y-2">
                                    <li>• Glass roof options</li>
                                    <li>• Floor-to-ceiling views</li>
                                    <li>• Premium architectural designs</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Design Considerations */}
                <section className="py-20 bg-slate-900 text-white">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col md:flex-row gap-16">
                            <div className="w-full md:w-1/2">
                                <h2 className="text-3xl font-serif font-bold mb-8">Design Considerations</h2>
                                <div className="space-y-8">
                                    <div>
                                        <h3 className="text-xl font-bold text-brand-copper mb-2">Size & Layout</h3>
                                        <p className="text-slate-300">
                                            Assess your available area. Do you want a small, cozy reading nook or a large entertaining space? We custom fabricate to fit your existing footprint perfectly.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-brand-copper mb-2">Glass Options</h3>
                                        <p className="text-slate-300">
                                            Choose clear glass for maximum view, or frosted/tinted glass for privacy and UV protection. We also offer Low-E coatings for better energy efficiency.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-brand-copper mb-2">Ventilation</h3>
                                        <p className="text-slate-300">
                                            Proper airflow is key. We incorporate sliding windows, screen systems, and even ceiling fan mounts to keep the space comfortable in summer.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2">
                                <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
                                    <h3 className="text-2xl font-bold mb-6">Why Hire a Professional?</h3>
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <span className="text-brand-copper mt-1">✓</span>
                                            <div>
                                                <strong>Expertise:</strong> We handle the complexities of structural support and weatherproofing that DIY kits miss.
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-brand-copper mt-1">✓</span>
                                            <div>
                                                <strong>Permits:</strong> We manage the entire permit process with your municipality if required.
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-brand-copper mt-1">✓</span>
                                            <div>
                                                <strong>Custom Fit:</strong> No "making it work." Every panel is cut to the millimeter for your home.
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="mt-8 pt-8 border-t border-slate-700">
                                        <p className="text-slate-400 italic">
                                            "Hiring professionals saves you valuable time and ensures a leak-free, durable result."
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-24 bg-brand-navy text-white text-center">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                            Get Ready for Winter
                        </h2>
                        <p className="text-slate-300 max-w-2xl mx-auto mb-10 text-lg">
                            Don't wait for the first snowfall. Schedule your porch enclosure installation today.
                        </p>
                        <Link href="/contact" className="inline-block px-10 py-4 bg-brand-copper text-white font-bold tracking-wide hover:bg-orange-700 transition-colors shadow-lg rounded-sm">
                            Get a Free Quote
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
