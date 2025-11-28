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

export const metadata: Metadata = {
    title: "Aluminum Railings Toronto | Custom Porch & Deck Railings",
    description: "High-quality aluminum railings for porches, balconies, and decks. Rust-free, maintenance-free, and professionally installed in Toronto & GTA.",
};

export default function RailingsPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <Breadcrumbs />

            <JsonLd
                data={{
                    "@context": "https://schema.org",
                    "@type": "Product",
                    "name": "Aluminum Railings",
                    "description": "High-quality, rust-free aluminum railings for porches and decks. Custom made in Toronto.",
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
                    title="Custom Aluminum Railings"
                    subtitle="The perfect blend of safety, style, and durability. Maintenance-free solutions for your porch, deck, or balcony."
                    ctaText="Get a Quote"
                    ctaLink="/contact"
                    backgroundImage="/images/projects/railing-aluminum-deck-toronto.jpg"
                />

                {/* Overview */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-brand-copper font-bold tracking-widest uppercase text-sm mb-2 block">
                                Built for Canada
                            </span>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-brand-dark">
                                Why Choose Aluminum Railings?
                            </h2>
                            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                                <p>
                                    Unlike wood that rots or wrought iron that rusts, aluminum is the superior choice for Canadian homes. It withstands our harsh winters and humid summers without ever needing painting or staining.
                                </p>
                                <p>
                                    <strong>Factory Direct Quality:</strong> At Aluminum Solutions, we fabricate our railings locally to ensure the highest quality control. Our powder-coated finishes are designed to resist fading, chipping, and peeling for decades.
                                </p>
                            </div>
                            <div className="mt-10">
                                <Link href="/contact" className="text-brand-dark font-bold border-b-2 border-brand-dark pb-1 hover:text-brand-copper hover:border-brand-copper transition-colors text-lg">
                                    Schedule a Free Measurement &rarr;
                                </Link>
                            </div>
                        </div>
                        <div className="h-[500px] bg-slate-100 relative rounded-sm overflow-hidden shadow-2xl">
                            <Image
                                src="/images/projects/railing-aluminum-brown-glass.jpg"
                                alt="High-quality aluminum railing installation"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* Explore Our Products */}
                <section className="py-24 bg-slate-50">
                    <div className="container mx-auto px-6">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-6">
                                Explore Our Aluminum Products
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                From decks to balconies, we have a solution for every part of your home.
                            </p>
                        </div>

                        <div className="space-y-20">
                            {/* Deck Railings */}
                            <div className="flex flex-col md:flex-row gap-12 items-center">
                                <div className="w-full md:w-1/2">
                                    <div className="aspect-video relative rounded-lg overflow-hidden shadow-lg">
                                        <Image src="/images/projects/railing-aluminum-deck-toronto.jpg" alt="Aluminum Deck Railings" fill className="object-cover" />
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2">
                                    <h3 className="text-2xl font-bold text-brand-dark mb-4">Toronto Aluminum Deck Railings</h3>
                                    <p className="text-slate-600 mb-6 leading-relaxed">
                                        Elevate your outdoor living experience with our premium Aluminum Deck Railings. Crafted from high-grade aluminum, they are designed to withstand harsh weather conditions, ensuring durability and longevity. Our deck railings come in a variety of designs and finishes, allowing you to customize them to match your home’s aesthetic.
                                    </p>
                                    <Link href="/contact" className="text-brand-copper font-bold hover:underline">
                                        Get a Quote for Deck Railings &rarr;
                                    </Link>
                                </div>
                            </div>

                            {/* Porch Railings */}
                            <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
                                <div className="w-full md:w-1/2">
                                    <div className="aspect-video relative rounded-lg overflow-hidden shadow-lg">
                                        <Image src="/images/projects/glass-enclosure-porch-front.jpg" alt="Aluminum Porch Railings" fill className="object-cover" />
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2">
                                    <h3 className="text-2xl font-bold text-brand-dark mb-4">Toronto Aluminum Porch Railings</h3>
                                    <p className="text-slate-600 mb-6 leading-relaxed">
                                        Our Aluminum Porch Railings are the perfect blend of functionality and curb appeal. Designed to enhance safety and accessibility, these railings add an elegant touch that can significantly increase your home’s value. Made from top-quality aluminum, they are resistant to rust and corrosion.
                                    </p>
                                    <Link href="/contact" className="text-brand-copper font-bold hover:underline">
                                        Get a Quote for Porch Railings &rarr;
                                    </Link>
                                </div>
                            </div>

                            {/* Balcony Railings */}
                            <div className="flex flex-col md:flex-row gap-12 items-center">
                                <div className="w-full md:w-1/2">
                                    <div className="aspect-video relative rounded-lg overflow-hidden shadow-lg">
                                        <Image src="/images/projects/railing-balcony-apartment-replacement.jpg" alt="Aluminum Balcony Railings" fill className="object-cover" />
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2">
                                    <h3 className="text-2xl font-bold text-brand-dark mb-4">Toronto Aluminum Balcony Railings</h3>
                                    <p className="text-slate-600 mb-6 leading-relaxed">
                                        Transform your balcony into a safe and stylish sanctuary. These railings are designed to provide optimal safety without obstructing your view, making them perfect for high-rise apartments and residential homes alike.
                                    </p>
                                    <Link href="/contact" className="text-brand-copper font-bold hover:underline">
                                        Get a Quote for Balcony Railings &rarr;
                                    </Link>
                                </div>
                            </div>

                            {/* Privacy Screens */}
                            <div className="group bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-all">
                                <div className="h-64 bg-slate-200 relative">
                                    <Image src="/images/projects/privacy-screen-black-aluminum.jpg" alt="Aluminum Privacy Screens" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-brand-dark mb-4">Toronto Aluminum Privacy Screens</h3>
                                    <p className="text-slate-600 mb-6 leading-relaxed">
                                        Our Aluminum Privacy Screens offer an ideal solution for homeowners seeking both privacy and style. Shield your outdoor spaces from prying eyes, creating a private haven in your backyard or patio.
                                    </p>
                                    <Link href="/services/privacy-screens" className="text-brand-copper font-bold hover:underline">
                                        Learn More About Privacy Screens &rarr;
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Comparison Table */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-serif font-bold text-brand-dark mb-4">Is Aluminum The Best Material?</h2>
                            <p className="text-slate-600">See how aluminum stacks up against the competition.</p>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse text-left text-sm md:text-base">
                                <thead>
                                    <tr className="bg-brand-navy text-white">
                                        <th className="p-4 border border-slate-700">Aspect</th>
                                        <th className="p-4 border border-slate-700 bg-brand-copper">Aluminum Railings</th>
                                        <th className="p-4 border border-slate-700">PVC (Vinyl)</th>
                                        <th className="p-4 border border-slate-700">Steel Railings</th>
                                        <th className="p-4 border border-slate-700">Wood Railings</th>
                                    </tr>
                                </thead>
                                <tbody className="text-slate-700">
                                    <tr>
                                        <td className="p-4 border border-slate-200 font-bold">Maintenance</td>
                                        <td className="p-4 border border-slate-200 bg-orange-50 font-bold text-brand-dark">Minimal (Cleaning only)</td>
                                        <td className="p-4 border border-slate-200">Low</td>
                                        <td className="p-4 border border-slate-200">Moderate (Repainting)</td>
                                        <td className="p-4 border border-slate-200">High (Staining/Sealing)</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 border border-slate-200 font-bold">Longevity</td>
                                        <td className="p-4 border border-slate-200 bg-orange-50 font-bold text-brand-dark">High (No Rust)</td>
                                        <td className="p-4 border border-slate-200">Moderate (Can Crack)</td>
                                        <td className="p-4 border border-slate-200">High (If maintained)</td>
                                        <td className="p-4 border border-slate-200">Low to Moderate (Rot)</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 border border-slate-200 font-bold">Aesthetics</td>
                                        <td className="p-4 border border-slate-200 bg-orange-50 font-bold text-brand-dark">Modern & Sleek</td>
                                        <td className="p-4 border border-slate-200">Plastic Look</td>
                                        <td className="p-4 border border-slate-200">Industrial</td>
                                        <td className="p-4 border border-slate-200">Natural / Rustic</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 border border-slate-200 font-bold">Cost</td>
                                        <td className="p-4 border border-slate-200 bg-orange-50 font-bold text-brand-dark">Best Long-Term Value</td>
                                        <td className="p-4 border border-slate-200">Low Upfront</td>
                                        <td className="p-4 border border-slate-200">High</td>
                                        <td className="p-4 border border-slate-200">Varies</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Styles & Colors */}
                <section className="py-24 bg-slate-50">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-serif font-bold text-center text-brand-dark mb-16">Styles & Colors</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
                            <div>
                                <h3 className="text-xl font-bold mb-6 border-b border-slate-200 pb-2">Picket Styles</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-center justify-between p-4 bg-white rounded shadow-sm">
                                        <span className="font-bold">Cascade</span>
                                        <span className="text-sm text-slate-500">Classic Top Rail</span>
                                    </li>
                                    <li className="flex items-center justify-between p-4 bg-white rounded shadow-sm">
                                        <span className="font-bold">Milena</span>
                                        <span className="text-sm text-slate-500">Modern Profile</span>
                                    </li>
                                    <li className="flex items-center justify-between p-4 bg-white rounded shadow-sm">
                                        <span className="font-bold">Evolution</span>
                                        <span className="text-sm text-slate-500">Sleek & Minimal</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-6 border-b border-slate-200 pb-2">Glass Styles</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-center justify-between p-4 bg-white rounded shadow-sm">
                                        <span className="font-bold">Aqua</span>
                                        <span className="text-sm text-slate-500">Clear View</span>
                                    </li>
                                    <li className="flex items-center justify-between p-4 bg-white rounded shadow-sm">
                                        <span className="font-bold">Argo</span>
                                        <span className="text-sm text-slate-500">Tinted Options</span>
                                    </li>
                                    <li className="flex items-center justify-between p-4 bg-white rounded shadow-sm">
                                        <span className="font-bold">Rapsody</span>
                                        <span className="text-sm text-slate-500">Frosted Privacy</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="text-center">
                            <h3 className="text-xl font-bold mb-8">Available Colors</h3>
                            <div className="flex flex-wrap justify-center gap-6">
                                {[
                                    { name: 'Black', hex: '#000000' },
                                    { name: 'White', hex: '#FFFFFF', border: true },
                                    { name: 'Brown', hex: '#5D4037' },
                                    { name: 'Gunmetal', hex: '#455A64' },
                                    { name: 'Sandstone', hex: '#D7CCC8' },
                                    { name: 'Tan', hex: '#A1887F' },
                                ].map((color) => (
                                    <div key={color.name} className="flex flex-col items-center gap-2">
                                        <div
                                            className={`w-16 h-16 rounded-full shadow-md ${color.border ? 'border border-slate-200' : ''}`}
                                            style={{ backgroundColor: color.hex }}
                                        />
                                        <span className="text-sm font-medium text-slate-600">{color.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Aluminum Deck Railings Content */}
                <section className="py-24 bg-slate-50">
                    <div className="container mx-auto px-6">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-6">
                                Aluminum Deck Railings: Elegance & Durability
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                Your deck is more than just an outdoor space; it’s a sanctuary. Elevate its charm with our Aluminum Deck Railings, crafted from premium aluminum and tempered glass. These railings offer a seamless blend of style and functionality, allowing you to enjoy an uninterrupted view of your lush garden.
                            </p>
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100">
                                <h3 className="text-xl font-bold text-brand-dark mb-4">Weather Resistance</h3>
                                <p className="text-slate-600">
                                    Aluminum railings excel in weather resistance, enduring harsh Canadian climates without rusting or corroding. This resilience ensures lasting beauty and functionality.
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100">
                                <h3 className="text-xl font-bold text-brand-dark mb-4">Low Maintenance</h3>
                                <p className="text-slate-600">
                                    Enjoy the convenience of low maintenance. They require just simple cleaning, no repainting or pest control, saving time and effort.
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100">
                                <h3 className="text-xl font-bold text-brand-dark mb-4">Versatility</h3>
                                <p className="text-slate-600">
                                    Whether for modern or traditional aesthetics, they can be customized to fit any setting, including homes, offices, or cottages.
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100">
                                <h3 className="text-xl font-bold text-brand-dark mb-4">Increased Property Value</h3>
                                <p className="text-slate-600">
                                    Installing aluminum railings enhances your property’s market value. Their sleek design and durability appeal to potential buyers.
                                </p>
                            </div>
                        </div>

                    </div>
                </section>

                {/* Portfolio / Gallery Preview */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <h3 className="text-3xl font-serif font-bold text-center text-brand-dark mb-12">Recent Projects</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="aspect-square relative rounded-lg overflow-hidden shadow-md group">
                                <Image
                                    src="/images/projects/deck-glass-railing-pergola.jpg"
                                    alt="Deck with glass railing and pergola"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="aspect-square relative rounded-lg overflow-hidden shadow-md group">
                                <Image
                                    src="/images/projects/deck-glass-railing-privacy.jpg"
                                    alt="Deck with privacy screen"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="aspect-square relative rounded-lg overflow-hidden shadow-md group">
                                <Image
                                    src="/images/projects/black-aluminum-railing-stone.png"
                                    alt="Black aluminum railing on stone steps"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Clients */}
                <section className="py-16 bg-white border-b border-slate-100">
                    <div className="container mx-auto px-6 text-center">
                        <h3 className="text-xl font-bold text-slate-400 uppercase tracking-widest mb-10">Our Toronto Aluminum Railings Clients Who Trust Us</h3>
                        <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                            <div className="relative h-12 w-32">
                                <Image src="/images/clients/university-waterloo.png" alt="University of Waterloo" fill className="object-contain" />
                            </div>
                            <div className="relative h-12 w-32">
                                <Image src="/images/clients/downsview-group.png" alt="The Downsview Group" fill className="object-contain" />
                            </div>
                            <div className="relative h-12 w-32">
                                <Image src="/images/clients/scotiabank.png" alt="Scotiabank" fill className="object-contain" />
                            </div>
                            <div className="relative h-12 w-32">
                                <Image src="/images/clients/sunny-morning.png" alt="Sunny Morning" fill className="object-contain" />
                            </div>
                            <div className="relative h-12 w-32">
                                <Image src="/images/clients/savaria.png" alt="Savaria" fill className="object-contain" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section className="py-20 bg-brand-copper/5">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-serif font-bold text-center text-brand-dark mb-12">Why Our Clients Choose Us</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            <div className="bg-white p-8 shadow-sm rounded-xl border border-slate-100">
                                <div className="flex text-brand-copper mb-4">★★★★★</div>
                                <p className="text-slate-600 italic mb-6">"Val and his team installed glass panel aluminum railings at my house. I was blown away by how professional and quick they were... They were very reasonably priced and super professional. I would highly recommend!"</p>
                                <div className="font-bold text-brand-navy">- Milos Radicevic</div>
                            </div>
                            <div className="bg-white p-8 shadow-sm rounded-xl border border-slate-100">
                                <div className="flex text-brand-copper mb-4">★★★★★</div>
                                <p className="text-slate-600 italic mb-6">"I wasn't sure about getting glass railings for our deck as we have a young child... but I'm so glad I was able to find this company. Vlad and his team worked and installed the deck rails efficiently this week... Highly recommend!"</p>
                                <div className="font-bold text-brand-navy">- Graham Diana</div>
                            </div>
                            <div className="bg-white p-8 shadow-sm rounded-xl border border-slate-100">
                                <div className="flex text-brand-copper mb-4">★★★★★</div>
                                <p className="text-slate-600 italic mb-6">"Exceptional experience working with Global Aluminum Solutions. Everything was done in such a professional manner and exceeded expectations."</p>
                                <div className="font-bold text-brand-navy">- Saleem Akhtar</div>
                            </div>
                            <div className="bg-white p-8 shadow-sm rounded-xl border border-slate-100">
                                <div className="flex text-brand-copper mb-4">★★★★★</div>
                                <p className="text-slate-600 italic mb-6">"Global Aluminum was very professional and expedient. From their quotation accuracy, to on-site measure and final installation, time spanned less thank 2 weeks. Most importantly amazing quality and value."</p>
                                <div className="font-bold text-brand-navy">- Steve Sottile</div>
                            </div>
                        </div>
                        <div className="text-center mt-10">
                            <Link href="/reviews" className="text-brand-navy font-bold hover:underline">
                                Read More Reviews &rarr;
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Sticky Mobile CTA (Visible on mobile only) */}
                <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 z-40 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
                    <Link href="/contact" className="block w-full py-3 bg-brand-copper text-white text-center font-bold rounded shadow-lg">
                        Get a Free Quote
                    </Link>
                </div>

                {/* Related Articles */}
                <RelatedArticles
                    posts={blogPosts.filter(post =>
                        ['the-advantages-of-aluminum-railings', 'increasing-home-value-curb-appeal', 'ontario-building-code-railing-safety'].includes(post.slug)
                    )}
                    title="Railings & Renovation Tips"
                />

                {/* CTA Section */}
                <section className="py-24 bg-brand-navy text-white text-center">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
                            Upgrade Your Curb Appeal
                        </h2>
                        <p className="text-slate-300 max-w-2xl mx-auto mb-10 text-lg">
                            Don't settle for rotting wood or rusting iron. Invest in a lifetime solution.
                        </p>
                        <Link href="/contact" className="inline-block px-10 py-4 bg-brand-copper text-white font-bold tracking-wide hover:bg-orange-700 transition-colors shadow-lg rounded-sm">
                            Get a Free Estimate
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
