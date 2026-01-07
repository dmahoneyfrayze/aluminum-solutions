"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/lib/blog-rss";

interface BlogFeedProps {
    posts: BlogPost[];
}

export default function BlogFeed({ posts }: BlogFeedProps) {
    const [activeCategory, setActiveCategory] = useState("All");

    // Extract unique categories, ensuring "All" is first
    const categories = ["All", ...Array.from(new Set(posts.map((post) => post.category))).sort()];

    // Filter posts based on active category
    const filteredPosts = activeCategory === "All"
        ? posts
        : posts.filter((post) => post.category === activeCategory);

    return (
        <section className="py-20">
            <div className="container mx-auto px-6">
                {/* Category Filter */}
                <div className="mb-12 overflow-x-auto pb-4 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide">
                    <div className="flex space-x-3">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-2 rounded-full whitespace-nowrap text-sm font-bold transition-all duration-300 ${activeCategory === category
                                        ? "bg-brand-dark text-white shadow-md transform scale-105"
                                        : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Posts Grid */}
                {filteredPosts.length === 0 ? (
                    <div className="text-center py-20 text-slate-500">
                        <p>No articles found in this category.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {filteredPosts.map((post) => (
                            <article key={post.slug} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-100 flex flex-col group h-full">
                                <div className="h-56 bg-slate-200 relative overflow-hidden">
                                    {post.imageUrl ? (
                                        <Image
                                            src={post.imageUrl}
                                            alt={post.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
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
                                        <Link href={`/blog/${post.slug}`} className="text-sm font-bold text-slate-900 hover:text-brand-copper transition-colors group-hover:translate-x-1 duration-300 inline-block">
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
    );
}
