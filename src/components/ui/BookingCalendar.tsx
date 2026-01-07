"use client";

import Script from "next/script";

export default function BookingCalendar() {
    return (
        <div className="w-full min-h-[800px] bg-white rounded-lg shadow-sm p-4 border border-slate-100">
            <iframe
                src="https://links.aluminumsolutions.ca/widget/booking/dBfrAp1sy2Amff0zU7nF"
                style={{ width: "100%", border: "none", overflow: "hidden", minHeight: "800px" }}
                scrolling="no"
                id="dBfrAp1sy2Amff0zU7nF_1764310273914"
                title="Booking Calendar"
            />
            <Script
                src="https://links.aluminumsolutions.ca/js/form_embed.js"
                strategy="lazyOnload"
            />
        </div>
    );
}
