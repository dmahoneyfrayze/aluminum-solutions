import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";

export default function ColumnsFAQ() {
    const faqs = [
        {
            question: "Are your aluminum columns load-bearing?",
            answer: "Yes. Unlike cosmetic column wraps sold at box stores, our structural aluminum columns are engineered to bear significant loads (up to 20,000+ lbs depending on size). They are designed to completely replace rotting wood posts and support your porch roof or balcony overhang."
        },
        {
            question: "Do I need a building permit to replace my porch columns?",
            answer: "In Toronto and the GTA, structural alterations like replacing load-bearing columns typically require a permit. Because our columns are engineered structural components, they meet Ontario Building Code requirements. We can assist with the permit process if needed."
        },
        {
            question: "Can you install columns on my existing concrete porch?",
            answer: "Yes. We use heavy-duty mounting plates that are anchored into your concrete porch floor and the header beam above. If you are re-doing your porch floor, we can coordinate installation to happen before or after the new surface is applied."
        },
        {
            question: "What colors and styles are available?",
            answer: "Our most popular styles are Round Fluted, Square Recessed (Craftsman), and Square Plain. Standard colors are White, Black, Commercial Brown, and Clay. We can also custom powder coat to match any Benjamin Moore or Sherwin Williams color."
        },
        {
            question: "How long does installation take?",
            answer: "A typical front porch column replacement (2-4 columns) takes 1-2 days. This includes safely shoring up your roof, removing the old wood columns, installing the new aluminum structural columns, and finishing the trim."
        }
    ];

    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <span className="text-brand-copper font-bold tracking-widest uppercase text-sm mb-2 block">Common Questions</span>
                    <h2 className="text-3xl font-serif font-bold text-brand-dark mb-4">Column FAQs</h2>
                    <p className="text-slate-600">Answers to your questions about structural integrity, permits, and installation.</p>
                </div>

                <div className="space-y-6">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white rounded-lg p-8 border border-slate-200 shadow-sm">
                            <h3 className="text-xl font-bold text-brand-dark mb-4">{faq.question}</h3>
                            <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center bg-brand-navy/5 p-8 rounded-xl">
                    <p className="font-bold text-brand-dark mb-2">Have a rotting column?</p>
                    <p className="text-slate-600 mb-6">Send us a photo for an immediate assessment and quote.</p>
                    <Link href="/contact" className="text-brand-copper font-bold hover:underline">
                        Get a Free Assessment &rarr;
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
