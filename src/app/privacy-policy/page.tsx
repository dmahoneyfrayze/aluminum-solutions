import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | Global Aluminum Solutions Inc",
    description: "Privacy Policy for Global Aluminum Solutions Inc. Learn how we collect, use, and protect your data.",
};

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />

            <main className="flex-grow py-20">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h1 className="text-4xl font-serif font-bold text-brand-dark mb-4">Privacy Policy</h1>
                    <p className="text-slate-500 mb-8">Effective Date: Jan 1st, 2025</p>

                    <div className="prose prose-slate max-w-none">
                        <p>
                            Global Aluminum Solutions Inc (“Company”, “we”, “us”, or “our”) is committed to protecting your privacy and maintaining transparency regarding how we collect, use, store, and safeguard your personal information. This Privacy Policy describes the types of information we collect, how it is used, and your choices regarding that information.
                        </p>
                        <p>
                            This policy applies to our website, landing pages, booking systems, online forms, SMS/email communications, AI chat or voice agents, and all related digital services provided by Global Aluminum Solutions Inc.
                        </p>

                        <div className="bg-slate-50 border-l-4 border-brand-copper p-6 my-8">
                            <h3 className="text-lg font-bold text-brand-dark mb-2">IMPORTANT NOTICE REGARDING TEXT MESSAGING DATA</h3>
                            <p className="mb-4">
                                Global Aluminum Solutions Inc does NOT share customer opt-in information—including phone numbers, messaging consent data, or SMS subscription details—with any third parties or affiliates for marketing, promotional, or unrelated purposes.
                            </p>
                            <p className="font-medium">
                                All text messaging originator opt-in data is kept strictly confidential and used solely for delivering the messages you have expressly consented to receive.
                            </p>
                        </div>

                        <h2>1. Information We Collect</h2>
                        <p>We collect both personal and non-personal information from users through our website, forms, appointment systems, communication tools, and automated systems.</p>

                        <h3>1.1 Personal Information Provided by You</h3>
                        <p>This may include:</p>
                        <ul>
                            <li>Full name</li>
                            <li>Email address</li>
                            <li>Phone number</li>
                            <li>Physical or mailing address</li>
                            <li>Birthdate (if provided)</li>
                            <li>Business or employment information</li>
                            <li>Payment information (processed securely through third-party processors)</li>
                            <li>Opt-in/consent records for SMS, email, and other communications</li>
                            <li>Form submissions, support requests, or service inquiries</li>
                        </ul>

                        <h3>1.2 Automatically Collected Information</h3>
                        <ul>
                            <li>IP address</li>
                            <li>Browser and device details</li>
                            <li>Cookies and tracking technology</li>
                            <li>Click activities and page views</li>
                            <li>Website usage analytics</li>
                            <li>Approximate location (based on IP)</li>
                        </ul>

                        <h3>1.3 Communication & Interaction Data</h3>
                        <p>Collected through:</p>
                        <ul>
                            <li>SMS/text messaging</li>
                            <li>Email</li>
                            <li>Phone calls (including call recording where legally permitted)</li>
                            <li>Live chat and AI chatbots</li>
                            <li>Social media interactions</li>
                            <li>Booking forms and automated reminders</li>
                        </ul>
                        <p>May include:</p>
                        <ul>
                            <li>Message content</li>
                            <li>Timestamps</li>
                            <li>Session history</li>
                            <li>Support transcripts</li>
                            <li>Appointment info</li>
                            <li>Customer service notes</li>
                        </ul>

                        <h3>1.4 AI System Data</h3>
                        <p>If we use AI-powered systems, we may collect:</p>
                        <ul>
                            <li>Chatbot conversation content</li>
                            <li>Automated call interactions</li>
                            <li>Lead qualification notes</li>
                            <li>Customer service automation logs</li>
                        </ul>
                        <p>We do not use this data to train public AI models.</p>

                        <h2>2. How We Use Your Information</h2>
                        <p>Global Aluminum Solutions Inc uses your information to:</p>
                        <ul>
                            <li>Provide our products and services</li>
                            <li>Process transactions, bookings, and customer requests</li>
                            <li>Communicate with you about appointments, reminders, updates, and support</li>
                            <li>Send marketing campaigns (when consent is provided)</li>
                            <li>Improve website functionality and optimize user experience</li>
                            <li>Maintain accurate communication and consent preferences</li>
                            <li>Analyze performance and website usage trends</li>
                            <li>Detect and prevent fraud or unauthorized activity</li>
                            <li>Enhance efficiency using automation or AI systems</li>
                        </ul>
                        <p>We only use your information as permitted by law and as described in this policy.</p>

                        <h2>3. SMS MESSAGING & COMPLIANCE</h2>
                        <h3>3.1 Opt-In & Consent</h3>
                        <p>By opting into our SMS services:</p>
                        <ul>
                            <li>You confirm consent to receive messages</li>
                            <li>We record your opt-in action with date/time and method</li>
                            <li>We comply with TCPA, CTIA, CASL, and all applicable regulations</li>
                        </ul>

                        <h3>3.2 Opt-Out Instructions</h3>
                        <p>You may opt out at any time by replying “STOP”. Once processed:</p>
                        <ul>
                            <li>You will receive a confirmation</li>
                            <li>No further messages will be sent unless you opt back in</li>
                        </ul>
                        <p>All opt-out requests are processed within 24 hours.</p>

                        <h3>3.3 Message Frequency</h3>
                        <p>Message frequency varies depending on appointments, requests, interactions, support, and service-related updates. We do not send promotional SMS without explicit consent.</p>

                        <h3>3.4 Customer Support</h3>
                        <p>Reply “HELP” or contact us at <a href="mailto:info@aluminumsolutions.ca">info@aluminumsolutions.ca</a>. Standard messaging/data rates may apply.</p>

                        <h3>3.5 Carrier Disclosure</h3>
                        <p>Carriers are not liable for delayed or undelivered messages. Supported carriers include major and regional U.S./Canadian providers.</p>

                        <h3>3.6 SMS Data Protection</h3>
                        <p>We do not share SMS opt-in data with third parties, affiliates, or marketing partners. SMS data is used exclusively for delivering messages you consented to receive.</p>

                        <h2>4. Information Sharing & Disclosure</h2>
                        <p>We do not sell, rent, or trade your personal information. We may share your information only with:</p>

                        <h3>4.1 Service Providers</h3>
                        <p>Trusted vendors who support our operations, including payment processors, scheduling tools, CRM systems, SMS/email delivery providers, hosting services, analytics platforms, and customer support systems. These providers must comply with strict confidentiality and data protection requirements.</p>

                        <h3>4.2 Legal Compliance</h3>
                        <p>We may disclose data if required by law, for regulatory compliance, under court order, or to protect our rights or prevent harm.</p>

                        <h3>4.3 Business Transfers</h3>
                        <p>In the event of a merger, acquisition, or asset transfer, your information remains protected under this policy.</p>
                        <p className="font-bold">Note: SMS opt-in and consent data is never shared except with providers required to deliver the messages themselves.</p>

                        <h2>5. Data Security</h2>
                        <p>We implement industry-standard security measures:</p>
                        <ul>
                            <li>Encryption of sensitive data (in transit & at rest)</li>
                            <li>Secure access controls</li>
                            <li>Two-factor authentication for internal systems</li>
                            <li>Regular security audits and vulnerability monitoring</li>
                            <li>Secure backups & disaster recovery</li>
                            <li>Staff training in privacy & compliance</li>
                            <li>Breach response protocols</li>
                        </ul>
                        <p>No electronic method is 100% secure, but we follow best-practice standards to protect your information.</p>

                        <h2>6. Cookies & Tracking Technologies</h2>
                        <p>We use cookies and similar technologies to analyze site performance, improve user experience, personalize interactions, track conversions, support advertising campaigns (if applicable), and measure marketing effectiveness. You may disable cookies via your browser; however, doing so may limit certain functionality.</p>

                        <h2>7. Your Rights & Choices</h2>
                        <p>Depending on your location, you may have the right to:</p>
                        <ul>
                            <li>Access your personal information</li>
                            <li>Correct or update inaccurate information</li>
                            <li>Request deletion of your data</li>
                            <li>Withdraw consent for marketing communications</li>
                            <li>Opt out of SMS/email</li>
                            <li>Request details on how your data is used</li>
                            <li>File a privacy complaint with local authorities</li>
                        </ul>
                        <p>To exercise your rights, contact us using the information below.</p>

                        <h2>8. Third-Party Links</h2>
                        <p>Our website may contain links to other websites. We are not responsible for their content, security, or privacy practices. We encourage you to review their policies. This Privacy Policy applies only to Global Aluminum Solutions Inc.</p>

                        <h2>9. Changes to This Privacy Policy</h2>
                        <p>We may update this policy from time to time. When changes occur, the updated policy will be posted on our website, and the “Effective Date” will reflect the latest version. For significant updates, we may notify you via email or on-site notice.</p>

                        <h2>10. Contact Us</h2>
                        <p>For questions or privacy requests, contact us at:</p>
                        <address className="not-italic bg-slate-50 p-6 rounded-lg border border-slate-200">
                            <strong>Global Aluminum Solutions Inc</strong><br />
                            Phone: <a href="tel:16474902424" className="text-brand-copper hover:underline">1 647-490-2424</a><br />
                            Email: <a href="mailto:info@aluminumsolutions.ca" className="text-brand-copper hover:underline">info@aluminumsolutions.ca</a><br />
                            Website: <a href="https://aluminumsolutions.ca/" className="text-brand-copper hover:underline">aluminumsolutions.ca</a>
                        </address>

                        <p className="mt-8 text-sm text-slate-500">
                            By using our website and services, you acknowledge and agree to this Privacy Policy.
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
