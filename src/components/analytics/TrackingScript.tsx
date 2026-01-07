"use client";

import { useEffect } from "react";

export default function TrackingScript() {
    useEffect(() => {
        const timer = setTimeout(() => {
            const script = document.createElement("script");
            script.src = "https://links.aluminumsolutions.ca/js/external-tracking.js";
            script.setAttribute("data-tracking-id", "tk_5fec4856317d4dad88a1d4db46b284ad");
            script.async = true;
            document.body.appendChild(script);
        }, 3000); // Defer by 3 seconds

        return () => {
            clearTimeout(timer);
            // Cleanup logic if needed, though usually external scripts are hard to remove cleanly
        };
    }, []);

    return null;
}
