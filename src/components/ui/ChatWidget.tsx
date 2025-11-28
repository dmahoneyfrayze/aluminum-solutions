"use client";

import Script from "next/script";

export default function ChatWidget() {
    return (
        <>
            <div
                data-chat-widget
                data-widget-id="69293c9ed47c13330714ef23"
                data-location-id="hos0jUKT6DAHGRD0nBoP"
            />
            <Script
                src="https://beta.leadconnectorhq.com/loader.js"
                data-resources-url="https://beta.leadconnectorhq.com/chat-widget/loader.js"
                data-widget-id="69293c9ed47c13330714ef23"
                strategy="lazyOnload"
            />
        </>
    );
}
