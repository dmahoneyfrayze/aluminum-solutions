"use client";

import { useEffect } from "react";

export default function ChatWidget() {
    useEffect(() => {
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

        return () => {
            // Cleanup on unmount
            if (document.body.contains(div)) {
                document.body.removeChild(div);
            }
            // We generally leave the script as it might be used by other things or is hard to fully unload
            // But we can try to remove the specific tag
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    return null;
}
