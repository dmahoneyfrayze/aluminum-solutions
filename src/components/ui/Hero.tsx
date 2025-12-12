import Link from "next/link";
import Image from "next/image";

interface HeroProps {
    title: string;
    subtitle: string | React.ReactNode;
    ctaText?: string;
    ctaLink?: string;
    secondaryCtaText?: string;
    secondaryCtaLink?: string;
    showSecondaryCta?: boolean;
    backgroundImage?: string;
}

export default function Hero({
    title,
    subtitle,
    ctaText = "Get a Free Quote",
    ctaLink = "/contact",
    secondaryCtaText = "View Gallery",
    secondaryCtaLink = "/gallery",
    showSecondaryCta = true,
    backgroundImage = "/images/hero-final-update.jpg"
}: HeroProps) {
    return (
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-slate-900 py-20">
            {/* Background Image with Parallax-like feel */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={backgroundImage}
                    alt={title}
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover transform scale-105"
                    quality={85}
                />
            </div>

            {/* Gradient Overlay for Depth & Readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/40 to-slate-900/80 z-10" />

            {/* Radial Gradient for "Spotlight" effect */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent to-slate-900/40 z-10" />

            {/* Content */}
            <div className="relative z-20 container mx-auto px-6 text-center text-white max-w-5xl">
                <h1 className="text-4xl md:text-7xl font-serif font-bold mb-8 leading-tight animate-fade-in-up drop-shadow-lg text-white">
                    {title}
                </h1>
                <p className="text-xl md:text-2xl text-slate-100 mb-12 max-w-3xl mx-auto font-light leading-relaxed animate-fade-in-up delay-100 drop-shadow-md text-balance text-white">
                    {subtitle}
                </p>
                <div className="animate-fade-in-up delay-200 flex flex-col md:flex-row gap-4 justify-center">
                    <Link
                        href={ctaLink}
                        className="inline-block px-12 py-5 bg-brand-copper text-white text-lg font-bold tracking-wide hover:bg-orange-600 transition-all transform hover:-translate-y-1 hover:shadow-orange-500/30 shadow-2xl rounded-sm"
                    >
                        {ctaText}
                    </Link>
                    {showSecondaryCta && (
                        <Link
                            href={secondaryCtaLink}
                            className="inline-block px-12 py-5 bg-transparent border-2 border-white text-white text-lg font-bold tracking-wide hover:bg-white hover:text-slate-900 transition-all transform hover:-translate-y-1 shadow-xl rounded-sm backdrop-blur-sm"
                        >
                            {secondaryCtaText}
                        </Link>
                    )}
                </div>
            </div>
        </section>
    );
}
