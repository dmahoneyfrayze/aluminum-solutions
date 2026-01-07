"use client";

import { useEffect } from "react";

export default function FloorPlanUploadForm() {
    useEffect(() => {
        // Load the GHL form embed script
        const script = document.createElement('script');
        script.src = "https://links.aluminumsolutions.ca/js/form_embed.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Cleanup if needed, though usually these scripts just add event listeners
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        }
    }, []);

    return (
        <div className="w-full bg-white rounded-xl overflow-hidden shadow-xl border border-slate-100">
            <iframe
                src="https://links.aluminumsolutions.ca/widget/form/MpVytULSIP5Ip1dbL9w3"
                style={{ width: '100%', border: 'none', borderRadius: '3px', minHeight: '878px' }}
                id="inline-MpVytULSIP5Ip1dbL9w3"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Floor Plan"
                data-height="878"
                data-layout-iframe-id="inline-MpVytULSIP5Ip1dbL9w3"
                data-form-id="MpVytULSIP5Ip1dbL9w3"
                title="Floor Plan"
            />
        </div>
    );
}
