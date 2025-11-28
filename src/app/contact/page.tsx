"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Form Schema
const formSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone number is required"),
    address: z.string().min(5, "Property address is required"),
    serviceType: z.enum(["Railings", "Enclosures", "Gates", "Columns", "Other"]),
    projectDetails: z.string().optional(),
    timeline: z.enum(["Immediately", "1-3 Months", "3+ Months", "Just Browsing"]),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log("Form Data:", data);
        setIsSuccess(true);
        setIsSubmitting(false);
        reset();
    };

    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <Header />

            <main className="flex-grow pt-32 pb-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Left Column: Contact Info & Value Prop */}
                        <div>
                            <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
                                Get Your Free Design Consultation
                            </h1>
                            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                                Ready to transform your home? Fill out the form to schedule a free, no-obligation on-site estimate. Our experts will bring samples, take measurements, and provide a detailed quote.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                        <span className="text-xl">📍</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-1">Service Area</h3>
                                        <p className="text-slate-600">Toronto, Mississauga, Oakville, Vaughan, Richmond Hill, Markham, Brampton, Burlington, Milton, Newmarket.</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                        <span className="text-xl">📞</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-1">Phone</h3>
                                        <p className="text-slate-600">(416) 555-0123</p>
                                        <p className="text-sm text-slate-500 mt-1">Mon-Fri: 9am - 6pm</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                        <span className="text-xl">📧</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-1">Email</h3>
                                        <p className="text-slate-600">info@aluminumsolutions.ca</p>
                                    </div>
                                </div>
                            </div>

                            {/* Trust Signals */}
                            <div className="mt-12 p-6 bg-white rounded-lg shadow-sm border border-slate-100">
                                <h4 className="font-bold text-slate-900 mb-4">Why Choose Us?</h4>
                                <ul className="grid grid-cols-2 gap-4">
                                    <li className="flex items-center text-sm text-slate-600">✓ 10+ Years Experience</li>
                                    <li className="flex items-center text-sm text-slate-600">✓ Lifetime Warranty</li>
                                    <li className="flex items-center text-sm text-slate-600">✓ WSIB Insured</li>
                                    <li className="flex items-center text-sm text-slate-600">✓ Homestars Verified</li>
                                </ul>
                            </div>
                        </div>

                        {/* Right Column: Form */}
                        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-slate-100">
                            {isSuccess ? (
                                <div className="text-center py-16">
                                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
                                        ✓
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Request Received!</h3>
                                    <p className="text-slate-600 mb-8">
                                        Thank you for contacting Aluminum Solutions. One of our design consultants will be in touch within 24 hours to schedule your visit.
                                    </p>
                                    <button
                                        onClick={() => setIsSuccess(false)}
                                        className="text-slate-900 font-bold underline hover:text-slate-700"
                                    >
                                        Submit another request
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-bold text-slate-700 mb-2">Name</label>
                                            <input
                                                {...register("name")}
                                                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 outline-none transition-all"
                                                placeholder="John Doe"
                                            />
                                            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-slate-700 mb-2">Phone</label>
                                            <input
                                                {...register("phone")}
                                                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 outline-none transition-all"
                                                placeholder="(416) 555-0123"
                                            />
                                            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                                        <input
                                            {...register("email")}
                                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 outline-none transition-all"
                                            placeholder="john@example.com"
                                        />
                                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2">Property Address</label>
                                        <input
                                            {...register("address")}
                                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 outline-none transition-all"
                                            placeholder="123 Main St, Toronto"
                                        />
                                        {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address.message}</p>}
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-bold text-slate-700 mb-2">Service Needed</label>
                                            <select
                                                {...register("serviceType")}
                                                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 outline-none transition-all bg-white"
                                            >
                                                <option value="Railings">Aluminum Railings</option>
                                                <option value="Enclosures">Glass Enclosures</option>
                                                <option value="Gates">Custom Gates</option>
                                                <option value="Columns">Aluminum Columns</option>
                                                <option value="Other">Other / Multiple</option>
                                            </select>
                                            {errors.serviceType && <p className="text-red-500 text-xs mt-1">{errors.serviceType.message}</p>}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-slate-700 mb-2">Timeline</label>
                                            <select
                                                {...register("timeline")}
                                                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 outline-none transition-all bg-white"
                                            >
                                                <option value="Immediately">Immediately</option>
                                                <option value="1-3 Months">1-3 Months</option>
                                                <option value="3+ Months">3+ Months</option>
                                                <option value="Just Browsing">Just Browsing</option>
                                            </select>
                                            {errors.timeline && <p className="text-red-500 text-xs mt-1">{errors.timeline.message}</p>}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2">Project Details (Optional)</label>
                                        <textarea
                                            {...register("projectDetails")}
                                            rows={4}
                                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 outline-none transition-all resize-none"
                                            placeholder="Tell us about your project..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-4 bg-slate-900 text-white font-bold text-lg rounded-lg hover:bg-slate-800 transition-colors shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? "Sending Request..." : "Get Free Estimate"}
                                    </button>

                                    <p className="text-xs text-center text-slate-500 mt-4">
                                        By submitting this form, you agree to our privacy policy. Your information is secure and will never be shared.
                                    </p>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
