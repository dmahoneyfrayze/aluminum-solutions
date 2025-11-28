import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <Header />

            <main className="flex-grow flex items-center justify-center pt-32 pb-20">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-9xl font-serif font-bold text-slate-200 mb-4">404</h1>
                    <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">Page Not Found</h2>
                    <p className="text-slate-600 text-lg max-w-md mx-auto mb-10">
                        Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            href="/"
                            className="px-8 py-3 bg-brand-copper text-white font-bold rounded hover:bg-orange-700 transition-colors"
                        >
                            Return Home
                        </Link>
                        <Link
                            href="/contact"
                            className="px-8 py-3 bg-white text-slate-900 border border-slate-300 font-bold rounded hover:bg-slate-50 transition-colors"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
