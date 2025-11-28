import Link from "next/link";

interface HeroProps {
    title: string;
    subtitle: string;
    ctaText?: string;
    ctaLink?: string;
    backgroundImage?: string;
}

export default function Hero({
    title,
    subtitle,
    ctaText = "Get a Free Quote",
    ctaLink = "/contact",
    backgroundImage = "/images/hero-bg-placeholder.jpg" // We will need to replace this
}: HeroProps) {
    return (
        <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-900">
            {/* Background Image Overlay */}
            <div className="absolute inset-0 bg-black/40 z-10" />

            {/* Content */}
            <div className="relative z-20 container mx-auto px-6 text-center text-white max-w-4xl">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight animate-fade-in-up">
                    {title}
                </h1>
                <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in-up delay-100">
                    {subtitle}
                </p>
                <div className="animate-fade-in-up delay-200">
                    <Link
                        href={ctaLink}
                        className="inline-block px-8 py-4 bg-white text-slate-900 font-medium tracking-wide hover:bg-slate-100 transition-all transform hover:scale-105 shadow-xl"
                    >
                        {ctaText}
                    </Link>
                </div>
            </div>
        </section>
    );
}
