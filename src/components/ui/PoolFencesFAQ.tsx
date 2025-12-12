import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";

export default function PoolFencesFAQ() {
    const faqs = [
        {
            question: "What are the pool fence code requirements in Toronto?",
            answer: "In Toronto (and most of Ontario), pool fences must be at least 1.2 meters (48 inches) high, have no horizontal bars that make it climbable (non-climbable zone), and gates must be self-closing and self-latching. The gap between the bottom of the fence and the ground cannot exceed 100mm (4 inches)."
        },
        {
            question: "Do I need a permit for a pool fence?",
            answer: "Yes, a Pool Enclosure Permit is required in Toronto and most GTA municipalities before you can fill your pool with water. We can assist you in ensuring your fence design meets all permit requirements."
        },
        {
            question: "Is glass or aluminum better for pool fencing?",
            answer: "Both are excellent choices. Aluminum is more cost-effective and very durable. Glass offers a premium look with unobstructed views, which is safer for monitoring swimmers. Both of our systems are engineered to meet strict safety codes."
        },
        {
            question: "How much does a pool fence cost in Toronto?",
            answer: "Standard aluminum pool fencing typically costs between $70 and $110 per linear foot installed. Frameless glass pool fencing ranges from $140 to $220+ per linear foot. Costs vary based on gates, terrain, and total linear footage."
        },
        {
            question: "Can I lock my pool gate?",
            answer: "Yes. All our pool gates come with high-quality, magnetic safety latches (like MagnaLatch) that are key-lockable. They are positioned high out of reach of children to prevent unsupervised access."
        }
    ];

    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <span className="text-brand-copper font-bold tracking-widest uppercase text-sm mb-2 block">Safety & Permits</span>
                    <h2 className="text-3xl font-serif font-bold text-brand-dark mb-4">Common Pool Fence Questions</h2>
                    <p className="text-slate-600">Answers to your questions about bylaws, permits, and installation.</p>
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
                    <p className="font-bold text-brand-dark mb-2">Need help with your permit application?</p>
                    <p className="text-slate-600 mb-6">We can provide the specifications you need for approval.</p>
                    <Link href="/contact" className="text-brand-copper font-bold hover:underline">
                        Contact Us &rarr;
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
