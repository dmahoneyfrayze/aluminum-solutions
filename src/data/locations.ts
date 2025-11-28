export interface LocationData {
    slug: string;
    name: string;
    metaDescription: string;
    coordinates?: {
        lat: number;
        lng: number;
    };
}

export const locations: LocationData[] = [
    {
        slug: "toronto",
        name: "Toronto",
        metaDescription: "Premium aluminum railings and glass enclosures in Toronto. Custom fabrication and professional installation for modern homes.",
    },
    {
        slug: "mississauga",
        name: "Mississauga",
        metaDescription: "Top-rated aluminum railing contractor in Mississauga. Transform your porch or balcony with our high-end glass systems.",
    },
    {
        slug: "oakville",
        name: "Oakville",
        metaDescription: "Luxury glass railings and aluminum columns for Oakville estates. Expert design and installation services.",
    },
    {
        slug: "vaughan",
        name: "Vaughan",
        metaDescription: "Custom aluminum gates and railings in Vaughan. Durable, maintenance-free solutions for your home exterior.",
    },
    {
        slug: "richmond-hill",
        name: "Richmond Hill",
        metaDescription: "Richmond Hill's premier source for modern porch enclosures and aluminum railings. Get a free estimate today.",
    },
    {
        slug: "markham",
        name: "Markham",
        metaDescription: "Stylish and secure aluminum railings in Markham. Upgrade your curb appeal with our custom glass designs.",
    },
    {
        slug: "brampton",
        name: "Brampton",
        metaDescription: "Professional aluminum railing installation in Brampton. High-quality materials and expert craftsmanship.",
    },
    {
        slug: "burlington",
        name: "Burlington",
        metaDescription: "Beautiful glass deck railings and enclosures in Burlington. Enhance your outdoor living space with Aluminum Solutions.",
    },
    {
        slug: "milton",
        name: "Milton",
        metaDescription: "Milton's trusted expert for aluminum railings and porch enclosures. Durable, stylish, and maintenance-free.",
    },
    {
        slug: "newmarket",
        name: "Newmarket",
        metaDescription: "Custom aluminum exterior solutions in Newmarket. Railings, columns, and gates designed to last.",
    },
];

export function getLocationBySlug(slug: string): LocationData | undefined {
    return locations.find((location) => location.slug === slug);
}
