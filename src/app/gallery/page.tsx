"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/ui/Hero";
import Link from "next/link";
import Image from "next/image";
import ReputationWidget from "@/components/ui/ReputationWidget";

// SEO Metadata (Client Component workaround: Metadata must be in layout or server component, 
// but for now we can't easily switch this to server without refactoring state. 
// Ideally, this page should be a server component with a client island for the filter.)

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
];

const categories = ["All", "Railings", "Enclosures", "Showers", "Walls"];

export default function GalleryPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter(project => project.category === activeCategory);

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />

            <main className="flex-grow">
                <Hero
                    title="Our Work"
                    subtitle="Explore our portfolio of custom aluminum and glass projects across the GTA."
                    ctaText="Get a Quote"
                    ctaLink="/contact"
                    backgroundImage="/images/projects/railing-aluminum-deck-toronto.jpg"
                />

                <section className="py-20">
                    <div className="container mx-auto px-6">

                        {/* Filter Controls */}
                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${activeCategory === category
                                        ? "bg-brand-navy text-white shadow-lg"
                                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>

                        {/* Masonry Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                            {filteredProjects.map((project) => (
                                <div key={project.id} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                                    {/* Image Placeholder */}
                                    <div className="h-80 w-full relative bg-slate-100">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
                                    </div>

                                    {/* Overlay Content */}
                                    <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <span className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-1">
                                            {project.category} • {project.location}
                                        </span>
                                        <h3 className="text-xl font-serif font-bold text-white">
                                            {project.title}
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {filteredProjects.length === 0 && (
                            <div className="text-center py-20 text-slate-500">
                                No projects found in this category yet.
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
