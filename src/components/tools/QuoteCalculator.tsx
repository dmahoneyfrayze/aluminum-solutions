"use client";

import { useState } from "react";
import Link from "next/link";

export default function QuoteCalculator() {
    const [step, setStep] = useState(1);
    const [product, setProduct] = useState("");
    const [feet, setFeet] = useState(10);
    const [location, setLocation] = useState("");
    const [estimate, setEstimate] = useState<{ min: number; max: number } | null>(null);

    const products = [
        { id: "aluminum", name: "Aluminum Railings", priceMin: 75, priceMax: 95 },
        { id: "glass", name: "Glass Railings", priceMin: 145, priceMax: 205 },
        { id: "pool", name: "Pool Railing", priceMin: 90, priceMax: 205 },
    ];

    const calculate = () => {
        const selectedProduct = products.find((p) => p.id === product);
        if (!selectedProduct) return;

        const min = selectedProduct.priceMin * feet;
        const max = selectedProduct.priceMax * feet;
        setEstimate({ min, max });
        setStep(3);
    };

    return (
        <section className="py-24 bg-slate-50" id="calculator">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
                    <div className="bg-slate-900 p-6 text-center">
                        <h2 className="text-2xl font-serif font-bold text-white">
                            Quick Rough Quote Calculator
                        </h2>
                        <p className="text-slate-400 text-sm">
                            Get an instant price range for your project.
                        </p>
                    </div>

                    <div className="p-8 md:p-12">
                        {step === 1 && (
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-bold text-slate-900 mb-3">
                                        1. What are you looking for?
                                    </label>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        {products.map((p) => (
                                            <button
                                                key={p.id}
                                                onClick={() => setProduct(p.id)}
                                                className={`p-4 rounded-lg border-2 text-left transition-all ${product === p.id
                                                    ? "border-blue-600 bg-blue-50 text-blue-900"
                                                    : "border-slate-200 hover:border-slate-300 text-slate-600"
                                                    }`}
                                                aria-pressed={product === p.id}
                                            >
                                                <span className="font-bold block">{p.name}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="linear-feet-range" className="block text-sm font-bold text-slate-900 mb-3">
                                        2. Approximate Linear Feet?
                                    </label>
                                    <input
                                        type="range"
                                        id="linear-feet-range"
                                        min="10"
                                        max="200"
                                        step="5"
                                        value={feet}
                                        onChange={(e) => setFeet(parseInt(e.target.value))}
                                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                                        aria-label="Approximate Linear Feet"
                                    />
                                    <div className="mt-2 text-right font-bold text-blue-600 text-lg">
                                        {feet} ft
                                    </div>
                                </div>

                                <button
                                    onClick={() => setStep(2)}
                                    disabled={!product}
                                    className="w-full py-4 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Next Step &rarr;
                                </button>
                            </div>
                        )}

                        {step === 2 && (
                            <div className="space-y-6">
                                <div>
                                    <label htmlFor="location-input" className="block text-sm font-bold text-slate-900 mb-3">
                                        3. Project Location (City)
                                    </label>
                                    <input
                                        type="text"
                                        id="location-input"
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)}
                                        placeholder="e.g. Toronto, Mississauga"
                                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 outline-none"
                                        aria-label="Project Location City"
                                    />
                                </div>

                                <button
                                    onClick={calculate}
                                    disabled={!location}
                                    className="w-full py-4 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Calculate Estimate
                                </button>

                                <button
                                    onClick={() => setStep(1)}
                                    className="w-full py-2 text-slate-500 font-bold text-sm hover:text-slate-700"
                                    aria-label="Go to previous step"
                                >
                                    &larr; Back
                                </button>
                            </div>
                        )}

                        {step === 3 && estimate && (
                            <div className="text-center">
                                <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mb-2">
                                    Estimated Price Range
                                </p>
                                <div className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
                                    ${estimate.min.toLocaleString()} - ${estimate.max.toLocaleString()}
                                </div>
                                <p className="text-slate-600 mb-8 max-w-md mx-auto">
                                    *This is a rough estimate based on standard materials. Custom finishes, height requirements, and installation complexity may affect the final price. This is for estimate purposes, and subject to change based on numerous job factors.
                                </p>

                                <Link
                                    href="/contact"
                                    className="inline-block w-full md:w-auto px-10 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-lg mb-4"
                                >
                                    Get Exact Quote &rarr;
                                </Link>

                                <div>
                                    <button
                                        onClick={() => setStep(1)}
                                        className="text-slate-500 font-bold text-sm hover:text-slate-700 underline"
                                    >
                                        Start Over
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
