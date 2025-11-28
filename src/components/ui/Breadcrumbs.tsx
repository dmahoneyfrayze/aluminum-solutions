"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import JsonLd from "@/components/seo/JsonLd";

interface BreadcrumbItem {
    label: string;
    href: string;
}

export default function Breadcrumbs({ items }: { items?: BreadcrumbItem[] }) {
    const pathname = usePathname();

    // If no items provided, generate from pathname
    const breadcrumbs = items || generateBreadcrumbs(pathname);

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.label,
            "item": `https://aluminumsolutions.ca${item.href}`
        }))
    };

    return (
        <nav aria-label="Breadcrumb" className="py-4 bg-slate-50 border-b border-slate-100">
            <div className="container mx-auto px-6">
                <JsonLd data={jsonLd} />
                <ol className="flex flex-wrap items-center text-sm text-slate-500">
                    <li>
                        <Link href="/" className="hover:text-brand-copper transition-colors">
                            Home
                        </Link>
                    </li>
                    {breadcrumbs.map((item, index) => (
                        <li key={item.href} className="flex items-center">
                            <span className="mx-2 text-slate-300">/</span>
                            {index === breadcrumbs.length - 1 ? (
                                <span className="font-medium text-slate-900" aria-current="page">
                                    {item.label}
                                </span>
                            ) : (
                                <Link href={item.href} className="hover:text-brand-copper transition-colors">
                                    {item.label}
                                </Link>
                            )}
                        </li>
                    ))}
                </ol>
            </div>
        </nav>
    );
}

function generateBreadcrumbs(pathname: string): BreadcrumbItem[] {
    const paths = pathname.split("/").filter(Boolean);
    return paths.map((path, index) => {
        const href = `/${paths.slice(0, index + 1).join("/")}`;
        const label = path.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
        return { label, href };
    });
}
