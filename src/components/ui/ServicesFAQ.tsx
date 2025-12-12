import JsonLd from "@/components/seo/JsonLd";

const faqs = [
    {
        question: "What aluminum and glass services do you offer?",
        answer: "We specialize in manufacturing and installing aluminum railings, frameless glass railings, pool fences, glass office partitions, privacy screens, and custom glass showers. All products are fabricated in our GTA facility."
    },
    {
        question: "Do you manufacture your own railings?",
        answer: "Yes. Unlike many installers who buy pre-made kits, we are a direct manufacturer. This allows us to control quality, offer faster turnaround times (often 2-3 weeks), and provide custom solutions that fit your exact dimensions."
    },
    {
        question: "Are your systems Ontario Building Code compliant?",
        answer: "Absolutely. Our aluminum and glass systems are engineered to meet or exceed Ontario Building Code (SB-13) requirements for load-bearing, height, and safety glass (tempered or laminated)."
    },
    {
        question: "Do you serve commercial projects?",
        answer: "Yes. We work effectively with builders, architects, and property managers on commercial projects including condos, office buildings, and restaurants across the GTA."
    }
];

export default function ServicesFAQ() {
    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">
                        Common Questions About Our Services
                    </h2>
                    <p className="text-slate-600">
                        Transparency from manufacturing to installation.
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
