import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/ui/Hero";
import { getBlogPosts } from "@/lib/blog-rss";
// import { blogPosts } from "@/data/blog"; // Local data disabled
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import BlogFeed from "@/components/blog/BlogFeed";

export const metadata = {
    title: "Aluminum Solutions Blog | Railing Design & Installation Tips",
    description: "Expert advice on aluminum railings, glass enclosures, and home renovation. Read our latest project spotlights and guides.",
    openGraph: {
        title: "Aluminum Solutions Blog | Railing Design & Installation Tips",
        description: "Expert advice on aluminum railings, glass enclosures, and home renovation.",
        images: [
            {
                url: '/images/generated/railing_hero_detail_1764312850877.webp',
                alt: 'Aluminum Solutions Blog'
            }
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Aluminum Solutions Blog | Railing Design & Installation Tips",
        description: "Expert advice on aluminum railings, glass enclosures, and home renovation.",
        images: ['/images/generated/railing_hero_detail_1764312850877.webp'],
    },
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

                <BlogFeed posts={posts} />
            </main>

            <Footer />
        </div>
    );
}
