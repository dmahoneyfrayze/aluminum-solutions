
export default function ServiceMap() {
    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">
                        Service Areas
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Proudly serving Toronto and the entire Greater Toronto Area.
                    </p>
                </div>
                <div className="flex justify-center">
                    <iframe
                        src="https://www.google.com/maps/d/u/0/embed?mid=1M6vEEyVNiKuR86nHSm3SA0E4cJEJ2iw&ehbc=2E312F&noprof=1"
                        width="640"
                        height="480"
                        className="w-full max-w-4xl h-[480px] rounded-xl shadow-lg border-0 bg-slate-200"
                        title="Service Areas Map"
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}
