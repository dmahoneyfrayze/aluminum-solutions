"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/ui/Hero";
import Link from "next/link";
import Image from "next/image";

export default function PrivacyScreensContent() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />

            <main className="flex-grow">
                <Hero
                    title="Custom Privacy Screens for Decks & Patios"
                    subtitle="Create a secluded oasis in your urban backyard with our stylish, durable privacy solutions."
                    ctaText="Get a Free Estimate"
                    ctaLink="/contact"
                    backgroundImage="/images/projects/privacy-screen-black-aluminum.jpg"
                />

                {/* Intro */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            <div className="w-full md:w-1/2">
                                <h2 className="text-sm font-bold text-brand-copper uppercase tracking-widest mb-4">Urban Living Solutions</h2>
                                <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
                                    Aluminum & Glass Privacy Screens
                                </h3>
                                <div className="prose text-slate-600 leading-relaxed">
                                    <p className="mb-4">
                                        In today’s urban living spaces, privacy is more important than ever. At Global Aluminum Solutions, we understand this need and offer a unique solution – Privacy Screens with an aluminum frame and acid-etched glass.
                                    </p>
                                    <p className="mb-4">
                                        These screens provide much-needed seclusion and add a touch of elegance to your outdoor living areas. They serve as a stylish barrier, limiting unwanted attention from neighbors and passersby while allowing natural light to filter through.
                                    </p>
                                    <p>
                                        Invest in a stylish, durable solution that perfectly blends privacy and light. You can enjoy your outdoor space without worrying about prying eyes, confident that your privacy screen is built to last.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2">
                                <div className="aspect-[4/3] bg-slate-100 rounded-xl overflow-hidden relative shadow-lg">
                                    <Image
                                        src="/images/projects/privacy-screen-frosted-glass.jpg"
                                        alt="Frosted glass privacy screen on a modern deck"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features */}
                <section className="py-20 bg-slate-50">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Perfect Height for Optimum Seclusion</h3>
                                <p className="text-slate-600">
                                    Our privacy screens are designed to stand as high as 6 feet, perfect for decks, patios, or any outdoor space where you want to create a private oasis. They serve as a stylish barrier, limiting unwanted attention from neighbors and passersby while allowing natural light to filter through.
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Durable Aluminum Frames</h3>
                                <p className="text-slate-600">
                                    The construction of these screens involves a sturdy aluminum frame known for its strength, durability, and resistance to weather elements. Aluminum, being lightweight yet robust, provides a solid structure that withstands all weather conditions, ensuring your screen stays intact for years.
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Acid-Etched or Tinted Glass</h3>
                                <p className="text-slate-600">
                                    The privacy screen is completed with panels of acid-etched glass. This type of glass undergoes a special treatment that makes the surface translucent, obscuring the view while letting in plenty of light. It gives the screens a frosted appearance, adding a sophisticated touch to your outdoor space.
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Built for all Seasons</h3>
                                <p className="text-slate-600">
                                    What sets our privacy screens apart is their resilience. They are built to withstand harsh Canadian weather, from heavy winter snowfall to scorching summer sun. Our materials are carefully selected for durability, ensuring the screens retain their beauty and functionality season after season.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6 text-center max-w-4xl">
                        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">Why Choose Global Aluminum Solutions?</h2>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            At Global Aluminum Solutions, we bring years of expertise and professionalism to the field. Our skilled team is committed to delivering the highest quality products and superior customer service. From the initial consultation to installation, we guide you every step of the way, ensuring your privacy screens meet your specific needs and aesthetic preferences.
                        </p>
                    </div>
                </section>

                {/* Testimonials */}
                <section className="py-20 bg-brand-copper/5">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-serif font-bold text-center text-brand-dark mb-12">Our Customers Say The Best About Us</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { name: "Milos Radicevic", text: "Val and his team installed glass panel aluminum railings at my house. I was blown away by how professional and quick they were. Measurements were done Sunday morning and by Friday noon my railings were manufactured and installed. They were very reasonably priced and super professional. I would highly recommend!" },
                                { name: "Graham Diana", text: "We would highly recommend this company based on our experience. I wasn't sure about getting glass railings for our deck as we have a young child... but I'm so glad I was able to find this company... Global Aluminum Solutions Inc. was professional, efficient and had competitive pricing! Highly recommend!" },
                                { name: "Lorna Zancai", text: "In 2017 had my railing on the veranda put up ..great job and from the advice of the man the right colour was chosen..I think I have already did a review ..but looking forward in the future to call them again .." },
                                { name: "Saleem Akhtar", text: "Exceptional experience working with Global Aluminum Solutions. Everything was done in such a professional manner and exceeded expectations." },
                                { name: "Violetta Ilkiw", text: "As others have noted, this is a wonderful company to work with. Highly recommended. Response was quick, service, deliver and instal was faster than expected and excellent quality. I am thrilled with the new railings on my deck and stairs. It all looks fabulous." },
                                { name: "Chris Seifert", text: "This company and it's employees are No1 in my book such an amazing job so professional and so great to deal with the installation was perfection" },
                                { name: "NR BH737", text: "Contacted Global Aluminum Railings to get a quote... Spoke with Tatiana who was very professional and helpful... We are very happy with the railings for our deck. All in all it was a good experience working with Tatiana and her team. Thank you Global Aluminum Railing!" },
                                { name: "Steve Sottile", text: "Global Aluminum was very professional and expedient. From their quotation accuracy, to on-site measure and final installation, time spanned less thank 2 weeks. Most importantly amazing quality and value. Highly recommend using Global Aluminium far any of your projects" }
                            ].map((review, i) => (
                                <div key={i} className="bg-white p-8 shadow-sm rounded-xl border border-slate-100">
                                    <div className="flex text-brand-copper mb-4">★★★★★</div>
                                    <p className="text-slate-600 italic mb-6 text-sm">"{review.text}"</p>
                                    <div className="font-bold text-brand-navy">- {review.name}</div>
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-10">
                            <Link href="/reviews" className="text-brand-navy font-bold hover:underline">
                                Read More Reviews &rarr;
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Features and Benefits */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-serif font-bold text-center text-slate-900 mb-12">Features and Benefits of Aluminum Railings</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="p-6 border border-slate-100 rounded-lg bg-slate-50">
                                <h3 className="font-bold text-lg mb-2 text-brand-dark">Weather Resistance</h3>
                                <p className="text-slate-600 text-sm">Aluminum railings excel in weather resistance, enduring harsh Canadian climates without rusting or corroding.</p>
                            </div>
                            <div className="p-6 border border-slate-100 rounded-lg bg-slate-50">
                                <h3 className="font-bold text-lg mb-2 text-brand-dark">Low Maintenance</h3>
                                <p className="text-slate-600 text-sm">Enjoy the convenience of low maintenance. They require just simple cleaning, no repainting or pest control.</p>
                            </div>
                            <div className="p-6 border border-slate-100 rounded-lg bg-slate-50">
                                <h3 className="font-bold text-lg mb-2 text-brand-dark">Versatility</h3>
                                <p className="text-slate-600 text-sm">Whether for modern or traditional aesthetics, they can be customized to fit any setting, including homes, offices, or cottages.</p>
                            </div>
                            <div className="p-6 border border-slate-100 rounded-lg bg-slate-50">
                                <h3 className="font-bold text-lg mb-2 text-brand-dark">Cost-effectiveness</h3>
                                <p className="text-slate-600 text-sm">Aluminum railings are a cost-effective choice. Their durability and low maintenance needs translate to long-term savings.</p>
                            </div>
                            <div className="p-6 border border-slate-100 rounded-lg bg-slate-50">
                                <h3 className="font-bold text-lg mb-2 text-brand-dark">Safety</h3>
                                <p className="text-slate-600 text-sm">Prioritizing safety, our aluminum railings are built to meet stringent safety standards and building codes.</p>
                            </div>
                            <div className="p-6 border border-slate-100 rounded-lg bg-slate-50">
                                <h3 className="font-bold text-lg mb-2 text-brand-dark">Increased Property Value</h3>
                                <p className="text-slate-600 text-sm">Installing aluminum railings enhances your property’s market value. Their sleek design and durability appeal to potential buyers.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Applications */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6 text-center mb-16">
                        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">
                            Where to Use Privacy Screens
                        </h2>
                    </div>
                    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {['Hot Tub Areas', 'Shared Balconies', 'Patio Dining', 'Pool Equipment'].map((item, i) => (
                            <div key={i} className="bg-slate-50 p-6 rounded-lg text-center font-bold text-slate-700 border border-slate-200">
                                {item}
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="py-24 bg-brand-navy text-white text-center">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
                            Invest in Your Outdoor Oasis
                        </h2>
                        <p className="text-slate-300 max-w-2xl mx-auto mb-10 text-lg">
                            Enjoy your outdoor space without worrying about prying eyes. Contact us for a custom privacy solution.
                        </p>
                        <Link href="/contact" className="inline-block px-10 py-4 bg-brand-copper text-white font-bold tracking-wide hover:bg-orange-700 transition-colors shadow-lg rounded-sm">
                            Get a Free Quote
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
