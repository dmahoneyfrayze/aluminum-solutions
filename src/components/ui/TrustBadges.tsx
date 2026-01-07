export default function TrustBadges() {
    const badges = [
        { label: "10+ Years Experience", icon: "🏆" },
        { label: "Lifetime Warranty", icon: "🛡️" },
        { label: "WSIB Insured", icon: "✓" },
        { label: "TSSA Certified", icon: "📜" },
        { label: "Code Compliant", icon: "🏗️" },
        { label: "Local Manufacturer", icon: "🇨🇦" },
    ];

    return (
        <section className="py-10 bg-slate-50 border-b border-slate-200">
            <div className="container mx-auto px-6">
                <div className="flex flex-wrap justify-center gap-6 md:gap-12">
                    {badges.map((badge, index) => (
                        <div key={index} className="flex items-center space-x-2 opacity-80 hover:opacity-100 transition-opacity">
                            <span className="text-2xl">{badge.icon}</span>
                            <span className="text-sm font-bold text-slate-700 uppercase tracking-wide">{badge.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
