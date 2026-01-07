import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";

export default function GlassWallsFAQ() {
    const faqs = [
        {
            question: "How much does a glass office partition cost in Toronto?",
            answer: "For a standard single glass wall, prices typically range from $2,000 to $4,000. Full office enclosures or meeting rooms usually start between $4,000 and $12,000, depending on size, glass thickness, and door hardware."
        },
        {
            question: "What is the soundproofing quality (STC rating) of your glass walls?",
            answer: "Our 10mm and 12mm tempered glass options offer STC ratings between 31 and 36, which effectively muffles normal speech for privacy. For higher acoustic requirements, we offer laminated glass solutions."
        },
        {
            question: "Do you install glass walls for commercial offices?",
            answer: "Yes. We specialize in commercial projects for offices, clinics, gyms, and retail spaces across the GTA. We can work directly with your general contractor or office manager to minimize disruption."
        },
        {
            question: "How long does it take to manufacture and install?",
            answer: "Since we manufacture locally in the GTA, our turnaround times are faster than importers. Typically, production takes 2-3 weeks from final measurements, with installation completed in 1-2 days."
        },
        {
            question: "Can I add a lock to my glass office door?",
            answer: "Absolutely. We offer a range of locking hardware, from standard key locks to ladder pulls with floor locks, ensuring security for your executive office or meeting room."
        }
    ];

    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <span className="text-brand-copper font-bold tracking-widest uppercase text-sm mb-2 block">Common Questions</span>
                    <h2 className="text-3xl font-serif font-bold text-brand-dark mb-4">Glass Partition FAQs</h2>
                    <p className="text-slate-600">Answers to your questions about cost, privacy, and installation.</p>
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
                    <p className="font-bold text-brand-dark mb-2">Have a specific layout in mind?</p>
                    <p className="text-slate-600 mb-6">Upload your floor plan for a preliminary budget.</p>
                    <Link href="#upload-plan" className="text-brand-copper font-bold hover:underline">
                        Upload Floor Plan &rarr;
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
