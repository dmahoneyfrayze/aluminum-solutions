import CommercialContent from "./CommercialContent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Commercial Aluminum Railings & Glass Partitions | Toronto Contractors",
    description: "Heavy-duty aluminum railings and glass systems for commercial buildings, condos, and offices. Bulk pricing and professional installation available.",
};

export default function CommercialPage() {
    return <CommercialContent />;
}
