"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/ui/Hero";
import Link from "next/link";

const faqs = [
    {
        category: "Why Choose Aluminum Solutions?",
        questions: [
            {
                q: "Why should I choose a manufacturer-installer instead of a regular railing contractor?",
                a: "Manufacturer-installers control the entire process — design, fabrication, and installation. That means higher-quality materials, perfect fit, faster timelines (4-6 weeks vs. 8-12+), and stronger warranties. Most railing companies in the GTA simply assemble pre-bought kits."
            },
            {
                q: "How does buying direct save me money?",
                a: "By cutting out the middleman, you avoid the standard 20-40% retail markup charged by distributors and general contractors. You get premium, architect-grade materials for the same price as standard builder-grade products."
            },
            {
                q: "What makes your railings premium compared to cheaper quotes?",
                a: "Cheaper quotes often use thin imported aluminum, offshore non-tempered glass, and low-quality powder coating that fades in 2-4 years. We use architect-grade materials, Canadian-tempered glass, and a premium powder coat built for 20+ years of performance."
            },
            {
                q: "Who is responsible if something goes wrong?",
                a: "We are. With Aluminum Solutions, you have a single point of accountability. No blame-shifting between the supplier, the fabricator, and the installer. We manufacture it, we install it, and we back it with our lifetime warranty."
            },
            {
                q: "What is your installation timeline?",
                a: "With in-house production, most projects are completed in 4–6 weeks, even during peak season. Outsourced competitors often take 8–12 weeks or more because they are at the mercy of third-party suppliers."
            },
            {
                q: "Do you fabricate the glass yourself?",
                a: "Yes — all glass is measured, templated, fabricated, and tempered through our controlled suppliers in Canada. This ensures proper fit, clarity, and code compliance."
            }
        ]
    },
    {
        category: "Technical & Safety",
        questions: [
            {
                q: "Do your railings meet Ontario building code?",
                a: "Yes — every project is engineered and installed to Ontario OBC requirements, including guard heights, post spacing, glass thickness, and load requirements. This protects you from liability and avoids costly rework."
            },
            {
                q: "How long do aluminum railings last?",
                a: "A properly engineered aluminum railing with premium powder coating lasts 20–30+ years with virtually zero maintenance. It will not rust, rot, or warp like wood or steel."
            },
            {
                q: "Can you handle complex projects like commercial, multi-story, or custom builds?",
                a: "Yes — our engineering-first approach and in-house production allow us to handle advanced high-rise, commercial, and custom architectural projects that many standard railing installers avoid."
            }
        ]
    },
    {
        category: "Options & Service",
        questions: [
            {
                q: "Do you offer custom colors and finishes?",
                a: "Yes — we offer premium architectural powder coat finishes, including Matte Black, Textured Black, White, Custom RAL colors, and Wood-grain aluminum options."
            },
            {
                q: "What warranties do you provide?",
                a: "We offer full protection on Aluminum, Powder Coating, Glass, and Installation workmanship. Because we manufacture it, we back it."
            },
            {
                q: "Do you remove old railings?",
                a: "Yes — we offer full removal and disposal of old wood or steel railings, ensuring a clean and ready install surface."
            }
        ]
    }
];

export default function FAQContent() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />

            <main className="flex-grow">
                <Hero
                    title="Frequently Asked Questions"
                    subtitle="Answers to common questions about our products, installation process, and warranty."
                    ctaText="Ask a Question"
                    ctaLink="/contact"
                    backgroundImage="/images/generated/custom_gate_modern_1764314098362.webp"
                />

                <section className="py-20">
                    <div className="container mx-auto px-6 max-w-4xl">
                        {faqs.map((section, idx) => (
                            <div key={idx} className="mb-16">
                                <h2 className="text-2xl font-serif font-bold text-slate-900 mb-8 border-b border-slate-200 pb-2">
                                    {section.category}
                                </h2>
                                <div className="space-y-8">
                                    {section.questions.map((item, qIdx) => (
                                        <div key={qIdx} className="bg-slate-50 p-6 rounded-lg border border-slate-100">
                                            <h3 className="text-lg font-bold text-slate-900 mb-3">{item.q}</h3>
                                            <p className="text-slate-600 leading-relaxed">{item.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="py-24 bg-slate-50 text-center">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
                            Still Have Questions?
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto mb-10 text-lg">
                            Our team is happy to help. Give us a call or send us a message.
                        </p>
                        <Link href="/contact" className="inline-block px-10 py-4 bg-brand-navy text-white font-bold tracking-wide hover:bg-slate-800 transition-colors shadow-lg rounded-sm">
                            Contact Us
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
