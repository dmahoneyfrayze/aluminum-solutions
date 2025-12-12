import { Metadata } from "next";
import PrivacyScreensContent from "./PrivacyScreensContent";

export const metadata: Metadata = {
    title: "Privacy Screens Toronto | Custom Aluminum & Glass Privacy Fences",
    description: "Enhance your backyard privacy with stylish aluminum and frosted glass privacy screens. Durable, maintenance-free, and custom-built for decks and pools.",
};

export default function PrivacyScreensPage() {
    return <PrivacyScreensContent />;
}
