import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-white border-t border-slate-800">
            {/* Trust Strip */}
            <div className="border-b border-slate-800 bg-slate-950">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex flex-wrap justify-center md:justify-between gap-6 text-sm font-bold text-slate-400 uppercase tracking-wider">
                        <div className="flex items-center gap-2">
                            <span className="text-blue-500">✓</span> WSIB Insured
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-blue-500">✓</span> TSSA Certified
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-blue-500">✓</span> 5M Liability Insurance
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-blue-500">✓</span> Lifetime Warranty
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-blue-500">✓</span> Code Compliant (SB-13)
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div>
                        <div className="text-2xl font-serif font-bold mb-6">Aluminum Solutions</div>
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
                            <li><Link href="/gallery" className="hover:text-white transition-colors">Project Gallery</Link></li>
                            <li><Link href="/builders" className="hover:text-white transition-colors">For Builders</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">Get a Quote</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-bold mb-6">Our Services</h4>
                        <ul className="space-y-4 text-slate-400">
                            <li><Link href="/services/railings" className="hover:text-white transition-colors">Aluminum Railings</Link></li>
                            <li><Link href="/services/glass-enclosures" className="hover:text-white transition-colors">Glass Enclosures</Link></li>
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
                                <span>Serving Toronto & the GTA</span>
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

            {/* Copyright */}
            <div className="border-t border-slate-800 py-8 text-center text-slate-500 text-sm">
                <p>&copy; {new Date().getFullYear()} Aluminum Solutions. All rights reserved.</p>
            </div>
        </footer>
    );
}
