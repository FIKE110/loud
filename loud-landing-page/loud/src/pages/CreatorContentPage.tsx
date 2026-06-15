
import { type FC, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera } from "lucide-react";

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
        <Link to="/acceptable-use-policy" className="text-sm hover:text-[#01B2FE] transition-colors">Acceptable Use</Link>
        <Link to="/faq" className="text-sm hover:text-[#01B2FE] transition-colors">FAQ</Link>
        <Link to="/creator-content-policy" className="text-sm hover:text-[#01B2FE] transition-colors">Creator Content Policy</Link>
        <Link to="/quarterly-ambassador" className="text-sm hover:text-[#01B2FE] transition-colors">Quarterly Ambassador Program</Link>
      </div>
      <div className="text-center text-xs text-slate-600">
        <p className="font-black uppercase tracking-[0.4em]">© 2026 LOUD PRODUCT LIMITED. ALL RIGHTS RESERVED.</p>
      </div>
    </div>
  </footer>
);

const CreatorContentPage: FC = () => {
  const sections = [
    {
      question: "1. Purpose",
      answer: (
        <p>
          This policy outlines the content posting requirements and monetization eligibility criteria for creators on LOUD!, designed to reward consistency, quality, and meaningful audience engagement.
        </p>
      ),
    },
    {
      question: "2. Content Posting Requirement",
      answer: (
        <div className="space-y-4">
          <p>To qualify for monetization:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Creators must publish a minimum of three (3) videos per week</li>
            <li>This must be sustained for a continuous period of two (2) months</li>
            <li>Only creators who meet this consistency threshold become eligible to earn from the third (3rd) month</li>
          </ul>
        </div>
      ),
    },
    {
      question: "3. Monetization Activation Timeline",
      answer: (
        <div className="space-y-4">
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Months 1–2:</strong> Content consistency qualification period (no payouts)</li>
            <li><strong>Month 3:</strong> Monetization begins (subject to performance criteria)</li>
            <li><strong>First payout (Month 3):</strong> Includes performance from Months 1, 2, and 3 combined</li>
          </ul>
        </div>
      ),
    },
    {
      question: "4. Earning Criteria (From Month 3 Onwards)",
      answer: (
        <div className="space-y-4">
          <p>To qualify for quarterly earnings:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>A creator must achieve a minimum of 1,000,000 (one million) views</li>
            <li>The 1,000,000 views must come from a maximum of two (2) designated videos only</li>
            <li>Views spread across more than two videos will not qualify for earnings</li>
          </ul>
        </div>
      ),
    },
    {
      question: "5. Revenue Video Designation",
      answer: (
        <div className="space-y-4">
          <ul className="list-disc list-inside space-y-2">
            <li>Creators must designate two (2) videos per month as "Revenue Videos"</li>
            <li>Only these designated videos will be considered for monetization</li>
            <li>Designation must be made before or at the time of publishing</li>
          </ul>
        </div>
      ),
    },
    {
      question: "6. Minimum Content Quality Requirement",
      answer: (
        <div className="space-y-4">
          <p>For a video to qualify as a Revenue Video:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Each video must have a minimum duration of two (2) minutes</li>
            <li>Engagement metrics (watch time, completion rate, authenticity) may be reviewed to validate eligibility</li>
          </ul>
        </div>
      ),
    },
    {
      question: "7. Earnings Structure",
      answer: (
        <div className="space-y-4">
          <ul className="list-disc list-inside space-y-2">
            <li>Creators earn $500 per 1,000,000 qualifying views</li>
            <li>Earnings are calculated only on Revenue Videos that meet all criteria</li>
          </ul>
        </div>
      ),
    },
    {
      question: "8. Payment Terms",
      answer: (
        <div className="space-y-4">
          <ul className="list-disc list-inside space-y-2">
            <li>The first payout is made in Month 3 and includes cumulative eligible performance from Months 1, 2, and 3</li>
            <li>Subsequent payouts are made monthly, based on performance within each month</li>
            <li>Payments are subject to verification, fraud checks, and compliance review</li>
          </ul>
        </div>
      ),
    },
    {
      question: "9. Compliance & Integrity",
      answer: (
        <div className="space-y-4">
          <p>LOUD! reserves the right to:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Disqualify views deemed artificial, fraudulent, or manipulated</li>
            <li>Withhold or adjust payments where policies are violated</li>
            <li>Update monetization criteria as the platform evolves</li>
          </ul>
        </div>
      ),
    },
    {
      question: "10. Additional Terms",
      answer: (
        <div className="space-y-4">
          <p>"Other terms and conditions apply," including but not limited to:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Community guidelines compliance</li>
            <li>Content originality</li>
            <li>Copyright adherence</li>
            <li>Platform-specific monetization rules</li>
          </ul>
        </div>
      ),
    },
    {
      question: "11. Summary (Quick View)",
      answer: (
        <div className="space-y-4">
          <ul className="list-disc list-inside space-y-2">
            <li>Post 3 videos/week for 2 months</li>
            <li>Start earning in Month 3</li>
            <li>Hit 1M views from only 2 videos</li>
            <li>Each video must be 2+ minutes</li>
            <li>Earn $500 per 1M views</li>
            <li>First payout = Months 1–3 combined</li>
            <li>Other terms and conditions apply.</li>
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
              Creator Policy
            </span>
            <div className="flex justify-center mb-4">
              <Camera className="w-16 h-16 text-[#01B2FE]" />
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
              Creator Content Posting & Earnings Policy
            </h1>
            <p className="text-slate-400 text-base md:text-lg">
              Content Requirements & Monetization Guidelines
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

export default CreatorContentPage;
