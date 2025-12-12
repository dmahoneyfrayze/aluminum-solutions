import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/ui/Hero";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { blogPosts } from "@/data/blog";
import RelatedArticles from "@/components/blog/RelatedArticles";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import PremiumFeatures from "@/components/ui/PremiumFeatures";

export const metadata: Metadata = {
    title: "Glass Railing Systems Toronto | Frameless & Post Glass Railings",
    description: "Elegant glass railing systems for stairs, porches, decks, and pools. Frameless, mini-post, and shoe track designs. Professional installation in Toronto & GTA.",
};

export default function GlassRailingsPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <Breadcrumbs />

            <JsonLd
                data={{
                    "@context": "https://schema.org",
                    "@type": "Product",
                    "name": "Glass Railing Systems",
                    "description": "Elegant frameless and post glass railing systems for stairs, porches, and decks. Professional installation in Toronto.",
                    "brand": {
                        "@type": "Brand",
                        "name": "Aluminum Solutions"
                    },
                    "offers": {
                        "@type": "Offer",
                        "priceCurrency": "CAD",
                        "availability": "https://schema.org/InStock",
                        "areaServed": "Toronto, GTA"
                    }
                }}
            />

            <main className="flex-grow">
                <Hero
                    title="Glass Railing Systems"
                    subtitle="Global Aluminum Solutions delivers elegant glass systems that blend functionality with aesthetic appeal. Our glass interior and exterior glass railings offer sleek and pristine visuals."
                    ctaText="Get a Quote"
                    ctaLink="/contact"
                    backgroundImage="/images/projects/glass-railing-stairs-hero.webp"
                />

                {/* Intro / Benefits */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-brand-copper font-bold tracking-widest uppercase text-sm mb-2 block">
                                Modern Elegance
                            </span>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-brand-dark">
                                Glass Elegance: Modern Railings For Contemporary Spaces
                            </h2>
                            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                                <p>
                                    Glass railings, blending style and safety with stainless steel and tempered glass, are a top choice for modern spaces. At Global Aluminum Solutions, we expertly balance functionality and aesthetics in our diverse range of glass railing styles, from post-mounted to frameless designs.
                                </p>
                                <p>
                                    Catering to homes, offices, and <Link href="/commercial" className="text-brand-copper hover:underline">commercial spaces</Link>, we ensure efficient, cost-effective project completion. Contact us for a quote and to explore how our glass railings can enhance your space.
                                </p>
                            </div>
                            <div className="mt-10">
                                <Link href="/contact" className="text-brand-dark font-bold border-b-2 border-brand-dark pb-1 hover:text-brand-copper hover:border-brand-copper transition-colors text-lg">
                                    Get a Free Quote &rarr;
                                </Link>
                            </div>
                        </div>
                        <div className="h-[500px] bg-slate-100 relative rounded-sm overflow-hidden shadow-2xl">
                            <Image
                                src="/images/projects/deck-glass-railing-privacy.webp"
                                alt="Modern Glass Railing System"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* Applications Grid */}
                <section className="py-24 bg-slate-50">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-serif font-bold mb-16 text-center text-brand-dark">Versatile Applications</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {/* Staircase */}
                            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100 flex flex-col md:flex-row gap-6 items-center">
                                <div className="w-full md:w-1/3 h-48 bg-slate-200 relative rounded overflow-hidden">
                                    <Image src="/images/projects/staircase-frameless-glass.webp" alt="Staircase Railing" fill className="object-cover" />
                                </div>
                                <div className="w-full md:w-2/3">
                                    <h3 className="text-xl font-bold text-brand-dark mb-2">Staircase Frameless Glass Railings</h3>
                                    <p className="text-slate-600 text-sm">
                                        Revitalize your home with our Staircase Glass Railings. These railings infuse a contemporary flair and create an illusion of a more open, airy space.
                                    </p>
                                </div>
                            </div>

                            {/* Front Porch */}
                            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100 flex flex-col md:flex-row gap-6 items-center">
                                <div className="w-full md:w-1/3 h-48 bg-slate-200 relative rounded overflow-hidden">
                                    <Image src="/images/projects/glass-enclosure-gatsby.png" alt="Porch Railing" fill className="object-cover" />
                                </div>
                                <div className="w-full md:w-2/3">
                                    <h3 className="text-xl font-bold text-brand-dark mb-2">Front Porch Railings</h3>
                                    <p className="text-slate-600 text-sm">
                                        A perfect match for premium homes. Made from tempered glass and supported by 316 stainless steel fixtures, they withstand the elements while maintaining their pristine appearance.
                                    </p>
                                </div>
                            </div>

                            {/* Deck */}
                            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100 flex flex-col md:flex-row gap-6 items-center">
                                <div className="w-full md:w-1/3 h-48 bg-slate-200 relative rounded overflow-hidden">
                                    <Image src="/images/projects/frameless-glass-deck-railing.webp" alt="Deck Railing" fill className="object-cover" />
                                </div>
                                <div className="w-full md:w-2/3">
                                    <h3 className="text-xl font-bold text-brand-dark mb-2">Frameless Glass Deck Railings</h3>
                                    <p className="text-slate-600 text-sm">
                                        Transform your deck into a panoramic haven. Designed to provide unobstructed views, allowing you to fully immerse in your surroundings.
                                    </p>
                                </div>
                            </div>

                            {/* Pool */}
                            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100 flex flex-col md:flex-row gap-6 items-center">
                                <div className="w-full md:w-1/3 h-48 bg-slate-200 relative rounded overflow-hidden">
                                    <Image src="/images/Frameless-Glass.webp" alt="Pool Guard" fill className="object-cover" />
                                </div>
                                <div className="w-full md:w-2/3">
                                    <h3 className="text-xl font-bold text-brand-dark mb-2">Swimming Pool Guards</h3>
                                    <p className="text-slate-600 text-sm">
                                        Combine clear visibility with robust safety. Ideal for pool areas, offering an unimpeded view while ensuring a secure boundary. Learn more about our <Link href="/services/pool-fences" className="text-brand-copper hover:underline">Pool Fences</Link>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features & Designs */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="text-center max-w-4xl mx-auto mb-16">
                            <h2 className="text-3xl font-serif font-bold text-brand-dark mb-6">Glass Features & Designs</h2>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                Transform the aesthetics of your residential or business area with our frameless glass! Global Aluminum Solutions provides diverse foundational hardware, from posts to baseshoe. Our glass railings enhance interiors in subtle yet impactful ways: they preserve the continuity of space, making ceilings appear loftier. Not only does the glass match the strength of other materials, but it also marries safety with refined elegance.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Stand-offs */}
                            <div className="bg-slate-50 rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col">
                                <div className="h-64 relative bg-white p-6">
                                    <Image
                                        src="/images/projects/glass-railing-standoffs.webp"
                                        alt="Stand-off Glass Railing System"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <div className="p-8 flex-grow">
                                    <h3 className="text-2xl font-bold text-brand-dark mb-2">Stand-offs</h3>
                                    <p className="text-brand-copper font-bold text-sm uppercase tracking-wider mb-4">Point-supported railing system</p>
                                    <ul className="space-y-3">
                                        {[
                                            "Compact design with base, cap, and mounting stud",
                                            "For use with 8mm and 10mm monolithic tempered glass",
                                            "High-grade alloy 316 stainless steel standard",
                                            "For mounting to steel, concrete, or wood substrate"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                                                <span className="text-brand-copper mt-1">✓</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Baseshoe */}
                            <div className="bg-slate-50 rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col">
                                <div className="h-64 relative bg-white p-6">
                                    <Image
                                        src="/images/projects/glass-railing-baseshoe.webp"
                                        alt="Baseshoe Glass Railing System"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <div className="p-8 flex-grow">
                                    <h3 className="text-2xl font-bold text-brand-dark mb-2">Baseshoe</h3>
                                    <p className="text-brand-copper font-bold text-sm uppercase tracking-wider mb-4">Glass railing systems on a shoe track</p>
                                    <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                                        The shoe track is favored in commercial glass railing due to its robust nature, especially in areas with substantial weight-bearing demands. Depending on aesthetic preferences, the shoe base can be embedded within the floor or attached to the fascia, resulting in a sleek and discreet appearance.
                                    </p>
                                    <ul className="space-y-3">
                                        {[
                                            "For use with 8mm and 10mm monolithic tempered glass",
                                            "10-feet stock lengths available",
                                            "Paintable shoe base cladding allows users to match their architectural finishes"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                                                <span className="text-brand-copper mt-1">✓</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Mini-posts */}
                            <div className="bg-slate-50 rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col">
                                <div className="h-64 relative bg-white p-6">
                                    <Image
                                        src="/images/projects/glass-railing-mini-posts.webp"
                                        alt="Mini-post Glass Railing System"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <div className="p-8 flex-grow">
                                    <h3 className="text-2xl font-bold text-brand-dark mb-2">Mini-posts</h3>
                                    <p className="text-brand-copper font-bold text-sm uppercase tracking-wider mb-4">Glass railing system on mini-posts (Spigots)</p>
                                    <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                                        Mini posts maintain the continuous visual flow of the glass railing. They’re ideal for staircases and patios where traditional shoe or stand-off points might be unfeasible due to specific structural constraints.
                                    </p>
                                    <ul className="space-y-3">
                                        {[
                                            "For use with 8mm and 10mm monolithic tempered glass",
                                            "High-grade 316 stainless steel alloy",
                                            "Easy-to-Install surface mount design",
                                            "Posts come in several types, heights, and configurations"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                                                <span className="text-brand-copper mt-1">✓</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Tall Posts */}
                            <div className="bg-slate-50 rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col">
                                <div className="h-64 relative bg-white p-6">
                                    <Image
                                        src="/images/projects/glass-railing-tall-posts.webp"
                                        alt="Tall Post Glass Railing System"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <div className="p-8 flex-grow">
                                    <h3 className="text-2xl font-bold text-brand-dark mb-2">Tall Posts</h3>
                                    <p className="text-brand-copper font-bold text-sm uppercase tracking-wider mb-4">Glass Railing System On Posts</p>
                                    <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                                        Optimal for indoor and outdoor spaces, this glass railing system is a top choice among business property owners and designers, credited for its dependable nature and striking industrial appeal.
                                    </p>
                                    <ul className="space-y-3">
                                        {[
                                            "Choice of square or round posts and clamps",
                                            "Prepped for immediate installation in both commercial and home settings",
                                            "Crafted to accommodate 8mm singularly tempered glass",
                                            "Standard post elevations are 36″ and 42″",
                                            "Bespoke post heights can be arranged"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                                                <span className="text-brand-copper mt-1">✓</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Premium Hardware Features */}
                <PremiumFeatures />

                {/* Benefits Section */}
                <section className="py-24 bg-brand-navy text-white">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-serif font-bold mb-12 text-center">Glass Railings Benefits</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="text-4xl mb-4">✨</div>
                                <h3 className="font-bold text-xl mb-2 text-brand-copper">Elegant Note</h3>
                                <p className="text-slate-300 text-sm">The combination of tempered glass and steel gives any space an urban, modern, and sleek look.</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl mb-4">🔄</div>
                                <h3 className="font-bold text-xl mb-2 text-brand-copper">Versatile Blend</h3>
                                <p className="text-slate-300 text-sm">Glass railings can be placed in concrete, wood, or glass surroundings and look fabulous.</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl mb-4">🔭</div>
                                <h3 className="font-bold text-xl mb-2 text-brand-copper">Larger Spaces</h3>
                                <p className="text-slate-300 text-sm">Transparent railings don't divide the space like wood or brick, making every area feel larger.</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl mb-4">🧼</div>
                                <h3 className="font-bold text-xl mb-2 text-brand-copper">Low Maintenance</h3>
                                <p className="text-slate-300 text-sm">Virtually no investment after installation. Wiping with a clean, moist cloth keeps them looking new.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Related Articles */}
                <RelatedArticles
                    posts={blogPosts.filter(post =>
                        ['cleaning-maintaining-glass-railings', '2025-outdoor-design-trends', 'ontario-building-code-railing-safety'].includes(post.slug)
                    )}
                    title="Glass Railing Insights"
                />

                {/* CTA Section */}
                <section className="py-24 bg-slate-50 text-center">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-brand-dark">
                            Ready to Transform Your Space?
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto mb-10 text-lg">
                            Get a free quote for your custom glass railings today!
                        </p>
                        <Link href="/contact" className="inline-block px-10 py-4 bg-brand-navy text-white font-bold tracking-wide hover:bg-slate-800 transition-colors shadow-lg rounded-sm">
                            Request Quote
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
