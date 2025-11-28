import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocationBySlug, locations } from "@/data/locations";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/ui/Hero";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/data/blog";
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
            images: ["/images/og-default.jpg"], // We should add dynamic images later
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
                "addressLocality": "Toronto",
                "addressRegion": "ON",
                "addressCountry": "CA"
            },
            "telephone": "+14165550123",
        },
        "description": location.metaDescription,
        "url": `https://aluminumsolutions.ca/locations/${location.slug}`
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
                    title={`Premium Aluminum Railings in ${location.name}`}
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
                                    <Link href="/services/glass-railings" className="text-brand-copper font-bold uppercase text-sm tracking-wider hover:text-brand-dark transition-colors">View Details &rarr;</Link>
                                </div>
                            </div>

                            {/* Porch Enclosures */}
                            <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                                <div className="h-48 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/0 transition-colors z-10" />
                                    <div className="absolute inset-0 bg-[url('/images/generated/glass_enclosure_project_1764312838961.png')] bg-cover bg-center group-hover:scale-110 transition-transform duration-700" />
                                </div>
                                <div className="p-8">
                                    <h3 className="text-xl font-bold mb-3 font-serif text-slate-900">Porch Enclosures</h3>
                                    <p className="text-slate-600 mb-6 text-sm">Keep the snow and wind out of your {location.name} front entrance with a custom glass enclosure.</p>
                                    <Link href="/services/porch-enclosures" className="text-brand-copper font-bold uppercase text-sm tracking-wider hover:text-brand-dark transition-colors">View Details &rarr;</Link>
                                </div>
                            </div>

                            {/* Aluminum Columns */}
                            <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                                <div className="h-48 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/0 transition-colors z-10" />
                                    <div className="absolute inset-0 bg-[url('/images/generated/railing_hero_detail_1764312850877.png')] bg-cover bg-center group-hover:scale-110 transition-transform duration-700" />
                                </div>
                                <div className="p-8">
                                    <h3 className="text-xl font-bold mb-3 font-serif text-slate-900">Aluminum Columns</h3>
                                    <p className="text-slate-600 mb-6 text-sm">Replace rotting wood columns with durable, load-bearing aluminum columns.</p>
                                    <Link href="/services/columns" className="text-brand-copper font-bold uppercase text-sm tracking-wider hover:text-brand-dark transition-colors">View Details &rarr;</Link>
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
                            {blogPosts.slice(0, 3).map((post) => (
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
