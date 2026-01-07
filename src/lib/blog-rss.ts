import { XMLParser } from "fast-xml-parser";

const RSS_URL = "https://rss-link.com/feed/hos0jUKT6DAHGRD0nBoP?blogId=5cIqxepZm6CtlTMgM30f&limit=25&loadContent=true";

export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string; // From description
    date: string; // From pubDate
    category: string; // From category
    imageUrl: string; // From enclosure or media:content
    content: string; // From content:encoded
    author?: string;
}

export async function getBlogPosts(): Promise<BlogPost[]> {
    try {
        const response = await fetch(RSS_URL, { next: { revalidate: 3600 } }); // Cache for 1 hour
        const xmlText = await response.text();

        const parser = new XMLParser({
            ignoreAttributes: false,
            attributeNamePrefix: "@_",
        });
        const result = parser.parse(xmlText);

        const items = result?.rss?.channel?.item;

        if (!items) {
            console.warn("No items found in RSS feed");
            return [];
        }

        // Handle case where items is a single object (not an array)
        const postsArray = Array.isArray(items) ? items : [items];

        return postsArray.map((item: any) => {
            // Extract slug from link: https://blog.aluminumsolutions.ca/post/SLUG
            const link = item.link || "";
            const slug = link.split("/post/")[1] || link.split("/").pop() || "";

            // Extract Image
            let imageUrl = "";
            if (item.enclosure && item.enclosure["@_url"]) {
                imageUrl = item.enclosure["@_url"];
            } else if (item["media:content"] && typeof item["media:content"] === 'string') {
                imageUrl = item["media:content"]; // Sometimes simple string url
            } else if (item["media:content"] && item["media:content"]["@_url"]) {
                imageUrl = item["media:content"]["@_url"];
            }

            // Extract Content
            // rss-link feed often puts full HTML in description if content:encoded is empty, 
            // OR checks for content:encoded.
            // Based on previous tool output, content:encoded was empty tag <content:encoded/> 
            // but description had CDATA with img tag.
            // Wait, looking at the previous read_url_content, <content:encoded/> was empty. 
            // <description> had the text and image.
            // However, the user provided a link with `loadContent=true`, which MIGHT populate content:encoded.
            // Let's fallback gracefully.
            let content = item["content:encoded"] || item.description || "";

            // Extract Excerpt from description (strip HTML)
            // Function to strip HTML tags
            const stripHtml = (html: string) => html.replace(/<[^>]*>?/gm, '');
            const excerpt = item.description ? stripHtml(item.description).substring(0, 160) + "..." : "";

            return {
                slug,
                title: item.title,
                excerpt,
                date: new Date(item.pubDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                }),
                category: item.category || "General",
                imageUrl,
                content,
                author: "Aluminum Solutions"
            };
        });

    } catch (error) {
        console.error("Error fetching RSS feed:", error);
        return [];
    }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    const posts = await getBlogPosts();
    return posts.find((post) => post.slug === slug);
}
