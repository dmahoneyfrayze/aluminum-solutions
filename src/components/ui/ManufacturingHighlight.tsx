import Link from "next/link";
import Image from "next/image";

export default function ManufacturingHighlight() {
    const differentiators = [
        {
            title: "Manufacturer-Installer",
            description: "No brokers, no resellers. You deal directly with the factory that makes your product.",
            icon: "🏭"
        },
        {
            title: "Architect-Grade Engineering",
            description: "Built to code, wind load, and snow load specs. No wobbling, no failures.",
            icon: "📐"
        },
        {
            title: "Premium Powder Coating",
            description: "20+ year finish. Doesn't peel, fade, or chalk like cheap imported kits.",
            icon: "✨"
        },
        {
            title: "Canadian-Tempered Glass",
            description: "CSA-approved, high-strength glass clarity. No dangerous offshore glass.",
            icon: "🍁"
        },
        {
            title: "4-6 Week Turnaround",
            description: "Because we control production, we don't wait for overseas shipping containers.",
            icon: "⏱️"
        },
        {
            title: "Cleanest Installations",
            description: "Professional crews. Zero visible shims. Precision hardware alignment.",
            icon: "👷"
        }
    ];

    return (
        <section className="py-24 bg-white overflow-hidden relative">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-brand-copper font-bold tracking-widest uppercase text-sm mb-2 block">
                        The Manufacturer Advantage
                    </span>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-slate-900">
                        Why Buy Direct from Aluminum Solutions?
                    </h2>
                    <p className="text-slate-600 text-lg max-w-3xl mx-auto">
                        Most railing companies are just installers who buy kits. We manufacture our own systems, giving you higher quality, faster timelines, and better warranties.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {differentiators.map((item, idx) => (
                        <div key={idx} className="bg-slate-50 p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                            <div className="text-4xl mb-6">{item.icon}</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                            <p className="text-slate-600">{item.description}</p>
                        </div>
                    ))}
                </div>

                {/* Visual Proof Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-slate-900 rounded-3xl p-8 md:p-12 overflow-hidden relative">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10 bg-brand-dark" />

                    <div className="relative z-10">
                        <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-6">
                            End-to-End Control = Zero Guesswork
                        </h3>
                        <ul className="space-y-4 mb-8 text-slate-300">
                            {[
                                "Single point of accountability",
                                "Full Warranty on Material AND Installation",
                                "No third-party delays",
                                "Aesthetic-first design approach"
                            ].map((li, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <span className="text-brand-copper font-bold text-xl">✓</span>
                                    {li}
                                </li>
                            ))}
                        </ul>
                        <Link href="/contact" className="inline-block px-8 py-4 bg-white text-slate-900 font-bold rounded hover:bg-slate-100 transition-colors">
                            Get Your Manufacturer Direct Quote
                        </Link>
                    </div>

                    <div className="relative h-64 md:h-80 rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                        <Image
                            src="/images/migrated/manufacturing-glass.jpg"
                            alt="Aluminum Solutions Factory"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm p-4 text-white text-center">
                            <p className="font-bold">Made in GTA. Installed by Experts.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
