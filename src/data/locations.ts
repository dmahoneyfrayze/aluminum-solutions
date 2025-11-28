export interface LocationData {
    slug: string;
    name: string;
    metaDescription: string;
    title: string;
    heroImage?: string;
    content: {
        intro: string;
        landmarks: string[];
        serviceArea: string;
    };
}

export const locations: LocationData[] = [
    {
        slug: "toronto",
        name: "Toronto",
        title: "Aluminum Railings & Glass Enclosures in Toronto",
        metaDescription: "Premium aluminum railings and glass enclosures in Toronto. Custom manufactured and installed for homes and businesses. Get a free quote today.",
        heroImage: "/images/migrated/manufacturing-glass.jpg",
        content: {
            intro: "From the Beaches to High Park, we provide Toronto homeowners with architect-grade aluminum railings and glass enclosures. Our local manufacturing ensures quick turnaround times for downtown condos and residential renovations.",
            landmarks: ["CN Tower", "The Beaches", "High Park", "Liberty Village"],
            serviceArea: "Downtown, East York, North York, Scarborough, Etobicoke, and York.",
        },
    },
    {
        slug: "mississauga",
        name: "Mississauga",
        title: "Custom Railings & Glass Showers in Mississauga",
        metaDescription: "Top-rated manufacturer of aluminum railings and glass showers in Mississauga. Factory direct pricing and expert installation.",
        heroImage: "/images/migrated/hero-commercial.jpg",
        content: {
            intro: "Serving the growing communities of Mississauga, from Port Credit to Streetsville. We specialize in modern glass railings for new builds and porch enclosures for established homes.",
            landmarks: ["Square One", "Port Credit", "Streetsville", "Erin Mills"],
            serviceArea: "Mississauga, Port Credit, Streetsville, Clarkson, Cooksville.",
        },
    },
    {
        slug: "oakville",
        name: "Oakville",
        title: "Luxury Glass Railings & Gates in Oakville",
        metaDescription: "Elevate your Oakville home with custom glass railings and aluminum gates. Designed for luxury estates and waterfront properties.",
        heroImage: "/images/migrated/manufacturing-glass.jpg",
        content: {
            intro: "Oakville's luxury homes demand the highest quality finishes. Our frameless glass railings and custom aluminum gates are designed to complement the architectural beauty of Bronte and Old Oakville.",
            landmarks: ["Bronte Harbour", "Old Oakville", "Glen Abbey", "Lakeshore"],
            serviceArea: "Oakville, Bronte, Glen Abbey, Ford Drive, Joshua Creek.",
        },
    },
    {
        slug: "north-york",
        name: "North York",
        title: "Aluminum Porch Railings in North York",
        metaDescription: "Durable aluminum porch railings and glass balcony guards in North York. Manufactured locally for superior quality.",
        heroImage: "/images/migrated/hero-commercial.jpg",
        content: {
            intro: "We have installed thousands of feet of railing across North York. Whether it's a balcony upgrade near Yonge & Sheppard or a front porch in the Bridle Path, we have the expertise you need.",
            landmarks: ["Yonge & Sheppard", "Bridle Path", "Yorkdale", "Downsview Park"],
            serviceArea: "North York, Willowdale, York Mills, Lawrence Park, Don Mills.",
        },
    },
    {
        slug: "scarborough",
        name: "Scarborough",
        title: "Affordable Aluminum Railings in Scarborough",
        metaDescription: "Factory-direct aluminum railings in Scarborough. Save on high-quality exterior railings and glass enclosures.",
        heroImage: "/images/migrated/hero-commercial.jpg",
        content: {
            intro: "Scarborough homeowners trust Aluminum Solutions for durable, maintenance-free railings. From the Bluffs to Agincourt, our products stand up to the elements and enhance curb appeal.",
            landmarks: ["Scarborough Bluffs", "Agincourt", "Rouge Park", "Guildwood"],
            serviceArea: "Scarborough, Agincourt, Guildwood, West Hill, Wexford.",
        },
    },
    {
        slug: "brampton",
        name: "Brampton",
        title: "Brampton Aluminum Railings & Fences",
        metaDescription: "Secure and stylish aluminum railings and fences for Brampton homes. Get a free estimate from the manufacturer.",
        heroImage: "/images/migrated/hero-commercial.jpg",
        content: {
            intro: "Enhance your Brampton property with our custom aluminum solutions. We offer robust porch railings and privacy fences designed for the Peel Region's climate.",
            landmarks: ["Gage Park", "Bramalea", "Heart Lake", "Downtown Brampton"],
            serviceArea: "Brampton, Bramalea, Heart Lake, Mount Pleasant, Gore Road.",
        },
    },
    {
        slug: "vaughan",
        name: "Vaughan",
        title: "Custom Glass Railings in Vaughan & Woodbridge",
        metaDescription: "Modern glass railings and aluminum columns for Vaughan and Woodbridge homes. Visit our showroom or get a free quote.",
        heroImage: "/images/migrated/manufacturing-glass.jpg",
        content: {
            intro: "Vaughan's modern developments require modern solutions. Our frameless glass railings and aluminum columns are a perfect match for the contemporary architecture in Woodbridge and Maple.",
            landmarks: ["Canada's Wonderland", "Vaughan Mills", "Kleinburg", "Woodbridge"],
            serviceArea: "Vaughan, Woodbridge, Maple, Kleinburg, Thornhill.",
        },
    },
    {
        slug: "markham",
        name: "Markham",
        title: "Markham Aluminum Railings & Glass",
        metaDescription: "Premium exterior railings for Markham and Unionville. Custom design and installation of aluminum and glass systems.",
        heroImage: "/images/migrated/hero-commercial.jpg",
        content: {
            intro: "From historic Unionville to the new developments in Cornell, we provide Markham residents with top-tier railing systems. Our aluminum products offer the look of wrought iron without the rust.",
            landmarks: ["Unionville", "Pacific Mall", "Cornell", "Markhamville"],
            serviceArea: "Markham, Unionville, Cornell, Milliken, Thornhill.",
        },
    },
    {
        slug: "richmond-hill",
        name: "Richmond Hill",
        title: "Richmond Hill Glass & Aluminum Railings",
        metaDescription: "Upgrade your Richmond Hill home with custom glass and aluminum railings. Expert manufacturing and installation.",
        heroImage: "/images/migrated/manufacturing-glass.jpg",
        content: {
            intro: "Richmond Hill's diverse housing market deserves versatile solutions. We offer everything from classic picket railings to ultra-modern glass shoe systems for custom builds.",
            landmarks: ["Richmond Hill Centre", "Lake Wilcox", "Oak Ridges", "Mill Pond"],
            serviceArea: "Richmond Hill, Oak Ridges, Langstaff, Elgin Mills.",
        },
    },
    {
        slug: "etobicoke",
        name: "Etobicoke",
        title: "Etobicoke Railings & Glass Enclosures",
        metaDescription: "Serving Etobicoke with high-quality aluminum railings and glass porch enclosures. Get a quote today.",
        heroImage: "/images/migrated/hero-commercial.jpg",
        content: {
            intro: "We are a top choice for Etobicoke contractors and homeowners. Our glass enclosures provide wind protection for waterfront properties, while our railings add safety and style.",
            landmarks: ["Humber Bay", "The Kingsway", "Rexdale", "Mimico"],
            serviceArea: "Etobicoke, The Kingsway, Rexdale, Mimico, Long Branch.",
        },
    },
    {
        slug: "milton",
        name: "Milton",
        title: "Milton Aluminum Railings & Gates",
        metaDescription: "Durable exterior railings and gates for Milton homes. Fast installation and lifetime warranty.",
        heroImage: "/images/migrated/hero-commercial.jpg",
        content: {
            intro: "As Milton grows, so does the need for quality exterior finishes. We provide the newest subdivisions and established rural properties with long-lasting aluminum railings.",
            landmarks: ["Rattlesnake Point", "Milton Velodrome", "Downtown Milton", "Escarpment"],
            serviceArea: "Milton, Campbellville, Brookville, Hornby.",
        },
    },
    {
        slug: "pickering-ajax",
        name: "Pickering & Ajax",
        title: "Railings for Pickering & Ajax Durham Region",
        metaDescription: "Serving Durham Region with custom aluminum railings. Pickering and Ajax installation experts.",
        heroImage: "/images/migrated/hero-commercial.jpg",
        content: {
            intro: "We extend our factory-direct service to Durham Region. Homeowners in Pickering and Ajax can enjoy the same high-quality manufacturing and installation as our Toronto clients.",
            landmarks: ["Pickering Town Centre", "Ajax Waterfront", "Frenchman's Bay", "Casino Ajax"],
            serviceArea: "Pickering, Ajax, Whitby, Durham Region.",
        },
    },
    {
        slug: "newmarket",
        name: "Newmarket",
        title: "Newmarket Porch Enclosures & Railings",
        metaDescription: "Custom porch enclosures and aluminum railings in Newmarket. Protect your home from the elements with our glass systems.",
        heroImage: "/images/migrated/hero-commercial.jpg",
        content: {
            intro: "Newmarket homeowners know the value of a protected front porch. Our custom glass enclosures keep the snow and wind out while maintaining your home's curb appeal.",
            landmarks: ["Upper Canada Mall", "Main Street Newmarket", "Fairy Lake", "Magna Centre"],
            serviceArea: "Newmarket, Aurora, East Gwillimbury, Holland Landing.",
        },
    },
    {
        slug: "burlington",
        name: "Burlington",
        title: "Burlington Glass Railings & Balconies",
        metaDescription: "Premium glass railings for Burlington waterfront homes and condos. Expert design and installation.",
        heroImage: "/images/migrated/manufacturing-glass.jpg",
        content: {
            intro: "From the Brant Street Pier to the Escarpment, Burlington is home to stunning views. Our frameless glass railings ensure you never miss a sunset.",
            landmarks: ["Spencer Smith Park", "Royal Botanical Gardens", "Mapleview", "Brant Street Pier"],
            serviceArea: "Burlington, Aldershot, Appleby, Tansley, Tyandaga.",
        },
    },
    {
        slug: "montreal",
        name: "Montreal",
        title: "Aluminum Railings & Glass in Montreal",
        metaDescription: "Premium aluminum railings and glass enclosures in Montreal. Serving the Greater Montreal Area with custom installation.",
        heroImage: "/images/migrated/manufacturing-glass.jpg",
        content: {
            intro: "From the Old Port to the Plateau, we bring modern aluminum and glass solutions to Montreal homes. Our Blainville office ensures local service for all your railing needs.",
            landmarks: ["Old Montreal", "Mount Royal", "The Plateau", "Griffintown"],
            serviceArea: "Montreal, West Island, Anjou, Saint-Laurent, Ahuntsic.",
        },
    },
    {
        slug: "blainville",
        name: "Blainville",
        title: "Blainville Aluminum Railings & Glass",
        metaDescription: "Factory-direct aluminum railings in Blainville. Visit our local office for custom glass enclosures and expert installation.",
        heroImage: "/images/migrated/hero-commercial.jpg",
        content: {
            intro: "Home to our Quebec headquarters, Blainville is where quality meets craftsmanship. We provide our neighbors with the finest aluminum railings and glass systems on the North Shore.",
            landmarks: ["Fontainebleau", "Curé-Labelle", "Blainville Equestrian Park", "Michèle-Bohec"],
            serviceArea: "Blainville, Sainte-Thérèse, Lorraine, Rosemère, Boisbriand.",
        },
    },
    {
        slug: "laval",
        name: "Laval",
        title: "Laval Glass Railings & Porch Enclosures",
        metaDescription: "Upgrade your Laval home with custom glass railings. Durable, maintenance-free aluminum solutions for balconies and porches.",
        heroImage: "/images/migrated/manufacturing-glass.jpg",
        content: {
            intro: "Laval's mix of modern condos and suburban homes is perfect for our versatile railing systems. We install durable glass and aluminum enclosures across Île Jésus.",
            landmarks: ["Carrefour Laval", "Centropolis", "Vieux-Sainte-Rose", "Nature Centre"],
            serviceArea: "Laval, Chomedey, Sainte-Dorothée, Fabreville, Vimont.",
        },
    },
    {
        slug: "terrebonne",
        name: "Terrebonne",
        title: "Terrebonne Aluminum Railings & Fences",
        metaDescription: "Stylish and safe aluminum railings for Terrebonne homes. Custom manufacturing and professional installation.",
        heroImage: "/images/migrated/hero-commercial.jpg",
        content: {
            intro: "Enhance your property in Terrebonne with our rust-free aluminum railings. Perfect for historic Vieux-Terrebonne or new developments in Lachenaie.",
            landmarks: ["Île-des-Moulins", "Vieux-Terrebonne", "Lachenaie", "Trans-Terrebonne"],
            serviceArea: "Terrebonne, Lachenaie, La Plaine, Mascouche.",
        },
    },
    {
        slug: "saint-eustache",
        name: "Saint-Eustache",
        title: "Saint-Eustache Glass & Aluminum Railings",
        metaDescription: "Top-quality glass and aluminum railings in Saint-Eustache. Protect your porch and enjoy the view.",
        heroImage: "/images/migrated/manufacturing-glass.jpg",
        content: {
            intro: "We serve the Saint-Eustache community with high-quality exterior solutions. Our glass railings provide safety without obstructing the beautiful views of the Mille Îles River.",
            landmarks: ["Vieux-Saint-Eustache", "Promenade Paul-Sauvé", "Saint-Eustache Church", "Autodrome"],
            serviceArea: "Saint-Eustache, Deux-Montagnes, Sainte-Marthe-sur-le-Lac.",
        },
    },
];

export function getLocationBySlug(slug: string): LocationData | undefined {
    return locations.find((location) => location.slug === slug);
}
