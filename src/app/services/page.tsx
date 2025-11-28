import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/ui/Hero";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Services | Aluminum Solutions Toronto",
    description: "Explore our premium aluminum railings, glass enclosures, custom gates, and columns. Expert installation in Toronto and the GTA.",
};

import Image from "next/image";

// ... (imports)

const services = [
    {
        title: "Aluminum Railings",
        description: "Durable, maintenance-free railings in a variety of modern styles and colors. Perfect for porches, balconies, and decks.",
        link: "/services/railings",
        features: ["Rust-free", "Powder-coated finish", "Multiple color options"],
        image: "/images/projects/railing-aluminum-deck-toronto.jpg"
    },
    {
        title: "Glass Enclosures",
        description: "Frameless and framed glass solutions that provide wind protection without sacrificing your view.",
        link: "/services/glass-enclosures",
        features: ["Tempered safety glass", "Custom sizing", "Wind protection"],
        image: "/images/projects/glass-enclosure-porch-front.jpg"
    },
    {
        title: "Glass Railings",
        description: "Elegant frameless and post systems for unobstructed views.",
        link: "/services/glass-railings",
        image: "/images/projects/railing-aluminum-brown-glass.jpg"
    },
    {
        title: "Custom Gates",
        description: "Secure and stylish aluminum gates for driveways and gardens.",
        link: "/services/gates",
        features: ["Heavy-duty hardware", "Custom designs", "Security focused"],
        image: "/images/generated/custom_gate_modern_1764314098362.png"
    },
    {
        title: "Aluminum Columns",
        description: "Structural and decorative aluminum columns to replace rotting wood and add curb appeal.",
        link: "/services/columns",
        features: ["Load-bearing options", "Classic & modern styles", "Maintenance-free"],
        image: "/images/projects/glass-enclosure-porch-side.jpg"
    },
    {
        title: "Pool Fences",
        description: "Safe, code-compliant glass and aluminum pool enclosures that don't obstruct your view.",
        link: "/services/pool-fences",
        features: ["Self-closing gates", "Climb-resistant", "12mm safety glass"],
        image: "/images/projects/pool-fence-glass-guards.jpg"
    },
    {
        title: "Privacy Screens",
        description: "Acid-etched glass and aluminum screens to create a private oasis in urban settings.",
        link: "/services/privacy-screens",
        features: ["Frosted glass", "Custom heights", "Wind reduction"],
        image: "/images/projects/privacy-screen-black-aluminum.jpg"
    }
];

export default function ServicesPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow">
                <Hero
                    title="Premium Exterior Solutions"
                    subtitle="Enhance your home's value and curb appeal with our custom-fabricated aluminum and glass products."
                    ctaText="Get a Free Quote"
                    ctaLink="/contact"
                    backgroundImage="/images/generated/railing_hero_detail_1764312850877.png"
                />

                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {services.map((service, index) => (
                                <div key={index} className="group bg-slate-50 border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300 overflow-hidden rounded-lg">
                                    <div className="h-64 bg-slate-200 relative">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                    <div className="p-8">
                                        <h3 className="text-2xl font-serif font-bold mb-4 text-slate-900">{service.title}</h3>
                                        <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                                        <div className="mb-8 flex flex-wrap gap-2">
                                            {service.features?.map((feature, i) => (
                                                <span key={i} className="text-sm bg-slate-100 text-slate-600 px-2 py-1 rounded">
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                        <Link href={service.link} className="inline-block px-6 py-3 bg-white border border-slate-900 text-slate-900 font-bold text-sm uppercase tracking-wider hover:bg-slate-900 hover:text-white transition-colors">
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Lead Magnet / Conversion Section */}
                <section className="py-24 bg-slate-900 text-white text-center">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
                            Not Sure What You Need?
                        </h2>
                        <p className="text-slate-300 mb-10 text-lg">
                            Book a free on-site design consultation. Our experts will bring samples, take measurements, and help you choose the perfect solution for your home.
                        </p>
                        <Link href="/contact" className="inline-block px-10 py-4 bg-white text-slate-900 font-bold tracking-wide hover:bg-slate-100 transition-colors shadow-lg">
                            Book Free Consultation
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
