"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function ExitIntentPopup() {
    const [isVisible, setIsVisible] = useState(false);
    const [hasShown, setHasShown] = useState(false);

    useEffect(() => {
        // Check if already shown in this session
        const sessionShown = sessionStorage.getItem("exit-popup-shown");
        if (sessionShown) {
            setHasShown(true);
            return;
        }

        const handleExitIntent = (e: MouseEvent) => {
            if (e.clientY <= 0 && !hasShown) {
                setIsVisible(true);
                setHasShown(true);
                sessionStorage.setItem("exit-popup-shown", "true");
            }
        };

        // Fallback for mobile/timer
        const timer = setTimeout(() => {
            if (!hasShown && !sessionStorage.getItem("exit-popup-shown")) {
                setIsVisible(true);
                setHasShown(true);
                sessionStorage.setItem("exit-popup-shown", "true");
            }
        }, 15000); // Show after 15 seconds if no exit intent

        document.addEventListener("mouseleave", handleExitIntent);

        return () => {
            document.removeEventListener("mouseleave", handleExitIntent);
            clearTimeout(timer);
        };
    }, [hasShown]);

    if (!isVisible) return null;

    if (!isVisible) return null;

    return (
        <div
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-fade-in cursor-pointer"
            onClick={() => setIsVisible(false)}
        >
            <div
                className="relative w-full max-w-lg bg-white rounded-xl shadow-2xl overflow-hidden animate-fade-in-up border-4 border-red-700 cursor-default"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsVisible(false);
                    }}
                    className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors z-50 p-2"
                    aria-label="Close popup"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-slate-500">
                        <path d="M18 6 6 18" />
                        <path d="m6 6 18 18" />
                    </svg>
                </button>

                {/* Decorative Header */}
                <div className="bg-red-700 p-6 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                        {/* Simple CSS Snowflakes pattern could go here, or just a texture */}
                        <div className="absolute top-2 left-4 text-4xl">❄️</div>
                        <div className="absolute bottom-2 right-4 text-4xl">❄️</div>
                        <div className="absolute top-1/2 left-1/4 text-2xl">❄️</div>
                    </div>
                    <h2 className="text-3xl font-serif font-bold text-white relative z-10">
                        🎄 End of 2025 Special!
                    </h2>
                    <p className="text-red-100 mt-2 relative z-10 font-medium">
                        Lock in 2025 Pricing for Spring 2026
                    </p>
                </div>

                {/* Content */}
                <div className="p-8 text-center">
                    <p className="text-slate-600 mb-6 text-lg">
                        Planning a renovation? Book your consultation before <strong>December 31st</strong> and save up to <strong>15%</strong> on your custom railing or enclosure project.
                    </p>

                    <div className="flex flex-col gap-3">
                        <Link
                            href="/contact"
                            onClick={() => setIsVisible(false)}
                            className="w-full py-4 bg-green-700 text-white font-bold text-lg rounded-lg hover:bg-green-800 transition-colors shadow-lg flex items-center justify-center gap-2"
                        >
                            🎁 Claim My Offer
                        </Link>
                        <button
                            onClick={() => setIsVisible(false)}
                            className="text-slate-400 text-sm hover:text-slate-600 underline"
                        >
                            No thanks, I'll pay full price later
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
