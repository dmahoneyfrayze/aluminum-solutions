import Link from "next/link";
import Image from "next/image";
import SEOFooterLinks from "@/components/layout/SEOFooterLinks";
import CookiePreferencesLink from "@/components/ui/CookiePreferencesLink";
import { navigationData } from "@/data/navigation";

export default function Footer() {
    // Get services from navigation data
    const services = navigationData.find(item => item.label === "Services")?.subItems || [];
    // Get locations from navigation data
    const locations = navigationData.find(item => item.label === "Locations")?.subItems || [];

    return (
        <footer className="bg-brand-dark text-white border-t border-slate-800 font-sans">
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">

                    {/* COL 1: Authority & Trust (4 cols wide) */}
                    <div className="lg:col-span-4">
                        <div className="mb-6">
                            <Image
                                src="/images/global-aluminum-solutions-logo.png"
                                alt="Global Aluminum Solutions"
                                width={220}
                                height={66}
                                className="h-14 w-auto object-contain brightness-0 invert"
                            />
                        </div>
                        <p className="text-slate-300 mb-8 leading-relaxed">
                            <strong>Partner with the Manufacturer.</strong> We design, fabricate, and install premium aluminum & glass systems directly from our Vaughan factory. No middlemen, no markup.
                        </p>

                        <div className="space-y-3 mb-8">
                            <div className="flex items-center gap-3 text-sm font-bold text-slate-300">
                                <span className="text-brand-copper text-lg">✓</span>
                                <span>Ontario Building Code (SB-13) Compliant</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm font-bold text-slate-300">
                                <span className="text-brand-copper text-lg">✓</span>
                                <span>WSIB Insured & TSSA Certified</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm font-bold text-slate-300">
                                <span className="text-brand-copper text-lg">✓</span>
                                <span>5M Liability Insurance</span>
                            </div>
                        </div>

                        <div className="flex space-x-4">
                            <a href="https://www.instagram.com/aluminumsolutions/" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram" className="w-10 h-10 bg-slate-800 rounded flex items-center justify-center hover:bg-gradient-to-tr hover:from-orange-500 hover:to-purple-600 transition-all text-white shadow-lg">
                                <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                            </a>
                            <a href="https://www.facebook.com/globalaluminumsolutions" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook" className="w-10 h-10 bg-slate-800 rounded flex items-center justify-center hover:bg-[#1877F2] transition-colors text-white shadow-lg">
                                <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* COL 2: Services (3 cols wide) */}
                    <div className="lg:col-span-3">
                        <h3 className="font-bold text-white text-lg mb-6 uppercase tracking-wider">Our Services</h3>
                        <ul className="space-y-3 text-slate-300">
                            {services.map(sub => (
                                <li key={sub.label}>
                                    <Link href={sub.href!} className="hover:text-brand-copper hover:pl-2 transition-all block">
                                        {sub.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* COL 3: Resources (2 cols wide) */}
                    <div className="lg:col-span-2">
                        <h3 className="font-bold text-white text-lg mb-6 uppercase tracking-wider">Resources</h3>
                        <ul className="space-y-3 text-slate-300">
                            <li><Link href="/blog" className="hover:text-brand-copper transition-colors">Blog & Guides</Link></li>
                            <li><Link href="/process" className="hover:text-brand-copper transition-colors">Our Process</Link></li>
                            <li><Link href="/gallery" className="hover:text-brand-copper transition-colors">Project Gallery</Link></li>
                            <li><Link href="/faq" className="hover:text-brand-copper transition-colors">FAQ</Link></li>
                        </ul>

                        <h3 className="font-bold text-white text-lg mt-8 mb-4 uppercase tracking-wider">Contact</h3>
                        <ul className="space-y-2 text-slate-300">
                            <li className="flex items-center">
                                <span className="mr-3 text-brand-copper">📞</span>
                                <a href="tel:16474902424" className="hover:text-white transition-colors font-bold">1 647-490-2424</a>
                            </li>
                            <li className="flex items-center">
                                <span className="mr-3 text-brand-copper">✉️</span>
                                <a href="mailto:info@aluminumsolutions.ca" className="hover:text-white transition-colors">info@aluminumsolutions.ca</a>
                            </li>
                        </ul>
                    </div>

                    {/* COL 4: Service Areas (3 cols wide) */}
                    <div className="lg:col-span-3">
                        <h3 className="font-bold text-white text-lg mb-6 uppercase tracking-wider">Service Areas</h3>
                        <div className="flex flex-wrap gap-2 mb-8">
                            {locations.filter(l => l.label !== "View All Areas").map(city => (
                                <Link
                                    key={city.label}
                                    href={city.href!}
                                    className="px-3 py-1 bg-slate-800 text-xs text-slate-300 rounded hover:bg-brand-copper hover:text-white transition-colors"
                                >
                                    {city.label}
                                </Link>
                            ))}
                        </div>

                        <div className="bg-slate-800 p-6 rounded-lg text-center border border-slate-700">
                            <h4 className="font-bold text-white mb-2">Ready to Start?</h4>
                            <p className="text-sm text-slate-300 mb-4">Get a free, no-obligation quote from our team.</p>
                            <Link href="/contact" className="block w-full py-3 bg-brand-copper text-white font-bold rounded hover:bg-orange-700 transition-colors">
                                Get a Quote
                            </Link>
                        </div>
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
