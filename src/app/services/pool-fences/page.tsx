import { Metadata } from "next";
import PoolFencesContent from "./PoolFencesContent";

export const metadata: Metadata = {
    title: "Pool Fences | Glass & Aluminum Safety Fences Toronto",
    description: "Ensure safety without sacrificing style. Our glass pool fences and aluminum guards meet all Ontario by-law requirements.",
    openGraph: {
        title: "Pool Fences | Glass & Aluminum Safety Fences Toronto",
        description: "Ensure safety without sacrificing style. Our glass pool fences and aluminum guards meet all Ontario by-law requirements.",
    },
};

export default function PoolFencesPage() {
    return <PoolFencesContent />;
}
