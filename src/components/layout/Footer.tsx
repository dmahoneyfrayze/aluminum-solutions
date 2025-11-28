import Link from "next/link";
import Image from "next/image";
import SEOFooterLinks from "@/components/layout/SEOFooterLinks";

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
                        <p className="text-slate-400 mb-6">
                            Premium aluminum railings and glass enclosures. Manufactured in the GTA, installed by experts.
                        </p>
                        <div className="flex space-x-4">
                            {/* Social Placeholders */}
                            <div className="w-8 h-8 bg-slate-800 rounded flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">IG</div>
                            <div className="w-8 h-8 bg-slate-800 rounded flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">FB</div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-4 text-slate-400">
                            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/process" className="hover:text-white transition-colors">Our Process</Link></li>
                            <li><Link href="/reviews" className="hover:text-white transition-colors">Reviews</Link></li>
                            <li><Link href="/gallery" className="hover:text-white transition-colors">Project Gallery</Link></li>
                            <li><Link href="/resources" className="hover:text-white transition-colors">Warranty & Specs</Link></li>
                            <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
                            <li><Link href="/blog" className="hover:text-white transition-colors">Blog & Case Studies</Link></li>
                            <li><Link href="/builders" className="hover:text-white transition-colors">For Builders</Link></li>
                            <li><Link href="/referral" className="hover:text-white transition-colors">Referral Program</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">Get a Quote</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-bold mb-6">Our Services</h4>
                        <ul className="space-y-4 text-slate-400">
                            <li><Link href="/services/railings" className="hover:text-white transition-colors">Aluminum Railings</Link></li>
                            <li><Link href="/services/glass-enclosures" className="hover:text-white transition-colors">Glass Enclosures</Link></li>
                            <li><Link href="/services/porch-enclosures" className="hover:text-white transition-colors">Porch Enclosures</Link></li>
                            <li><Link href="/services/pool-fences" className="hover:text-white transition-colors">Pool Fences</Link></li>
                            <li><Link href="/services/privacy-screens" className="hover:text-white transition-colors">Privacy Screens</Link></li>
                            <li><Link href="/services/showers" className="hover:text-white transition-colors">Frameless Showers</Link></li>
                            <li><Link href="/services/gates" className="hover:text-white transition-colors">Custom Gates</Link></li>
                            <li><Link href="/services/columns" className="hover:text-white transition-colors">Aluminum Columns</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold mb-6">Contact Us</h4>
                        <ul className="space-y-4 text-slate-400">
                            <li className="flex items-start">
                                <span className="mr-3 mt-1">📍</span>
                                <span>Serving Toronto & Montreal</span>
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
                </div>
            </div>
        </footer>
    );
}
