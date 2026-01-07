import AboutContent from "./AboutContent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | Top-Rated Aluminum Railing Manufacturers Toronto",
    description: "Learn about Aluminum Solutions, Toronto's premier manufacturer of custom aluminum railings, glass showers, and gates. Family-owned, factory-direct pricing.",
    openGraph: {
        title: "About Us | Top-Rated Aluminum Railing Manufacturers Toronto",
        description: "Learn about Aluminum Solutions, Toronto's premier manufacturer of custom aluminum railings, glass showers, and gates. Family-owned, factory-direct pricing.",
    },
};

export default function AboutPage() {
    return <AboutContent />;
}
