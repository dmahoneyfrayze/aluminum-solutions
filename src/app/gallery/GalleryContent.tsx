"use client";

import { useState, useMemo } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/ui/Hero";
import Link from "next/link";
import Image from "next/image";
import ReputationWidget from "@/components/ui/ReputationWidget";

// Project Data
const projects = [
    { id: 1, category: "Railings", title: "Modern Glass Railing", location: "Toronto", image: "/images/projects/railing-aluminum-deck-toronto.jpg" },
    { id: 2, category: "Enclosures", title: "Porch Enclosure", location: "Mississauga", image: "/images/projects/glass-enclosure-porch-front.jpg" },
    { id: 3, category: "Showers", title: "Frameless Glass Shower", location: "Vaughan", image: "/images/projects/frameless-glass-shower-custom.jpg" },
    { id: 4, category: "Walls", title: "Office Glass Partition", location: "Oakville", image: "/images/projects/glass-office-divider-system.jpg" },
    { id: 5, category: "Railings", title: "Black Aluminum Picket", location: "Markham", image: "/images/projects/black-aluminum-railing-stone.png" },
    { id: 6, category: "Enclosures", title: "Sunroom Addition", location: "Burlington", image: "/images/projects/glass-enclosure-porch-front.jpg" },
    { id: 7, category: "Railings", title: "Deck Glass Railing", location: "Richmond Hill", image: "/images/projects/railing-aluminum-deck-toronto.jpg" },
    { id: 8, category: "Showers", title: "Custom Steam Shower", location: "Toronto", image: "/images/projects/shower-glass-door-hinge.jpg" },
    { id: 9, category: "Walls", title: "Gym Glass Wall", location: "Brampton", image: "/images/projects/glass-office-partition-modern.jpg" },
    // New Additions
    { id: 10, category: "Railings", title: "Frameless Deck System", location: "North York", image: "/images/Frameless-Glass.jpg" },
    { id: 11, category: "Railings", title: "Commercial Balcony Railings", location: "Etobicoke", image: "/images/projects/black-aluminum-railing-stone.png" },
    { id: 12, category: "Railings", title: "Glass with Top Rail", location: "Scarborough", image: "/images/glass-with-top-rail.jpg" },
    { id: 13, category: "Enclosures", title: "Commercial Office Enclosure", location: "Financial District", image: "/images/Glass-Enclosures-and-Offices.jpg" },
    { id: 14, category: "Enclosures", title: "Premium Gatsby Enclosure", location: "King City", image: "/images/projects/glass-enclosure-gatsby.png" },
    { id: 15, category: "Showers", title: "Corner Glass Shower", location: "Newmarket", image: "/images/projects/corner-glass-shower-enclosure.jpg" },
    { id: 16, category: "Walls", title: "Boardroom Glass Wall", location: "Mississauga", image: "/images/projects/glass-wall-meeting-room.jpg" },
    { id: 17, category: "Fences", title: "Pool Safety Fence", location: "Oakville", image: "/images/projects/pool-fence-glass-guards.jpg" },
    { id: 18, category: "Fences", title: "Glass Swimming Guard", location: "Vaughan", image: "/images/projects/pool-fence-glass-swimming.jpg" },
    { id: 19, category: "Privacy", title: "Deck Privacy Screen", location: "Toronto", image: "/images/projects/privacy-screen-deck.jpg" },
    { id: 20, category: "Railings", title: "Modern Picket Railing", location: "Toronto", image: "/images/projects/aluminum-railing-pickets-black.webp" },
    { id: 21, category: "Showers", title: "Corner Glass Shower", location: "Mississauga", image: "/images/projects/corner-glass-shower-enclosure.jpg" },
    { id: 22, category: "Showers", title: "Custom Frameless Shower", location: "Oakville", image: "/images/projects/frameless-glass-shower-custom.jpg" },
    { id: 23, category: "Railings", title: "Frameless Deck View", location: "Vaughan", image: "/images/projects/frameless-glass-deck-railing.jpg" },
    { id: 24, category: "Walls", title: "Office Divider System", location: "Markham", image: "/images/projects/glass-office-divider-system.jpg" },
    { id: 25, category: "Privacy", title: "Condo Balcony Privacy", location: "Toronto", image: "/images/projects/privacy-screen-condo-balcony.jpg" },
    { id: 26, category: "Privacy", title: "Black Aluminum Privacy", location: "Mississauga", image: "/images/projects/privacy-screen-black-aluminum.jpg" },
];

const categories = ["All", "Railings", "Enclosures", "Showers", "Fences", "Walls", "Privacy"];

export default function GalleryContent() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [sortOption, setSortOption] = useState("Featured"); // Featured, Newest, Alphabetical

    const processedProjects = useMemo(() => {
        // 1. Filter
        let result = activeCategory === "All"
            ? projects
            : projects.filter(project => project.category === activeCategory);

        // 2. Sort
        return [...result].sort((a, b) => {
            if (sortOption === "Newest") {
                return b.id - a.id;
            } else if (sortOption === "Alphabetical") {
                return a.title.localeCompare(b.title);
            }
            return 0; // Default / Featured (ID ascending as entered)
        });
    }, [activeCategory, sortOption]);

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />

            <main className="flex-grow">
                <Hero
                    title="Our Work"
                    subtitle="Explore our portfolio of custom aluminum and glass projects across the GTA."
                    ctaText="Get a Quote"
                    ctaLink="/contact"
                    secondaryCtaText="Our Process"
                    secondaryCtaLink="/process"
                    backgroundImage="/images/projects/railing-aluminum-deck-toronto.jpg"
                />

                <section className="py-20">
                    <div className="container mx-auto px-6">

                        {/* Controls Container */}
                        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">

                            {/* Filter Controls */}
                            <div className="flex flex-wrap justify-center md:justify-start gap-3">
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => setActiveCategory(category)}
                                        className={`px-5 py-2 rounded-full text-sm font-bold transition-all border ${activeCategory === category
                                            ? "bg-brand-navy text-white border-brand-navy shadow-md"
                                            : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:border-slate-300"
                                            }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>

                            {/* Sort Dropdown */}
                            <div className="flex items-center gap-3">
                                <label htmlFor="sort" className="text-sm font-bold text-slate-500 whitespace-nowrap">Sort by:</label>
                                <select
                                    id="sort"
                                    value={sortOption}
                                    onChange={(e) => setSortOption(e.target.value)}
                                    className="pl-4 pr-10 py-2 rounded-lg border border-slate-300 bg-white text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-copper/50"
                                >
                                    <option value="Featured">Featured</option>
                                    <option value="Newest">Newest</option>
                                    <option value="Alphabetical">Alphabetical (A-Z)</option>
                                </select>
                            </div>
                        </div>

                        {/* Masonry Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                            {processedProjects.map((project) => (
                                <div key={project.id} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-slate-100">
                                    {/* Image Placeholder */}
                                    <div className="h-80 w-full relative">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                                    </div>

                                    {/* Overlay Content */}
                                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                                        <span className="text-xs font-bold text-brand-copper uppercase tracking-wider mb-2 opacity-90">
                                            {project.category} • {project.location}
                                        </span>
                                        <h3 className="text-xl font-serif font-bold text-white mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                            {project.title}
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {processedProjects.length === 0 && (
                            <div className="text-center py-20 text-slate-500 bg-slate-50 rounded-lg border border-dashed border-slate-300">
                                <p className="text-lg">No projects found in this category yet.</p>
                                <button onClick={() => setActiveCategory("All")} className="text-brand-copper font-bold mt-2 hover:underline">
                                    View All Projects
                                </button>
                            </div>
                        )}

                        {/* Service Links */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-slate-200 pt-16">
                            <div className="text-center">
                                <h3 className="font-bold text-lg mb-2">Looking for Railings?</h3>
                                <Link href="/services/railings" className="text-brand-copper font-bold hover:underline">View Railing Options &rarr;</Link>
                            </div>
                            <div className="text-center">
                                <h3 className="font-bold text-lg mb-2">Need a Glass Enclosure?</h3>
                                <Link href="/services/glass-enclosures" className="text-brand-copper font-bold hover:underline">Explore Enclosures &rarr;</Link>
                            </div>
                            <div className="text-center">
                                <h3 className="font-bold text-lg mb-2">Planning a Shower?</h3>
                                <Link href="/services/showers" className="text-brand-copper font-bold hover:underline">See Shower Styles &rarr;</Link>
                            </div>
                        </div>

                    </div>
                </section>

                {/* Testimonials Widget */}
                <ReputationWidget />

                {/* CTA Section */}
                <section className="py-24 bg-slate-50 text-center">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
                            Inspired by our work?
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto mb-10 text-lg">
                            Let's discuss how we can bring similar quality and style to your home.
                        </p>
                        <Link href="/contact" className="inline-block px-10 py-4 bg-brand-navy text-white font-bold tracking-wide hover:bg-slate-800 transition-colors shadow-lg rounded-sm">
                            Start Your Project
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
