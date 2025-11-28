import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/ui/Hero";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Aluminum Solutions Blog | Railing Design & Installation Tips",
    description: "Expert advice on aluminum railings, glass enclosures, and home renovation. Read our latest project spotlights and guides.",
};

export default function BlogIndexPage() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />

            <main className="flex-grow">
                <Hero
                    title="Expert Insights & Project Stories"
                    subtitle="Tips on design, installation, and maintenance from the GTA's railing experts."
                    ctaText="View Our Gallery"
                    ctaLink="/gallery"
                />

                <section className="py-20">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            {blogPosts.map((post) => (
                                <article key={post.slug} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-100 flex flex-col">
                                    {/* Image Placeholder */}
                                    <div className="h-56 bg-slate-200 relative">
                                        <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-bold text-sm uppercase tracking-widest">
                                            {post.category}
                                        </div>
                                    </div>

                                    <div className="p-8 flex-grow flex flex-col">
                                        <div className="text-xs font-bold text-blue-600 mb-2 uppercase tracking-wide">{post.category}</div>
                                        <h2 className="text-xl font-bold text-slate-900 mb-3 leading-tight">
                                            <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
                                                {post.title}
                                            </Link>
                                        </h2>
                                        <p className="text-slate-600 text-sm mb-6 flex-grow">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100">
                                            <span className="text-xs text-slate-400">{post.date}</span>
                                            <Link href={`/blog/${post.slug}`} className="text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors">
                                                Read Article &rarr;
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
