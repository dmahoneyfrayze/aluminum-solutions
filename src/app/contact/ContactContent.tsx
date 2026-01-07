"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { getUTMParams } from "@/lib/utm";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BookingCalendar from "@/components/ui/BookingCalendar";

// Form Schema
const formSchema = z.object({
    firstName: z.string().min(2, "First name is required"),
    lastName: z.string().min(2, "Last name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone number is required"),
    location: z.string().min(1, "Please select your location"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactContent() {
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

        try {
            // Get UTM parameters
            const utms = getUTMParams();

            // Send data to GoHighLevel Webhook
            const response = await fetch("https://services.leadconnectorhq.com/hooks/hos0jUKT6DAHGRD0nBoP/webhook-trigger/403b183a-fcf4-47f3-a206-c00d1987b66b", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    first_name: data.firstName,
                    last_name: data.lastName,
                    email: data.email,
                    phone: data.phone,
                    location: data.location,
                    message: data.message,
                    source: "website_contact_form",
                    ...utms
                }),
            });

            if (!response.ok) {
                throw new Error("Failed to submit form");
            }

            setIsSuccess(true);
            reset();
        } catch (error) {
            console.error("Submission error:", error);
            alert("Something went wrong. Please try again or call us directly.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <Header />

            <main className="flex-grow pt-32 pb-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
                            Get in Touch
                        </h1>
                        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                            Ready to transform your space? Contact our team in Toronto for a free consultation.
                        </p>
                    </div>

                    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
                        {/* Left Column: Contact Info */}
                        <div className="space-y-12">
                            {/* Benefits & Trust */}
                            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                                <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6">
                                    Get your personalized estimate within hours!
                                </h2>
                                <ul className="space-y-6 mb-8">
                                    <li className="flex gap-4">
                                        <span className="text-brand-copper font-bold text-xl">›</span>
                                        <div>
                                            <strong className="block text-slate-900 mb-1">No Spam Guarantee</strong>
                                            <p className="text-slate-600 text-sm">
                                                Your information is safe with us; we only use your contact information for project-related communication!
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="text-brand-copper font-bold text-xl">›</span>
                                        <div>
                                            <strong className="block text-slate-900 mb-1">Professional Guidance</strong>
                                            <p className="text-slate-600 text-sm">
                                                With every quote request, you can access expert advice. Our knowledgeable team will guide you through the best options for your specific needs and budget.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="text-brand-copper font-bold text-xl">›</span>
                                        <div>
                                            <strong className="block text-slate-900 mb-1">Prompt Responses</strong>
                                            <p className="text-slate-600 text-sm">
                                                We understand that your time is valuable. That's why we strive to respond to all quote requests swiftly.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="text-brand-copper font-bold text-xl">›</span>
                                        <div>
                                            <strong className="block text-slate-900 mb-1">Trusted By Countless Customers</strong>
                                            <p className="text-slate-600 text-sm">
                                                We've enjoyed serving numerous customers across the GTA. Their positive reviews speak volumes about our dedication to excellence.
                                            </p>
                                        </div>
                                    </li>
                                </ul>

                                {/* Trust Badges */}
                                <div className="flex flex-wrap gap-4 items-center justify-center pt-6 border-t border-slate-100">
                                    <div className="flex flex-col items-center">
                                        <span className="text-3xl mb-1">🏆</span>
                                        <span className="text-[10px] font-bold uppercase text-slate-600">10+ Years</span>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <span className="text-3xl mb-1">⭐</span>
                                        <span className="text-[10px] font-bold uppercase text-slate-600">Google 4.8</span>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <span className="text-3xl mb-1">✓</span>
                                        <span className="text-[10px] font-bold uppercase text-slate-600">HomeStars</span>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Details */}
                            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
                                <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    <span>📍</span> Head Office
                                </h3>
                                <p className="text-slate-600 text-sm mb-4">
                                    <strong>Global Aluminum Solutions Inc.</strong><br />
                                    41 Bradwick Dr Unit #3<br />
                                    Vaughan, ON L4K 1K5
                                </p>
                                <p className="text-slate-600 text-sm">
                                    <strong>Tel:</strong> 1 647-490-2424<br />
                                    <strong>Email:</strong> info@aluminumsolutions.ca
                                </p>

                                <div className="mt-8 pt-6 border-t border-slate-200">
                                    <h4 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wide">Hours of Operation</h4>
                                    <ul className="space-y-2 text-slate-600 text-sm">
                                        <li className="flex justify-between"><span>Mon</span> <span>10am – 3pm</span></li>
                                        <li className="flex justify-between"><span>Tue</span> <span>10am – 3pm</span></li>
                                        <li className="flex justify-between"><span>Wed</span> <span>By appointment</span></li>
                                        <li className="flex justify-between"><span>Fri</span> <span>10am – 3pm</span></li>
                                        <li className="flex justify-between text-brand-copper font-bold"><span>Sat-Sun</span> <span>Closed (Winter Schedule)</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Form */}
                        <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-slate-100">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Request a Quote</h2>

                            {isSuccess ? (
                                <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-lg text-center">
                                    <div className="text-4xl mb-4">✅</div>
                                    <h3 className="font-bold text-xl mb-2">Message Sent!</h3>
                                    <p>Thank you for contacting us. One of our experts will be in touch within 24 hours.</p>
                                    <button
                                        onClick={() => setIsSuccess(false)}
                                        className="mt-6 text-sm font-bold underline hover:text-green-900"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="firstName" className="block text-sm font-bold text-slate-700 mb-2">First Name *</label>
                                            <input
                                                id="firstName"
                                                {...register("firstName")}
                                                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-copper focus:ring-2 focus:ring-brand-copper/20 outline-none transition-all"
                                                placeholder="John"
                                            />
                                            {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
                                        </div>
                                        <div>
                                            <label htmlFor="lastName" className="block text-sm font-bold text-slate-700 mb-2">Last Name *</label>
                                            <input
                                                id="lastName"
                                                {...register("lastName")}
                                                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-copper focus:ring-2 focus:ring-brand-copper/20 outline-none transition-all"
                                                placeholder="Doe"
                                            />
                                            {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">Email *</label>
                                            <input
                                                id="email"
                                                {...register("email")}
                                                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-copper focus:ring-2 focus:ring-brand-copper/20 outline-none transition-all"
                                                placeholder="john@example.com"
                                            />
                                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                                        </div>
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-2">Phone *</label>
                                            <input
                                                id="phone"
                                                {...register("phone")}
                                                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-copper focus:ring-2 focus:ring-brand-copper/20 outline-none transition-all"
                                                placeholder="(555) 123-4567"
                                            />
                                            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="location" className="block text-sm font-bold text-slate-700 mb-2">Your Location *</label>
                                        <select
                                            id="location"
                                            {...register("location")}
                                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-copper focus:ring-2 focus:ring-brand-copper/20 outline-none transition-all bg-white"
                                        >
                                            <option value="">Select a region...</option>
                                            <option value="Toronto/GTA">Toronto / GTA</option>
                                            <option value="Other">Other</option>
                                        </select>
                                        {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location.message}</p>}
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">Message *</label>
                                        <textarea
                                            id="message"
                                            {...register("message")}
                                            rows={4}
                                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-copper focus:ring-2 focus:ring-brand-copper/20 outline-none transition-all"
                                            placeholder="Tell us about your project..."
                                        />
                                        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-4 bg-brand-copper text-white font-bold text-lg rounded-lg hover:bg-orange-700 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? "Sending..." : "Submit Request"}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>

                    {/* Booking Calendar Section */}
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">
                                Or Book a Call Directly
                            </h2>
                            <p className="text-slate-600">
                                Skip the back-and-forth. Choose a time that works for you to discuss your project with an expert.
                            </p>
                        </div>
                        <BookingCalendar />
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
