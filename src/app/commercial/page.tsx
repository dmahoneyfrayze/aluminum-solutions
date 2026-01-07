import CommercialContent from "./CommercialContent";
import { Metadata } from "next";
import { getBlogPosts } from "@/lib/blog-rss";

export const metadata: Metadata = {
    title: "Commercial Aluminum Railings & Glass Partitions | Toronto Contractors",
    description: "Heavy-duty aluminum railings and glass systems for commercial buildings, condos, and offices. Bulk pricing and professional installation available.",
    openGraph: {
        title: "Commercial Aluminum Railings & Glass Partitions | Toronto Contractors",
        description: "Heavy-duty aluminum railings and glass systems for commercial buildings, condos, and offices. Bulk pricing and professional installation available.",
    },
};

export default async function CommercialPage() {
    const posts = await getBlogPosts();
    return <CommercialContent initialPosts={posts} />;
}
