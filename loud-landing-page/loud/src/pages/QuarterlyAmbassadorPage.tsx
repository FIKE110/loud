import { type FC, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp, Menu, X, Award } from "lucide-react";
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
        <div className="px-6 py-4 bg-slate-900/50 text-slate-300 leading-relaxed overflow-y-auto max-h-[450px]">
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

const QuarterlyAmbassadorPage: FC = () => {
  const sections = [
    {
      question: "1. ELIGIBILITY",
      answer: (
        <div className="space-y-4">
          <ul className="list-disc list-inside space-y-2">
            <li><strong>1.1</strong> You must be at least 18 years old or have legal capacity under applicable law.</li>
            <li><strong>1.2</strong> You must create and maintain an active account on the LOUD! Platform.</li>
            <li><strong>1.3</strong> Participation in the referral dividend program is subject to ongoing compliance with this Agreement.</li>
          </ul>
        </div>
      ),
    },
    {
      question: "1. DEFINITIONS",
      answer: (
        <div className="space-y-4">
          <ul className="list-disc list-inside space-y-2">
            <li><strong>"Qualified Sign-Up":</strong> A new user who completes full registration (email/phone verification + valid ID check) and remains active for 7 consecutive days post-signup. Duplicate accounts, bots, or fraudulent accounts are void.</li>
            <li><strong>"Campaign Period":</strong> Quarterly intervals (Q1: Jan–Mar, Q2: Apr–Jun, Q3: Jul–Sep, Q4: Oct–Dec).</li>
            <li><strong>"Reward Tier":</strong> The monetary payout applicable based on total Qualified Sign-Ups.</li>
          </ul>
        </div>
      ),
    },
    {
      question: "2. THE MILESTONE & REWARD STRUCTURE",
      answer: (
        <div className="space-y-4">
          <p className="mb-4">The Creator may earn rewards based on the number of Qualified Sign-Ups attributed to their unique referral code/link during a single Campaign Period.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-white/10">
              <thead className="bg-white/10">
                <tr>
                  <th className="px-4 py-3 text-left text-white font-bold">Reward Tier</th>
                  <th className="px-4 py-3 text-left text-white font-bold">Qualified Sign-Ups Required</th>
                  <th className="px-4 py-3 text-left text-white font-bold">Base Reward (NGN)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-3 text-[#01B2FE] font-bold">Tier 3</td>
                  <td className="px-4 py-3">400</td>
                  <td className="px-4 py-3 font-bold">₦3,000,000</td>
                </tr>
                <tr className="bg-white/5">
                  <td className="px-4 py-3 text-[#01B2FE] font-bold">Tier 2</td>
                  <td className="px-4 py-3">600</td>
                  <td className="px-4 py-3 font-bold">₦4,000,000</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-[#01B2FE] font-bold">Tier 1</td>
                  <td className="px-4 py-3">900</td>
                  <td className="px-4 py-3 font-bold">₦5,000,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-slate-400">Payment Cap: The Company shall pay multiple Ambassadors / Creators (by number of Qualified Sign-Ups) per Quarter. Other terms and conditions apply which determine qualification and selection.</p>
        </div>
      ),
    },
    {
      question: "3. PAYMENT TERMS",
      answer: (
        <div className="space-y-4">
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Frequency:</strong> Rewards are calculated and paid quarterly, within 14 days after the end of each Quarter.</li>
            <li><strong>Method:</strong> Payment via bank wire transfer to the Ambassador's provided account.</li>
            <li><strong>No Stacking:</strong> If the creator achieves 900 sign-ups, they receive ₦5,000,000 (not the sum of lower tiers).</li>
            <li><strong>Taxes:</strong> The Creator is responsible for all applicable taxes. The Company shall issue a tax invoice (Form equivalent) where required by law.</li>
          </ul>
        </div>
      ),
    },
    {
      question: "4. FRAUD, CHEATING, AND INVALID ACTIVITY",
      answer: (
        <div className="space-y-4">
          <p className="mb-4"><strong>Zero Tolerance Policy:</strong></p>
          <p className="mb-4">The Creator shall not:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Create fake accounts, use bots, or incentivize sign-ups via spam.</li>
            <li>Engage in "click farms" or pay third parties to generate sign-ups without genuine user consent.</li>
          </ul>
          <p className="mt-4"><strong>Verification:</strong> The Company reserves the right to audit any referral at any time. If fraud is detected:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>The Creator forfeits all pending and future rewards.</li>
            <li>The Creator may be banned from the Platform.</li>
            <li>The Company reserves the right to seek legal damages for reputational harm.</li>
          </ul>
        </div>
      ),
    },
    {
      question: "5. INTELLECTUAL PROPERTY & CONTENT",
      answer: (
        <div>
          <p className="mb-4">The Creator grants the Company a non-exclusive, royalty-free license to use the Creator's name, image, and referral content for marketing purposes related to this campaign only for the period the creator is subscribed to the creator program, where the creator opts out the company may not use the creators details.</p>
          <p>The Creator shall not use the Company's logo for personal gain or business without prior written approval.</p>
        </div>
      ),
    },
    {
      question: "6. RELATIONSHIP OF THE PARTIES",
      answer: (
        <div>
          <p className="mb-4">The Ambassador is an independent contractor. This Agreement does not create an employer-employee, partnership, or joint venture relationship.</p>
          <p>The Ambassador is not entitled to employee benefits.</p>
        </div>
      ),
    },
    {
      question: "7. GOVERNING LAW & DISPUTE RESOLUTION",
      answer: (
        <div className="space-y-4">
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Governing Law:</strong> This Agreement shall be governed by the laws of Nigeria or Delaware, USA</li>
            <li><strong>Dispute Resolution:</strong> Any dispute arising out of this Agreement shall first be resolved through informal negotiation. If unresolved within 30 days, the dispute shall be referred to binding arbitration in City/Country in accordance with the rules of the Lagos Multi-Door Courthouse or American Arbitration Association.</li>
          </ul>
        </div>
      ),
    },
    {
      question: "9. LIMITATION OF LIABILITY",
      answer: (
        <div>
          <p className="mb-4">To the maximum extent permitted by law, the Company's total liability under this Agreement shall not exceed the total reward payable to the Ambassador.</p>
          <p>The Company is not liable for indirect, incidental, or consequential damages.</p>
        </div>
      ),
    },
    {
      question: "10. ENTIRE AGREEMENT",
      answer: (
        <div>
          <p className="mb-4">This Agreement constitutes the entire understanding between the parties and supersedes all prior discussions. Amendments must be in writing and signed by both parties.</p>
          <p className="mt-4 text-sm text-slate-400">Effective Date: 01/04/2026</p>
        </div>
      ),
    },
    {
      question: "IN WITNESS WHEREOF",
      answer: (
        <div>
          <p className="mb-4">The parties have executed this Agreement as of the date first above written and the date of subscription.</p>
          <p><strong>FOR THE COMPANY:</strong> LOUD! MANAGEMENT</p>
          <p><strong>FOR THE AMBASSADOR/CREATOR:</strong> Your subscription is your signature as it embodies your profile details.</p>
          <p className="mt-4 text-[#01B2FE] font-bold">Congratulations ahead and nice doing business with you.</p>
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
              Quarterly Program
            </span>
            <div className="flex justify-center mb-4">
              <Award className="w-16 h-16 text-[#01B2FE]" />
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
              Quarterly Creator Income Program
            </h1>
            <p className="text-slate-400 text-base md:text-lg">
              Influencer & Brand Ambassador Agreement
            </p>
            <p className="text-slate-500 text-sm mt-2">Effective Date: 01/04/2026</p>
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

export default QuarterlyAmbassadorPage;