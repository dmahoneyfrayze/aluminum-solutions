import ContactContent from "./ContactContent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Aluminum Solutions | Free Railing Estimates in GTA",
    description: "Get a free quote for aluminum railings, glass enclosures, or custom gates. Visit our showroom in Toronto or book an on-site consultation today.",
    openGraph: {
        title: "Contact Aluminum Solutions | Free Railing Estimates in GTA",
        description: "Get a free quote for aluminum railings, glass enclosures, or custom gates. Visit our showroom in Toronto or book an on-site consultation today.",
    },
};

export default function ContactPage() {
    return <ContactContent />;
}
