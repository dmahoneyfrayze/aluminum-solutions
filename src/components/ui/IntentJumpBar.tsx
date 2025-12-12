"use client";

import Link from "next/link";

export default function IntentJumpBar() {
    const intents = [
        { label: "Homeowners", href: "/services/railings" },
        { label: "Builders / Developers", href: "/commercial" },
        { label: "Condos / Commercial", href: "/commercial" },
        { label: "Pool-Compliant Systems", href: "/services/pool-fences" },
        { label: "Fast-Turn Projects", href: "/contact" },
    ];

    return (
        <div className="bg-slate-50 border-b border-slate-200 py-4 hidden md:block">
            <div className="container mx-auto px-6">
                <div className="flex justify-center gap-4">
                    {intents.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className="px-6 py-2 bg-white text-slate-700 font-bold text-sm border border-slate-200 rounded-full hover:bg-brand-navy hover:text-white hover:border-brand-navy transition-colors shadow-sm"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
