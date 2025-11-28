import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/ui/Hero";
import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Our Services | Aluminum Solutions Toronto",
    description: "Explore our premium aluminum railings, glass enclosures, custom gates, and columns. Expert installation in Toronto and the GTA.",
};

const exteriorServices = [
    {
        title: "Aluminum Railings",
        description: "Durable, maintenance-free railings in a variety of modern styles and colors. Perfect for porches, balconies, and decks.",
        link: "/services/railings",
        features: ["Rust-free", "Powder-coated finish", "Multiple color options"],
        image: "/images/projects/aluminum-railing-pickets-black.png"
    },
    {
        title: "Glass Railings",
        description: "Elegant frameless and post systems for unobstructed views.",
        link: "/services/glass-railings",
        features: ["10mm/12mm Glass", "Spigot or Channel", "Modern Look"],
        image: "/images/projects/porch-railing-glass-aluminum.jpg"
    },
    {
        title: "Pool Fences",
        description: "Safe, code-compliant glass and aluminum pool enclosures that don't obstruct your view.",
        link: "/services/pool-fences",
        features: ["Self-closing gates", "Climb-resistant", "12mm safety glass"],
        image: "/images/projects/pool-fence-glass-swimming.jpg"
    },
    {
        title: "Glass Enclosures",
        description: "Frameless and framed glass solutions that provide wind protection without sacrificing your view.",
        link: "/services/glass-enclosures",
        features: ["Tempered safety glass", "Custom sizing", "Wind protection"],
        image: "/images/projects/glass-enclosure-double-door.jpg"
    },
    {
        title: "Privacy Screens",
        description: "Acid-etched glass and aluminum screens to create a private oasis in urban settings.",
        link: "/services/privacy-screens",
        features: ["Frosted glass", "Custom heights", "Wind reduction"],
        image: "/images/projects/privacy-screen-etched-glass.jpg"
    },
    {
        title: "Aluminum Columns",
        description: "Structural and decorative aluminum columns to replace rotting wood and add curb appeal.",
        link: "/services/columns",
        features: ["Load-bearing options", "Classic & modern styles", "Maintenance-free"],
        image: "/images/projects/aluminum-columns-glass-railing.jpg"
    }
];

const interiorServices = [
    {
        title: "Glass Walls",
        description: "Modern glass partitions for offices, gyms, and wine cellars. Create separation without losing light.",
        link: "/services/glass-walls",
        features: ["Acoustic privacy", "Frameless design", "Custom hardware"],
        image: "/images/projects/glass-office-partition-modern.jpg"
    },
    {
        title: "Frameless Showers",
        description: "Custom glass shower enclosures and tub shields. Spa-like luxury for your bathroom.",
        link: "/services/showers",
        features: ["10mm Safety Glass", "Custom Hardware", "Steam Showers"],
        image: "/images/projects/frameless-glass-shower-custom.jpg"
    }
];

export default function ServicesPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow">
                <Hero
                    title="Premium Aluminum & Glass Solutions"
                    subtitle="Custom fabrication and installation for your entire home—inside and out."
                    ctaText="Get a Free Quote"
                    ctaLink="/contact"
                    backgroundImage="/images/generated/railing_hero_detail_1764312850877.png"
                />

                {/* Exterior Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Exterior Living & Safety</h2>
                            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                                Enhance your curb appeal and outdoor living space with our durable, maintenance-free aluminum and glass products.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {exteriorServices.map((service, index) => (
                                <div key={index} className="group bg-white border border-slate-100 hover:border-slate-300 hover:shadow-xl transition-all duration-300 overflow-hidden rounded-lg flex flex-col">
                                    <div className="h-64 bg-slate-200 relative overflow-hidden">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                    <div className="p-8 flex-grow flex flex-col">
                                        <h3 className="text-2xl font-serif font-bold mb-3 text-slate-900">{service.title}</h3>
                                        <p className="text-slate-600 mb-6 leading-relaxed flex-grow">{service.description}</p>
                                        <div className="mb-6 flex flex-wrap gap-2">
                                            {service.features?.map((feature, i) => (
                                                <span key={i} className="text-xs font-bold bg-slate-50 text-slate-600 px-2 py-1 rounded border border-slate-200">
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                        <Link
                                            href={service.link}
                                            className="inline-block w-full text-center py-3 bg-white border border-slate-900 text-slate-900 font-bold text-sm uppercase tracking-wider hover:bg-slate-900 hover:text-white transition-colors rounded-sm"
                                            aria-label={`View details about ${service.title}`}
                                        >
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Interior Section */}
                <section className="py-20 bg-slate-50">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Interior Glass & Design</h2>
                            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                                Transform your indoor spaces with modern, light-filled glass partitions and enclosures.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {interiorServices.map((service, index) => (
                                <div key={index} className="group bg-white border border-slate-100 hover:border-slate-300 hover:shadow-xl transition-all duration-300 overflow-hidden rounded-lg flex flex-col">
                                    <div className="h-72 bg-slate-200 relative overflow-hidden">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                    <div className="p-8 flex-grow flex flex-col">
                                        <h3 className="text-2xl font-serif font-bold mb-3 text-slate-900">{service.title}</h3>
                                        <p className="text-slate-600 mb-6 leading-relaxed flex-grow">{service.description}</p>
                                        <div className="mb-6 flex flex-wrap gap-2">
                                            {service.features?.map((feature, i) => (
                                                <span key={i} className="text-xs font-bold bg-slate-50 text-slate-600 px-2 py-1 rounded border border-slate-200">
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                        <Link
                                            href={service.link}
                                            className="inline-block w-full text-center py-3 bg-white border border-slate-900 text-slate-900 font-bold text-sm uppercase tracking-wider hover:bg-slate-900 hover:text-white transition-colors rounded-sm"
                                            aria-label={`View details about ${service.title}`}
                                        >
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Lead Magnet / Conversion Section */}
                <section className="py-24 bg-brand-navy text-white text-center">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-white">
                            Not Sure What You Need?
                        </h2>
                        <p className="text-slate-300 mb-10 text-lg">
                            Book a free on-site design consultation. Our experts will bring samples, take measurements, and help you choose the perfect solution for your home.
                        </p>
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
