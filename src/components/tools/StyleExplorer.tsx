"use client";

import { useState } from "react";
import Image from "next/image";

const styles = [
    {
        id: "aluminum",
        name: "Aluminum Railings",
        description: "Classic durability. Maintenance-free aluminum pickets in various colors.",
        image: "/images/projects/aluminum-railing-pickets-black.webp",
        features: ["Cost Effective", "Traditional Look", "Airflow"]
    },
    {
        id: "glass-railings",
        name: "Glass Railings",
        description: "Contemporary safety. Frameless or with top rail for a sleek look.",
        image: "/images/Glass-Railing.JPG",
        features: ["Unobstructed Views", "Modern Aesthetic", "Pool Safe"]
    },
    {
        id: "enclosures",
        name: "Glass Enclosures",
        description: "Wind protection & views. Perfect for porches and sunrooms.",
        image: "/images/porch-glass-enclosures2.jpg",
        features: ["3-Season Use", "Wind Protection", "Custom Fit"]
    },
    {
        id: "showers",
        name: "Showers",
        description: "Spa-like luxury. Custom frameless glass shower enclosures.",
        image: "/images/projects/frameless-glass-shower-custom.jpg",
        features: ["Easy Clean", "Luxury Feel", "Custom Hardware"]
    }
];

export default function StyleExplorer() {
    const [activeStyle, setActiveStyle] = useState(styles[0]);

    return (
        <section className="py-24 bg-white" id="style-explorer">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
                        Find Your Perfect Style
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Explore our most popular railing systems. Click to preview.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    {/* Controls */}
                    <div className="w-full lg:w-1/3 space-y-4">
                        {styles.map((style) => (
                            <button
                                key={style.id}
                                onClick={() => setActiveStyle(style)}
                                className={`w-full text-left p-6 rounded-xl transition-all duration-300 border group relative overflow-hidden ${activeStyle.id === style.id
                                    ? "bg-brand-navy text-white border-brand-navy shadow-lg scale-105 z-10"
                                    : "bg-white text-slate-600 border-slate-200 hover:border-brand-copper hover:shadow-md"
                                    }`}
                                aria-pressed={activeStyle.id === style.id}
                            >
                                <div className="relative z-10">
                                    <h3 className={`font-bold text-lg mb-1 ${activeStyle.id === style.id ? "text-white" : "text-slate-900"}`}>
                                        {style.name}
                                    </h3>
                                    <p className={`text-sm ${activeStyle.id === style.id ? "text-slate-300" : "text-slate-500"}`}>
                                        {style.description}
                                    </p>
                                </div>
                                {activeStyle.id === style.id && (
                                    <div className="absolute inset-0 bg-gradient-to-r from-brand-navy to-slate-800 opacity-100" />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Preview */}
                    <div className="w-full lg:w-2/3 sticky top-24">
                        <div className="relative aspect-[16/9] bg-slate-100 rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
                            <Image
                                key={activeStyle.id}
                                src={activeStyle.image}
                                alt={activeStyle.name}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                priority
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                            {/* Overlay Info */}
                            <div className="absolute bottom-0 left-0 right-0 p-8">
                                <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                                    <div className="flex flex-wrap gap-3">
                                        {activeStyle.features.map((feature, i) => (
                                            <span key={i} className="px-4 py-1.5 bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider rounded-full border border-white/30 shadow-sm">
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                    <a href="/contact" className="px-8 py-3 bg-brand-copper text-white font-bold rounded shadow-lg hover:bg-orange-700 transition-colors transform hover:-translate-y-1">
                                        Get Quote
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
