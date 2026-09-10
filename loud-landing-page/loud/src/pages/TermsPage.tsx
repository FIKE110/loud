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
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 bg-slate-900/50 text-slate-300 leading-relaxed overflow-y-auto max-h-[400px]">
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

const TermsPage: FC = () => {
  const sections = [
    {
      question: "I. Binding Agreement & Scope",
      answer: (
        <div>
          <p className="mb-4">
            This document outlines the mandatory behavioral, legal, and technical standards for using LOUD!'s Services. It combines our operational Terms of Service with our Platform Integrity Standards to ensure a secure, transparent, and equitable social media platform and future procurement environment.
          </p>
          <p>
            Applicability: These terms govern every interaction within the LOUD! platform.
          </p>
        </div>
      ),
    },
    {
      question: "II. User Eligibility and Account Governance",
      answer: (
        <div className="space-y-4">
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Professional Status:</strong> Access is restricted to individuals, content creators, registered businesses, property developers, professional engineers, builders, corporations, and government agencies.</li>
            <li><strong>Minimum Age and Professional Status:</strong> Access is strictly restricted to individuals who are at least 18 years of age and possess the full legal capacity to enter into binding contracts.</li>
            <li><strong>Personnel Accountability:</strong> You are responsible for designating authorized employees or agents. Every action taken under your credentials is deemed a direct act of you.</li>
            <li><strong>Credential Security:</strong> Users must maintain strict confidentiality of login details. Multi-Factor Authentication (MFA) is highly recommended.</li>
            <li><strong>Notification:</strong> You must notify LOUD! immediately of any personnel changes (e.g., an authorized user leaving the company) or suspected security compromises.</li>
            <li><strong>Accurate Information and Non-Prohibition:</strong> Users must provide accurate and complete information and not be prohibited from using out services under applicable laws.</li>
          </ul>
        </div>
      ),
    },
    {
      question: "III. Platform Services",
      answer: (
        <div className="space-y-4">
          <p>LOUD! provides:</p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>a. Social Media Services:</strong> Content creation, sharing, and engagement, Creator discovery and audience growth</li>
            <li><strong>b. Monetization Features:</strong> Creator gifting (via LOUD! coin or equivalent system) which includes Subscription-based content, Advertising revenue opportunities, Promotional and incentive-based earnings</li>
            <li><strong>c. Procurement Services (Upcoming):</strong> Vendor listings and transactions, Digital procurement facilitation</li>
            <li><strong>d. Event Ticketing (Upcoming):</strong> Event discovery and ticket purchases, Digital ticket issuance and validation</li>
          </ul>
          <p className="mt-4">LOUD! reserves the right to modify or discontinue any service at any time.</p>
        </div>
      ),
    },
    {
      question: "IV. Data Processing",
      answer: (
        <div>
          <p className="mb-4">
            The User acknowledges that LOUD! may be classified as a Data Controller of Major Importance under the Nigeria Data Protection Act (NDPA). Consequently, the User warrants that all personal data provided is collected under a valid legal basis. The User agrees to indemnify LOUD! against any regulatory fines from the NDPC resulting from the User's submission of non-consensual or inaccurate personal data.
          </p>
          <p>See our <Link to="/privacy" className="text-[#01B2FE] hover:underline">Privacy Policy</Link> for more details.</p>
        </div>
      ),
    },
    {
      question: "V. Limited Right of Access and Intellectual Property",
      answer: (
        <div className="space-y-4">
          <p><strong>Grant of License:</strong> Subject to continued compliance, LOUD! grants Users a limited, non-exclusive, non-transferable, and revocable right to access the platform solely for legitimate purposes.</p>
          <p><strong>Platform Proprietary Rights:</strong> All rights, titles and interests in and to the LOUD! platform including "LOUD!" trademarks</p>
          <div>
            <h4 className="font-bold text-white mt-4">LOUD! Marks:</h4>
            <p>the name "LOUD!", the LOUD! logo, and all related product and service names are trademarks of LOUD! Products Limited. Users may not use these marks without prior written consent. All rights, titles and interests in and to the LOUD! platform including "LOUD!" trademarks are exclusive property and nothing in these terms shall be construed as transfer of ownership of any patent, trademark, or copyrighted material to the user.</p>
          </div>
          <div>
            <h4 className="font-bold text-white mt-4">Platform IP:</h4>
            <p>All platform content, workflows, designs, methodologies, source code, and aggregated market insights are the exclusive property of LOUD! Products Limited.</p>
          </div>
          <div>
            <h4 className="font-bold text-white mt-4">User Data Ownership:</h4>
            <p>You retain all intellectual property rights over the specific data you upload. By uploading, you grant LOUD! a license to host, process, and display that data solely to facilitate your transactions and maintain the service.</p>
          </div>
          <div>
            <h4 className="font-bold text-white mt-4">Music Repository:</h4>
            <p>Users are granted a limited, revocable license to use music from LOUD! licensed repository only within the platform. Exporting or using the music on external platforms is a violation of these Terms.</p>
          </div>
          <div>
            <h4 className="font-bold text-white mt-4">Remedies for breach:</h4>
            <p>any unauthorized use, distribution or reproduction of LOUD! intellectual property, or any violation of the IP Policies set forth in these terms, constitutes a material breach of contract. In the event of such a breach, LOUD! Products Limited reserves the right to terminate or suspend access to the platform, delete any infringing content and reserves the right to sue for legal remedies including liquidated damages.</p>
          </div>
        </div>
      ),
    },
    {
      question: "VI. Payment and Financial Terms / LOUD! Creator Revenue Incentives Program",
      answer: (
        <div>
          <p className="mb-4">All payments are processed via licensed third-party providers. LOUD! does not operate as a bank or financial institution. Users agree to applicable fees, commissions, and exchange rates.</p>
          <p className="mb-4"><strong>Creator Earnings:</strong> Earnings may come from gifts, subscriptions, or revenue incentives programs including promotional or revenue-sharing models. Payouts are subject to minimum thresholds and verification subject to separate terms and agreement.</p>
          <p>LOUD! reserves the right to modify and discontinue such programs at its discretion and may withhold payments in cases of fraud, abuse, or policy violations.</p>
          <p className="mt-4">See our <Link to="/revenue-participation" className="text-[#01B2FE] hover:underline">Revenue Participation Policy</Link> for 2026/27 details.</p>
        </div>
      ),
    },
    {
      question: "VII. LOUD! Coin (Digital Value System)",
      answer: (
        <div>
          <p className="mb-4">LOUD! coin is a platform-based digital value unit, not legal tender. It is non-transferable outside the platform unless explicitly enabled and it does not constitute securities, investment products, or deposits. LOUD! reserves the right to:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Adjust conversion rates and suspend or revoke coin usage in case of abuse</li>
          </ul>
          <p className="mt-4">See our <Link to="/gifting-policy" className="text-[#01B2FE] hover:underline">Gifting & Virtual Coins Policy</Link> for details.</p>
        </div>
      ),
    },
    {
      question: "VIII. User Content",
      answer: (
        <div>
          <p className="mb-4">You retain ownership of your content. By posting on LOUD! you grant us a worldwide, non-exclusive and royalty-free license to use, display, distribute, and promote your content in connection with the Platform.</p>
          <p>You agree not to post Illegal, harmful, or abusive content, copyright-infringing material, misleading or fraudulent content. LOUD! may remove content at its discretion.</p>
        </div>
      ),
    },
    {
      question: "IX. Intellectual Property Rights",
      answer: (
        <p>All Platform content, workflows, designs, methodologies, and documentation are owned by or licensed to LOUD! and are protected by applicable intellectual property laws. Users shall not copy, modify, distribute, or create derivative works except as expressly permitted.</p>
      ),
    },
    {
      question: "X. Prohibited Conduct",
      answer: (
        <div className="space-y-4">
          <p>Users are strictly forbidden from engaging in activities that compromise the technical framework of the platform:</p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Harmful Software:</strong> Distributing malware, worms, or ransomware.</li>
            <li><strong>Automated Harvesting:</strong> Utilizing scripts, crawlers, or "scraping" technology to harvest vendor directories or RFP documents without explicit permission.</li>
            <li><strong>Software Deconstruction:</strong> Attempting to unmask source code, reverse-engineer proprietary algorithms, or deconstruct underlying architecture.</li>
            <li><strong>Other Prohibitions:</strong> Users are prohibited from engaging in fraud, scams, or manipulation, abusing monetization systems, interfering with platform security, using bots or unauthorized automation or violating any applicable laws or regulations.</li>
            <li><strong>Infrastructure Abuse:</strong> Launching traffic-flooding (DDoS) attacks or intentionally degrading system performance.</li>
          </ul>
          <p className="mt-4">Violations may result in suspension, termination, or legal action.</p>
        </div>
      ),
    },
    {
      question: "XI. Procurement and Event Transactions",
      answer: (
        <div>
          <p className="mb-4">For future services:</p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Procurement:</strong> LOUD! acts as a facilitator, not the seller</li>
            <li><strong>Event Ticketing:</strong> Tickets are subject to event organizer terms. LOUD! is not liable for event cancellations or changes</li>
          </ul>
        </div>
      ),
    },
    {
      question: "XII. Limitation of Liability and Warranties",
      answer: (
        <div className="space-y-4">
          <p><strong>Personal harm:</strong> To the maximum extent permitted by law, LOUD! and its affiliates shall not be liable for any claims related to "digital addiction," "compulsive use," or mental health issues allegedly arising from the design, interface, or algorithmic features of the Platform. All engagement is at the User's discretion, and the Platform is provided on an "as-is" basis regarding its user interface and engagement mechanics.</p>
          <p><strong>"As-Is" Basis:</strong> The Platform is also provided without warranties of any kind regarding the quality, safety, or legality of goods/services advertised by third-party Vendors.</p>
          <p><strong>Indirect Damages:</strong> To the maximum extent permitted by law, LOUD! shall not be liable for indirect, incidental, or consequential damages, including loss of profits or data.</p>
          <p><strong>Liability Cap:</strong> LOUD!'s total liability for any claim shall not exceed the total fees paid by the User to LOUD! during the twelve (12) months preceding the incident.</p>
        </div>
      ),
    },
    {
      question: "XIII. Investigation and Notice",
      answer: (
        <p>LOUD! may investigate suspected violations of these Terms. Where appropriate, LOUD! may provide notice of the alleged violation and an opportunity to respond before taking enforcement action, except where immediate action is required to protect the Platform or other Users. Enforcement actions shall be determined at LOUD!'s sole discretion and may be proportionate to the severity, frequency, and impact of the violation.</p>
      ),
    },
    {
      question: "XIV. Enforcement and Termination",
      answer: (
        <div className="space-y-4">
          <p><strong>Auditing:</strong> LOUD! actively audits platform interactions to ensure integrity.</p>
          <p><strong>Penalties for Non-Compliance:</strong> Violations may trigger revocation of access, removal from current tenders, criminal referral to authorities, or civil litigation for financial restitution.</p>
          <p><strong>Termination:</strong> LOUD! may suspend or terminate accounts immediately for fraud or breach of terms. Either party may terminate the relationship with thirty (30) days' written notice.</p>
          <p><strong>Survival:</strong> Provisions regarding confidentiality, IP, liability, and enforcement survive termination.</p>
        </div>
      ),
    },
    {
      question: "XV. Admissibility of Electronic Records",
      answer: (
        <p>The User acknowledges and agrees that all electronic records, audit logs, and digital signatures generated within the LOUD! Platform shall be deemed 'original documents' and 'reliable evidence' for all legal proceedings. The User expressly waives any right to object to the admissibility of such records on the grounds that they were generated or stored electronically.</p>
      ),
    },
    {
      question: "XVI. Cyber incidents and Zero Trust",
      answer: (
        <div>
          <p className="mb-4">Users must maintain 'Zero-Trust' security protocols for their account credentials. In the event of a suspected security breach, unauthorized access, or credential compromise, the User must notify LOUD! within twenty-four (24) hours. Failure to provide timely notice shall constitute a waiver of any claim against LOUD! for subsequent fraudulent transactions or data exfiltration performed under the User's compromised credentials.</p>
        </div>
      ),
    },
    {
      question: "XVII. User Autonomy and Platform Interaction",
      answer: (
        <div>
          <p className="mb-4"><strong>User Control:</strong> LOUD! provides tools (such as notification settings and dashboard filters) to allow Users to manage their engagement. Users are responsible for configuring these settings to suit their professional needs and organizational well-being policies.</p>
          <p className="mb-4"><strong>Disclaimer of Addictive Design:</strong> LOUD! does not utilize features intended to encourage compulsive or non-productive behavior. By using the Platform, you acknowledge that your frequency of use is determined by your own professional requirements and business objectives.</p>
          <p><strong>No Liability for Usage Patterns:</strong> LOUD! shall not be held liable for any psychological, physical, or emotional outcomes resulting from a User's chosen frequency or duration of Platform use.</p>
        </div>
      ),
    },
    {
      question: "XVIII. Third Party Service Failure",
      answer: (
        <p>LOUD! utilizes third-party infrastructure and payment gateways ('Sub-processors'). While we select reputable partners, LOUD! shall not be liable for any loss, delay, or security breach caused by the failure or negligence of such third parties. The User's sole recourse in such events shall be against the respective third-party provider under their own terms of service.</p>
      ),
    },
    {
      question: "XIX. Tax Compliance & Indemnity",
      answer: (
        <p>LOUD! acts solely as a facilitator and is not a 'tax agent' for any transaction. Users are exclusively responsible for calculating, reporting, and remitting all applicable taxes, including VAT and WHT, to the relevant authorities. The User shall indemnify LOUD! against any claims, fines, or assessments made by the FIRS or any State Board of Internal Revenue arising from the User's failure to fulfill their tax obligations related to transactions initiated on the Platform.</p>
      ),
    },
    {
      question: "XX. Updates to These Terms",
      answer: (
        <div>
          <p className="mb-4"><strong>Right to Amend:</strong> LOUD! reserves the right to modify these Terms at any time to reflect changes in law (e.g., new NDPA regulations) or Platform functionality.</p>
          <p><strong>Automatic Acceptance:</strong> Continued use of the Service after the effective date constitutes irrevocable acceptance of the updated Terms.</p>
        </div>
      ),
    },
    {
      question: "XXI. Termination",
      answer: (
        <div>
          <p className="mb-4">We may suspend or terminate your account if:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>You violate these Terms</li>
            <li>Required by law or regulators</li>
            <li>Necessary to protect platform integrity</li>
          </ul>
          <p className="mt-4">You may terminate your account at any time.</p>
        </div>
      ),
    },
    {
      question: "XXII. Governing Law",
      answer: (
        <p>These Standards and Terms shall be governed by and construed in accordance with the Laws of the Federal Republic of Nigeria, without regard to conflict-of-law principles. Disputes shall be resolved in Nigerian Courts unless otherwise required by applicable laws.</p>
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
              Terms
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
              Terms of Service
            </h1>
            <p className="text-slate-400 text-base md:text-lg">
              & Integrity Standards
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

export default TermsPage;