import { type FC, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp, Menu, X, Coins } from "lucide-react";
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

const GiftingPolicyPage: FC = () => {
  const sections = [
    {
      question: "1. Overview of the Gifting system",
      answer: (
        <p>LOUD! provides a virtual system where users can support their favorite creators through digital appreciation. This system is powered by LOUD! Coins and Virtual Gifts. These items are intended for entertainment and social expression only and do not constitute a deposit, credit, or currency.</p>
      ),
    },
    {
      question: "2. Usage and Limitations",
      answer: (
        <div className="space-y-4">
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Internal Use Only:</strong> Coins can only be purchased, earned, and spent within the LOUD! app. They cannot be transferred to other platforms.</li>
            <li><strong>No Cash Value:</strong> In accordance with regulatory standards, LOUD! Coins are virtual tokens. They have no independent cash value outside LOUD!</li>
            <li><strong>Non-Refundable:</strong> Once purchased, Coins cannot be refunded or exchanged back for fiat currency (Naira or otherwise) directly by the user.</li>
          </ul>
        </div>
      ),
    },
    {
      question: "3. The Gifting Process",
      answer: (
        <div className="space-y-4">
          <p>Users can exchange their Coins for diverse Virtual Gifts to send to creators during live streams or on posted content.</p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Gifts to Diamonds/Points:</strong> When a creator receives a gift, it is automatically converted into an internal reward metric called LOUD! Coins.</li>
            <li><strong>Creator Rewards:</strong> Coins represent a creator's popularity and engagement. LOUD! may, at its sole discretion, offer creators a reward based on the coins they have accumulated.</li>
            <li><strong>Platform Commission:</strong> LOUD! reserves the right to retain a service fee/commission from the virtual value of gifts to cover platform maintenance, payment processing, and hosting.</li>
          </ul>
        </div>
      ),
    },
    {
      question: "4. Payouts and Regulatory Compliance",
      answer: (
        <div className="space-y-4">
          <ul className="list-disc list-inside space-y-2">
            <li><strong>No Direct Bank Withdrawal of Coins:</strong> Users cannot "withdraw" Coins to a bank account.</li>
            <li><strong>Managed Rewards:</strong> Creators may request a payout of their accumulated Diamonds. These are processed as platform incentives/service fees paid by LOUD! to the creator, not as a P2P financial transfer.</li>
            <li><strong>No P2P Transfers:</strong> Users cannot send Coins or "Real Money" directly to another user's wallet. All support must go through the "Virtual Gift" mechanism.</li>
          </ul>
        </div>
      ),
    },
    {
      question: "5. Safety and Prohibited Conduct",
      answer: (
        <div className="space-y-4">
          <p>The following are strictly prohibited:</p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Third-Party Trading:</strong> Buying or selling LOUD! Coins outside the official LOUD! store.</li>
            <li><strong>Money Laundering:</strong> Using gifts to move funds for illicit purposes.</li>
            <li><strong>Coerced Gifting:</strong> Creators may not demand gifts in exchange for illegal acts or content that violates Community Guidelines.</li>
          </ul>
        </div>
      ),
    },
    {
      question: "6. Ownership and License to Use",
      answer: (
        <div className="space-y-4">
          <p><strong>Grant of License:</strong> When a user "purchases" or "earns" LOUD! Coins, they do not own the coins. Instead, LOUD! grants the user a limited, revocable, non-transferable license to use these virtual items within the platform.</p>
          <p><strong>No Property Rights:</strong> Users acknowledge that they have no property interest, right, or title in the Coins appearing in their account.</p>
          <p><strong>Termination:</strong> LOUD! reserves the right to manage, regulate, control, or eliminate virtual items at any time. If an account is banned for violating Community Guidelines, all virtual items are forfeited without compensation.</p>
        </div>
      ),
    },
    {
      question: "7. Expiration and Dormancy",
      answer: (
        <div className="space-y-4">
          <p><strong>Inactivity Clause:</strong> LOUD! Coins may expire if an account remains inactive for a period of 12 consecutive months.</p>
          <p><strong>Notice of Expiry:</strong> LOUD! will provide a 30-day notice via in-app notification before any virtual balance is cleared due to inactivity.</p>
        </div>
      ),
    },
    {
      question: "8. Purchase Limits and Anti-Fraud",
      answer: (
        <div className="space-y-4">
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Daily Caps:</strong> To prevent credit card fraud and "chargeback" issues, LOUD! imposes daily and monthly limits on the number of Coins a single user can purchase.</li>
            <li><strong>Verification:</strong> For high-volume gifting, LOUD! may require identity verification (KYC) to ensure the funds used are legitimate and to prevent money laundering.</li>
          </ul>
        </div>
      ),
    },
    {
      question: "9. Creator Reward Eligibility",
      answer: (
        <div className="space-y-4">
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Minimum Threshold:</strong> Creators can only request an incentive payout (conversion of coins) once they reach a minimum threshold.</li>
            <li><strong>Review Period:</strong> All payouts are subject to a 7–14-day review period to ensure the gifts were not generated through "botting," self-gifting fraud, or policy-violating content.</li>
            <li><strong>Tax Responsibility:</strong> Creators are solely responsible for reporting and paying any applicable taxes on rewards received from LOUD!</li>
          </ul>
        </div>
      ),
    },
    {
      question: "10. Relationship of Parties",
      answer: (
        <div className="space-y-4">
          <p><strong>Not an Employee:</strong> Receiving rewards through the gifting system does not create an employment, agency, or partnership relationship between the Creator and LOUD!</p>
          <p><strong>Service Fee:</strong> "Coins-to-Naira/USD" conversion rate is not a fixed exchange rate but a formula determined by LOUD! which includes deductions for platform hosting, payment gateway fees, and administrative costs.</p>
        </div>
      ),
    },
    {
      question: "KEY TERMS",
      answer: (
        <div className="space-y-4">
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Algorithm:</strong> means a set of automated rules, calculations, and decision-making processes used by LOUD! to rank, recommend, personalize, and distribute content, detect fraud, and improve user experience on the Platform.</li>
            <li><strong>Application Data Cache:</strong> means temporary data stored on a user's device by the LOUD! application to improve performance, reduce loading times, and enhance user experience. This may include images, preferences, and session data.</li>
            <li><strong>Cookies:</strong> are small text files stored on a user's device when accessing LOUD! via web platforms. Cookies help recognize users, remember preferences, analyze usage, and improve services. Users may control or disable cookies through their browser settings.</li>
            <li><strong>Devices:</strong> means any internet-enabled equipment used to access LOUD! including but not limited to smartphones, tablets, computers, and other connected technologies.</li>
            <li><strong>LOUD! Account:</strong> means a registered user profile created to access and use the Platform's services, including content sharing, monetization features, procurement services, and event participation.</li>
            <li><strong>IP Address:</strong> (Internet Protocol Address) means a unique numerical identifier assigned to a device connected to the internet, which may be used to identify location at a general level, enhance security, and prevent fraudulent activities.</li>
            <li><strong>Personal Information Details:</strong> means any information that identifies or can be used to identify an individual, directly or indirectly, including but not limited to name, email address, phone number, payment information, device data, location data, and user-generated content.</li>
            <li><strong>Affiliates:</strong> means any entity that directly or indirectly controls, is controlled by, or is under common control with LOUD! including subsidiaries, parent companies, and future related entities as the Platform expands globally.</li>
          </ul>
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
              Gifting
            </span>
            <div className="flex justify-center mb-4">
              <Coins className="w-16 h-16 text-[#01B2FE]" />
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
              Gifting & Virtual Coins Policy
            </h1>
            <p className="text-slate-400 text-base md:text-lg">
              Understanding our virtual gifting system
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

export default GiftingPolicyPage;