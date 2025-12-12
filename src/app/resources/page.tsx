import ResourcesContent from "./ResourcesContent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Resources | Railing Maintenance, Brochures & Warranty Info",
    description: "Download our product brochures, view color charts, and learn how to maintain your aluminum railings and glass enclosures.",
    openGraph: {
        title: "Resources | Railing Maintenance, Brochures & Warranty Info",
        description: "Download our product brochures, view color charts, and learn how to maintain your aluminum railings and glass enclosures.",
    },
};

export default function ResourcesPage() {
    return <ResourcesContent />;
}
