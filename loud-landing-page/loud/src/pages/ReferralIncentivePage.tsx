import { type FC, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp, Menu, X, Users } from "lucide-react";
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
        <Link to="/faq" className="text-sm hover:text-[#01B2FE] transition-colors">FAQ</Link>
        <Link to="/quarterly-ambassador" className="text-sm hover:text-[#01B2FE] transition-colors">Quarterly Ambassador Program</Link>
      </div>
      <div className="text-center text-xs text-slate-600">
        <p className="font-black uppercase tracking-[0.4em]">© 2026 LOUD PRODUCT LIMITED. ALL RIGHTS RESERVED.</p>
      </div>
    </div>
  </footer>
);

const ReferralIncentivePage: FC = () => {
  const sections = [
    {
      question: "1. ELIGIBILITY",
      answer: (
        <div className="space-y-4">
          <ul className="list-disc list-inside space-y-2">
            <li><strong>1.1</strong> You must be at least 18 years old or have legal capacity under applicable law.</li>
            <li><strong>1.2</strong> You must create and maintain an active account on the LOUD! Platform.</li>
            <li><strong>1.3</strong> Participation in the referral incentive program is subject to approval and ongoing compliance with this Agreement.</li>
          </ul>
        </div>
      ),
    },
    {
      question: "2. REFERRAL REQUIREMENT",
      answer: (
        <div className="space-y-4">
          <p className="mb-4">To qualify for the incentive program payment, the Creator must successfully invite a minimum of five hundred (500) new users to the LOUD! Platform.</p>
          <p className="mb-4"><strong>2.2 A "qualified user" is defined as a new user who:</strong></p>
          <ul className="list-disc list-inside space-y-2">
            <li>Registers using the Creator's unique referral link or code</li>
            <li>Completes account verification</li>
            <li>Engages with the platform in a genuine and non-fraudulent manner</li>
          </ul>
          <p className="mt-4"><strong>2.3</strong> The Company reserves the sole right to determine whether referrals are valid.</p>
          <p><strong>2.4</strong> Fraudulent, automated, incentivized, or misleading referrals will result in immediate disqualification.</p>
        </div>
      ),
    },
    {
      question: "3. INCENTIVE STRUCTURE",
      answer: (
        <div className="space-y-4">
          <p className="mb-4"><strong>3.1</strong> All eligible Creators will receive a total of 5% incentive for the 2026/2027 fiscal year revenue.</p>
          <p className="mb-4"><strong>3.2</strong> The incentive shall be calculated based on:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Net revenue attributable to the LOUD! Platform, or</li>
            <li>A defined revenue pool allocated for the Creator program</li>
          </ul>
          <p className="mt-4"><strong>3.3</strong> The Company retains sole discretion to define the calculation methodology, provided it is applied consistently.</p>
          <p className="mt-4"><strong>3.4</strong> Incentive payments:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Will be made annually as determined by the Company</li>
            <li>May be subject to minimum payout thresholds</li>
            <li>Will be issued via approved payment methods</li>
          </ul>
          <p className="mt-4"><strong>3.5</strong> This incentive does not constitute equity ownership, shares, or securities in the Company.</p>
          <p className="mt-4">See our <Link to="/revenue-participation" className="text-[#01B2FE] hover:underline">Revenue Participation Policy</Link> for more details.</p>
        </div>
      ),
    },
    {
      question: "4. PROGRAM LIMITATIONS",
      answer: (
        <div className="space-y-4">
          <p className="mb-4"><strong>4.1</strong> The referral incentive program is limited to the 2026/2027 fiscal year unless extended by the Company.</p>
          <p className="mb-4"><strong>4.2</strong> The Company may:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Modify, suspend, or terminate the program at any time</li>
            <li>Adjust eligibility criteria or payout structure</li>
          </ul>
          <p className="mt-4"><strong>4.3</strong> Participation does not guarantee earnings.</p>
        </div>
      ),
    },
    {
      question: "5. CREATOR OBLIGATIONS",
      answer: (
        <div className="space-y-4">
          <p className="mb-4"><strong>5.1</strong> You agree to:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Promote the platform honestly and ethically</li>
            <li>Comply with all applicable laws and regulations</li>
            <li>Avoid spam, deception, or harmful conduct</li>
          </ul>
          <p className="mt-4"><strong>5.2</strong> You shall not:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Misrepresent LOUD! Platform</li>
            <li>Use bots, fake accounts, or artificial traffic</li>
            <li>Engage in illegal marketing practices</li>
          </ul>
        </div>
      ),
    },
    {
      question: "6. TAXES & COMPLIANCE",
      answer: (
        <div>
          <p className="mb-4"><strong>6.1</strong> You are solely responsible for any taxes, duties, or reporting obligations arising from payments received.</p>
          <p><strong>6.2</strong> The Company may require identity verification or tax documentation before issuing payments.</p>
        </div>
      ),
    },
    {
      question: "7. TERMINATION",
      answer: (
        <div className="space-y-4">
          <p className="mb-4"><strong>7.1</strong> This Agreement may be terminated by:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>The Company at its discretion, or</li>
            <li>The Creator by discontinuing participation</li>
          </ul>
          <p className="mt-4"><strong>7.2</strong> Upon termination: Any unpaid incentive shall be termed forfeited.</p>
        </div>
      ),
    },
    {
      question: "DECLARATION",
      answer: (
        <div>
          <p>As a subscriber to this program, I agree to abide by the requirements as stated in this agreement.</p>
          <p className="mt-4 text-sm text-slate-400">Effective Date: 10/04/2026</p>
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
              Creator Program
            </span>
            <div className="flex justify-center mb-4">
              <Users className="w-16 h-16 text-[#01B2FE]" />
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
              Creator Referral & Incentive Agreement
            </h1>
            <p className="text-slate-400 text-base md:text-lg">
              Effective Date: 10/04/2026
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

export default ReferralIncentivePage;