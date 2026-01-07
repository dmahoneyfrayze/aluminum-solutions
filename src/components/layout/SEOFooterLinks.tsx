"use client";


import Link from "next/link";
import { locations } from "@/data/locations";

export default function SEOFooterLinks() {
    // Group locations by region
    const gtaLocations = locations.filter(loc => loc.region === "GTA").sort((a, b) => a.name.localeCompare(b.name));


    return (
        <div className="border-t border-slate-800 bg-black/40 py-8">
            <div className="container mx-auto px-6">
                <details className="group">
                    <summary className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors text-sm font-bold uppercase tracking-wider mb-4 cursor-pointer list-none">
                        <span className="inline-block transition-transform group-open:rotate-90">▶</span> Service Areas & Local Pages
                    </summary>

                    <div className="grid grid-cols-1 mt-6 animate-fade-in">
                        {/* GTA Section */}
                        <div>
                            <h4 className="text-brand-copper font-bold mb-4 border-b border-slate-800 pb-2">Greater Toronto Area</h4>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-2">
                                {gtaLocations.map((loc) => (
                                    <Link
                                        key={loc.slug}
                                        href={`/locations/${loc.slug}`}
                                        className="text-xs text-slate-500 hover:text-white transition-colors block"
                                    >
                                        {loc.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </details>
            </div>
        </div>
    );
}
