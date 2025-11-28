import Link from "next/link";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-2xl font-serif font-bold text-slate-900 tracking-tight flex items-center gap-2">
                    <span className="w-8 h-8 bg-brand-copper text-white flex items-center justify-center rounded-sm text-lg">A</span>
                    <span>ALUMINUM<span className="text-slate-400">SOLUTIONS</span></span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/services" className="text-sm font-bold text-slate-600 hover:text-brand-copper transition-colors uppercase tracking-wide">
                        Services
                    </Link>
                    <Link href="/process" className="text-sm font-bold text-slate-600 hover:text-brand-copper transition-colors uppercase tracking-wide">
                        Process
                    </Link>
                    <Link href="/projects" className="text-sm font-bold text-slate-600 hover:text-brand-copper transition-colors uppercase tracking-wide">
                        Gallery
                    </Link>
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

                {/* Mobile Menu Button (Placeholder) */}
                <button className="md:hidden p-2 text-slate-900">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
        </header>
    );
}
