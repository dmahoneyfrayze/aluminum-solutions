import React from 'react';

export default function MaterialComparison() {
    const comparisonData = [
        {
            aspect: "Cost",
            aluminum: "More expensive upfront, better long-term value",
            pvc: "Budget-friendly, typically cheaper than aluminum",
            steel: "More expensive than aluminum",
            wood: "Varies, from affordable to premium"
        },
        {
            aspect: "Maintenance",
            aluminum: "Minimal upkeep, occasional cleaning",
            pvc: "Low maintenance, no painting/staining required",
            steel: "Some maintenance, may need repainting",
            wood: "High maintenance, regular treatments needed"
        },
        {
            aspect: "Longevity",
            aluminum: "Highly durable, resistant to rust/corrosion",
            pvc: "Durable, may crack/fade with temperature changes",
            steel: "Very durable, resistant to environmental factors",
            wood: "Varies, some types extremely durable"
        },
        {
            aspect: "Ease of Installation",
            aluminum: "Easier, often as pre-made panels",
            pvc: "Easy to assemble, lightweight",
            steel: "Heavier, professional installation often required",
            wood: "Complexity varies, custom designs more labor-intensive"
        },
        {
            aspect: "Aesthetics",
            aluminum: "Wide range of designs, various colors/finishes",
            pvc: "Limited in customization and color options",
            steel: "Can be painted, may need repainting",
            wood: "Highly customizable, natural stylish look"
        },
        {
            aspect: "Property View",
            aluminum: "Minimal obstruction, minimalist style",
            pvc: "Can limit views depending on design",
            steel: "May obstruct views depending on design",
            wood: "Can obstruct views, especially plank designs"
        }
    ];

    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
                        Is Aluminum The Best Material For Railings?
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        See how aluminum compares to other common railing materials.
                    </p>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full bg-white shadow-xl rounded-xl overflow-hidden">
                        <thead>
                            <tr className="bg-brand-navy text-white">
                                <th className="py-4 px-6 text-left font-bold">Aspect</th>
                                <th className="py-4 px-6 text-left font-bold bg-brand-copper">Aluminum Railings</th>
                                <th className="py-4 px-6 text-left font-bold">PVC (Vinyl) Railings</th>
                                <th className="py-4 px-6 text-left font-bold">Steel Railings</th>
                                <th className="py-4 px-6 text-left font-bold">Wood Railings</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {comparisonData.map((row, index) => (
                                <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                                    <td className="py-4 px-6 font-bold text-slate-900">{row.aspect}</td>
                                    <td className="py-4 px-6 text-slate-700 bg-orange-50/30 font-medium">{row.aluminum}</td>
                                    <td className="py-4 px-6 text-slate-600">{row.pvc}</td>
                                    <td className="py-4 px-6 text-slate-600">{row.steel}</td>
                                    <td className="py-4 px-6 text-slate-600">{row.wood}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
