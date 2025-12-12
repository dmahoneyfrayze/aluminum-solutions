export default function RailingsWhoThisIsFor() {
    const audiences = [
        {
            icon: "🏡",
            title: "Homeowners",
            description: "Upgrading porches, decks, or balconies with maintenance-free safety."
        },
        {
            icon: "🏗️",
            title: "Builders & Renovators",
            description: "Adding value to new builds or flips with modern, compliant systems."
        },
        {
            icon: "🍷",
            title: "Restaurants",
            description: "Defining patio spaces with durable, code-compliant dividers."
        },
        {
            icon: "🏢",
            title: "Condo Boards",
            description: "Retrofitting aging balcony railings for safety and curb appeal."
        }
    ];

    return (
        <section className="py-12 bg-slate-50 border-b border-slate-200">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-6xl mx-auto">
                    <div className="md:w-1/4">
                        <h3 className="text-lg font-bold text-brand-dark uppercase tracking-wide">Perfect For:</h3>
                    </div>
                    <div className="md:w-3/4 grid grid-cols-2 md:grid-cols-4 gap-6">
                        {audiences.map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center">
                                <span className="text-2xl mb-2" role="img" aria-label={item.title}>{item.icon}</span>
                                <span className="text-sm font-bold text-slate-800">{item.title}</span>
                                <p className="text-xs text-slate-500 mt-1">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
