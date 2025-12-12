import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/ui/Hero";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Referral Program | Global Aluminum Solutions",
    description: "Earn rewards by referring friends and family to Global Aluminum Solutions.",
};

export default function ReferralPage() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />

            <main className="flex-grow">
                <Hero
                    title="Referral Program"
                    subtitle="Share the quality, earn rewards. Our way of saying thank you for your trust."
                    ctaText="Contact Us"
                    ctaLink="/contact"
                    backgroundImage="/images/generated/glass_enclosure_project_1764312838961.webp"
                />

                <section className="py-32 bg-white text-center">
                    <div className="container mx-auto px-6 max-w-2xl">
                        <div className="mb-8 text-6xl">🎁</div>
                        <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">
                            Coming Soon
                        </h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-10">
                            We are putting the finishing touches on our new Referral Program.
                            Soon you'll be able to earn rewards for every friend, neighbor, or family member you refer who completes a project with us.
                        </p>
                        <div className="p-6 bg-slate-50 rounded-lg border border-slate-100">
                            <p className="font-bold text-slate-900 mb-2">Can't wait?</p>
                            <p className="text-slate-600 mb-4">
                                If you have a referral right now, just let us know! We'll make sure you're taken care of.
                            </p>
                            <Link href="/contact" className="text-brand-copper font-bold hover:underline">
                                Contact us directly &rarr;
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
