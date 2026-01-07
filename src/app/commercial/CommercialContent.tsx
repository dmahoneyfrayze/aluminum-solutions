"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/ui/Hero";
import Link from "next/link";
import Image from "next/image";
import { getUTMParams } from "@/lib/utm";
import RelatedArticles from "@/components/blog/RelatedArticles";
import { BlogPost } from "@/lib/blog-rss";

const builderFormSchema = z.object({
    firstName: z.string().min(2, "First name is required"),
    lastName: z.string().min(2, "Last name is required"),
    companyName: z.string().min(2, "Company name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone number is required"),
    projectDetails: z.string().min(10, "Please provide some project details"),
});

type BuilderFormData = z.infer<typeof builderFormSchema>;

interface Props {
    initialPosts: BlogPost[];
}

export default function CommercialContent({ initialPosts }: Props) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const { register, handleSubmit, formState: { errors }, reset } = useForm<BuilderFormData>({
        resolver: zodResolver(builderFormSchema),
    });

    const onSubmit = async (data: BuilderFormData) => {
        setIsSubmitting(true);
        try {
            const utms = getUTMParams();

            const response = await fetch("https://services.leadconnectorhq.com/hooks/hos0jUKT6DAHGRD0nBoP/webhook-trigger/flvpatv1vPRdj7ozN1bn", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    first_name: data.firstName,
                    last_name: data.lastName,
                    company_name: data.companyName,
                    email: data.email,
                    phone: data.phone,
                    project_details: data.projectDetails,
                    source: "commercial_inquiry_form",
                    ...utms
                }),
            });

            if (!response.ok) throw new Error("Submission failed");

            setIsSuccess(true);
            reset();
        } catch (error) {
            console.error("Error submitting builder form:", error);
            alert("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />

            <main className="flex-grow">
                <Hero
                    title="Partner with the Manufacturer"
                    subtitle="Reliable supply and installation for builders, property managers, and developers. We control the timeline because we control the production."
                    ctaText="Request Commercial Package"
                    ctaLink="#contact-form"
                    backgroundImage="/images/generated/railing_hero_detail_1764312850877.webp"
                />

                {/* Manufacturer Advantage - Comparison */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
                                The Manufacturer Advantage
                            </h2>
                            <p className="text-slate-600 max-w-2xl mx-auto">
                                Why smart builders buy direct. Eliminate the middleman markup and delays.
                            </p>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full max-w-4xl mx-auto text-left border-collapse">
                                <thead>
                                    <tr>
                                        <th className="p-4 border-b-2 border-slate-200 bg-slate-50 text-slate-500 font-bold uppercase text-sm">Feature</th>
                                        <th className="p-4 border-b-2 border-brand-navy bg-brand-navy/5 text-brand-navy font-bold text-lg">Aluminum Solutions (Direct)</th>
                                        <th className="p-4 border-b-2 border-slate-200 bg-slate-50 text-slate-400 font-medium">Distributors / Middlemen</th>
                                    </tr>
                                </thead>
                                <tbody className="text-slate-700">
                                    <tr>
                                        <td className="p-4 border-b border-slate-100 font-bold">Cost</td>
                                        <td className="p-4 border-b border-slate-100 text-green-700 font-bold">Factory Direct Pricing (No Markup)</td>
                                        <td className="p-4 border-b border-slate-100 text-slate-500">Retail Markup (20-40% Higher)</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 border-b border-slate-100 font-bold">Lead Time</td>
                                        <td className="p-4 border-b border-slate-100 text-green-700 font-bold">4-6 Weeks (Controlled Production)</td>
                                        <td className="p-4 border-b border-slate-100 text-slate-500">8-12 Weeks (Dependent on Suppliers)</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 border-b border-slate-100 font-bold">Customization</td>
                                        <td className="p-4 border-b border-slate-100 text-green-700 font-bold">Full Custom Fabrication</td>
                                        <td className="p-4 border-b border-slate-100 text-slate-500">Standard Sizes Only</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 border-b border-slate-100 font-bold">Accountability</td>
                                        <td className="p-4 border-b border-slate-100 text-green-700 font-bold">Single Point of Contact</td>
                                        <td className="p-4 border-b border-slate-100 text-slate-500">Blame Shifting</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Solutions by Role */}
                <section className="py-20 bg-slate-50">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-12 text-center">Tailored Solutions</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Developers */}
                            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
                                <div className="text-4xl mb-6">🏗️</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">For Developers</h3>
                                <p className="text-slate-600 mb-6">
                                    Maximize ROI with volume pricing and reliable scheduling. We understand the critical path of multi-unit developments and high-rise projects.
                                </p>
                                <ul className="text-sm text-slate-500 space-y-2">
                                    <li className="flex items-center">✓ Volume Discounts</li>
                                    <li className="flex items-center">✓ Phased Installation</li>
                                    <li className="flex items-center">✓ Bonded & Insured</li>
                                </ul>
                            </div>

                            {/* Architects */}
                            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
                                <div className="text-4xl mb-6">📐</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">For Architects</h3>
                                <p className="text-slate-600 mb-6">
                                    Realize your vision without compromise. We offer custom extrusions, precise engineering, and full CAD/BIM support to bring your designs to life.
                                </p>
                                <ul className="text-sm text-slate-500 space-y-2">
                                    <li className="flex items-center">✓ Custom Extrusions</li>
                                    <li className="flex items-center">✓ Engineering Stamped Drawings</li>
                                    <li className="flex items-center">✓ LEED Compliance Support</li>
                                </ul>
                            </div>

                            {/* Contractors */}
                            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
                                <div className="text-4xl mb-6">🔨</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">For Contractors</h3>
                                <p className="text-slate-600 mb-6">
                                    Install with confidence. Our pre-assembled panels and exact measurements mean less time on site and zero headaches.
                                </p>
                                <ul className="text-sm text-slate-500 space-y-2">
                                    <li className="flex items-center">✓ Pre-Assembled Panels</li>
                                    <li className="flex items-center">✓ Rush Orders Available</li>
                                    <li className="flex items-center">✓ Installation Support</li>
                                </ul>
                            </div>

                            {/* Property Managers */}
                            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
                                <div className="text-4xl mb-6">🏢</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Property Managers</h3>
                                <p className="text-slate-600 mb-6">
                                    Keep your buildings safe and compliant. We act fast on repairs and full retrofits to minimize tenant disruption and liability.
                                </p>
                                <ul className="text-sm text-slate-500 space-y-2">
                                    <li className="flex items-center">✓ Code Compliance Retrofits</li>
                                    <li className="flex items-center">✓ Tenant Notification Support</li>
                                    <li className="flex items-center">✓ Maintenance Plans</li>
                                </ul>
                            </div>

                            {/* Inspections & Sign-offs */}
                            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
                                <div className="text-4xl mb-6">📋</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Inspectors & Engineers</h3>
                                <p className="text-slate-600 mb-6">
                                    Need a remedial action plan? We work directly with engineers to provide the exact fabrication needed to close permits.
                                </p>
                                <ul className="text-sm text-slate-500 space-y-2">
                                    <li className="flex items-center">✓ Remedial Action Execution</li>
                                    <li className="flex items-center">✓ Engineering Letter Support</li>
                                    <li className="flex items-center">✓ Rapid Compliance Fixes</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Dealer Program Section - NEW for Distro/Manufacturing */}
                <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-brand-navy" />
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <span className="text-brand-copper font-bold tracking-widest uppercase text-sm mb-2 block">
                                    Supply Only & Distribution
                                </span>
                                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-white">
                                    Become an Aluminum Solutions Dealer
                                </h2>
                                <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                                    Are you a railing installer, deck builder, or landscaper anywhere in Ontario? Stop waiting 8-12 weeks for third-party kits. Buy direct from our factory and grow your margins.
                                </p>

                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                                            🚚
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-xl text-white">Ontario-Wide Shipping</h3>
                                            <p className="text-slate-400">We crate and ship prefab kits to Ottawa, Muskoka, London, and beyond. Your location is no longer a barrier.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                                            💰
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-xl text-white">Wholesale Dealer Pricing</h3>
                                            <p className="text-slate-400">Unlock deep discounts tailored for recurring volume. Stop paying retail markup.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                                            ⚡
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-xl text-white">Priority 2-3 Week Fabrication</h3>
                                            <p className="text-slate-400">Dealers get access to our "Fast Lane" production. complete more jobs in less time.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-10">
                                    <Link href="#contact-form" className="inline-block px-8 py-4 bg-brand-copper text-white font-bold rounded hover:bg-orange-700 transition-colors">
                                        Apply for Dealer Account
                                    </Link>
                                </div>
                            </div>

                            <div className="relative h-[500px] rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-slate-800">
                                <Image
                                    src="/images/work-vehicle.jpg"
                                    alt="Aluminum Solutions Factory Shipping"
                                    fill
                                    className="object-cover opacity-80"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20">
                                    <p className="font-bold text-lg mb-2">"Switching to Aluminum Solutions cut our material costs by 15% and installation time by half."</p>
                                    <div className="flex items-center gap-2 text-sm text-brand-copper">
                                        <span>★★★★★</span>
                                        <span className="text-white font-bold">- Partner Installer, Muskoka</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Project Capabilities */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-12 text-center">Project Capabilities</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-bold text-slate-900 mb-3"><Link href="/services/glass-railings" className="hover:underline">High-Rise Condos</Link></h3>
                                <p className="text-slate-600 text-sm">
                                    Engineering-compliant aluminum railing systems and privacy dividers for multi-story residential developments. We specialize in volume fabrication for tower retrofits and new construction across the GTA.
                                </p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-bold text-slate-900 mb-3"><Link href="/services/porch-enclosures" className="hover:underline">Subdivisions</Link></h3>
                                <p className="text-slate-600 text-sm">
                                    Scalable exterior railing solutions for low-rise communities. Durable, maintenance-free aluminum porch railings and storm doors designed for builder-grade budgets without sacrificing curb appeal.
                                </p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-bold text-slate-900 mb-3"><Link href="/services/glass-walls" className="hover:underline">Commercial Interiors</Link></h3>
                                <p className="text-slate-600 text-sm">
                                    Modern glass wall systems for corporate offices, fitness centers, and retail spaces. Create open, light-filled environments with acoustic privacy using our frameless and aluminum-framed glass partitions.
                                </p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Custom Architectural</h3>
                                <p className="text-slate-600 text-sm">
                                    Bespoke fabrication for luxury homes and unique commercial features. From floating staircases to structural glass floors, our precision engineering brings complex architectural visions to reality.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* B2B FAQ */}
                <section className="py-20 bg-slate-50">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-12 text-center">Builder FAQ</h2>
                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="font-bold text-lg text-slate-900 mb-2">What are your standard lead times?</h3>
                                <p className="text-slate-600">For standard aluminum profiles, we typically manufacture in 3-4 weeks. Custom glass or special order colors may take 5-6 weeks. We also offer a "Rush Service" for urgent deadlines.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="font-bold text-lg text-slate-900 mb-2">Do you offer credit terms?</h3>
                                <p className="text-slate-600">Yes, we offer Net 30 terms for approved commercial accounts. Please contact our finance department to submit a credit application.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="font-bold text-lg text-slate-900 mb-2">Do you provide installation?</h3>
                                <p className="text-slate-600">Absolutely. We have our own team of WSIB-insured, certified installers. We do not subcontract, ensuring quality control from factory to finish.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="font-bold text-lg text-slate-900 mb-2">Are your products code compliant?</h3>
                                <p className="text-slate-600">Yes, all our railing and glass systems are engineered to meet or exceed the Ontario Building Code (SB-13) and National Building Code requirements.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="font-bold text-lg text-slate-900 mb-2">Can you help close open permits?</h3>
                                <p className="text-slate-600">Yes. If you have an Order to Comply or an open permit requiring guardrail updates, we can provide the necessary shop drawings and engineering letters to satisfy municipal inspectors.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* B2B Contact Form */}
                <section id="contact-form" className="py-24 bg-slate-50 text-slate-900">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
                                    Let's Discuss Your Project
                                </h2>
                                <p className="text-slate-600 mb-8 leading-relaxed">
                                    Whether you need a bid for a multi-unit development or specs for a custom home, our commercial team is ready to assist.
                                </p>
                                <ul className="space-y-4 text-slate-600">
                                    <li className="flex items-center">✓ Priority Estimating Service</li>
                                    <li className="flex items-center">✓ Dedicated Project Manager</li>
                                    <li className="flex items-center">✓ Volume Pricing Available</li>
                                </ul>
                            </div>

                            <div className="bg-white p-8 rounded-lg text-slate-900 border border-slate-200 shadow-sm">
                                {isSuccess ? (
                                    <div className="text-center py-12">
                                        <div className="text-4xl mb-4">✅</div>
                                        <h3 className="font-bold text-xl mb-2">Request Received</h3>
                                        <p className="text-slate-600 mb-6">
                                            Thanks for your interest. Our commercial team will review your details and be in touch shortly.
                                        </p>
                                        <button
                                            onClick={() => setIsSuccess(false)}
                                            className="text-brand-navy font-bold underline"
                                        >
                                            Submit another request
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="grid grid-cols-2 gap-4 mb-4">
                                            <div>
                                                <label className="block text-sm font-bold mb-2">First Name</label>
                                                <input
                                                    {...register("firstName")}
                                                    className="w-full p-3 border border-slate-300 rounded bg-slate-50 focus:bg-white focus:outline-none focus:border-brand-navy transition-colors"
                                                    placeholder="John"
                                                />
                                                {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
                                            </div>
                                            <div>
                                                <label className="block text-sm font-bold mb-2">Last Name</label>
                                                <input
                                                    {...register("lastName")}
                                                    className="w-full p-3 border border-slate-300 rounded bg-slate-50 focus:bg-white focus:outline-none focus:border-brand-navy transition-colors"
                                                    placeholder="Smith"
                                                />
                                                {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>}
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-sm font-bold mb-2">Company Name</label>
                                            <input
                                                {...register("companyName")}
                                                className="w-full p-3 border border-slate-300 rounded bg-slate-50 focus:bg-white focus:outline-none focus:border-brand-navy transition-colors"
                                                placeholder="Acme Construction"
                                            />
                                            {errors.companyName && <p className="text-red-500 text-xs mt-1">{errors.companyName.message}</p>}
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-sm font-bold mb-2">Email</label>
                                            <input
                                                {...register("email")}
                                                className="w-full p-3 border border-slate-300 rounded bg-slate-50 focus:bg-white focus:outline-none focus:border-brand-navy transition-colors"
                                                placeholder="john@acme.com"
                                            />
                                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-sm font-bold mb-2">Phone</label>
                                            <input
                                                {...register("phone")}
                                                className="w-full p-3 border border-slate-300 rounded bg-slate-50 focus:bg-white focus:outline-none focus:border-brand-navy transition-colors"
                                                placeholder="(555) 123-4567"
                                            />
                                            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                                        </div>
                                        <div className="mb-6">
                                            <label className="block text-sm font-bold mb-2">Project Details</label>
                                            <textarea
                                                {...register("projectDetails")}
                                                className="w-full p-3 border border-slate-300 rounded bg-slate-50 focus:bg-white focus:outline-none focus:border-brand-navy transition-colors"
                                                rows={3}
                                                placeholder="Tell us about the scope..."
                                            />
                                            {errors.projectDetails && <p className="text-red-500 text-xs mt-1">{errors.projectDetails.message}</p>}
                                        </div>
                                        <button
                                            disabled={isSubmitting}
                                            className="w-full py-4 bg-brand-navy text-white font-bold rounded hover:bg-slate-800 transition-colors disabled:opacity-50"
                                        >
                                            {isSubmitting ? "Sending..." : "Request Commercial Package"}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* B2B Related Articles */}
                <RelatedArticles
                    posts={initialPosts.filter(post =>
                        ['ontario-building-code-railing-safety', 'landlord-liability-railing-safety', '2025-outdoor-design-trends'].includes(post.slug)
                    ).length > 0 ? initialPosts.filter(post =>
                        ['ontario-building-code-railing-safety', 'landlord-liability-railing-safety', '2025-outdoor-design-trends'].includes(post.slug)
                    ) : initialPosts.slice(0, 3)}
                    title="Commercial Industry Insights"
                />
            </main>

            <Footer />
        </div>
    );
}
