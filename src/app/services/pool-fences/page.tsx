"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/ui/Hero";
import Link from "next/link";
import Image from "next/image";

export default function PoolFencesPage() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />

            <main className="flex-grow">
                <Hero
                    title="Enhance Safety with Aluminum & Glass Pool Railings"
                    subtitle="Secure your outdoor oasis with high-quality, durable railings that meet all local safety codes without compromising on style."
                    ctaText="Get a Free Estimate"
                    ctaLink="/contact"
                    backgroundImage="/images/projects/pool-fence-glass-guards.jpg"
                />

                {/* Intro / Safety First */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            <div className="w-full md:w-1/2">
                                <h2 className="text-sm font-bold text-brand-copper uppercase tracking-widest mb-4">Designed for Optimal Safety</h2>
                                <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
                                    Your Safety is Our #1 Concern
                                </h3>
                                <div className="prose text-slate-600 leading-relaxed">
                                    <p className="mb-4">
                                        At Global Aluminum Solutions, we pride ourselves on the exceptional strength and durability of our swimming pool railings. Whether assisting in entry and exit from the pool or preventing accidental falls, these railings serve as a reliable safety barrier without compromising aesthetics.
                                    </p>
                                    <p className="mb-4">
                                        Each of our pool railing systems, be it aluminum or frameless glass, is meticulously crafted to meet and exceed local municipality standards. To ensure the utmost safety and compliance, we proactively engage with local authorities to verify and adhere to all specific safety requirements in your area.
                                    </p>
                                    <ul className="list-disc pl-5 space-y-2 mt-4">
                                        <li><strong>Child-Proof Gates:</strong> All gates to enter in and out of the pool area have child-proof, self-closing locks to ensure nobody walks into the area unattended.</li>
                                        <li><strong>Reinforced Options:</strong> Choose between reinforced aluminum pickets or 8-10mm tempered glass railings.</li>
                                        <li><strong>Compliance:</strong> We handle the verification of all local safety codes.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2">
                                <div className="aspect-[4/3] bg-slate-100 rounded-xl overflow-hidden relative shadow-lg">
                                    <Image
                                        src="/images/projects/pool-fence-glass-guards.jpg"
                                        alt="Safe and stylish glass pool fence"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Options */}
                <section className="py-20 bg-slate-50">
                    <div className="container mx-auto px-6 text-center mb-16">
                        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">
                            Two Premium Choices
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Choose the style that best fits your landscape design.
                        </p>
                    </div>

                    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Option 1 */}
                        <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
                            <div className="h-64 bg-slate-200 relative">
                                <Image
                                    src="/images/generated/pool_fence_glass_detail_1764312810331.png"
                                    alt="Frameless glass pool fencing detail"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Frameless Glass</h3>
                                <p className="text-slate-600 mb-6">
                                    The ultimate in luxury. 12mm tempered safety glass mounted on stainless steel spigots. Provides an invisible barrier that keeps your pool safe without blocking the view.
                                </p>
                                <ul className="space-y-2 text-sm text-slate-500 mb-8">
                                    <li>✓ Unobstructed views</li>
                                    <li>✓ 12mm Tempered Safety Glass</li>
                                    <li>✓ Marine-grade Stainless Steel Hardware</li>
                                </ul>
                                <Link href="/contact" className="text-brand-copper font-bold uppercase text-sm hover:underline">
                                    Request Quote &rarr;
                                </Link>
                            </div>
                        </div>

                        {/* Option 2 */}
                        <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
                            <div className="h-64 bg-slate-200 relative">
                                <Image
                                    src="/images/generated/pool_fence_picket_detail_1764312823826.png"
                                    alt="Aluminum picket pool fence detail"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Aluminum Picket</h3>
                                <p className="text-slate-600 mb-6">
                                    Classic, secure, and cost-effective. Our aluminum picket fences are designed with specific spacing to meet pool codes while offering a clean, modern look.
                                </p>
                                <ul className="space-y-2 text-sm text-slate-500 mb-8">
                                    <li>✓ Cost-effective solution</li>
                                    <li>✓ Maintenance-free powder coat</li>
                                    <li>✓ Available in Black, White, & Bronze</li>
                                </ul>
                                <Link href="/contact" className="text-brand-copper font-bold uppercase text-sm hover:underline">
                                    Request Quote &rarr;
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="py-20 bg-brand-navy text-white">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                            <div>
                                <div className="text-4xl mb-6">🎨</div>
                                <h3 className="text-xl font-bold mb-4">Stylish & Functional</h3>
                                <p className="text-slate-300">
                                    Beyond safety, our railings enhance the visual appeal of your outdoor space. Choose a style that complements your pool design.
                                </p>
                            </div>
                            <div>
                                <div className="text-4xl mb-6">❄️</div>
                                <h3 className="text-xl font-bold mb-4">Weather Resistant</h3>
                                <p className="text-slate-300">
                                    Designed to endure harsh Canadian weather. From scorching sun to freezing winters, our fences retain their beauty season after season.
                                </p>
                            </div>
                            <div>
                                <div className="text-4xl mb-6">🔒</div>
                                <h3 className="text-xl font-bold mb-4">Child-Proof Locks</h3>
                                <p className="text-slate-300">
                                    All gates feature self-closing locks to ensure nobody walks into the pool area unattended.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">
                                Why Choose Our Aluminum Railings
                            </h2>
                            <p className="text-slate-600 max-w-2xl mx-auto">
                                We are dedicated to crafting solutions tailored to your specific needs.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-brand-copper/10 text-brand-copper rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">1</div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Customized Solutions</h3>
                                    <p className="text-slate-600">Every project is unique. With our skilled technical team always scouting the finest products and designs, your vision is our blueprint.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-brand-copper/10 text-brand-copper rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">2</div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Competitive Pricing</h3>
                                    <p className="text-slate-600">Ensuring value for your investment is paramount. If you find a lower price elsewhere, present us with the estimate and we'll explore every avenue to align with your budget.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-brand-copper/10 text-brand-copper rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">3</div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Highest Quality Standards</h3>
                                    <p className="text-slate-600">Our commitment to excellence shines through. We maintain transparency throughout our projects, ensuring results that consistently meet and exceed industry benchmarks.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-brand-copper/10 text-brand-copper rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">4</div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Friendly Customer Service</h3>
                                    <p className="text-slate-600">Timeliness and precision define our ethos. We guarantee quality by offering product warranties, rigorous pre-installation checks, and an impeccable installation process.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Portfolio */}
                <section className="py-20 bg-slate-50">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-serif font-bold text-center text-slate-900 mb-12">
                            Aluminum Swimming Pool Railings Portfolio
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {/* Using existing images as placeholders for portfolio items */}
                            <div className="aspect-square relative rounded-lg overflow-hidden">
                                <Image src="/images/generated/pool_fence_glass_detail_1764312810331.png" alt="Glass swimming pool guard railings" fill className="object-cover hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div className="aspect-square relative rounded-lg overflow-hidden">
                                <Image src="/images/generated/pool_fence_picket_detail_1764312823826.png" alt="Swimming pool guards" fill className="object-cover hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div className="aspect-square relative rounded-lg overflow-hidden">
                                <Image src="/images/generated/pool_fence_hero_1764312796756.png" alt="Frameless Pool guards" fill className="object-cover hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div className="aspect-square relative rounded-lg overflow-hidden">
                                <Image src="/images/generated/railing_hero_detail_1764312850877.png" alt="Deck railings" fill className="object-cover hover:scale-110 transition-transform duration-500" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-serif font-bold text-center text-brand-dark mb-12">Our Customers Say The Best About Us</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            <div className="bg-slate-50 p-8 shadow-sm rounded-xl border border-slate-100">
                                <div className="flex text-brand-copper mb-4">★★★★★</div>
                                <p className="text-slate-600 italic mb-6">"Val and his team installed glass panel aluminum railings at my house. I was blown away by how professional and quick they were. Measurements were done Sunday morning and by Friday noon my railings were manufactured and installed. They were very reasonably priced and super professional. I would highly recommend!"</p>
                                <div className="font-bold text-brand-navy">- Milos Radicevic</div>
                            </div>
                            <div className="bg-slate-50 p-8 shadow-sm rounded-xl border border-slate-100">
                                <div className="flex text-brand-copper mb-4">★★★★★</div>
                                <p className="text-slate-600 italic mb-6">"I wasn't sure about getting glass railings for our deck as we have a young child... but I'm so glad I was able to find this company. Vlad and his team worked and installed the deck rails efficiently this week. They arrived on time, worked until the rails were installed, cleaned up and left; they were so professional!"</p>
                                <div className="font-bold text-brand-navy">- Graham Diana</div>
                            </div>
                            <div className="bg-slate-50 p-8 shadow-sm rounded-xl border border-slate-100">
                                <div className="flex text-brand-copper mb-4">★★★★★</div>
                                <p className="text-slate-600 italic mb-6">"Exceptional experience working with Global Aluminum Solutions. Everything was done in such a professional manner and exceeded expectations."</p>
                                <div className="font-bold text-brand-navy">- Saleem Akhtar</div>
                            </div>
                            <div className="bg-slate-50 p-8 shadow-sm rounded-xl border border-slate-100">
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

                {/* FAQ */}
                <section className="py-20 bg-slate-50">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <h2 className="text-3xl font-serif font-bold text-center text-slate-900 mb-12">FAQ</h2>
                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded shadow-sm">
                                <h3 className="font-bold text-lg mb-2">Do aluminum railing systems offer noise reduction and privacy?</h3>
                                <p className="text-slate-600">While standard aluminum pickets are open, choosing a glass railing system or adding privacy panels can significantly reduce wind noise and increase privacy around your pool area.</p>
                            </div>
                            <div className="bg-white p-6 rounded shadow-sm">
                                <h3 className="font-bold text-lg mb-2">How do aluminum railings hold up in various weather conditions?</h3>
                                <p className="text-slate-600">Aluminum is naturally rust-resistant and our powder-coated finish provides an extra layer of protection against UV rays, rain, and snow, making it ideal for the Canadian climate.</p>
                            </div>
                            <div className="bg-white p-6 rounded shadow-sm">
                                <h3 className="font-bold text-lg mb-2">Is the installation process for aluminum railings complicated?</h3>
                                <p className="text-slate-600">For our professional team, no. We handle everything from precise measurements to the final secure installation. We ensure the process is quick, clean, and minimally disruptive to your property.</p>
                            </div>
                            <div className="bg-white p-6 rounded shadow-sm">
                                <h3 className="font-bold text-lg mb-2">What are the benefits of choosing aluminum railings over other materials?</h3>
                                <p className="text-slate-600">Unlike wood, aluminum doesn't rot or need painting. Unlike iron, it doesn't rust. It offers the best balance of strength, durability, and low maintenance.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-24 bg-white text-center">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
                            Ready to Secure Your Pool?
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto mb-10 text-lg">
                            Get a free consultation and ensure your pool is safe for the season.
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
