import Link from "next/link";

export default function ManufacturingHighlight() {
    return (
        <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
            {/* Background Pattern/Image Placeholder */}
            <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.png')] bg-repeat" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-2 block">
                            Factory Direct
                        </span>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-white">
                            We Don't Just Install.<br />
                            We Fabricate.
                        </h2>
                        <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                            Most contractors buy generic kits. We extrude, cut, and powder-coat our own aluminum profiles in our GTA facility. This gives us total control over quality, timelines, and customization.
                        </p>

                        <ul className="space-y-4 mb-10">
                            <li className="flex items-center">
                                <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3 text-xs">✓</span>
                                <span>In-House Aluminum Extrusion</span>
                            </li>
                            <li className="flex items-center">
                                <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3 text-xs">✓</span>
                                <span>Custom Glass Cutting & Polishing</span>
                            </li>
                            <li className="flex items-center">
                                <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3 text-xs">✓</span>
                                <span>Premium Powder-Coating Line</span>
                            </li>
                        </ul>

                        <Link href="/contact" className="inline-block px-8 py-4 bg-white text-slate-900 font-bold rounded hover:bg-slate-100 transition-colors">
                            Visit Our Showroom
                        </Link>
                    </div>

                    <div className="relative">
                        {/* Video/Image Placeholder */}
                        <div className="aspect-video bg-slate-800 rounded-lg shadow-2xl border border-slate-700 flex items-center justify-center relative overflow-hidden group">
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: "url('/images/migrated/manufacturing-glass.jpg')" }}
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                            {/* Play Button Mockup */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform cursor-pointer">
                                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1" />
                                </div>
                            </div>
                        </div>
                        {/* Floating Stats Card */}
                        <div className="absolute -bottom-6 -left-6 bg-blue-600 p-6 rounded-lg shadow-xl hidden md:block">
                            <p className="text-3xl font-bold">1-3 Weeks</p>
                            <p className="text-sm text-blue-100">Average Lead Time</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
