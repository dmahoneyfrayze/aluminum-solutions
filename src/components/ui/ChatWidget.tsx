"use client";

import { useEffect } from "react";

export default function ChatWidget() {
    useEffect(() => {
        const timer = setTimeout(() => {
            // Create the widget container
            const div = document.createElement("div");
            div.setAttribute("data-chat-widget", "");
            div.setAttribute("data-widget-id", "69293c9ed47c13330714ef23");
            div.setAttribute("data-location-id", "hos0jUKT6DAHGRD0nBoP");
            document.body.appendChild(div);

            // Create the script
            const script = document.createElement("script");
            script.src = "https://beta.leadconnectorhq.com/loader.js";
            script.setAttribute("data-resources-url", "https://beta.leadconnectorhq.com/chat-widget/loader.js");
            script.setAttribute("data-widget-id", "69293c9ed47c13330714ef23");
            script.async = true;
            document.body.appendChild(script);
        }, 8000); // Defer by 8 seconds to prioritize LCP and TTI

        return () => {
            clearTimeout(timer);
            // Cleanup logic
            const div = document.querySelector("div[data-chat-widget]");
            if (div) div.remove();
        };
    }, []);

    return null;
}
