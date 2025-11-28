"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                    <Image
                        src="/images/global-aluminum-solutions-logo.png"
                        alt="Global Aluminum Solutions"
                        width={200}
                        height={60}
                        className="h-12 w-auto object-contain"
                        priority
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/services" className="text-sm font-bold text-slate-600 hover:text-brand-copper transition-colors uppercase tracking-wide">
                        Services
                    </Link>
                    <Link href="/process" className="text-sm font-bold text-slate-600 hover:text-brand-copper transition-colors uppercase tracking-wide">
                        Process
                    </Link>
                    <Link href="/gallery" className="text-sm font-bold text-slate-600 hover:text-brand-copper transition-colors uppercase tracking-wide">
                        Gallery
                    </Link>
                    <Link href="/services/glass-enclosures" className="text-sm font-bold text-slate-600 hover:text-brand-copper transition-colors uppercase tracking-wide">Glass Enclosures</Link>
                    <Link href="/services/glass-walls" className="text-sm font-bold text-slate-600 hover:text-brand-copper transition-colors uppercase tracking-wide">Glass Walls & Partitions</Link>
                    <Link href="/services/glass-railings" className="text-sm font-bold text-slate-600 hover:text-brand-copper transition-colors uppercase tracking-wide">Glass Railings</Link>
                    <Link href="/about" className="text-sm font-bold text-slate-600 hover:text-brand-copper transition-colors uppercase tracking-wide">
                        About
                    </Link>
                    <Link href="/reviews" className="text-sm font-bold text-slate-600 hover:text-brand-copper transition-colors uppercase tracking-wide">
                        Reviews
                    </Link>
                    <Link href="/contact" className="px-6 py-2.5 bg-brand-navy text-white text-sm font-bold hover:bg-brand-copper transition-colors shadow-lg rounded-sm">
                        Get a Quote
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-slate-900"
                    aria-label="Open mobile menu"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-slate-100 shadow-xl animate-fade-in-up">
                    <nav className="flex flex-col p-6 space-y-4">
                        <Link
                            href="/services"
                            className="text-lg font-bold text-slate-800 hover:text-brand-copper transition-colors border-b border-slate-50 pb-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Services
                        </Link>
                        <Link
                            href="/process"
                            className="text-lg font-bold text-slate-800 hover:text-brand-copper transition-colors border-b border-slate-50 pb-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Process
                        </Link>
                        <Link
                            href="/gallery"
                            className="text-lg font-bold text-slate-800 hover:text-brand-copper transition-colors border-b border-slate-50 pb-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Gallery
                        </Link>
                        <Link
                            href="/about"
                            className="text-lg font-bold text-slate-800 hover:text-brand-copper transition-colors border-b border-slate-50 pb-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            About
                        </Link>
                        <Link
                            href="/reviews"
                            className="text-lg font-bold text-slate-800 hover:text-brand-copper transition-colors border-b border-slate-50 pb-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Reviews
                        </Link>
                        <Link
                            href="/contact"
                            className="text-center py-3 bg-brand-navy text-white font-bold hover:bg-brand-copper transition-colors shadow-md rounded-sm mt-4"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Get a Quote
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
