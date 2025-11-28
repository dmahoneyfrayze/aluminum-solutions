export default function MiniCaseStudies() {
    const cases = [
        {
            client: "Scotiabank",
            location: "Toronto Flagship",
            description: "Interior glass railings for the main atrium. Engineered for high-traffic safety and modern aesthetics.",
            tags: ["Commercial", "Glass Railings"],
        },
        {
            client: "Waterloo Student Residence",
            location: "Waterloo, ON",
            description: "Custom aluminum balcony railings for a 12-story complex. Delivered on time and under budget.",
            tags: ["Multi-Unit", "Aluminum Railings"],
        },
        {
            client: "Private Estate",
            location: "Bridle Path, Toronto",
            description: "Perimeter security gates and automated entry system. Custom powder-coated finish to match architectural details.",
            tags: ["Residential", "Custom Gates"],
        },
    ];

    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
                            Trusted by Industry Leaders
                        </h2>
                        <p className="text-slate-600 max-w-xl">
                            From landmark commercial projects to luxury residential estates, our work speaks for itself.
                        </p>
                    </div>
                    <a href="/gallery" className="hidden md:inline-block text-slate-900 font-bold border-b-2 border-slate-900 pb-1 hover:text-slate-700 transition-colors mt-4 md:mt-0">
                        View Full Portfolio &rarr;
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cases.map((item, index) => (
                        <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {item.tags.map((tag, i) => (
                                    <span key={i} className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-1">{item.client}</h3>
                            <p className="text-sm text-slate-500 mb-4">{item.location}</p>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <a href="/gallery" className="text-slate-900 font-bold border-b-2 border-slate-900 pb-1 hover:text-slate-700 transition-colors">
                        View Full Portfolio &rarr;
                    </a>
                </div>
            </div>
        </section>
    );
}
