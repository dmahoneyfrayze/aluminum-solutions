"use client";

import Link from "next/link";

export default function ServiceJumpBar() {
    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const offset = 100; // Account for header
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <div className="bg-slate-50 border-b border-slate-200 py-4 sticky top-[70px] z-40 shadow-sm md:top-[80px]">
            <div className="container mx-auto px-6">
                <div className="flex justify-center gap-4 md:gap-8">
                    <Link
                        href="#exterior"
                        onClick={(e) => scrollToSection(e, "exterior")}
                        className="px-6 py-2 bg-white text-slate-700 font-bold text-sm border border-slate-200 rounded-full hover:bg-brand-navy hover:text-white hover:border-brand-navy transition-colors shadow-sm flex items-center gap-2"
                    >
                        🏠 Exterior Solutions
                    </Link>
                    <Link
                        href="#interior"
                        onClick={(e) => scrollToSection(e, "interior")}
                        className="px-6 py-2 bg-white text-slate-700 font-bold text-sm border border-slate-200 rounded-full hover:bg-brand-navy hover:text-white hover:border-brand-navy transition-colors shadow-sm flex items-center gap-2"
                    >
                        🛋️ Interior Solutions
                    </Link>
                </div>
            </div>
        </div>
    );
}
