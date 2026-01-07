import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocationBySlug, locations } from "@/data/locations";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/ui/Hero";
import Link from "next/link";
import Image from "next/image";
import { getBlogPosts } from "@/lib/blog-rss";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

interface Props {
    params: Promise<{
        city: string;
    }>;
}

export async function generateStaticParams() {
    return locations.map((location) => ({
        city: location.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { city } = await params;
    const location = getLocationBySlug(city);

    if (!location) {
        return {
            title: "Location Not Found",
        };
    }

    return {
        title: `Aluminum Railings & Glass Enclosures in ${location.name} | Aluminum Solutions`,
        description: location.metaDescription,
        openGraph: {
            title: `Aluminum Railings & Glass Enclosures in ${location.name}`,
            description: location.metaDescription,
            images: [
                {
                    url: "/images/og-default.webp",
                    alt: `Aluminum Railings & Glass Enclosures in ${location.name}`,
                }
            ],
        },
    };
}

export default async function LocationPage({ params }: Props) {
    const { city } = await params;
    const location = getLocationBySlug(city);

    if (!location) {
        notFound();
    }

    // Schema Markup for Local SEO
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": `Aluminum Railings Installation in ${location.name}`,
        "provider": {
            "@type": "LocalBusiness",
            "name": "Aluminum Solutions",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Vaughan",
                "addressRegion": "ON",
                "addressCountry": "CA"
            },
            "telephone": "+14165550123",
        },
        "description": location.metaDescription,
        "url": `https://aluminumsolutions.ca/locations/${location.slug}/`,
        "mainEntity": {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": `Do I need a permit for railings in ${location.name}?`,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": `Generally, if you are replacing existing railings with the same height and layout, a permit might not be required. However, for new decks or structural changes, ${location.name} building codes usually require a permit.`
                    }
                },
                {
                    "@type": "Question",
                    "name": `Are your railings suitable for the ${location.name} winter?`,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": `Absolutely. Our aluminum products are designed specifically for the Canadian climate. They will not rust, rot, or crack even in the harshest winter conditions common in ${location.name}.`
                    }
                },
                {
                    "@type": "Question",
                    "name": `How long does installation take in ${location.name}?`,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Since we manufacture locally, our lead times are often shorter than competitors. Once your custom railings are ready, installation typically takes 1-2 days."
                    }
                }
            ]
        }
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <Breadcrumbs
                items={[
                    { label: "Locations", href: "/#locations" }, // Anchor link since we don't have a /locations index yet
                    { label: location.name, href: `/locations/${location.slug}` }
                ]}
            />

            <main className="flex-grow">
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />

                <Hero
                    title={`Premium Aluminum & Glass Railings in ${location.name}`}
                    subtitle={`Transform your ${location.name} home with our high-end glass enclosures, custom gates, and durable aluminum solutions.`}
                    ctaText="Get a Free Estimate"
                    ctaLink="/contact"
                    backgroundImage={location.heroImage}
                />

                {/* Localized Intro */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl mx-auto text-center mb-12">
                            <h2 className="text-3xl font-serif font-bold mb-6 text-slate-900">
                                Serving {location.name} with Excellence
                            </h2>
                            <p className="text-slate-600 leading-relaxed mb-8">
                                For over a decade, Aluminum Solutions has been the trusted choice for homeowners in <strong>{location.name}</strong> looking to upgrade their exterior.
                                Whether you're in a modern condo or a traditional detached home, our custom aluminum and glass products are designed to withstand the Canadian climate while adding significant curb appeal.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                                    ✓ {location.name} Building Code Compliant
                                </span>
                                <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                                    ✓ Local Installation Team
                                </span>
                                <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                                    ✓ Lifetime Warranty
                                </span>
                            </div>
                        </div>

                        {/* Neighborhoods / Service Areas */}
                        <div className="border-t border-slate-100 pt-12">
                            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider text-center mb-8">
                                Proudly Serving Neighborhoods in {location.name}
                            </h3>
                            <div className="flex flex-wrap justify-center gap-3">
                                {location.content.landmarks.map((landmark) => (
                                    <span key={landmark} className="px-4 py-2 border border-slate-200 rounded-sm text-slate-600 text-sm hover:border-brand-copper hover:text-brand-copper transition-colors cursor-default">
                                        📍 {landmark}
                                    </span>
                                ))}
                                {location.content.serviceArea.split(',').map((area) => (
                                    <span key={area} className="px-4 py-2 border border-slate-200 rounded-sm text-slate-600 text-sm hover:border-brand-copper hover:text-brand-copper transition-colors cursor-default">
                                        📍 {area.trim()}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Dynamic Services Grid */}
                <section className="py-20 bg-slate-50">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-serif font-bold mb-12 text-center text-slate-900">
                            Our Services in {location.name}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Glass Railings */}
                            <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                                <div className="h-48 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/0 transition-colors z-10" />
                                    {/* Using a generic image for now, ideally dynamic */}
                                    <div className="absolute inset-0 bg-[url('/images/projects/deck-glass-railing-privacy.jpg')] bg-cover bg-center group-hover:scale-110 transition-transform duration-700" />
                                </div>
                                <div className="p-8">
                                    <h3 className="text-xl font-bold mb-3 font-serif text-slate-900">Glass Railings</h3>
                                    <p className="text-slate-600 mb-6 text-sm">Modern, unobstructed views for your {location.name} property. Perfect for decks and balconies.</p>
                                    <Link
                                        href="/services/glass-railings"
                                        className="text-brand-copper font-bold uppercase text-sm tracking-wider hover:text-brand-dark transition-colors"
                                        aria-label="View details about Glass Railings"
                                    >
                                        View Details &rarr;
                                    </Link>
                                </div>
                            </div>

                            {/* Porch Enclosures */}
                            <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                                <div className="h-48 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/0 transition-colors z-10" />
                                    <div className="absolute inset-0 bg-[url('/images/generated/glass_enclosure_project_1764312838961.webp')] bg-cover bg-center group-hover:scale-110 transition-transform duration-700" />
                                </div>
                                <div className="p-8">
                                    <h3 className="text-xl font-bold mb-3 font-serif text-slate-900">Porch Enclosures</h3>
                                    <p className="text-slate-600 mb-6 text-sm">Keep the snow and wind out of your {location.name} front entrance with a custom glass enclosure.</p>
                                    <Link
                                        href="/services/porch-enclosures"
                                        className="text-brand-copper font-bold uppercase text-sm tracking-wider hover:text-brand-dark transition-colors"
                                        aria-label="View details about Porch Enclosures"
                                    >
                                        View Details &rarr;
                                    </Link>
                                </div>
                            </div>

                            {/* Aluminum Columns */}
                            <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                                <div className="h-48 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/0 transition-colors z-10" />
                                    <div className="absolute inset-0 bg-[url('/images/generated/railing_hero_detail_1764312850877.webp')] bg-cover bg-center group-hover:scale-110 transition-transform duration-700" />
                                </div>
                                <div className="p-8">
                                    <h3 className="text-xl font-bold mb-3 font-serif text-slate-900">Aluminum Columns</h3>
                                    <p className="text-slate-600 mb-6 text-sm">Replace rotting wood columns with durable, load-bearing aluminum columns.</p>
                                    <Link
                                        href="/services/columns"
                                        className="text-brand-copper font-bold uppercase text-sm tracking-wider hover:text-brand-dark transition-colors"
                                        aria-label="View details about Aluminum Columns"
                                    >
                                        View Details &rarr;
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Code Compliance & Safety Section (New Authority Block) */}
                <section className="py-20 bg-white border-t border-slate-100">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col md:flex-row gap-12 items-center">
                            <div className="w-full md:w-1/2">
                                <h2 className="text-3xl font-serif font-bold mb-6 text-slate-900">
                                    {location.name} Building Code & Railing Compliance
                                </h2>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    Safety is our top priority. All our aluminum and glass installations in {location.name} are rigorously engineered to meet or exceed the <strong>Ontario Building Code (SB-13)</strong>. We handle the technical details so you pass inspection the first time.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <span className="text-brand-copper font-bold mr-3">✓</span>
                                        <div>
                                            <strong className="block text-slate-900">Guard Height Requirements</strong>
                                            <span className="text-slate-600 text-sm">Strict adherence to the 1070mm (42") minimum height rule for decks and balconies over 5'11".</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-brand-copper font-bold mr-3">✓</span>
                                        <div>
                                            <strong className="block text-slate-900">Maximum Picket Spacing</strong>
                                            <span className="text-slate-600 text-sm">Pickets spaced no more than 100mm (4") apart to prevent climbing and ensure child safety.</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-brand-copper font-bold mr-3">✓</span>
                                        <div>
                                            <strong className="block text-slate-900">Glass Thickness Standards</strong>
                                            <span className="text-slate-600 text-sm">We use exclusively 10mm-12mm tempered or laminated safety glass, never standard float glass.</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-brand-copper font-bold mr-3">✓</span>
                                        <div>
                                            <strong className="block text-slate-900">Pool Fence Bylaws</strong>
                                            <span className="text-slate-600 text-sm">Compliant with specific {location.name} pool enclosure bylaws, including non-climbable zones and self-closing gates.</span>
                                        </div>
                                    </li>
                                </ul>
                                <div className="mt-8 p-4 bg-blue-50 border border-blue-100 rounded-lg">
                                    <p className="text-sm text-blue-800">
                                        <strong>Did you know?</strong> All {location.name} projects are fabricated at our Vaughan manufacturing facility and installed by our in-house team — no subcontractors. This ensures full quality control from design to inspection.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2">
                                <div className="bg-slate-900 text-white p-8 rounded-xl shadow-xl">
                                    <h3 className="text-xl font-bold mb-6 text-brand-copper">Why Railing Inspections Fail in {location.name}</h3>
                                    <div className="space-y-6">
                                        <div className="border-b border-slate-700 pb-4">
                                            <strong className="block mb-1 text-lg">⚠ Incorrect Height</strong>
                                            <p className="text-slate-400 text-sm">DIY kits often come in standard 36" heights, which fail code for higher decks.</p>
                                        </div>
                                        <div className="border-b border-slate-700 pb-4">
                                            <strong className="block mb-1 text-lg">⚠ Weak Post Anchoring</strong>
                                            <p className="text-slate-400 text-sm">Posts attached only to decking boards (instead of blocking/joists) will wobble and fail load tests.</p>
                                        </div>
                                        <div className="border-b border-slate-700 pb-4">
                                            <strong className="block mb-1 text-lg">⚠ Improper Glass Type</strong>
                                            <p className="text-slate-400 text-sm">Using non-safety glass is a major violation and a serious safety hazard.</p>
                                        </div>
                                        <div>
                                            <p className="italic text-slate-300">
                                                "Because we manufacture and install in-house, Aluminum Solutions eliminates these issues before inspection."
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-8 pt-6 border-t border-slate-700 text-center">
                                        <Link href="/contact" className="inline-block px-8 py-3 bg-brand-copper text-white font-bold rounded hover:bg-orange-700 transition-colors">
                                            Get a Code-Compliant Quote
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Local Reviews (Static for now, but structured) */}
                <section className="py-20 bg-brand-dark text-white">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-serif font-bold mb-12 text-center">
                            What {location.name} Homeowners Say
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white/5 p-8 rounded-lg border border-white/10">
                                <div className="flex text-brand-copper mb-4">★★★★★</div>
                                <p className="text-slate-300 italic mb-6">"The team was fantastic. They installed our glass railings in just two days and left the site spotless. Highly recommend for anyone in {location.name}."</p>
                                <div className="font-bold text-white">- Jennifer M., {location.name}</div>
                            </div>
                            <div className="bg-white/5 p-8 rounded-lg border border-white/10">
                                <div className="flex text-brand-copper mb-4">★★★★★</div>
                                <p className="text-slate-300 italic mb-6">"We needed a porch enclosure to keep the snow off. Aluminum Solutions delivered exactly what we wanted. Great quality."</p>
                                <div className="font-bold text-white">- David K., {location.name}</div>
                            </div>
                            <div className="bg-white/5 p-8 rounded-lg border border-white/10">
                                <div className="flex text-brand-copper mb-4">★★★★★</div>
                                <p className="text-slate-300 italic mb-6">"Best price we found in {location.name} without sacrificing quality. The black aluminum looks modern and sleek."</p>
                                <div className="font-bold text-white">- Sarah P., {location.name}</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Local FAQ Section */}
                <section className="py-20 bg-white border-t border-slate-100">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <h2 className="text-3xl font-serif font-bold mb-12 text-center text-slate-900">
                            Common Questions from {location.name} Homeowners
                        </h2>
                        <div className="space-y-6">
                            <div className="bg-slate-50 p-6 rounded-lg">
                                <h3 className="font-bold text-lg mb-2 text-brand-dark">Do I need a permit for railings in {location.name}?</h3>
                                <p className="text-slate-600">
                                    Generally, if you are replacing existing railings with the same height and layout, a permit might not be required. However, for new decks or structural changes, {location.name} building codes usually require a permit. We can help guide you through this process.
                                </p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-lg">
                                <h3 className="font-bold text-lg mb-2 text-brand-dark">Are your railings suitable for the {location.name} winter?</h3>
                                <p className="text-slate-600">
                                    Absolutely. Our aluminum products are designed specifically for the Canadian climate. They will not rust, rot, or crack even in the harshest winter conditions common in {location.name}.
                                </p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-lg">
                                <h3 className="font-bold text-lg mb-2 text-brand-dark">How long does installation take in {location.name}?</h3>
                                <p className="text-slate-600">
                                    Since we manufacture locally, our lead times are often shorter than competitors. Once your custom railings are ready, installation in {location.name} typically takes 1-2 days depending on the project size.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Related Articles Section */}
                <section className="py-20 bg-slate-50 border-t border-slate-200">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-serif font-bold mb-12 text-center text-slate-900">
                            Latest Insights & Tips
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {(await getBlogPosts()).slice(0, 3).map((post) => (
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
                            <Link href="/blog" className="inline-block px-8 py-3 border-2 border-slate-900 text-slate-900 font-bold rounded hover:bg-slate-900 hover:text-white transition-colors">
                                View All Articles
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 bg-slate-900 text-white text-center">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
                            Live in {location.name}?
                        </h2>
                        <p className="text-slate-300 max-w-2xl mx-auto mb-10 text-lg">
                            Get a free, no-obligation on-site consultation. Our expert team is in {location.name} weekly.
                        </p>
                        <Link href="/contact" className="inline-block px-10 py-4 bg-white text-slate-900 font-bold tracking-wide hover:bg-slate-100 transition-colors shadow-lg">
                            Book Your Free Estimate
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
