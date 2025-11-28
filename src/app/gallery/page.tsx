"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/ui/Hero";
import Link from "next/link";

// Mock Data for Gallery Items
const projects = [
    { id: 1, category: "Railings", title: "Modern Glass Railing", location: "Toronto", image: "bg-slate-200" },
    { id: 2, category: "Enclosures", title: "Porch Enclosure", location: "Mississauga", image: "bg-slate-300" },
    { id: 3, category: "Gates", title: "Custom Driveway Gate", location: "Vaughan", image: "bg-slate-400" },
    { id: 4, category: "Columns", title: "Aluminum Columns", location: "Oakville", image: "bg-slate-200" },
    { id: 5, category: "Railings", title: "Black Picket Railing", location: "Markham", image: "bg-slate-300" },
    { id: 6, category: "Enclosures", title: "Sunroom Addition", location: "Burlington", image: "bg-slate-400" },
    { id: 7, category: "Railings", title: "Deck Glass Railing", location: "Richmond Hill", image: "bg-slate-200" },
    { id: 8, category: "Gates", title: "Garden Gate", location: "Toronto", image: "bg-slate-300" },
    { id: 9, category: "Columns", title: "Decorative Columns", location: "Brampton", image: "bg-slate-400" },
];

const categories = ["All", "Railings", "Enclosures", "Gates", "Columns"];

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
                                            ? "bg-slate-900 text-white shadow-lg"
                                            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>

                        {/* Masonry Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredProjects.map((project) => (
                                <div key={project.id} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                                    {/* Image Placeholder */}
                                    <div className={`h-80 w-full ${project.image} relative`}>
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

                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 bg-slate-900 text-white text-center">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
                            Inspired by our work?
                        </h2>
                        <p className="text-slate-300 max-w-2xl mx-auto mb-10 text-lg">
                            Let's discuss how we can bring similar quality and style to your home.
                        </p>
                        <Link href="/contact" className="inline-block px-10 py-4 bg-white text-slate-900 font-bold tracking-wide hover:bg-slate-100 transition-colors shadow-lg">
                            Start Your Project
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
