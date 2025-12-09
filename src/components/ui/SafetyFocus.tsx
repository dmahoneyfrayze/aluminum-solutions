
import Image from "next/image";
import Link from "next/link";

export default function SafetyFocus() {
    return (
        <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
            {/* Background enhancement */}
            <div className="absolute top-0 right-0 w-2/3 h-full bg-slate-800/20 -skew-x-12 transform translate-x-32" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    <div className="w-full lg:w-1/2">
                        <span className="text-brand-copper font-bold tracking-widest uppercase text-sm mb-4 block">
                            Premium Protection
                        </span>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight text-white">
                            Safety That Doesn't Compromise Style.
                        </h2>
                        <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                            We make safety features a premium value add to your space. Our systems are engineered to exceed Ontario Building Code requirements without sacrificing the open, airy aesthetic you desire.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 border border-white/20">
                                    <span className="text-2xl">🛡️</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl text-white mb-1">Engineered Durability</h3>
                                    <p className="text-slate-400 text-sm">Heavy-gauge aluminum and tempered safety glass designed to withstand rigorous impact and weather.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 border border-white/20">
                                    <span className="text-2xl">🔒</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl text-white mb-1">Pool Compliant</h3>
                                    <p className="text-slate-400 text-sm">Self-closing, self-latching gates and climb-resistant designs that keep your loved ones safe.</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10">
                            <Link href="/contact" className="inline-block px-8 py-4 bg-brand-copper text-white font-bold rounded hover:bg-orange-700 transition-colors shadow-lg">
                                Explore Safety Options
                            </Link>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                            <Image
                                src="/images/Frameless-Glass.jpg"
                                alt="Premium Safe Glass Railing"
                                fill
                                className="object-cover"
                            />
                            {/* Overlay Badge */}
                            <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-lg">
                                <p className="text-brand-copper font-bold text-xs uppercase tracking-wider mb-1">Certified</p>
                                <p className="text-white font-bold text-lg">OBC Compliant</p>
                            </div>
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full border-2 border-brand-copper/30 rounded-2xl" />
                    </div>

                </div>
            </div>
        </section>
    );
}
