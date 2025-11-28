"use client";

import { useState } from "react";
import Image from "next/image";

const styles = [
    {
        id: "glass-spigot",
        name: "Frameless Glass (Spigot)",
        description: "Minimalist luxury. 12mm tempered glass held by stainless steel spigots.",
        image: "/images/generated/pool_fence_glass_detail_1764312810331.png",
        features: ["Unobstructed Views", "Modern Aesthetic", "Pool Safe"]
    },
    {
        id: "glass-rail",
        name: "Glass with Top Rail",
        description: "Contemporary safety. Glass panels with a sleek aluminum top rail.",
        image: "/images/generated/railing_hero_detail_1764312850877.png",
        features: ["Added Stability", "Lean-friendly", "Custom Colors"]
    },
    {
        id: "picket",
        name: "Aluminum Picket",
        description: "Classic durability. Maintenance-free aluminum pickets in various colors.",
        image: "/images/generated/pool_fence_picket_detail_1764312823826.png",
        features: ["Cost Effective", "Traditional Look", "Airflow"]
    },
    {
        id: "privacy",
        name: "Privacy Screen",
        description: "Secluded comfort. Acid-etched glass to block views but let light in.",
        image: "/images/generated/pool_fence_glass_detail_1764312810331.png",
        features: ["Maximum Privacy", "Wind Protection", "Soft Light"]
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

                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    {/* Controls */}
                    <div className="w-full lg:w-1/3 space-y-4">
                        {styles.map((style) => (
                            <button
                                key={style.id}
                                onClick={() => setActiveStyle(style)}
                                className={`w-full text-left p-6 rounded-xl transition-all duration-300 border ${activeStyle.id === style.id
                                    ? "bg-brand-navy text-white border-brand-navy shadow-lg scale-105"
                                    : "bg-white text-slate-600 border-slate-200 hover:border-brand-copper hover:shadow-md"
                                    }`}
                            >
                                <h3 className={`font-bold text-lg mb-1 ${activeStyle.id === style.id ? "text-white" : "text-slate-900"}`}>
                                    {style.name}
                                </h3>
                                <p className={`text-sm ${activeStyle.id === style.id ? "text-slate-300" : "text-slate-500"}`}>
                                    {style.description}
                                </p>
                            </button>
                        ))}
                    </div>

                    {/* Preview */}
                    <div className="w-full lg:w-2/3">
                        <div className="relative aspect-[16/9] bg-slate-100 rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
                            <Image
                                key={activeStyle.id} // Force re-render on change for animation if we added it, but good for keying
                                src={activeStyle.image}
                                alt={activeStyle.name}
                                fill
                                className="object-cover"
                            />

                            {/* Overlay Info */}
                            <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md p-6 border-t border-white/20">
                                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                                    <div className="flex gap-4">
                                        {activeStyle.features.map((feature, i) => (
                                            <span key={i} className="px-3 py-1 bg-brand-copper/10 text-brand-copper text-xs font-bold uppercase tracking-wider rounded-full">
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                    <a href="/contact" className="px-6 py-2 bg-brand-navy text-white text-sm font-bold rounded hover:bg-slate-800 transition-colors">
                                        Get Quote for {activeStyle.name}
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
