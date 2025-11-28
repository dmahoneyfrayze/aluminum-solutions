import { MetadataRoute } from 'next';
import { blogPosts } from '@/data/blog';
import { locations } from '@/data/locations';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://aluminumsolutions.ca';

    // Static routes
    const staticRoutes = [
        '',
        '/about',
        '/services',
        '/process',
        '/reviews',
        '/gallery',
        '/faq',
        '/contact',
        '/builders',
        '/referral',
        '/resources',
        '/privacy-policy',
        '/terms',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Service routes
    const serviceRoutes = [
        '/services/railings',
        '/services/glass-railings',
        '/services/glass-enclosures',
        '/services/porch-enclosures',
        '/services/pool-fences',
        '/services/privacy-screens',
        '/services/showers',
        '/services/gates',
        '/services/columns',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    // Blog posts
    const blogRoutes = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    // Location pages
    const locationRoutes = locations.map((location) => ({
        url: `${baseUrl}/locations/${location.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    return [...staticRoutes, ...serviceRoutes, ...blogRoutes, ...locationRoutes];
}
