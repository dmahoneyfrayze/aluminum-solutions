import ProcessContent from "./ProcessContent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Process | Custom Railing Manufacturing & Installation",
    description: "From design consultation to local manufacturing and professional installation. See how we deliver premium aluminum railings in just 4 weeks.",
    openGraph: {
        title: "Our Process | Custom Railing Manufacturing & Installation",
        description: "From design consultation to local manufacturing and professional installation. See how we deliver premium aluminum railings in just 4 weeks.",
    },
};

export default function ProcessPage() {
    return <ProcessContent />;
}
