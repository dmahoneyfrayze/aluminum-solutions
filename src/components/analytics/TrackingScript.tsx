"use client";

import { useEffect } from "react";

export default function TrackingScript() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://links.aluminumsolutions.ca/js/external-tracking.js";
        script.setAttribute("data-tracking-id", "tk_5fec4856317d4dad88a1d4db46b284ad");
        script.async = true;
        document.body.appendChild(script);

        return () => {
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    return null;
}
