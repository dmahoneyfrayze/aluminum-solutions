import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/lib/blog-rss";

interface Props {
    posts: BlogPost[];
    title?: string;
    viewAllLink?: string;
}

export default function RelatedArticles({ posts, title = "Related Articles", viewAllLink = "/blog" }: Props) {
    if (posts.length === 0) return null;

    return (
        <section className="py-20 bg-slate-50 border-t border-slate-200">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-serif font-bold mb-12 text-center text-slate-900">
                    {title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
                            <div className="h-48 relative overflow-hidden bg-slate-200">
                                {post.imageUrl && (
                                    <Image
                                        src={post.imageUrl}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                )}
                            </div>
                            <div className="p-6 flex-grow flex flex-col">
                                <div className="text-xs font-bold text-brand-copper uppercase tracking-wider mb-2">{post.category}</div>
                                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-brand-navy transition-colors line-clamp-2">
                                    {post.title}
                                </h3>
                                <p className="text-slate-600 text-sm mb-4 line-clamp-3 flex-grow">
                                    {post.excerpt}
                                </p>
                                <span className="text-brand-navy font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                                    Read Article <span className="text-lg">→</span>
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <Link href={viewAllLink} className="inline-block px-8 py-3 border-2 border-slate-900 text-slate-900 font-bold rounded hover:bg-slate-900 hover:text-white transition-colors">
                        View All Articles
                    </Link>
                </div>
            </div>
        </section>
    );
}
