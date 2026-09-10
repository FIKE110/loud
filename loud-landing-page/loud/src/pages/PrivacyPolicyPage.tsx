import { type FC, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SectionProps {
  question: string;
  answer: React.ReactNode;
}

const AccordionItem: FC<SectionProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-white/10 rounded-xl overflow-hidden bg-white/5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex justify-between items-center bg-transparent hover:bg-white/10 transition-colors"
      >
        <span className="font-bold text-white pr-4">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-[#01B2FE] flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 bg-slate-900/50 text-slate-300 leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/#features" },
    { name: "Pre-order", href: "/#pricing" },
    { name: "FAQ", href: "/faq" },
  ];

  return (
    <nav className="fixed top-0 w-full z-[100] bg-slate-900/95 backdrop-blur-md border-b border-white/5 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="text-2xl font-black tracking-tighter text-[#01B2FE]">
            LOUD<span className="text-white">!</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-sm font-bold uppercase tracking-widest hover:text-[#01B2FE] transition-colors text-slate-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <button
          className="md:hidden p-2 rounded-lg bg-white/10 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 h-screen w-full bg-slate-900 z-[110] p-6 flex flex-col md:hidden"
          >
            <div className="flex justify-between items-center mb-12">
              <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                <span className="text-2xl font-black">LOUD<span className="text-[#01B2FE]">!</span></span>
              </Link>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 bg-white/10 rounded-full">
                <X />
              </button>
            </div>
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-3xl font-black text-white border-b border-white/10 pb-2"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-slate-950 text-slate-400 pt-16 pb-10 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="flex justify-center gap-6 mb-8 flex-wrap">
        <Link to="/terms" className="text-sm hover:text-[#01B2FE] transition-colors">Terms of Service</Link>
        <Link to="/privacy" className="text-sm hover:text-[#01B2FE] transition-colors">Privacy Policy</Link>
        <Link to="/eula" className="text-sm hover:text-[#01B2FE] transition-colors">EULA</Link>
        <Link to="/acceptable-use-policy" className="text-sm hover:text-[#01B2FE] transition-colors">Acceptable Use</Link>
        <Link to="/health-content-policy" className="text-sm hover:text-[#01B2FE] transition-colors">Health Content Policy</Link>
        <Link to="/faq" className="text-sm hover:text-[#01B2FE] transition-colors">FAQ</Link>
        <Link to="/us-data-compliance" className="text-sm hover:text-[#01B2FE] transition-colors">US Data Compliance</Link>
        <Link to="/creator-content-policy" className="text-sm hover:text-[#01B2FE] transition-colors">Creator Content Policy</Link>
        <Link to="/quarterly-ambassador" className="text-sm hover:text-[#01B2FE] transition-colors">Quarterly Ambassador Program</Link>
      </div>
      <div className="text-center text-xs text-slate-600">
        <p className="font-black uppercase tracking-[0.4em]">© 2026 LOUD PRODUCT LIMITED. ALL RIGHTS RESERVED.</p>
      </div>
    </div>
  </footer>
);

const PrivacyPolicyPage: FC = () => {
  const sections = [
    {
      question: "1. Introduction and Scope",
      answer: (
        <div>
          <p className="mb-4">
            LOUD! Is a social media platform designed to empower creators and users through content sharing, monetization, procurement services and event participation. This Privacy Policy describes how we collect, use, process, and disclose your information, including personal and business-related data, in conjunction with your access to and use of our procurement and social services. We are committed to protecting your privacy and handling your personal data in accordance with applicable data protection laws, including the Nigerian Data Protection Act (NDPA) and global best practices such as the GDPR principles.
          </p>
          <p>
            By using our platform, you acknowledge the collection and processing of your data as outlined in this Privacy Policy.
          </p>
        </div>
      ),
    },
    {
      question: "2. Data Categories We Collect",
      answer: (
        <div className="space-y-4">
          <p>To facilitate a high-trust social media and procurement environment platform, we process the following categories of data:</p>
          <div>
            <h4 className="font-bold text-white mt-4">A. Personal & Identity Data</h4>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>User Information: Full names, professional titles, and corporate email addresses.</li>
              <li>Contact Details: Direct business phone numbers and professional social profiles.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mt-4">B. Business & KYB (Know Your Business) Data</h4>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Corporate Identity: Legal business name, registered address, and Tax Identification Numbers (VAT/EIN/GST).</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mt-4">C. Verification Data</h4>
            <p className="mt-2">Industry credentials (ISO, diversity certifications), trade licenses, and beneficial ownership details provided for KYB verification.</p>
          </div>
          <div>
            <h4 className="font-bold text-white mt-4">D. Commercial & Transactional Data</h4>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Procurement Activity: RFQ documentation, proposal values, cost breakdowns, delivery timelines, and historical contract records.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mt-4">E. Payment Data</h4>
            <p className="mt-2">We do not store raw credit card details. We collect encrypted payment tokens and billing addresses via our PCI-compliant payment processors.</p>
          </div>
          <div>
            <h4 className="font-bold text-white mt-4">F. Technical & Usage Data</h4>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>System Metrics: IP addresses, browser types, device identifiers, and geolocation data.</li>
              <li>Engagement Logs: Timestamps of logins, bid submissions, and internal platform messaging.</li>
              <li>Device & Browser Information: We collect specific information about the browsers and devices you use to access LOUD! (e.g., unique identifiers, browser type and settings, device type and settings, operating system, and mobile network information).</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mt-4">G. Financial Data</h4>
            <p className="mt-2">Bank account details strictly for the purpose of processing payments, issuing refunds and preventing fraudulent transactions.</p>
          </div>
          <div>
            <h4 className="font-bold text-white mt-4">H. Content & Social Media Activity</h4>
            <p className="mt-2">Posts, comments, messages, and media you upload to the Platform.</p>
          </div>
          <div>
            <h4 className="font-bold text-white mt-4">I. Professional & Equity Data</h4>
            <p className="mt-2">Information required for the "Creator-to-Owner" model, including engagement metrics, contribution history, and tax identification numbers for equity distribution.</p>
          </div>
          <div>
            <h4 className="font-bold text-white mt-4">J. Activity Information</h4>
            <p className="mt-2">We collect information about your activity on our services, which we use to do things like recommend partners or creator content you might like. This includes terms you search for, views and interactions with content and ads, purchase activity and procurement history, People with whom you communicate or share content.</p>
          </div>
        </div>
      ),
    },
    {
      question: "3. Why LOUD! Collects Data",
      answer: (
        <div className="space-y-4">
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Provide our services:</strong> We use your information to deliver our services, such as processing the terms you search for to return results or helping you share content.</li>
            <li><strong>Maintain & improve our services:</strong> We also use your information to ensure our services are working as intended, such as tracking outages or troubleshooting issues that you report to us.</li>
            <li><strong>Develop new services:</strong> We use information collected on existing LOUD! features to help us create new procurement tools or social features.</li>
            <li><strong>Provide personalized services:</strong> We use the information we collect to customize our services for you, including providing recommendations, personalized content, and customized search results.</li>
            <li><strong>Communication:</strong> We use information we collect to interact with you directly. An example is that we may send a notification if we detect suspicious activity, or inform you of changes or improvements to our services.</li>
            <li><strong>Enable creator monetization:</strong> We use information to enable monetization (gifting, dividends, subscriptions)</li>
            <li><strong>Events:</strong> We use information to facilitate event ticketing and access control</li>
            <li><strong>Fraud prevention:</strong> We use information to improve platform security, prevent fraud, abuse, and illegal activities / Comply with legal and regulatory obligations</li>
          </ul>
        </div>
      ),
    },
    {
      question: "4. Legal Basis for Processing (GDPR Compliance)",
      answer: (
        <div className="space-y-4">
          <p>We process your information for the purposes described in this policy, based on the following legal grounds:</p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Consent:</strong> We ask for your agreement to process your information for specific purposes and you have the right to withdraw your consent at any time.</li>
            <li><strong>Legitimate Interests:</strong> We process your information for our legitimate interests and those of third parties while applying appropriate safeguards that protect your privacy. This means we process your information for things like: Detecting, preventing, or otherwise addressing fraud, abuse, security, or technical issues with our services, protecting against harm to the rights, property or safety of LOUD! our users, or the public as required or permitted by law, and perform internal analytics.</li>
            <li><strong>Contractual Necessity:</strong> To perform the services requested (e.g., matching Buyers with Suppliers).</li>
            <li><strong>Legal Obligation:</strong> To comply with tax, anti-money laundering (AML), and KYB regulations.</li>
            <li><strong>Marketing Consent:</strong> Where you have explicitly opted-in to receive marketing communications or allowed specific tracking cookies.</li>
          </ul>
        </div>
      ),
    },
    {
      question: "5. Managing, Reviewing and Updating Information",
      answer: (
        <div>
          <p className="mb-4">
            You can always review, control and update the information you supply to LOUD! platform. Our goal is to be clear about what information we collect so that you can make meaningful choices about how it is used. You can:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>review and update your activity and profile information at any time</li>
            <li>manage your privacy controls to decide what information (such as your creator metrics or business procurement history) is visible to others on the platform</li>
            <li>export a copy of your content from LOUD! if you want to back it up or use it with a service outside of our platform</li>
          </ul>
        </div>
      ),
    },
    {
      question: "6. Third-Party Integrations & Data Sharing",
      answer: (
        <div className="space-y-4">
          <p className="mb-4">LOUD! shares your information only with your consent, for external processing and for legal reasons. We share information only with the following categories of service providers:</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-white/10">
              <thead className="bg-white/10">
                <tr>
                  <th className="px-4 py-2 text-left text-white">CATEGORY</th>
                  <th className="px-4 py-2 text-left text-white">PURPOSE</th>
                  <th className="px-4 py-2 text-left text-white">DATA SHARED</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2">Payment Processors</td>
                  <td className="px-4 py-2">Processing transactions & payouts</td>
                  <td className="px-4 py-2">Billing info, Tokenized payment data.</td>
                </tr>
                <tr className="bg-white/5">
                  <td className="px-4 py-2">KYB/Verification</td>
                  <td className="px-4 py-2">Identity and business authenticity checks</td>
                  <td className="px-4 py-2">Corporate docs, Tax IDs, Director names.</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Analytics (e.g. Google)</td>
                  <td className="px-4 py-2">Analyzing platform performance</td>
                  <td className="px-4 py-2">Anonymized usage patterns, IP logs.</td>
                </tr>
                <tr className="bg-white/5">
                  <td className="px-4 py-2">CLOUD! Infrastructure</td>
                  <td className="px-4 py-2">Secure data hosting (AWS/Azure/GCP)</td>
                  <td className="px-4 py-2">All encrypted platform data.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4">On legal basis, we may share your data if the disclosure is reasonably necessary to respond to applicable law or regulations, enforce applicable terms of service, detect, prevent or otherwise address fraud or protect against harm to the rights, property and safety of LOUD! platform.</p>
        </div>
      ),
    },
    {
      question: "7. International Transfers",
      answer: (
        <p>Where personal data is transferred outside the jurisdiction in which it was collected, we ensure appropriate safeguards are in place, including Standard Contractual Clauses approved by relevant regulators or reliance on adequacy decisions, to ensure a comparable level of data protection.</p>
      ),
    },
    {
      question: "8. Business Transfers",
      answer: (
        <p>In the event of a merger, acquisition, restructuring, or sale of assets, personal data may be transferred as part of the transaction, subject to confidentiality and applicable data protection laws.</p>
      ),
    },
    {
      question: "9. Children's Privacy",
      answer: (
        <div>
          <p className="mb-4">Our services are not directed to individuals under the age of 18. We do not knowingly collect personal data from minors. If we become aware that such data has been collected, we will take steps to delete it promptly.</p>
          <p>For more information, please see our <Link to="/child-privacy" className="text-[#01B2FE] hover:underline">Child Privacy Policy</Link>.</p>
        </div>
      ),
    },
    {
      question: "10. Security: Encryption & Storage",
      answer: (
        <div className="space-y-4">
          <p>We implement "Privacy by Design" and "Privacy by Default" principles.</p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Encryption:</strong> All data is encrypted in transit.</li>
            <li><strong>Access Control:</strong> Access to sensitive commercial data is restricted to authorized personnel only when required for technical support.</li>
            <li><strong>Data Isolation:</strong> Competitive bids are logically isolated and remains inaccessible to competitors until the official "bid opening" or disclosure event.</li>
            <li><strong>Other Measures:</strong> We implement other measures which includes Secure servers and access controls, fraud detection systems and regular security audits.</li>
          </ul>
          <p className="mt-4">Note that no system is completely secure, and we encourage users to protect their account credentials.</p>
        </div>
      ),
    },
    {
      question: "11. Cookie & Tracking Policy",
      answer: (
        <div className="space-y-4">
          <p>We use cookies to enhance your experience and secure our platform:</p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Essential Cookies:</strong> Required for login, security, and session management.</li>
            <li><strong>Functional Cookies:</strong> Remember your preferences (e.g., language or dashboard layout).</li>
            <li><strong>Analytical Cookies:</strong> Help us understand how users navigate the site to improve UI/UX.</li>
          </ul>
          <p className="mt-4">Management: You can manage cookie preferences through your browser settings, though disabling essential cookies may limit platform functionality.</p>
        </div>
      ),
    },
    {
      question: "12. Data Retention, Exporting & Deletion",
      answer: (
        <div className="space-y-4">
          <p><strong>Retention:</strong> We retain data for as long as your account is active or as needed to provide services. Data may also be retained to comply with legal obligations, resolve disputes and enforce agreements.</p>
          <p><strong>Statutory Requirements:</strong> Financial and contract records may be retained for 7–10 years to comply with tax and legal audits.</p>
          <p><strong>Deletion:</strong> Upon account termination, personal data is purged or anonymized within 60 days, unless a legal hold is in place. You may request a "Right to be Forgotten" via our support channel.</p>
          <p><strong>Exporting:</strong> You may export a copy of your content from LOUD! if you want to back it up or use it with a service outside of our platform.</p>
        </div>
      ),
    },
    {
      question: "13. Your Rights (User Governance)",
      answer: (
        <div>
          <p className="mb-4">Regardless of your location, we provide the following rights to all users:</p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Right to Access:</strong> Request a copy of the personal data we hold about you.</li>
            <li><strong>Right to Rectification:</strong> Update inaccurate or incomplete information.</li>
            <li><strong>Right to Erasure:</strong> Request deletion of your data (subject to legal retention requirements).</li>
            <li><strong>Right to Portability:</strong> Receive your data in a structured, machine-readable format.</li>
            <li><strong>Right to Object:</strong> Opt-out of automated decision-making or non-essential marketing communications at any time by using unsubscribe mechanisms or contacting us directly.</li>
          </ul>
        </div>
      ),
    },
    {
      question: "14. Legal Requests and Disclosure/ Compliance and Corporation with Regulators",
      answer: (
        <p>LOUD! complies with applicable data protection and financial regulations in Nigeria and other jurisdictions where we operate. We may disclose personal data where required to do so by law, court order, or regulatory authority, or where such disclosure is reasonably necessary to protect our rights, users, or the public.</p>
      ),
    },
    {
      question: "15. Changes",
      answer: (
        <p>We change or update this policy from time to time. We will not reduce your Rights under this policy without your explicit consent. We always indicate the date when the last changes were published.</p>
      ),
    },
    {
      question: "16. Contact Information",
      answer: (
        <div>
          <p className="mb-4">For questions regarding this policy or to exercise your data rights, please contact our Data Protection Officer:</p>
          <p className="text-[#01B2FE]">Email: support@loudproductslimited.com</p>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />

      <div className="pt-28 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider bg-[#e6f7ff] text-[#01B2FE] border border-[#b3ecff] mb-6">
              Privacy
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-slate-400 text-base md:text-lg">
              Effective Date: 10/04/2026 | Last Updated: 10/04/2026
            </p>
          </div>

          <div className="space-y-3">
            {sections.map((item, index) => (
              <AccordionItem key={index} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;