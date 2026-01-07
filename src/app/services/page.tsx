import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/ui/Hero";
import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";
import ManufacturingHighlight from "@/components/ui/ManufacturingHighlight";
import ServicesFAQ from "@/components/ui/ServicesFAQ";
import ServiceJumpBar from "@/components/ui/ServiceJumpBar";

export const metadata: Metadata = {
    title: "Aluminum & Glass Services | Factory Direct Toronto & GTA",
    description: "Premium manufacturing and installation of aluminum railings, frameless glass, pool fences, and custom enclosures. Serving Toronto, Mississauga, Vaughan, and the GTA.",
};

const exteriorServices = [
    {
        title: "Aluminum Railings",
        description: "Durable, maintenance-free railings in a variety of modern styles and colors. Perfect for porches, balconies, and decks.",
        link: "/services/railings",
        features: ["Rust-free", "Powder-coated finish", "Multiple color options"],
        image: "/images/projects/aluminum-railing-pickets-black.webp",
        cta: "Get Aluminum Pricing"
    },
    {
        title: "Glass Railings",
        description: "Elegant frameless and post systems for unobstructed views.",
        link: "/services/glass-railings",
        features: ["10mm/12mm Glass", "Spigot or Channel", "Modern Look"],
        image: "/images/projects/glass-railing-staircase.jpg",
        cta: "Explore Glass Options"
    },
    {
        title: "Pool Fences",
        description: "Safe, code-compliant glass and aluminum pool enclosures that don't obstruct your view.",
        link: "/services/pool-fences",
        features: ["Self-closing gates", "Climb-resistant", "12mm safety glass"],
        image: "/images/projects/pool-fence-glass-swimming.jpg",
        cta: "Get Pool Code Quote"
    },
    {
        title: "Glass Enclosures",
        description: "Frameless and framed glass solutions that provide wind protection without sacrificing your view.",
        link: "/services/glass-enclosures",
        features: ["Tempered safety glass", "Custom sizing", "Wind protection"],
        image: "/images/projects/glass-enclosure-double-door.jpg",
        cta: "View Enclosure Details"
    },
    {
        title: "Privacy Screens",
        description: "Acid-etched glass and aluminum screens to create a private oasis in urban settings.",
        link: "/services/privacy-screens",
        features: ["Frosted glass", "Custom heights", "Wind reduction"],
        image: "/images/projects/privacy-screen-service-card.webp",
        cta: "See Privacy Options"
    },
    {
        title: "Aluminum Columns",
        description: "Structural and decorative aluminum columns to replace rotting wood and add curb appeal.",
        link: "/services/columns",
        features: ["Load-bearing options", "Classic & modern styles", "Maintenance-free"],
        image: "/images/projects/aluminum-columns-glass-railing.jpg",
        cta: "View Column Styles"
    }
];

const interiorServices = [
    {
        title: "Glass Walls",
        description: "Modern glass partitions for offices, gyms, and wine cellars. Create separation without losing light.",
        link: "/services/glass-walls",
        features: ["Acoustic privacy", "Frameless design", "Custom hardware"],
        image: "/images/projects/glass-office-partition-modern.jpg",
        cta: "Get Partition Quote"
    },
    {
        title: "Frameless Showers",
        description: "Custom glass shower enclosures and tub shields. Spa-like luxury for your bathroom.",
        link: "/services/showers",
        features: ["10mm Safety Glass", "Custom Hardware", "Steam Showers"],
        image: "/images/projects/frameless-glass-shower-custom.jpg",
        cta: "View Shower Models"
    }
];

export default function ServicesPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow">
                <Hero
                    title="Aluminum & Glass Services in Toronto & the GTA"
                    subtitle={
                        <>
                            Factory-direct fabrication and installation of aluminum railings, glass systems, and custom enclosures — manufactured in the GTA.
                            <br className="hidden md:block" />
                            <span className="block mt-4 text-lg text-slate-200 font-medium">Residential and commercial solutions engineered to Ontario Building Code.</span>
                        </>
                    }
                    ctaText="Get a Free Quote"
                    ctaLink="/contact"
                    backgroundImage="/images/generated/railing_hero_detail_1764312850877.webp"
                />

                <ServiceJumpBar />

                {/* Intro Keyword Block */}
                <section className="py-12 bg-white">
                    <div className="container mx-auto px-6 max-w-4xl text-center">
                        <p className="text-xl text-slate-700 leading-relaxed font-medium">
                            Aluminum Solutions provides factory-direct aluminum railings, glass railings, pool fences, privacy screens, and interior glass systems across Toronto and the GTA.
                        </p>
                    </div>
                </section>

                {/* Exterior Section */}
                <section id="exterior" className="pb-20 pt-8 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <span className="text-brand-copper font-bold tracking-widest uppercase text-sm mb-2 block">Exterior Solutions</span>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Outdoor Living & Safety</h2>
                            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                                Enhance your curb appeal and outdoor living space with our durable, maintenance-free aluminum and glass products.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {exteriorServices.map((service, index) => (
                                <Link
                                    key={index}
                                    href={service.link}
                                    className="group bg-white border border-slate-100 hover:border-slate-300 hover:shadow-xl transition-all duration-300 overflow-hidden rounded-lg flex flex-col block"
                                >
                                    <div className="h-64 bg-slate-200 relative overflow-hidden">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                    <div className="p-8 flex-grow flex flex-col">
                                        <h3 className="text-2xl font-serif font-bold mb-3 text-slate-900 group-hover:text-brand-copper transition-colors">{service.title}</h3>
                                        <p className="text-slate-600 mb-6 leading-relaxed flex-grow">{service.description}</p>
                                        <div className="mb-6 flex flex-wrap gap-2">
                                            {service.features?.map((feature, i) => (
                                                <span key={i} className="text-xs font-bold bg-slate-50 text-slate-600 px-2 py-1 rounded border border-slate-200">
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                        <span
                                            className="inline-block w-full text-center py-3 bg-white border border-slate-900 text-slate-900 font-bold text-sm uppercase tracking-wider group-hover:bg-slate-900 group-hover:text-white transition-colors rounded-sm"
                                        >
                                            {service.cta} →
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Manufacturer Advantage - "Why Us" Bridge */}
                <ManufacturingHighlight />

                {/* Interior Section */}
                <section id="interior" className="py-20 bg-slate-50">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <span className="text-brand-copper font-bold tracking-widest uppercase text-sm mb-2 block">Interior Solutions</span>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Interior Glass & Design</h2>
                            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                                Transform your indoor spaces with modern, light-filled glass partitions and enclosures.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {interiorServices.map((service, index) => (
                                <Link
                                    key={index}
                                    href={service.link}
                                    className="group bg-white border border-slate-100 hover:border-slate-300 hover:shadow-xl transition-all duration-300 overflow-hidden rounded-lg flex flex-col block"
                                >
                                    <div className="h-72 bg-slate-200 relative overflow-hidden">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                    <div className="p-8 flex-grow flex flex-col">
                                        <h3 className="text-2xl font-serif font-bold mb-3 text-slate-900 group-hover:text-brand-copper transition-colors">{service.title}</h3>
                                        <p className="text-slate-600 mb-6 leading-relaxed flex-grow">{service.description}</p>
                                        <div className="mb-6 flex flex-wrap gap-2">
                                            {service.features?.map((feature, i) => (
                                                <span key={i} className="text-xs font-bold bg-slate-50 text-slate-600 px-2 py-1 rounded border border-slate-200">
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                        <span
                                            className="inline-block w-full text-center py-3 bg-white border border-slate-900 text-slate-900 font-bold text-sm uppercase tracking-wider group-hover:bg-slate-900 group-hover:text-white transition-colors rounded-sm"
                                        >
                                            {service.cta} →
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                <ServicesFAQ />

                {/* Local Entity Reinforcement & Lead Magnet */}
                <section className="py-24 bg-brand-navy text-white text-center">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-white">
                            Not Sure What You Need?
                        </h2>
                        <p className="text-slate-300 mb-10 text-lg">
                            Book a free on-site design consultation. Our experts will bring samples, take measurements, and help you choose the perfect solution for your home.
                        </p>
                        <div className="mb-12">
                            <p className="text-sm font-bold tracking-widest uppercase text-brand-copper mb-4">Proudly Serving</p>
                            <p className="text-slate-400 text-sm md:text-base">
                                Toronto • Vaughan • Markham • Mississauga • Richmond Hill • Oakville • Brampton • Aurora • Newmarket
                            </p>
                        </div>
                        <Link href="/contact" className="inline-block px-10 py-4 bg-white text-brand-navy font-bold tracking-wide hover:bg-slate-100 transition-colors shadow-lg rounded-sm">
                            Book Free Consultation
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
