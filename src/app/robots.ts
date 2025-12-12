import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/private/", "/api/"],
            },
            {
                userAgent: ["GPTBot", "ChatGPT-User", "Google-Extended", "CCBot", "ClaudeBot", "FacebookBot", "anthropic-ai", "Bytespider", "Amazonbot"],
                disallow: "/",
            }
        ],
        sitemap: "https://aluminumsolutions.ca/sitemap.xml",
    };
}
