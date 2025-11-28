import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { blogPosts, getPostBySlug } from "@/data/blog";
import { notFound } from "next/navigation";

// Generate static params for all posts
export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const post = getPostBySlug(params.slug);
    if (!post) return { title: "Article Not Found" };

    return {
        title: `${post.title} | Aluminum Solutions`,
        description: post.excerpt,
    };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = getPostBySlug(params.slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />

            <main className="flex-grow">
                {/* Article Header */}
                <header className="bg-slate-900 text-white py-24 text-center">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <div className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-4">{post.category}</div>
                        <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight">{post.title}</h1>
                        <div className="text-slate-400">{post.date}</div>
                    </div>
                </header>

                {/* Content */}
                <article className="py-20">
                    <div className="container mx-auto px-6 max-w-3xl">
                        <div
                            className="prose prose-lg prose-slate mx-auto focus:outline-none"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />

                        {/* Back Link */}
                        <div className="mt-16 pt-8 border-t border-slate-200">
                            <Link href="/blog" className="text-blue-600 font-bold hover:underline">
                                &larr; Back to All Articles
                            </Link>
                        </div>
                    </div>
                </article>

                {/* CTA */}
                <section className="bg-slate-50 py-20 text-center">
                    <div className="container mx-auto px-6">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">Inspired by this project?</h2>
                        <p className="text-slate-600 mb-8">Get a free quote for your own home renovation.</p>
                        <Link href="/contact" className="inline-block px-8 py-4 bg-slate-900 text-white font-bold rounded hover:bg-slate-800 transition-colors">
                            Get a Free Estimate
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
