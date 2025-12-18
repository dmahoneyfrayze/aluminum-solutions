import Image from "next/image";

const clients = [
    { name: "Barroso Custom Homes", logo: "/images/clients/barroso-custom-homes.jpg", width: 180, height: 60 },
    { name: "Berkim Construction", logo: "/images/clients/berkim.png", width: 180, height: 60 },
    { name: "YYZ Ed Projects", logo: "/images/clients/yyzed-projects.png", width: 160, height: 50 },
    { name: "The Downsview Group", logo: "/images/clients/downsview-group.png", width: 140, height: 80 },
    { name: "Sunny Morning", logo: "/images/clients/sunny-morning.png", width: 140, height: 80 },
];

export default function TrustSection() {
    return (
        <section className="py-16 bg-slate-50 border-y border-slate-200">
            <div className="container mx-auto px-6">
                <p className="text-center text-slate-500 font-bold uppercase tracking-widest text-sm mb-10">
                    Trusted by Commercial & Residential Clients
                </p>
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 transition-all duration-500">
                    {clients.map((client) => (
                        <div key={client.name} className="relative h-16 w-40 flex items-center justify-center">
                            <Image
                                src={client.logo}
                                alt={`${client.name} logo`}
                                width={client.width}
                                height={client.height}
                                className="object-contain max-h-16 w-auto"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
