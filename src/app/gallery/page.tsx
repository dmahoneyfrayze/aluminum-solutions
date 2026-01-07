import GalleryContent from "./GalleryContent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Project Gallery | Recent Railing & Glass Projects in Toronto",
    description: "Browse our portfolio of custom glass railings, porch enclosures, and aluminum gates installed across the GTA. See the quality of our workmanship.",
    openGraph: {
        title: "Project Gallery | Recent Railing & Glass Projects in Toronto",
        description: "Browse our portfolio of custom glass railings, porch enclosures, and aluminum gates installed across the GTA. See the quality of our workmanship.",
    },
};

export default function GalleryPage() {
    return <GalleryContent />;
}
