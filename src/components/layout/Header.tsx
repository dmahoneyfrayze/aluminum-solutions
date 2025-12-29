"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { navigationData, NavItem } from "@/data/navigation";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
        setMobileExpanded(null);
    }, []);

    const toggleMobileExpand = (label: string) => {
        setMobileExpanded(mobileExpanded === label ? null : label);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 relative z-50" onClick={() => setIsMobileMenuOpen(false)}>
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
                <nav className="hidden lg:flex items-center gap-8" onMouseLeave={() => setActiveDropdown(null)}>
                    {navigationData.map((item) => (
                        <div
                            key={item.label}
                            className="relative group h-20 flex items-center"
                            onMouseEnter={() => item.subItems && setActiveDropdown(item.label)}
                        >
                            {item.subItems ? (
                                <button
                                    className={`text-sm font-bold uppercase tracking-wide flex items-center gap-1 transition-colors ${activeDropdown === item.label ? "text-brand-copper" : "text-slate-600 hover:text-brand-copper"}`}
                                >
                                    {item.label}
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-4 h-4 transition-transform ${activeDropdown === item.label ? "rotate-180" : ""}`}>
                                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            ) : (
                                <Link
                                    href={item.href!}
                                    className="text-sm font-bold text-slate-600 hover:text-brand-copper transition-colors uppercase tracking-wide"
                                >
                                    {item.label}
                                </Link>
                            )}

                            {/* Dropdown Menu */}
                            {item.subItems && activeDropdown === item.label && (
                                <div
                                    className="absolute top-full left-0 w-64 bg-white shadow-xl border-t-2 border-brand-copper rounded-b-md overflow-hidden animate-fade-in-up"
                                    onMouseEnter={() => setActiveDropdown(item.label)}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    <div className="py-2">
                                        {item.subItems.map((subItem) => (
                                            <Link
                                                key={subItem.label}
                                                href={subItem.href!}
                                                className="block px-6 py-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-brand-copper transition-colors font-medium border-l-4 border-transparent hover:border-brand-copper"
                                                onClick={() => setActiveDropdown(null)}
                                            >
                                                {subItem.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}

                    <div className="h-8 w-px bg-slate-200 mx-2" />

                    <a href="tel:16474902424" className="text-sm font-bold text-slate-900 hover:text-brand-copper transition-colors whitespace-nowrap">
                        1 647-490-2424
                    </a>
                    <Link href="/contact" className="px-6 py-2.5 bg-brand-navy text-white text-sm font-bold hover:bg-brand-copper transition-colors shadow-lg rounded-sm whitespace-nowrap">
                        Get a Quote
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden p-2 text-slate-900 relative z-50"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
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
                <div className="lg:hidden fixed inset-0 !bg-white z-40 pt-24 pb-10 overflow-y-auto h-screen w-screen">
                    <nav className="container mx-auto px-6 flex flex-col space-y-2">
                        {navigationData.map((item) => (
                            <div key={item.label} className="border-b border-slate-50 last:border-0">
                                {item.subItems ? (
                                    <>
                                        <button
                                            onClick={() => toggleMobileExpand(item.label)}
                                            className="w-full flex items-center justify-between text-lg font-bold text-slate-800 py-4"
                                        >
                                            {item.label}
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-5 h-5 transition-transform ${mobileExpanded === item.label ? "rotate-180 text-brand-copper" : "text-slate-400"}`}>
                                                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileExpanded === item.label ? "max-h-96 opacity-100 mb-4" : "max-h-0 opacity-0"}`}>
                                            <div className="flex flex-col space-y-2 pl-4 border-l-2 border-slate-100 ml-1">
                                                {item.subItems.map(sub => (
                                                    <Link
                                                        key={sub.label}
                                                        href={sub.href!}
                                                        className="text-slate-600 hover:text-brand-copper py-2 block"
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                    >
                                                        {sub.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <Link
                                        href={item.href!}
                                        className="block text-lg font-bold text-slate-800 py-4 hover:text-brand-copper"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </div>
                        ))}
                        <div className="pt-6 mt-6 border-t border-slate-100">
                            <a href="tel:16474902424" className="block text-center text-xl font-bold text-slate-900 mb-4">
                                1 647-490-2424
                            </a>
                            <Link
                                href="/contact"
                                className="block w-full text-center py-4 bg-brand-navy text-white font-bold text-lg rounded-sm shadow-lg hover:bg-slate-800"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Get a Quote
                            </Link>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
