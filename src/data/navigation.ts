export interface NavItem {
    label: string;
    href?: string;
    subItems?: NavItem[];
}

export const navigationData: NavItem[] = [
    {
        label: "Services",
        subItems: [
            { label: "Aluminum Railings", href: "/services/railings" },
            { label: "Glass Railings", href: "/services/glass-railings" },
            { label: "Porch Enclosures", href: "/services/porch-enclosures" },
            { label: "Pool Fences", href: "/services/pool-fences" },
            { label: "Glass Walls", href: "/services/glass-walls" },
            { label: "Privacy Screens", href: "/services/privacy-screens" },
            { label: "Showers & Mirrors", href: "/services/showers" },
            { label: "Aluminum Columns", href: "/services/columns" },
            { label: "View All Services", href: "/services" },
        ]
    },
    {
        label: "Locations",
        subItems: [
            { label: "Toronto", href: "/locations/toronto" },
            { label: "Mississauga", href: "/locations/mississauga" },
            { label: "Vaughan", href: "/locations/vaughan" },
            { label: "Markham", href: "/locations/markham" },
            { label: "Oakville", href: "/locations/oakville" },
            { label: "Richmond Hill", href: "/locations/richmond-hill" },
            { label: "Brampton", href: "/locations/brampton" },
            { label: "View All Areas", href: "/#locations" },
        ]
    },
    {
        label: "Resources",
        subItems: [
            { label: "Process", href: "/process" },
            { label: "Gallery", href: "/gallery" },
            { label: "Blog & Insights", href: "/blog" },
            { label: "FAQ", href: "/faq" },
            { label: "Reviews", href: "/reviews" },
        ]
    },
    {
        label: "About",
        href: "/about"
    },
    {
        label: "Commercial",
        href: "/commercial"
    }
];
