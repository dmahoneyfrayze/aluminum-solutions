"use client";

import { useState } from "react";
import Link from "next/link";
import { locations } from "@/data/locations";

export default function SEOFooterLinks() {
    const [isExpanded, setIsExpanded] = useState(false);

    // Group locations by region if needed, or just list them all
    // For now, we'll just list them alphabetically
    const sortedLocations = [...locations].sort((a, b) => a.name.localeCompare(b.name));

    return (
        <div className="border-t border-slate-800 bg-black/40 py-8">
            <div className="container mx-auto px-6">
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors text-sm font-bold uppercase tracking-wider mb-4"
                >
                    <span>{isExpanded ? "−" : "+"}</span> Service Areas & Local Pages
                </button>

                <div className={`grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}>
                    {sortedLocations.map((loc) => (
                        <Link
                            key={loc.slug}
                            href={`/locations/${loc.slug}`}
                            className="text-xs text-slate-500 hover:text-brand-copper transition-colors block"
                        >
                            Railings in {loc.name}
                        </Link>
                    ))}
                    {/* Add some static ones if needed */}
                    <Link href="/locations/toronto" className="text-xs text-slate-500 hover:text-brand-copper transition-colors block">
                        Glass Railings Toronto
                    </Link>
                    <Link href="/locations/mississauga" className="text-xs text-slate-500 hover:text-brand-copper transition-colors block">
                        Porch Enclosures Mississauga
                    </Link>
                </div>
            </div>
        </div>
    );
}
