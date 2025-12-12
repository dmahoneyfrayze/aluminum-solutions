import JsonLd from "@/components/seo/JsonLd";

const faqs = [
    {
        question: "How long do aluminum railings last?",
        answer: "Decades. Unlike wood which rots or steel which rusts, our powder-coated aluminum is designed to withstand Toronto winters and summers indefinitely with simple cleaning."
    },
    {
        question: "Do you offer glass options for decks?",
        answer: "Yes. We specialize in glass rail systems for decks, including frameless, spigot, and channel-set designs that provide unobstructed views and meet safety codes."
    },
    {
        question: "Are your railings Building Code compliant?",
        answer: "Yes. All our installations meet Ontario Building Code (SB-13) requirements for height, load resistance, and climbability."
    },
    {
        question: "How much does aluminum railing cost in Toronto?",
        answer: "Standard aluminum picket railings typically range from $60 to $80 per linear foot installed. Specialize glass options range from $100 to $150+. Contact us for a precise quote."
    }
];

export default function RailingsFAQ() {
    return (
        <section className="py-20 bg-slate-50 border-t border-slate-200">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">
                        Railing Questions Answered
                    </h2>
                    <p className="text-slate-600">
                        Expert answers to common homeowner questions.
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
