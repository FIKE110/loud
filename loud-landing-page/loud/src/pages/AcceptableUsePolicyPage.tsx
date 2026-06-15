
import { type FC, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Award } from "lucide-react";

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

const AcceptableUsePolicyPage: FC = () => {
  const sections = [
    {
      question: "I. FUNDAMENTAL EXPECTATIONS",
      answer: (
        <div className="space-y-4">
          <p>
            Every participant must navigate the site with a commitment to
            legal compliance and professional ethics. To preserve the
            credibility of our trade environment, all dealings must be
            executed with absolute honesty and openness.
          </p>
        </div>
      ),
    },
    {
      question: "II. FORBIDDEN COMMERCIAL MISCONDUCT",
      answer: (
        <div className="space-y-4">
          <p>
            We maintain a zero-tolerance stance toward deceptive or
            predatory behaviors, which include:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li>
              <strong>Transactional Fraud:</strong> Inventing "shell"
              companies, issuing fake billing statements, or providing false
              data regarding the fulfillment of contracts.
            </li>
            <li>
              <strong>Anti-Competitive Collusion:</strong> Secretly
              cooperating with rival bidders to fix price points, leaking
              sensitive bid details prematurely, or submitting "token" bids
              to manipulate selection processes.
            </li>
            <li>
              <strong>Credential Falsification:</strong> Using counterfeit
              industry certifications, misstating liquid assets, or
              providing fraudulent history regarding previous project
              success.
            </li>
            <li>
              <strong>Hidden Interests:</strong> Neglecting to report any
              private or familial ties between a supplier and the
              decision-making staff.
            </li>
          </ul>
        </div>
      ),
    },
    {
      question: "III. PROTOCOL & AUTHORIZATION GOVERNANCE",
      answer: (
        <div className="space-y-4">
          <p>
            The internal logic and oversight chains of this platform are
            mandatory. Prohibited actions include:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li>
              <strong>Subverting Procedures:</strong> Avoiding formal
              vetting stages or artificially fragmenting large purchase
              requests to bypass budgetary limits.
            </li>
            <li>
              <strong>Identity Deception:</strong> Misusing the login
              details of others to grant self-approval or using deceptive
              tactics to trick authorized signatories.
            </li>
            <li>
              <strong>Data Intrusion:</strong> Viewing protected tender
              documents or rival pricing models before the public disclosure
              date.
            </li>
          </ul>
        </div>
      ),
    },
    {
      question: "IV. CYBER-SECURITY & TECHNICAL SAFEGUARDS",
      answer: (
        <div className="space-y-4">
          <p>
            To protect our network's health, users are strictly forbidden
            from:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li>
              <strong>Harmful Software:</strong> Distributing malware,
              worms, or encryption-based attacks (ransomware) designed to
              compromise our data.
            </li>
            <li>
              <strong>Automated Harvesting:</strong> Utilizing scripts,
              crawlers, or "scraping" technology to harvest proprietary
              vendor directories or RFP documents without explicit
              permission.
            </li>
            <li>
              <strong>Software Deconstruction:</strong> Trying to unmask the
              source code or underlying architecture of our proprietary
              digital tools.
            </li>
            <li>
              <strong>Infrastructure Abuse:</strong> Launching
              traffic-flooding attacks or any behavior that intentionally
              degrades system performance.
            </li>
          </ul>
        </div>
      ),
    },
    {
      question: "V. INFORMATION SECURITY",
      answer: (
        <div className="space-y-4">
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li>
              <strong>Proprietary Knowledge:</strong> All tender materials
              and bid submissions must be handled as strictly private
              company assets.
            </li>
            <li>
              <strong>Data Protection:</strong> The sharing of private
              individual data (PII) is restricted to essential procurement
              needs only.
            </li>
          </ul>
        </div>
      ),
    },
    {
      question: "VI. PENALTIES FOR NON-COMPLIANCE",
      answer: (
        <div className="space-y-4">
          <p>
            Loud actively audits all platform interactions. Failure to
            adhere to these standards may trigger:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li>
              <strong>Revocation of Access:</strong> Temporary or lifelong
              banning from the network.
            </li>
            <li>
              <strong>Ineligibility:</strong> Removal from current tenders
              and blacklisting from future contracts.
            </li>
            <li>
              <strong>Criminal Referral:</strong> Forwarding evidence of
              illicit acts to the appropriate authorities.
            </li>
            <li>
              <strong>Civil Litigation:</strong> Pursuing financial
              restitution for losses caused by bad-faith actors.
            </li>
          </ul>
        </div>
      ),
    },
    {
      question: "VII. INTEGRITY REPORTING",
      answer: (
        <div className="space-y-4">
          <p>
            If you identify suspicious behavior, specifically regarding
            market manipulation or embezzlement, notify Loud immediately. We
            guarantee protection against any form of reprisal for those
            reporting concerns in good faith.
          </p>
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
              Platform Standards
            </span>
            <div className="flex justify-center mb-4">
              <Award className="w-16 h-16 text-[#01B2FE]" />
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
              Acceptable Use Policy
            </h1>
            <p className="text-slate-400 text-base md:text-lg">
              Platform Conduct & Integrity Standards
            </p>
            <p className="text-slate-500 text-sm mt-2">Effective Date: January 8, 2026</p>
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

export default AcceptableUsePolicyPage;
