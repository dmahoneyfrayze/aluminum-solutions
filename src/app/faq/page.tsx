"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/ui/Hero";
import Link from "next/link";

export default function FAQPage() {
    const faqs = [
        {
            category: "Installation & Process",
            questions: [
                {
                    q: "How long does installation take?",
                    a: "Once your custom materials are manufactured (typically 3-5 weeks), the actual installation usually takes 1-2 days depending on the size of the project."
                },
                {
                    q: "Do I need to be home?",
                    a: "We recommend being present at the start of the day to confirm details and at the end to inspect the work. You do not need to be there the entire time."
                },
                {
                    q: "What areas do you serve?",
                    a: "We serve the entire GTA, including Toronto, Mississauga, Oakville, Burlington, Vaughan, Richmond Hill, Markham, Brampton, and Milton."
                }
            ]
        },
        {
            category: "Products & Materials",
            questions: [
                {
                    q: "Will aluminum railings rust?",
                    a: "No. Aluminum is a non-ferrous metal, meaning it does not rust. Our powder-coated finish provides additional protection against oxidation and fading."
                },
                {
                    q: "Is glass safe for families with kids?",
                    a: "Yes. We use 10mm or 12mm tempered safety glass. It is 4x stronger than regular glass and, if it were to break, it shatters into small, dull cubes rather than sharp shards."
                },
                {
                    q: "Can I customize the color?",
                    a: "Absolutely. While Black, White, and Commercial Brown are standard, we can custom powder coat your railings to match any RAL color code."
                }
            ]
        },
        {
            category: "Permits & Warranty",
            questions: [
                {
                    q: "Do I need a permit?",
                    a: "For replacing existing railings on a porch or deck, a permit is often not required. However, new structures or significant alterations may require one. We can help guide you through this process."
                },
                {
                    q: "What is your warranty?",
                    a: "We offer a Lifetime Limited Warranty on the aluminum structure and finish, and a 2-Year Warranty on installation workmanship."
                }
            ]
        }
    ];

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />

            <main className="flex-grow">
                <Hero
                    title="Frequently Asked Questions"
                    subtitle="Answers to common questions about our products, installation process, and warranty."
                    ctaText="Ask a Question"
                    ctaLink="/contact"
                    backgroundImage="/images/generated/custom_gate_modern_1764314098362.png"
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
