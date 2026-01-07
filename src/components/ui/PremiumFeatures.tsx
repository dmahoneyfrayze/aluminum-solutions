import React from 'react';

export default function PremiumFeatures() {
    const features = [
        {
            title: "Modern Sleek Lines",
            description: "Square posts and clean geometry for a contemporary look. No dated round finishes.",
            icon: "📐"
        },
        {
            title: "Color-Matched Metal Caps",
            description: "We use powder-coated aluminum caps, not cheap plastic that fades and cracks.",
            icon: "🎨"
        },
        {
            title: "Concealed Fasteners",
            description: "Bottom channels cover screws for a seamless finish. One complete, unified unit.",
            icon: "🔩"
        },
        {
            title: "Stainless Steel Hardware",
            description: "All screws and mounting hardware are high-grade stainless steel to prevent rust.",
            icon: "🛡️"
        },
        {
            title: "Over-Engineered Strength",
            description: "Posts and channels that exceed code requirements for future-proof safety.",
            icon: "💪"
        }
    ];

    return (
        <section className="py-24 bg-slate-900 text-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-brand-copper font-bold tracking-widest uppercase text-sm mb-2 block">
                        The Difference is in the Details
                    </span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                        Why Our Railings Look (and Last) Better
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        We don't cut corners. While others use plastic caps and visible screws, we focus on the fine details that create a truly premium finish.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {features.map((feature, idx) => (
                        <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-colors group">
                            <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300 transform origin-left">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-slate-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}

                    {/* Closing 'Why Buy' Card to make grid even/feature complete */}
                    <div className="bg-brand-copper/10 border border-brand-copper/30 p-8 rounded-xl flex flex-col justify-center items-center text-center">
                        <h3 className="text-xl font-bold text-brand-copper mb-3">
                            See the Difference
                        </h3>
                        <p className="text-slate-300 mb-6">
                            Visit our showroom to touch and feel the quality yourself.
                        </p>
                        <a href="/contact" className="inline-block px-6 py-2 bg-brand-copper text-white font-bold rounded hover:bg-orange-700 transition-colors text-sm uppercase tracking-wide">
                            Book Showroom Visit
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
