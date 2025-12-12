import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";

export default function GlassRailingsFAQ() {
    const faqs = [
        {
            question: "Are glass railings safe for children and pets?",
            answer: "Yes, absolutely. We use tempered or laminated safety glass that is incredibly strong and shatter-resistant. Unlike picket railings, glass panels have no gaps for children or pets to squeeze through or get stuck in, making them one of the safest options for decks and balconies."
        },
        {
            question: "Do glass railings require a lot of cleaning?",
            answer: "Less than you might think. Exterior glass railings in Toronto typically need cleaning 2-3 times a year. Rain naturally washes away most dust. For a sparkling finish, a simple solution of water and dish soap with a squeegee works perfectly. We also offer Hydrophobic coatings that repel water and dirt."
        },
        {
            question: "What kind of glass do you use?",
            answer: "We use 10mm or 12mm tempered safety glass for most residential railing systems, which meets or exceeds Ontario Building Code (SB-13) requirements. For commercial projects or high-wind areas, we may use laminated glass for additional strength and safety."
        },
        {
            question: "How much do glass railings cost in Toronto?",
            answer: "Glass railings typically range from $100 to $200+ per linear foot installed, depending on the style (framed vs. frameless) and complexity. While the upfront cost is higher than wood, glass railings require zero ongoing maintenance (no staining or painting), offering better long-term value."
        },
        {
            question: "Can glass railings withstand Toronto winters?",
            answer: "Yes. Our systems are engineered for the Canadian climate. The tempered glass is not affected by freeze-thaw cycles, and our stainless steel and aluminum hardware is rust-proof and designed to handle heavy snow loads and high winds."
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <span className="text-brand-copper font-bold tracking-widest uppercase text-sm mb-2 block">Common Questions</span>
                    <h2 className="text-3xl font-serif font-bold text-brand-dark mb-4">Glass Railing FAQs</h2>
                    <p className="text-slate-600">Answers to common questions about safety, maintenance, and installation.</p>
                </div>

                <div className="space-y-6">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-slate-50 rounded-lg p-8 border border-slate-100">
                            <h3 className="text-xl font-bold text-brand-dark mb-4">{faq.question}</h3>
                            <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center bg-brand-navy/5 p-8 rounded-xl">
                    <p className="font-bold text-brand-dark mb-2">Have a specific question about your project?</p>
                    <p className="text-slate-600 mb-6">Our experts are ready to help.</p>
                    <Link href="/contact" className="text-brand-copper font-bold hover:underline">
                        Ask an Expert &rarr;
                    </Link>
                </div>

                <JsonLd
                    data={{
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": faqs.map(faq => ({
                            "@type": "Question",
                            "name": faq.question,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": faq.answer
                            }
                        }))
                    }}
                />
            </div>
        </section>
    );
}
