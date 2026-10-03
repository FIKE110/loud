import { type FC, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp, Menu, X, Gift } from "lucide-react";
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
        <Link to="/copyright-religious-content-policy" className="text-sm hover:text-[#01B2FE] transition-colors">Copyright & Religious Content</Link>
        <Link to="/golive-policy" className="text-sm hover:text-[#01B2FE] transition-colors">GoLive Policy</Link>
        <Link to="/quarterly-ambassador" className="text-sm hover:text-[#01B2FE] transition-colors">Quarterly Ambassador Program</Link>
      </div>
      <div className="text-center text-xs text-slate-600">
        <p className="font-black uppercase tracking-[0.4em]">© 2026 LOUD PRODUCT LIMITED. ALL RIGHTS RESERVED.</p>
      </div>
    </div>
  </footer>
);

const RevenueParticipationPage: FC = () => {
  const sections = [
    {
      question: "1. Purpose",
      answer: (
        <p>This policy outlines the terms and conditions for the distribution of a one-time incentive equivalent to 5% of LOUD!'s total revenue for the 2026/2027 fiscal year. This initiative is designed to reward early creator adopters and subscribers.</p>
      ),
    },
    {
      question: "2. Eligibility Criteria",
      answer: (
        <div className="space-y-4">
          <p>To qualify for the incentive payout, individuals must meet the following requirements:</p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Subscription Status:</strong> creators should subscriber to the creator program on the platform.</li>
            <li><strong>Account Standing:</strong> The account must be active and in good standing (no violations of Terms of Service) throughout the 2026/2027 fiscal period.</li>
            <li><strong>Verification:</strong> Must complete any required "Know Your Customer" (KYC) or identity verification processes by the specified deadline.</li>
          </ul>
        </div>
      ),
    },
    {
      question: "3. Incentive Calculation",
      answer: (
        <div>
          <p className="mb-4">The "Incentive Pool" is calculated based on Revenue generated during the 2026/2027 fiscal year.</p>
          <p><strong>Revenue Includes</strong> all income streams (subscriptions, ads, partnerships) after expenses, taxes, or interest are deducted.</p>
        </div>
      ),
    },
    {
      question: "4. Distribution Timeline",
      answer: (
        <div className="space-y-4">
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Revenue Audit:</strong> Following the close of the 2026/2027 fiscal year, a formal audit will be conducted (estimated duration: 60 days).</li>
            <li><strong>Declaration Date:</strong> LOUD! will officially announce the final incentive amount per subscriber within 15 days of the audit completion.</li>
            <li><strong>Payout Window:</strong> Funds will be disbursed to eligible subscribers' linked accounts within 90 days of the declaration date.</li>
          </ul>
        </div>
      ),
    },
    {
      question: "5. Limitations and Disclosures",
      answer: (
        <div className="space-y-4">
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Non-Transferability:</strong> Incentive eligibility is tied to the original subscriber account and cannot be sold or transferred.</li>
            <li><strong>Tax Responsibility:</strong> Subscribers are solely responsible for any local or national taxes incurred from the receipt of this incentive.</li>
            <li><strong>Modification:</strong> LOUD! reserves the right to adjust the timeline in the event of unforeseen regulatory requirements or delays.</li>
          </ul>
        </div>
      ),
    },
    {
      question: "6. Termination of Eligibility",
      answer: (
        <div className="space-y-4">
          <p>Eligibility for the 2026/2027 incentive is immediately forfeited if:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>I. The user deletes their account prior to the Distribution Date.</li>
            <li>ii. The user is found to be in violation of LOUD!'s Community Guidelines (e.g., hate speech, harassment, or platform manipulation).</li>
          </ul>
        </div>
      ),
    },
    {
      question: "7. Regulatory Compliance (Force Majeure)",
      answer: (
        <p>LOUD! shall not be held liable if the distribution of the incentive is restricted, delayed, or prohibited by new financial regulations, tax laws, or "Acts of God" in the subscriber's specific country of residence. In such cases, LOUD! will make a "best effort" to provide an equivalent value in platform services.</p>
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
              Revenue
            </span>
            <div className="flex justify-center mb-4">
              <Gift className="w-16 h-16 text-[#01B2FE]" />
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
              Revenue Participation Policy
            </h1>
            <p className="text-slate-400 text-base md:text-lg">
              2026/27 Fiscal Year Program
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

export default RevenueParticipationPage;