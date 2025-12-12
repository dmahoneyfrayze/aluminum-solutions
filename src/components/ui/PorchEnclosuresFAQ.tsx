import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";

export default function PorchEnclosuresFAQ() {
    const faqs = [
        {
            question: "Do I need a building permit for a porch enclosure in Toronto?",
            answer: "In most cases, if you are enclosing an existing porch without altering the structure or heating it, a permit may not be required. However, if you are adding heating (HVAC) or changing the footprint, a permit is likely needed. We help you assess your specific situation."
        },
        {
            question: "What is the difference between a 3-season and 4-season room?",
            answer: "A 3-season room is unheated and uses single-pane glass, offering protection from wind and rain but not extreme cold. A 4-season room is fully insulated with double-pane Low-E glass and thermally broken frames, allowing you to heat and cool it year-round."
        },
        {
            question: "Will a porch enclosure reduce my heating bills?",
            answer: "Yes. An enclosed porch creates an 'air lock' vestibule. This buffer zone prevents cold air from rushing directly into your home when you open the front door, significantly reducing heat loss."
        },
        {
            question: "Can I customize the color of the aluminum frame?",
            answer: "Absolutely. We offer standard colors like White, Black, and Commercial Brown, as well as custom powder-coated options to perfectly match your home's windows, doors, or brickwork."
        },
        {
            question: "How long does installation take?",
            answer: "Once manufacturing is complete, the on-site installation is typically quick—often completed in 1-2 days. We manufacture the panels in the GTA to ensure a perfect fit and faster turnaround times."
        }
    ];

    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <span className="text-brand-copper font-bold tracking-widest uppercase text-sm mb-2 block">Common Questions</span>
                    <h2 className="text-3xl font-serif font-bold text-brand-dark mb-4">Porch Enclosure FAQs</h2>
                    <p className="text-slate-600">Answers to your questions about seasons, permits, and insulation.</p>
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
                    <p className="font-bold text-brand-dark mb-2">Not sure what style fits your home?</p>
                    <p className="text-slate-600 mb-6">Send us a photo of your porch and get a free design recommendation.</p>
                    <Link href="/contact" className="text-brand-copper font-bold hover:underline">
                        Get Design Advice &rarr;
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
