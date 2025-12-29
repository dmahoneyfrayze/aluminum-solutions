import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service | Global Aluminum Solutions Inc",
    description: "Terms of Service for Global Aluminum Solutions Inc. Please read these terms carefully before using our website or services.",
};

export default function TermsPage() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />

            <main className="flex-grow py-20">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h1 className="text-4xl font-serif font-bold text-brand-dark mb-4">Terms of Service</h1>
                    <p className="text-slate-500 mb-8">Effective Date: Jan 1st, 2025</p>

                    <div className="prose prose-slate max-w-none">
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-brand-dark mb-4">I. SMS Messaging Terms & Compliance</h2>

                            <h3>1. Program Description</h3>
                            <p>Our SMS messaging program provides appointment confirmations, reminders, service notifications, customer support, and other service-related updates. Messages are only sent when you have explicitly opted in through our website, booking forms, checkout pages, or customer intake systems.</p>

                            <h3>2. Cancellation Instructions</h3>
                            <p>You may cancel at any time by replying “STOP” to any message. We will then send a confirmation message and cease communication unless you choose to opt in again.</p>

                            <h3>3. Support Information</h3>
                            <p>For help, reply “HELP” or contact us:</p>
                            <ul>
                                <li>Email: <a href="mailto:info@aluminumsolutions.ca">info@aluminumsolutions.ca</a></li>
                                <li>Phone: <a href="tel:16474902424">1 647-490-2424</a></li>
                            </ul>

                            <h3>4. Carrier Liability</h3>
                            <p>Wireless carriers are not responsible for delayed or undelivered messages.</p>

                            <h3>5. Message & Data Rates</h3>
                            <p>Message/data rates may apply depending on your mobile plan. Message frequency varies based on your interactions.</p>

                            <h3>6. Supported Carriers</h3>
                            <p>All major U.S. and Canadian carriers are supported, including Rogers, Bell, Telus, AT&T, Verizon, T-Mobile, and most regional carriers.</p>

                            <h3>7. Age Restriction</h3>
                            <p>You must be 18 years or older to use our SMS program.</p>

                            <h3>8. Privacy Policy</h3>
                            <p>For full privacy information, please visit: <a href="/privacy-policy">aluminumsolutions.ca/privacy-policy</a></p>
                            <p>We comply with TCPA, CTIA, CASL, and CAN-SPAM.</p>
                        </section>

                        <hr className="my-12 border-slate-200" />

                        <section>
                            <h2 className="text-2xl font-bold text-brand-dark mb-4">II. General Terms of Service</h2>
                            <p>This website (the “Site”) is owned and operated by Global Aluminum Solutions Inc. By accessing or using the Site, you agree to follow these Terms of Service, our Privacy Policy, and any additional policies referenced on the Site.</p>
                            <p>Use of the Site in any way—manual or automated—indicates acceptance of these Terms. We may update these Terms at any time. Continued use of the Site means you accept the updated Terms.</p>

                            <h3>1. Use of the Site & Services</h3>
                            <p>By using our Site, you agree NOT to:</p>
                            <ul>
                                <li>Engage in unlawful or harmful activities</li>
                                <li>Interfere with website functionality or security</li>
                                <li>Attempt to access restricted or unauthorized areas</li>
                                <li>Upload malware, spam, or harmful content</li>
                                <li>Misrepresent your identity</li>
                                <li>Abuse our messaging, booking, or automation systems</li>
                            </ul>
                            <p>We reserve the right to suspend or restrict access for violations.</p>

                            <h3>2. Intellectual Property</h3>
                            <h4>2.1 Our Limited License to You</h4>
                            <p>All content on the Site—including text, branding, images, videos, and digital materials—is owned by Global Aluminum Solutions Inc or licensed to us. It is protected under copyright and intellectual property laws.</p>
                            <p>You may:</p>
                            <ul>
                                <li>View the Site</li>
                                <li>Download/print one copy for personal use</li>
                            </ul>
                            <p>You may NOT:</p>
                            <ul>
                                <li>Modify, reproduce, distribute, sell, publish, resell, or create derivative works unless you receive written permission.</li>
                            </ul>

                            <h4>2.2 Your License to Us</h4>
                            <p>By submitting content—such as reviews, comments, messages, forms, or uploads—you confirm you own it or have permission to submit it. You grant Global Aluminum Solutions Inc a royalty-free, worldwide, perpetual, non-exclusive license to use, display, publish, modify, and distribute that content.</p>

                            <h3>3. Online Purchases & Transactions</h3>
                            <p>If products or services are purchased through the Site:</p>
                            <ul>
                                <li>You must provide accurate contact and payment information</li>
                                <li>You authorize us or our payment processors to charge your method of payment</li>
                                <li>You agree to any pricing, deposit, or billing terms disclosed during checkout</li>
                            </ul>
                            <p>We are not responsible for errors caused by external payment processors, service interruptions or delays caused by third-party vendors, or issues arising from your mobile carrier, bank, or financial institution.</p>

                            <h3>4. Appointments, Bookings & Automated Reminders</h3>
                            <p>By booking an appointment, you agree to provide accurate contact information, receive reminder messages via SMS or email, and notify us promptly if you need to cancel or reschedule. Missed appointments, late cancellations, or no-shows may be subject to fees depending on our cancellation policy.</p>

                            <h3>5. AI Systems, Automation & Digital Tools</h3>
                            <p>Our services may include AI chatbots, automated phone systems, virtual assistants, automated reminders, dynamic online forms, and automated lead or support handling. By using these features, you acknowledge:</p>
                            <ul>
                                <li>AI-generated content may not be perfect</li>
                                <li>Automated systems may log interactions for quality and operational purposes</li>
                                <li>AI tools do not provide medical, legal, or financial advice</li>
                                <li>You are responsible for verifying any critical information</li>
                            </ul>
                            <p>We are not liable for decisions made based on automated communications.</p>

                            <h3>6. Disclaimer of Warranties</h3>
                            <p>The Site and all services are provided “as is” without warranties of any kind. We disclaim all warranties, express or implied, including fitness for a particular purpose, merchantability, non-infringement, accuracy or reliability of content, and availability or performance of the Site. You use the Site at your own risk.</p>

                            <h3>7. Limitation of Liability</h3>
                            <p>To the fullest extent permitted by law, Global Aluminum Solutions Inc is not liable for indirect or consequential damages, loss of profits or revenue, service interruptions, data loss, errors caused by third-party systems, issues arising from automation, AI, or digital tools, or damages resulting from user negligence or misuse. Our total liability shall not exceed the amount paid by you, if any, for services in the last 12 months.</p>

                            <h3>8. Indemnification</h3>
                            <p>You agree to indemnify and hold harmless Global Aluminum Solutions Inc, our staff, officers, agents, and partners from claims, damages, or expenses arising from your use of the Site, violation of these Terms, misuse of our services, or submission of false or harmful information.</p>

                            <h3>9. Account Registration & Security</h3>
                            <p>If you create an account, you must provide accurate information, are responsible for your login credentials, and must notify us of unauthorized access immediately. We are not responsible for losses from compromised credentials.</p>

                            <h3>10. Termination of Access</h3>
                            <p>We may suspend or terminate access to the Site at any time if Terms are violated, fraud or misuse is detected, or activity threatens system integrity. Upon termination, you must stop using the Site immediately.</p>

                            <h3>11. Governing Law & Dispute Resolution</h3>
                            <p>These Terms are governed by the laws of the <strong>Province of Ontario and the federal laws of Canada</strong> applicable therein.</p>
                            <p>Any dispute shall be resolved through binding arbitration, not class action litigation.</p>

                            <h3>12. Severability</h3>
                            <p>If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that these Terms shall otherwise remain in full force and effect and enforceable.</p>

                            <h3>13. Entire Agreement</h3>
                            <p>These Terms of Service, together with our Privacy Policy and any other legal notices published by us on the Site, constitute the entire agreement between you and Global Aluminum Solutions Inc concerning the Site and supersede all prior terms, agreements, discussions, and writings regarding the Site.</p>

                            <h3>14. Changes to These Terms</h3>
                            <p>We may revise these Terms at any time. The current version will always be posted with the most recent Effective Date. Continued use of the Site confirms your acceptance.</p>

                            <h3>15. Contact Information</h3>
                            <p>For questions regarding these Terms of Service:</p>
                            <address className="not-italic bg-slate-50 p-6 rounded-lg border border-slate-200">
                                <strong>Global Aluminum Solutions Inc</strong><br />
                                Phone: <a href="tel:16474902424" className="text-brand-copper hover:underline">1 647-490-2424</a><br />
                                Email: <a href="mailto:info@aluminumsolutions.ca" className="text-brand-copper hover:underline">info@aluminumsolutions.ca</a><br />
                                Website: <a href="https://aluminumsolutions.ca/" className="text-brand-copper hover:underline">aluminumsolutions.ca</a>
                            </address>

                            <p className="mt-8 text-sm text-slate-500">
                                By using our website and services, you consent to these Terms of Service.
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
