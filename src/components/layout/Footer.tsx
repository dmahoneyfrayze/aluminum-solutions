import Link from "next/link";
import Image from "next/image";
import SEOFooterLinks from "@/components/layout/SEOFooterLinks";
import CookiePreferencesLink from "@/components/ui/CookiePreferencesLink";

export default function Footer() {
    return (
        <footer className="bg-brand-dark text-white border-t border-slate-800">
            {/* Trust Strip */}
            <div className="border-b border-slate-800 bg-black/20">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex flex-wrap justify-center md:justify-between gap-6 text-sm font-bold text-slate-400 uppercase tracking-wider">
                        <div className="flex items-center gap-2">
                            <span className="text-brand-copper">✓</span> WSIB Insured
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-brand-copper">✓</span> TSSA Certified
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-brand-copper">✓</span> 5M Liability Insurance
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-brand-copper">✓</span> Lifetime Warranty
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-brand-copper">✓</span> Code Compliant (SB-13)
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div>
                        <div className="mb-6">
                            <Image
                                src="/images/global-aluminum-solutions-logo.png"
                                alt="Global Aluminum Solutions"
                                width={200}
                                height={60}
                                className="h-12 w-auto object-contain brightness-0 invert"
                            />
                        </div>
                        <p className="text-slate-300 mb-6">
                            Premium aluminum railings and glass enclosures. Manufactured in the GTA, installed by experts.
                        </p>
                        <div className="flex space-x-4">
                            {/* Social Links */}
                            <a href="https://www.instagram.com/aluminumsolutions/" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram" className="w-8 h-8 bg-slate-800 rounded flex items-center justify-center hover:bg-gradient-to-tr hover:from-orange-500 hover:to-purple-600 transition-all text-white font-bold text-xs shadow-lg">
                                <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                            </a>
                            <a href="https://www.facebook.com/globalaluminumsolutions" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook" className="w-8 h-8 bg-slate-800 rounded flex items-center justify-center hover:bg-[#1877F2] transition-colors text-white font-bold text-xs shadow-lg">
                                <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold mb-6 text-lg">Quick Links</h3>
                        <ul className="space-y-4 text-slate-300">
                            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                            <li><Link href="/about" className="hover:text-brand-copper transition-colors">About Us</Link></li>
                            <li><Link href="/process" className="hover:text-brand-copper transition-colors">Our Process</Link></li>
                            <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
                            <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="font-bold mb-6 text-lg">Our Services</h3>
                        <ul className="space-y-4 text-slate-300">
                            <li><Link href="/services/railings" className="hover:text-white transition-colors">Aluminum Railings</Link></li>
                            <li><Link href="/services/glass-enclosures" className="text-slate-300 hover:text-brand-copper transition-colors">Glass Enclosures</Link></li>
                            <li><Link href="/services/pool-fences" className="hover:text-white transition-colors">Pool Fences</Link></li>
                            <li><Link href="/services/privacy-screens" className="hover:text-white transition-colors">Privacy Screens</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-bold mb-6 text-lg">Contact Us</h3>
                        <ul className="space-y-4 text-slate-300 mb-8">
                            <li className="flex items-start">
                                <span className="mr-3 mt-1">📍</span>
                                <span>75 Fernstaff Ct. Unit #5<br />Vaughan, ON, L4K 3P8</span>
                            </li>
                            <li className="flex items-center">
                                <span className="mr-3">📞</span>
                                <a href="tel:9057803088" className="hover:text-white transition-colors">(905) 780-3088</a>
                            </li>
                            <li className="flex items-center">
                                <span className="mr-3">✉️</span>
                                <a href="mailto:info@aluminumsolutions.ca" className="hover:text-white transition-colors">info@aluminumsolutions.ca</a>
                            </li>
                        </ul>

                        <h4 className="font-bold mb-4 text-white">Hours of Operation</h4>
                        <ul className="space-y-2 text-slate-400 text-sm">
                            <li className="flex justify-between"><span>Mon</span> <span>10am – 3pm</span></li>
                            <li className="flex justify-between"><span>Tue</span> <span>10am – 3pm</span></li>
                            <li className="flex justify-between"><span>Wed</span> <span>By appointment</span></li>
                            <li className="flex justify-between"><span>Fri</span> <span>10am – 3pm</span></li>
                            <li className="flex justify-between text-brand-copper font-bold"><span>Sat-Sun</span> <span>Closed (Winter)</span></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* SEO Footer Links */}
            <SEOFooterLinks />

            {/* Copyright */}
            <div className="border-t border-slate-800 py-8 text-center text-slate-500 text-sm">
                <p className="mb-2">&copy; {new Date().getFullYear()} Aluminum Solutions. All rights reserved.</p>
                <div className="flex justify-center gap-4">
                    <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                    <span>|</span>
                    <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    <span>|</span>
                    <CookiePreferencesLink />
                </div>
            </div>
        </footer>
    );
}
