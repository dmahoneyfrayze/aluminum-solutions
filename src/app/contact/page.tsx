"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
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
        // console.log("Form Data:", data); // Removed for production
        setIsSuccess(true);
        setIsSubmitting(false);
        reset();
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
                            Ready to transform your space? Contact our team in Toronto or Montreal for a free consultation.
                        </p>
                    </div>

                    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
                        {/* Left Column: Contact Info */}
                        <div className="space-y-12">
                            {/* Toronto */}
                            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                                <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6 flex items-center gap-3">
                                    <span className="text-brand-copper">📍</span> Toronto (Head Office)
                                </h2>
                                <div className="space-y-4 text-slate-600">
                                    <p>
                                        <strong>Global Aluminum Solutions Inc.</strong><br />
                                        75 Fernstaff Ct. Unit #5<br />
                                        Vaughan, ON, L4K 3P8
                                    </p>
                                    <p>
                                        <strong>Tel:</strong> (905) 780-3088<br />
                                        <strong>Email:</strong> info@aluminumsolutions.ca
                                    </p>
                                    <div className="pt-4 border-t border-slate-100 mt-4">
                                        <p className="text-sm font-bold text-slate-900 mb-2">Hours of Operation</p>
                                        <ul className="text-sm space-y-1">
                                            <li className="flex justify-between"><span>Mon - Fri:</span> <span>10am – 3pm</span></li>
                                            <li className="flex justify-between"><span>Wed:</span> <span>By Appointment</span></li>
                                            <li className="flex justify-between"><span>Sat - Sun:</span> <span>Closed</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Montreal */}
                            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                                <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6 flex items-center gap-3">
                                    <span className="text-brand-copper">📍</span> Montreal
                                </h2>
                                <div className="space-y-4 text-slate-600">
                                    <p>
                                        <strong>Solutions Aluminium Inc.</strong><br />
                                        301 Omer Deserres, Local 103<br />
                                        Blainville, QC, J7C 0K2
                                    </p>
                                    <p>
                                        <strong>Tel:</strong> (514) 963-2030
                                    </p>
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
                                            <label className="block text-sm font-bold text-slate-700 mb-2">First Name *</label>
                                            <input
                                                {...register("firstName")}
                                                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-copper focus:ring-2 focus:ring-brand-copper/20 outline-none transition-all"
                                                placeholder="John"
                                            />
                                            {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-slate-700 mb-2">Last Name *</label>
                                            <input
                                                {...register("lastName")}
                                                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-copper focus:ring-2 focus:ring-brand-copper/20 outline-none transition-all"
                                                placeholder="Doe"
                                            />
                                            {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-bold text-slate-700 mb-2">Email *</label>
                                            <input
                                                {...register("email")}
                                                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-copper focus:ring-2 focus:ring-brand-copper/20 outline-none transition-all"
                                                placeholder="john@example.com"
                                            />
                                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-slate-700 mb-2">Phone *</label>
                                            <input
                                                {...register("phone")}
                                                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-copper focus:ring-2 focus:ring-brand-copper/20 outline-none transition-all"
                                                placeholder="(555) 123-4567"
                                            />
                                            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2">Your Location *</label>
                                        <select
                                            {...register("location")}
                                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-copper focus:ring-2 focus:ring-brand-copper/20 outline-none transition-all bg-white"
                                        >
                                            <option value="">Select a region...</option>
                                            <option value="Toronto/GTA">Toronto / GTA</option>
                                            <option value="Montreal/Quebec">Montreal / Quebec</option>
                                            <option value="Other">Other</option>
                                        </select>
                                        {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location.message}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2">Message *</label>
                                        <textarea
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
