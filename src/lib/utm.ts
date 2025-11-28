export interface UTMParams {
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
    utm_term?: string;
    utm_content?: string;
}

export function getUTMParams(): UTMParams {
    if (typeof window === "undefined") return {};

    const searchParams = new URLSearchParams(window.location.search);
    const utms: UTMParams = {};

    if (searchParams.has("utm_source")) utms.utm_source = searchParams.get("utm_source") || "";
    if (searchParams.has("utm_medium")) utms.utm_medium = searchParams.get("utm_medium") || "";
    if (searchParams.has("utm_campaign")) utms.utm_campaign = searchParams.get("utm_campaign") || "";
    if (searchParams.has("utm_term")) utms.utm_term = searchParams.get("utm_term") || "";
    if (searchParams.has("utm_content")) utms.utm_content = searchParams.get("utm_content") || "";

    return utms;
}
