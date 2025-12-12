import { Metadata } from "next";
import PrivacyScreensContent from "./PrivacyScreensContent";

export const metadata: Metadata = {
    title: "Privacy Screens | Aluminum & Frosted Glass Dividers",
    description: "Add privacy to your deck, balcony, or patio with custom aluminum privacy screens and frosted glass dividers.",
    openGraph: {
        title: "Privacy Screens | Aluminum & Frosted Glass Dividers",
        description: "Add privacy to your deck, balcony, or patio with custom aluminum privacy screens and frosted glass dividers.",
    },
};

export default function PrivacyScreensPage() {
    return <PrivacyScreensContent />;
}
