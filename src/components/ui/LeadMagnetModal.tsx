"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { getUTMParams } from "@/lib/utm";

const schema = z.object({
    email: z.string().email("Please enter a valid email address"),
    name: z.string().min(2, "Name is required"),
});

type FormData = z.infer<typeof schema>;

interface LeadMagnetModalProps {
    isOpen: boolean;
    onClose: () => void;
    resourceName: string;
}

export default function LeadMagnetModal({ isOpen, onClose, resourceName }: LeadMagnetModalProps) {
    const [isSuccess, setIsSuccess] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const onSubmit = async (data: FormData) => {
        try {
            const utms = getUTMParams();

            // Send to GoHighLevel
            const response = await fetch("https://services.leadconnectorhq.com/hooks/hos0jUKT6DAHGRD0nBoP/webhook-trigger/DRcb8YyzaoND8umhVxMy", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: data.name,
                    email: data.email,
                    source: "lead_magnet_popup",
                    resource_requested: resourceName,
                    ...utms
                }),
            });

            if (!response.ok) throw new Error("Submission failed");

            setIsSuccess(true);
        } catch (error) {
            console.error("Error submitting lead:", error);
            // Optional: Show error state, but for now we'll just log it
            // setIsSuccess(true); // Fallback to success to not block user? No, better to fail silently or show alert.
            alert("Sorry, there was an issue downloading the guide. Please try again.");
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-xl shadow-2xl max-w-md w-full overflow-hidden relative animate-fade-in-up">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
                    aria-label="Close modal"
                >
                    ✕
                </button>

                <div className="p-8">
                    {!isSuccess ? (
                        <>
                            <div className="text-center mb-6">
                                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                                    📥
                                </div>
                                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">
                                    Download {resourceName}
                                </h3>
                                <p className="text-slate-600 text-sm">
                                    Enter your details below to get instant access to the full PDF guide.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                <div>
                                    <label htmlFor="lead-name" className="block text-sm font-bold text-slate-700 mb-1">Name</label>
                                    <input
                                        id="lead-name"
                                        type="text"
                                        {...register("name")}
                                        className="w-full p-3 border border-slate-300 rounded focus:ring-2 focus:ring-brand-copper focus:border-transparent"
                                        placeholder="First Name"
                                        required
                                        aria-label="First Name"
                                    />
                                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                                </div>

                                <div>
                                    <label htmlFor="lead-email" className="block text-sm font-bold text-slate-700 mb-1">Email</label>
                                    <input
                                        id="lead-email"
                                        type="email"
                                        {...register("email")}
                                        className="w-full p-3 border border-slate-300 rounded focus:ring-2 focus:ring-brand-copper focus:border-transparent"
                                        placeholder="Email Address"
                                        required
                                        aria-label="Email Address"
                                    />
                                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-3 bg-brand-copper text-white font-bold rounded hover:bg-orange-700 transition-colors shadow-lg"
                                >
                                    Get the Guide
                                </button>

                                <p className="text-xs text-center text-slate-400">
                                    We respect your privacy. No spam.
                                </p>
                            </form>
                        </>
                    ) : (
                        <div className="text-center py-8">
                            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
                                ✓
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Success!</h3>
                            <p className="text-slate-600 mb-8">
                                Your download is ready. Check your email for the link.
                            </p>
                            <button
                                onClick={onClose}
                                className="text-brand-navy font-bold underline"
                            >
                                Close Window
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
