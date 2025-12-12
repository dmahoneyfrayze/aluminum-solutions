import FAQContent from "./FAQContent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "FAQ | Aluminum Railing Installation & Pricing Questions",
    description: "Answers to common questions about aluminum railing costs, installation timelines in Toronto, permits, and warranty coverage.",
    openGraph: {
        title: "FAQ | Aluminum Railing Installation & Pricing Questions",
        description: "Answers to common questions about aluminum railing costs, installation timelines in Toronto, permits, and warranty coverage.",
    },
};

export default function FAQPage() {
    return <FAQContent />;
}
