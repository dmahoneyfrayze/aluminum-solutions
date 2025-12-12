import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";

export default function PrivacyScreensFAQ() {
    const faqs = [
        {
            question: "How much do custom privacy screens cost in Toronto?",
            answer: "Aluminum picket privacy screens typically cost between $90 and $140 per linear foot installed. Frosted or acid-etched glass privacy screens range from $140 to $220+ per linear foot, depending on height, glass thickness, and complexity."
        },
        {
            question: "What is the maximum height for a privacy screen?",
            answer: "We can custom fabricate privacy screens up to 6 feet high for decks and patios, which is the standard maximum allowance for most municipal bylaws in the GTA without a minor variance. We can also do shorter dividers for condo balconies."
        },
        {
            question: "Will the frosted glass lose its opacity over time?",
            answer: "No. We use acid-etched glass, where the frosting is permanently etched into the glass surface. Unlike sandblasted glass which can stain, or applied films which can peel, acid-etched glass remains easy to clean and permanently opaque."
        },
        {
            question: "How are the privacy screens attached to my deck?",
            answer: "We use heavy-duty aluminum surface mounts (shoes) or post-mounts that are anchored directly into your deck's structural blocking or concrete patio. We ensure all connections are secure to withstand high winds."
        },
        {
            question: "Do you offer different colors for the frames?",
            answer: "Yes. Our standard colors are Matte Black, White, and Commercial Brown. We can also provide custom powder-coated colors to match your existing windows, siding, or railing system."
        }
    ];

    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <span className="text-brand-copper font-bold tracking-widest uppercase text-sm mb-2 block">Common Questions</span>
                    <h2 className="text-3xl font-serif font-bold text-brand-dark mb-4">Privacy Screen FAQs</h2>
                    <p className="text-slate-600">Answers to your questions about cost, height, and installation.</p>
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
                    <p className="font-bold text-brand-dark mb-2">Need a custom solution?</p>
                    <p className="text-slate-600 mb-6">Send us a photo of your deck or balcony for a free design consultation.</p>
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
