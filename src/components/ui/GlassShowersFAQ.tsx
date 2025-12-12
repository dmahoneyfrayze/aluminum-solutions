import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";

export default function GlassShowersFAQ() {
    const faqs = [
        {
            question: "How much does a custom glass shower cost in Toronto?",
            answer: "For a standard inline door and panel, prices typically range from $1,200 to $1,800. Corner enclosures usually start between $1,800 and $3,500. Custom steam showers and large complex systems start at $4,000+. Costs vary based on glass thickness (10mm vs 12mm), hardware finish, and layout complexity."
        },
        {
            question: "Why choose custom glass over a kit from Home Depot?",
            answer: "Big box store kits come in standard sizes that rarely fit perfectly, often leading to large gaps, necessary shims, and potential leaks. Our custom glass is laser-measured and CNC-cut to fit your specific walls (even if they aren't plumb) within a millimeter, ensuring a watertight seal and a high-end frameless look."
        },
        {
            question: "What hardware finishes do you offer?",
            answer: "We stock premium hardware in Matte Black, Brushed Gold (Brass), Polished Chrome, and Brushed Nickel. We can also source custom finishes like Oil Rubbed Bronze or Gunmetal upon request."
        },
        {
            question: "How long does it take to get my shower glass installed?",
            answer: "Our typical turnaround time is 7-10 business days from the final measurement date. Installation takes just a few hours. We manufacture locally in the GTA to avoid shipping delays."
        },
        {
            question: "Does the glass come with a warranty?",
            answer: "Yes. All our glass is tempered to safety standards and comes with a guarantee against manufacturing defects. Our installation workmanship is also warrantied to give you peace of mind against leaks or loose hardware."
        }
    ];

    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <span className="text-brand-copper font-bold tracking-widest uppercase text-sm mb-2 block">Common Questions</span>
                    <h2 className="text-3xl font-serif font-bold text-brand-dark mb-4">Glass Shower FAQs</h2>
                    <p className="text-slate-600">Answers to your questions about cost, sizing, and finishes.</p>
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
                    <p className="font-bold text-brand-dark mb-2">Renovating your bathroom?</p>
                    <p className="text-slate-600 mb-6">Send us a photo of your layout for a quick estimate.</p>
                    <Link href="/contact" className="text-brand-copper font-bold hover:underline">
                        Get a Quick Quote &rarr;
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
