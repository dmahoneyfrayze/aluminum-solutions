"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { getUTMParams } from "@/lib/utm";

const partnerPackSchema = z.object({
    firstName: z.string().min(2, "First name is required"),
    lastName: z.string().min(2, "Last name is required"),
    companyName: z.string().min(2, "Company name is required"),
    email: z.string().email("Invalid email address"),
});

type PartnerPackData = z.infer<typeof partnerPackSchema>;

export default function BuilderPartnerPackForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const { register, handleSubmit, formState: { errors }, reset } = useForm<PartnerPackData>({
        resolver: zodResolver(partnerPackSchema),
    });

    const onSubmit = async (data: PartnerPackData) => {
        setIsSubmitting(true);
        try {
            const utms = getUTMParams();

            // Using the specific Builder Partner Pack webhook
            const response = await fetch("https://services.leadconnectorhq.com/hooks/hos0jUKT6DAHGRD0nBoP/webhook-trigger/U47r6qucawrNMiyT6ZeD", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    first_name: data.firstName,
                    last_name: data.lastName,
                    company_name: data.companyName,
                    email: data.email,
                    source: "builder_partner_pack_magnet",
                    resource_requested: "Builder Partner Pack PDF",
                    ...utms
                }),
            });

            if (!response.ok) throw new Error("Submission failed");

            setIsSuccess(true);
            reset();
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="bg-brand-navy p-8 rounded-xl text-center text-white shadow-xl border border-slate-700">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-2xl font-serif font-bold mb-2">Pack Sent!</h3>
                <p className="text-slate-300">
                    Check your email for the Builder Partner Pack with volume pricing and specs.
                </p>
                <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-6 text-sm text-brand-copper hover:text-white underline"
                >
                    Send to another email
                </button>
            </div>
        );
    }

    return (
        <div className="bg-white p-8 rounded-xl shadow-xl border border-slate-100">
            <div className="text-center mb-6">
                <h3 className="text-2xl font-serif font-bold text-slate-900">
                    Download Partner Pack
                </h3>
                <p className="text-slate-600 text-sm mt-2">
                    Get access to our volume pricing, technical specifications, and installation timelines.
                </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">First Name</label>
                        <input
                            {...register("firstName")}
                            className="w-full p-3 border border-slate-300 rounded bg-slate-50 focus:bg-white focus:border-brand-navy focus:outline-none transition-colors"
                            placeholder="John"
                        />
                        {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Last Name</label>
                        <input
                            {...register("lastName")}
                            className="w-full p-3 border border-slate-300 rounded bg-slate-50 focus:bg-white focus:border-brand-navy focus:outline-none transition-colors"
                            placeholder="Doe"
                        />
                        {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>}
                    </div>
                </div>

                <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Company Name</label>
                    <input
                        {...register("companyName")}
                        className="w-full p-3 border border-slate-300 rounded bg-slate-50 focus:bg-white focus:border-brand-navy focus:outline-none transition-colors"
                        placeholder="Acme Construction"
                    />
                    {errors.companyName && <p className="text-red-500 text-xs mt-1">{errors.companyName.message}</p>}
                </div>

                <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Email</label>
                    <input
                        {...register("email")}
                        className="w-full p-3 border border-slate-300 rounded bg-slate-50 focus:bg-white focus:border-brand-navy focus:outline-none transition-colors"
                        placeholder="john@acme.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-brand-copper text-white font-bold tracking-wide hover:bg-orange-700 transition-colors rounded shadow-lg disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                >
                    {isSubmitting ? "Sending..." : "Download Now"}
                </button>
            </form>
        </div>
    );
}
