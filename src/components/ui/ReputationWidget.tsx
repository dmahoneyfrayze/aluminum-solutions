"use client";

import Script from "next/script";
import { useState, useEffect } from "react";

export default function ReputationWidget() {
    const [loadWidget, setLoadWidget] = useState(false);

    useEffect(() => {
        // Delay widget loading until after hydration/idle to improve TBT
        const timer = setTimeout(() => {
            setLoadWidget(true);
        }, 2000); // 2 second delay to prioritize main content
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-serif font-bold text-brand-dark mb-4">
                        What Our Clients Say
                    </h2>
                    <p className="text-slate-600">
                        Real reviews from homeowners across the GTA.
                    </p>
                </div>

                <div className="w-full min-h-[600px] bg-slate-50 rounded-lg flex items-center justify-center">
                    {loadWidget ? (
                        <>
                            <Script
                                src="https://links.aluminumsolutions.ca/reputation/assets/review-widget.js"
                                strategy="lazyOnload"
                            />
                            <iframe
                                className="lc_reviews_widget"
                                src="https://links.aluminumsolutions.ca/reputation/widgets/review_widget/hos0jUKT6DAHGRD0nBoP"
                                frameBorder="0"
                                scrolling="no"
                                loading="lazy"
                                style={{ minWidth: "100%", width: "100%", minHeight: "600px", border: "none", overflow: "hidden" }}
                                title="Customer Reviews"
                            />
                        </>
                    ) : (
                        <div className="text-slate-400 animate-pulse">Loading reviews...</div>
                    )}
                </div>
            </div>
        </section>
    );
}
