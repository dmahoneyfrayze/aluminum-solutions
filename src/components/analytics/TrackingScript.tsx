"use client";

import Script from "next/script";

export default function TrackingScript() {
    return (
        <Script
            src="https://links.aluminumsolutions.ca/js/external-tracking.js"
            data-tracking-id="tk_5fec4856317d4dad88a1d4db46b284ad"
            strategy="afterInteractive"
        />
    );
}
