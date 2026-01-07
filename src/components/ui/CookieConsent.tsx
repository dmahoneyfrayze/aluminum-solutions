"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already made a choice
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            // Show banner after a small delay for better UX
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }

        // Listen for reset event
        const handleReset = () => {
            localStorage.removeItem("cookie-consent");
            setIsVisible(true);
        };

        window.addEventListener("reset-cookie-consent", handleReset);
        return () => window.removeEventListener("reset-cookie-consent", handleReset);
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookie-consent", "accepted");
        setIsVisible(false);
        // Here you would typically trigger your tracking scripts
        // window.dispatchEvent(new Event("cookie-consent-accepted"));
    };

    const handleDecline = () => {
        localStorage.setItem("cookie-consent", "declined");
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[2147483647] p-4 md:p-6 bg-slate-900/95 backdrop-blur text-white border-t border-slate-800 shadow-2xl animate-fade-in-up">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-sm text-slate-300 text-center md:text-left max-w-3xl">
                    <p>
                        We use cookies to enhance your experience, analyze site traffic, and provide personalized content.
                        By clicking "Accept", you consent to our use of cookies.
                        Read our <Link href="/privacy-policy" className="text-white underline hover:text-brand-copper">Privacy Policy</Link> to learn more.
                    </p>
                </div>
                <div className="flex gap-3">
                    <button
                        onClick={handleDecline}
                        className="px-4 py-2 text-sm font-bold text-slate-400 hover:text-white transition-colors border border-transparent hover:border-slate-600 rounded"
                        aria-label="Decline cookies"
                    >
                        Decline
                    </button>
                    <button
                        onClick={handleAccept}
                        className="px-6 py-2 text-sm font-bold bg-brand-copper text-white rounded hover:bg-orange-700 transition-colors shadow-lg"
                        aria-label="Accept cookies"
                    >
                        Accept
                    </button>
                </div>
            </div>
        </div>
    );
}
