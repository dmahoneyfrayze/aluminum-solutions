import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/ui/Hero";
import Link from "next/link";
import Image from "next/image";
import { getBlogPosts } from "@/lib/blog-rss";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata = {
    title: "Aluminum Solutions Blog | Railing Design & Installation Tips",
    description: "Expert advice on aluminum railings, glass enclosures, and home renovation. Read our latest project spotlights and guides.",
};

// Async Server Component
export default async function BlogIndexPage() {
    const posts = await getBlogPosts();

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />
            <Breadcrumbs items={[{ label: "Blog", href: "/blog" }]} />

            <main className="flex-grow">
                <Hero
                    title="Expert Insights & Project Stories"
                    subtitle="Tips on design, installation, and maintenance from the GTA's railing experts."
                    ctaText="View Our Gallery"
                    ctaLink="/gallery"
                    backgroundImage="/images/generated/railing_hero_detail_1764312850877.webp"
                />

                <section className="py-20">
                    <div className="container mx-auto px-6">
                        {posts.length === 0 ? (
                            <div className="text-center py-20 text-slate-500">
                                <p>Loading articles...</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                                {posts.map((post) => (
                                    <article key={post.slug} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-100 flex flex-col">
                                        <div className="h-56 bg-slate-200 relative">
                                            {post.imageUrl ? (
                                                <Image
                                                    src={post.imageUrl}
                                                    alt={post.title}
                                                    fill
                                                    className="object-cover"
                                                />
                                            ) : (
                                                <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-bold text-sm uppercase tracking-widest bg-slate-100">
                                                    Aluminum Solutions
                                                </div>
                                            )}
                                        </div>

                                        <div className="p-8 flex-grow flex flex-col">
                                            <div className="text-xs font-bold text-brand-copper mb-2 uppercase tracking-wide">{post.category}</div>
                                            <h2 className="text-xl font-bold text-slate-900 mb-3 leading-tight">
                                                <Link href={`/blog/${post.slug}`} className="hover:text-brand-copper transition-colors">
                                                    {post.title}
                                                </Link>
                                            </h2>
                                            <p className="text-slate-600 text-sm mb-6 flex-grow line-clamp-3">
                                                {post.excerpt}
                                            </p>
                                            <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100">
                                                <span className="text-xs text-slate-400">{post.date}</span>
                                                <Link href={`/blog/${post.slug}`} className="text-sm font-bold text-slate-900 hover:text-brand-copper transition-colors">
                                                    Read Article &rarr;
                                                </Link>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        )}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
