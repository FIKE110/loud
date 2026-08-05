
import { type FC, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck } from "lucide-react";

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

const USDataCompliancePage: FC = () => {
  const sections = [
    {
      question: "1. Who We Are",
      answer: (
        <div className="space-y-4">
          <p>
            LOUD! is a technology platform operated by Loud Products Limited, a company incorporated in Nigeria.
          </p>
          <p>
            We are in the process of forming LOUD! Inc., a Delaware Corporation, to serve our growing community of users in the United States.
          </p>
          <p>
            Until that entity is formed, Loud Products Limited, LOUD! is the data controller for all users globally.
          </p>
        </div>
      ),
    },
    {
      question: "2. Our Commitment During This Growth Phase",
      answer: (
        <p>
          We are committed to protecting all users and meeting US and Nigerian data protection standards. While we finalize US incorporation, we are implementing the following interim safeguards:
        </p>
      ),
    },
    {
      question: "3. Data Storage & Server Location",
      answer: (
        <div className="space-y-4">
          <ul className="list-disc list-inside space-y-2">
            <li>All user data is hosted on US-based cloud infrastructure - currently AWS US. This includes users in Nigeria and the US</li>
            <li>To ensure fast performance for US users and align with best practices for US data residency from day 1</li>
            <li>Future: Once LOUD! Inc is formed, US user data will be legally and technically separated and managed solely by LOUD! Inc</li>
          </ul>
        </div>
      ),
    },
    {
      question: "4. Data We Collect & Use",
      answer: (
        <div className="space-y-4">
          <p>
            We collect only what is needed to run LOUD!: account info, content you post, usage data, and device info.
          </p>
          <p>
            We do not sell personal data. We do not share personal data with third parties except for service providers like cloud hosting and payment processors under contract.
          </p>
        </div>
      ),
    },
    {
      question: "5. US Law Compliance - Interim Measures",
      answer: (
        <div className="space-y-4">
          <p>Even as we finalize Delaware's incorporation, we commit to:</p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>COPPA:</strong> LOUD! is 13+. We do not knowingly collect data from children under 13. Parents can request deletion: privacy@loud.app or support@loudproductslimited.com</li>
            <li><strong>State Privacy:</strong> We honor requests from California residents under CCPA for access, deletion, and opt-out</li>
            <li><strong>Data Requests:</strong> We will not provide user data to any government outside the US jurisdiction without a valid US court order</li>
          </ul>
        </div>
      ),
    },
    {
      question: "6. Data Access & Security",
      answer: (
        <div className="space-y-4">
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Access:</strong> Only authorized LOUD! team members can access user data for support and product improvement</li>
            <li><strong>Security:</strong> All data is encrypted in transit and at rest. We perform regular security reviews</li>
            <li><strong>Breach Notification:</strong> If a breach occurs, we will notify affected users within 72 hours</li>
          </ul>
        </div>
      ),
    },
    {
      question: "7. User Rights",
      answer: (
        <div className="space-y-4">
          <p>All users can: Access, Correct, Delete their data, and Export their content.</p>
          <p>To make a request email: privacy@loud.app or support@loudproductslimited.com</p>
          <p>We will respond within 30 days.</p>
        </div>
      ),
    },
    {
      question: "8. Transition Plan",
      answer: (
        <div className="space-y-4">
          <p>Within 90 days of reaching 100k US users or closing our first US investment, we will:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Complete incorporation of LOUD! Inc in Delaware</li>
            <li>Migrate US user data and accounts to be legally owned by LOUD! Inc</li>
            <li>Publish a separate US Privacy Policy governed by US law</li>
          </ul>
          <p>
            This interim policy will be replaced by our full Regional Data Policy at that time. Users will be notified 30 days in advance.
          </p>
        </div>
      ),
    },
    {
      question: "9. Contact",
      answer: (
        <div className="space-y-4">
          <p>Data Protection Contact: privacy@loud.app or support@loudproductslimited.com</p>
          <p>Loud Products Limited, Port Harcourt, Nigeria.</p>
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
              US Compliance
            </span>
            <div className="flex justify-center mb-4">
              <ShieldCheck className="w-16 h-16 text-[#01B2FE]" />
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
              Interim Data & Compliance Policy
            </h1>
            <p className="text-slate-400 text-base md:text-lg">
              For US Users
            </p>
            <p className="text-slate-500 text-sm mt-2">Effective Date: August 1, 2026</p>
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

export default USDataCompliancePage;
