import Link from "next/link";

export default function ProcessSteps() {
    const steps = [
        {
            number: "01",
            title: "Design & Quote",
            description: "We meet on-site to take measurements, discuss styles, and provide a detailed, no-obligation estimate within 24 hours.",
        },
        {
            number: "02",
            title: "Manufacturing",
            description: "Your custom system is fabricated in our local facility using premium aluminum extrusion and tempered safety glass.",
        },
        {
            number: "03",
            title: "Installation",
            description: "Our certified team installs your railings or enclosure in as little as 1 day, leaving your property spotless.",
        },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
                        The Aluminum Solutions Process
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        From design to installation, we handle everything in-house to ensure quality and speed.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    {/* Connecting Line (Desktop Only) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-100 -z-10" />

                    {steps.map((step, index) => (
                        <div key={index} className="relative bg-white p-6 text-center group">
                            <div className="w-24 h-24 mx-auto bg-slate-900 text-white rounded-full flex items-center justify-center text-3xl font-serif font-bold mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300 border-4 border-white">
                                {step.number}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link href="/contact" className="inline-block px-8 py-4 bg-slate-900 text-white font-bold rounded hover:bg-slate-800 transition-colors shadow-lg">
                        Start Your Project
                    </Link>
                </div>
            </div>
        </section>
    );
}
