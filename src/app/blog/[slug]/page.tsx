import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import { getBlogPostBySlug, getBlogPosts } from "@/lib/blog-rss";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = await getBlogPostBySlug(slug);

    if (!post) {
        return {
            title: "Article Not Found | Aluminum Solutions",
        };
    }

    return {
        title: `${post.title} | Aluminum Solutions Blog`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            images: post.imageUrl ? [post.imageUrl] : [],
        },
    };
}

// Generate static params for known posts at build time (optional but good for performance)
export async function generateStaticParams() {
    const posts = await getBlogPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = await getBlogPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />
            <Breadcrumbs
                items={[
                    { label: "Blog", href: "/blog" },
                    { label: post.title, href: `/blog/${post.slug}` }
                ]}
            />

            <main className="flex-grow">
                {/* Article Hero */}
                <div className="bg-slate-900 text-white relative py-24">
                    <div className="absolute inset-0 overflow-hidden opacity-30">
                        {post.imageUrl && (
                            <Image
                                src={post.imageUrl}
                                alt={post.title}
                                fill
                                className="object-cover"
                            />
                        )}
                        <div className="absolute inset-0 bg-slate-900/60" />
                    </div>

                    <div className="container mx-auto px-6 relative z-10 max-w-4xl">
                        <Link href="/blog" className="text-brand-copper font-bold hover:underline mb-6 inline-block">
                            &larr; Back to Blog
                        </Link>
                        <div className="flex items-center gap-4 text-sm text-slate-300 mb-4 uppercase tracking-wider">
                            <span>{post.category}</span>
                            <span>•</span>
                            <span>{post.date}</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-serif font-bold leading-tight mb-6 text-white">
                            {post.title}
                        </h1>
                    </div>
                </div>

                {/* Article Content */}
                <article className="py-20">
                    <div className="container mx-auto px-6 max-w-3xl">
                        {/* Native-feeling prose styling */}
                        <div
                            className="prose prose-lg prose-slate max-w-none 
                                prose-headings:font-serif prose-headings:font-bold prose-headings:text-slate-900 
                                prose-p:text-slate-600 prose-p:leading-relaxed 
                                prose-a:text-brand-copper prose-a:no-underline hover:prose-a:underline
                                prose-strong:text-brand-navy prose-strong:font-bold
                                prose-img:rounded-xl prose-img:shadow-lg"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />

                        <div className="mt-16 pt-10 border-t border-slate-200">
                            <Link href="/blog" className="text-brand-navy font-bold hover:text-brand-copper transition-colors">
                                &larr; Read More Articles
                            </Link>
                        </div>
                    </div>
                </article>

                {/* CTA Section */}
                <section className="py-20 bg-slate-50 text-center border-t border-slate-200">
                    <div className="container mx-auto px-6">
                        <h2 className="text-2xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
                            Have Questions About This Project?
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto mb-10">
                            Our team can help you achieve a similar look for your home or business.
                        </p>
                        <Link href="/contact" className="inline-block px-10 py-4 bg-brand-navy text-white font-bold tracking-wide hover:bg-slate-800 transition-colors shadow-lg rounded-sm">
                            Get a Free Consultation
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
