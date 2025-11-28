import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
    title: "Privacy Policy | Aluminum Solutions",
    description: "Our commitment to protecting your privacy and personal data.",
};

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <Header />

            <main className="flex-grow pt-32 pb-20">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h1 className="text-4xl font-serif font-bold text-slate-900 mb-8">Privacy Policy</h1>
                    <p className="text-slate-500 mb-12">Last Updated: {new Date().toLocaleDateString()}</p>

                    <div className="prose prose-slate max-w-none">
                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
                            <p>
                                Aluminum Solutions ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website aluminumsolutions.ca (the "Site") or communicate with us.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Information We Collect</h2>
                            <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, that you voluntarily give to us when you request a quote or contact us.</li>
                                <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
                            </ul>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Use of AI and Automation</h2>
                            <p>
                                We utilize Artificial Intelligence (AI) and automated systems to enhance our customer service and operational efficiency. By interacting with our Site or communicating with us, you acknowledge and agree that:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li><strong>Automated Messaging:</strong> We may use AI-driven chatbots or automated email/SMS systems to respond to your inquiries instantly.</li>
                                <li><strong>Data Processing:</strong> Personal data provided by you may be processed by AI algorithms to categorize inquiries, schedule appointments, or provide relevant product recommendations.</li>
                                <li><strong>Human Oversight:</strong> While we use automation, complex inquiries are reviewed by human agents to ensure accuracy and quality service.</li>
                            </ul>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. SMS and Text Messaging</h2>
                            <p>
                                By providing your phone number to Aluminum Solutions, you consent to receive text messages (SMS) from us regarding your quotes, orders, or service inquiries.
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li><strong>Consent:</strong> You agree to receive automated promotional and informational text messages on the phone number provided. Consent is not a condition of purchase.</li>
                                <li><strong>Opt-Out:</strong> You can opt-out of receiving text messages at any time by replying "STOP" to any message.</li>
                                <li><strong>Rates:</strong> Standard message and data rates may apply depending on your mobile carrier plan.</li>
                            </ul>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Disclosure of Your Information</h2>
                            <p>We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others.</li>
                                <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.</li>
                            </ul>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Security of Your Information</h2>
                            <p>
                                We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Contact Us</h2>
                            <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
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
