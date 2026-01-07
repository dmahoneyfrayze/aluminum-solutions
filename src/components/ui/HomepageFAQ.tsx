import JsonLd from "@/components/seo/JsonLd";

const faqs = [
    {
        question: "How much do aluminum railings cost in Toronto?",
        answer: "Costs vary by style and linear footage, but aluminum railings are generally more affordable than wood or steel over time due to zero maintenance. Basic picket styles start lower, while glass options are premium. Contact us for a precise linear-foot quote."
    },
    {
        question: "Are glass railings safe?",
        answer: "Yes. We use 10mm or 12mm tempered safety glass (and laminated glass where required) that meets or exceeds Ontario Building Code (SB-13) requirements. It is designed to withstand impact and heavy loads."
    },
    {
        question: "How long does installation take?",
        answer: "Most residential installations are completed in 1–2 days. Fabrication lead times are typically 2–3 weeks, but we offer expedited options for urgent projects."
    },
    {
        question: "Do you meet Ontario Building Code?",
        answer: "Absolutely. All our systems—aluminum, glass, and connections—are engineered to meet strict Ontario Building Code standards for load-bearing and height safety."
    }
];

export default function HomepageFAQ() {
    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-slate-600">
                        Common questions from Toronto homeowners and builders.
                    </p>
                </div>

                <div className="space-y-6">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
                            <h3 className="text-lg font-bold text-slate-900 mb-2">{faq.question}</h3>
                            <p className="text-slate-600">{faq.answer}</p>
                        </div>
                    ))}
                </div>

                {/* FAQ Schema */}
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
