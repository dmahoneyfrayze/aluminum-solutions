import { Metadata } from "next";
import PoolFencesContent from "./PoolFencesContent";

export const metadata: Metadata = {
    title: "Glass Pool Fencing Toronto | Safe & Compliant Pool Enclosures",
    description: "Secure your swimming pool with frameless glass fences and self-closing gates. Meets all Ontario safety by-laws without obstructing your view.",
};

export default function PoolFencesPage() {
    return <PoolFencesContent />;
}
