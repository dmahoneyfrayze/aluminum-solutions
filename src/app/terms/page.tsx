import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
    title: "Terms of Service | Aluminum Solutions",
    description: "Terms and conditions for using the Aluminum Solutions website.",
};

export default function TermsPage() {
    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <Header />

            <main className="flex-grow pt-32 pb-20">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h1 className="text-4xl font-serif font-bold text-slate-900 mb-8">Terms of Service</h1>
                    <p className="text-slate-500 mb-12">Last Updated: {new Date().toLocaleDateString()}</p>

                    <div className="prose prose-slate max-w-none">
                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Agreement to Terms</h2>
                            <p>
                                These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Aluminum Solutions ("we," "us," or "our"), concerning your access to and use of the aluminumsolutions.ca website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Intellectual Property Rights</h2>
                            <p>
                                Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. User Representations</h2>
                            <p>By using the Site, you represent and warrant that:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li>All registration information you submit will be true, accurate, current, and complete.</li>
                                <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
                                <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
                                <li>You will not access the Site through automated or non-human means, whether through a bot, script, or otherwise.</li>
                            </ul>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Limitation of Liability</h2>
                            <p>
                                In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site, even if we have been advised of the possibility of such damages.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Governing Law</h2>
                            <p>
                                These Terms shall be governed by and defined following the laws of Ontario and Canada. Aluminum Solutions and yourself irrevocably consent that the courts of Ontario shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Contact Us</h2>
                            <p>In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:</p>
                            <div className="mt-4 bg-white p-6 rounded-lg border border-slate-200">
                                <p className="font-bold text-slate-900">Aluminum Solutions</p>
                                <p>75 Fernstaff Ct. Unit #5</p>
                                <p>Vaughan, ON, L4K 3P8</p>
                                <p className="mt-2">Email: info@aluminumsolutions.ca</p>
                                <p>Phone: (905) 780-3088</p>
                            </div>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
