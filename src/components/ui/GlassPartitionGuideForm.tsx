"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { getUTMParams } from "@/lib/utm";

const guideFormSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone number is required"),
    city: z.string().min(2, "City is required"),
    projectType: z.string().min(1, "Please select a project type"),
});

type GuideFormData = z.infer<typeof guideFormSchema>;

export default function GlassPartitionGuideForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const { register, handleSubmit, formState: { errors }, reset } = useForm<GuideFormData>({
        resolver: zodResolver(guideFormSchema),
    });

    const onSubmit = async (data: GuideFormData) => {
        setIsSubmitting(true);
        try {
            const utms = getUTMParams();

            // Using the specific Glass Partition Guide webhook
            const response = await fetch("https://services.leadconnectorhq.com/hooks/hos0jUKT6DAHGRD0nBoP/webhook-trigger/87ODF4UVspewV3XhoCPm", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: data.name,
                    email: data.email,
                    phone: data.phone,
                    city: data.city,
                    project_type: data.projectType,
                    source: "glass_partition_guide_magnet",
                    resource_requested: "Glass Partition Planning Guide PDF",
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
                <h3 className="text-2xl font-serif font-bold mb-2">Guide Sent!</h3>
                <p className="text-slate-300">
                    Check your email for the Glass Partition Planning Guide.
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
                    Free Planning Guide
                </h3>
                <p className="text-slate-600 text-sm mt-2">
                    Get our 5-page guide on sizing, privacy options, and budget ranges for glass partitions.
                </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Name</label>
                    <input
                        {...register("name")}
                        className="w-full p-3 border border-slate-300 rounded bg-slate-50 focus:bg-white focus:border-brand-navy focus:outline-none transition-colors"
                        placeholder="Your Name"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Email</label>
                        <input
                            {...register("email")}
                            className="w-full p-3 border border-slate-300 rounded bg-slate-50 focus:bg-white focus:border-brand-navy focus:outline-none transition-colors"
                            placeholder="name@company.com"
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Phone</label>
                        <input
                            {...register("phone")}
                            className="w-full p-3 border border-slate-300 rounded bg-slate-50 focus:bg-white focus:border-brand-navy focus:outline-none transition-colors"
                            placeholder="(555) 123-4567"
                        />
                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">City</label>
                        <input
                            {...register("city")}
                            className="w-full p-3 border border-slate-300 rounded bg-slate-50 focus:bg-white focus:border-brand-navy focus:outline-none transition-colors"
                            placeholder="Toronto"
                        />
                        {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>}
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Project Type</label>
                        <select
                            {...register("projectType")}
                            className="w-full p-3 border border-slate-300 rounded bg-slate-50 focus:bg-white focus:border-brand-navy focus:outline-none transition-colors"
                        >
                            <option value="">Select...</option>
                            <option value="Office">Office</option>
                            <option value="Home Gym">Home Gym</option>
                            <option value="Wine Cellar">Wine Cellar</option>
                            <option value="Other">Other</option>
                        </select>
                        {errors.projectType && <p className="text-red-500 text-xs mt-1">{errors.projectType.message}</p>}
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-brand-copper text-white font-bold tracking-wide hover:bg-orange-700 transition-colors rounded shadow-lg disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                >
                    {isSubmitting ? "Sending..." : "Get the Free Guide"}
                </button>

                <p className="text-xs text-center text-slate-400 mt-4">
                    We respect your privacy. Unsubscribe at any time.
                </p>
            </form>
        </div>
    );
}
