import Link from "next/link";
import { locations } from "@/data/locations";

// Filter to top priority locations to avoid link spamming
const PRIORITY_SLUGS = [
    "toronto",
    "mississauga",
    "oakville",
    "vaughan",
    "richmond-hill",
    "brampton",
    "markham",
    "etobicoke",
    "scarborough",
    "north-york"
];

const priorityLocations = locations
    .filter(loc => PRIORITY_SLUGS.includes(loc.slug))
    .sort((a, b) => a.name.localeCompare(b.name));

export default function ServiceAreasList() {
    return (
        <section className="py-12 bg-slate-50 border-t border-slate-200">
            <div className="container mx-auto px-6 text-center">
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">
                    Proudly Serving Toronto & The GTA
                </h3>
                <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-600">
                    {priorityLocations.map((location) => (
                        <Link
                            key={location.slug}
                            href={`/locations/${location.slug}`}
                            className="hover:text-brand-copper hover:underline transition-colors"
                        >
                            {location.name}
                        </Link>
                    ))}
                    <span className="text-slate-400">|</span>
                    <Link href="/locations/burlington" className="hover:text-brand-copper hover:underline transition-colors">Burlington</Link>
                    <Link href="/locations/milton" className="hover:text-brand-copper hover:underline transition-colors">Milton</Link>
                    <Link href="/locations/newmarket" className="hover:text-brand-copper hover:underline transition-colors">Newmarket</Link>
                    <Link href="/locations/aurora" className="hover:text-brand-copper hover:underline transition-colors">Aurora</Link>
                    <Link href="/locations/king-city" className="hover:text-brand-copper hover:underline transition-colors">King City</Link>
                </div>
            </div>
        </section>
    );
}
