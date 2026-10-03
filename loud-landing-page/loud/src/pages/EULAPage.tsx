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

const EULAPage: FC = () => {
  const sections = [
    {
      question: "1. LICENSE",
      answer: (
        <div>
          <p className="mb-4">
            We grant you a limited, non-exclusive, non-transferable license to use LOUD! for personal or business purposes.
          </p>
          <p>
            We do not sell you LOUD!. We license it. We can revoke access if you break these rules.
          </p>
        </div>
      ),
    },
    {
      question: "2. USER TYPES",
      answer: (
        <div className="space-y-4">
          <div>
            <h4 className="font-bold text-white mt-4">A. Content Creators</h4>
            <p className="mt-2">You can upload, post, stream, and monetize content on LOUD!. You must own or have rights to all content you post.</p>
          </div>
          <div>
            <h4 className="font-bold text-white mt-4">B. Procurement Professionals</h4>
            <p className="mt-2">You can browse, post RFPs, connect with vendors, and use LOUD! B2B tools. You agree not to scrape, resell, or misuse business data from the platform.</p>
          </div>
        </div>
      ),
    },
    {
      question: "3. YOUR CONTENT + DATA",
      answer: (
        <div className="space-y-4">
          <p>You own your content. By posting, you give LOUD! a worldwide, royalty-free license to host, display, and promote your content on the platform.</p>
          <p><strong>Content Rules:</strong> No illegal, hateful, violent, or copyrighted content you don't own. We can remove content and suspend accounts.</p>
          <p><strong>Procurement Data:</strong> RFPs, bids, and company info you post may be visible to other Professionals. Don't post confidential info unless you mean to.</p>
        </div>
      ),
    },
    {
      question: "4. PAYMENTS + MONETIZATION",
      answer: (
        <div className="space-y-4">
          <p>If you earn through LOUD! Creator Fund, brand deals, or B2B deals:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Fees and revenue share will be shown in-app</li>
            <li>We can hold payments for fraud, chargebacks, or EULA violations</li>
            <li>You are responsible for your own taxes</li>
          </ul>
        </div>
      ),
    },
    {
      question: "5. PROHIBITED USE",
      answer: (
        <div className="space-y-4">
          <p>You may NOT:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Reverse engineer, hack, or copy LOUD!</li>
            <li>Use bots, spam, or fake accounts</li>
            <li>Use LOUD! for illegal activity, fraud, or procurement collusion</li>
            <li>Resell LOUD! access without permission</li>
          </ul>
        </div>
      ),
    },
    {
      question: "6. TERMINATION",
      answer: (
        <p>We can suspend or terminate your account at any time for EULA violations. You can delete your account anytime. We will delete your data per our Privacy Policy.</p>
      ),
    },
    {
      question: "7. DISCLAIMERS + LIABILITY",
      answer: (
        <div className="space-y-4">
          <p>LOUD! IS PROVIDED "AS IS".</p>
          <p>We are not liable for lost deals, lost followers, lost revenue, or downtime. Our total liability to you will not exceed $100 or the amount you paid us in the last 12 months.</p>
        </div>
      ),
    },
    {
      question: "8. UPDATES",
      answer: (
        <p>We can update LOUD! and this EULA. If we make major changes, we'll notify you in-app. Continued use = acceptance.</p>
      ),
    },
    {
      question: "9. GOVERNING LAW",
      answer: (
        <p>This EULA is governed by the laws of the State of Delaware, without regard to conflict of law principles. Any dispute arising from this agreement shall be resolved in the state or federal courts located in Wilmington, Delaware.</p>
      ),
    },
    {
      question: "10. ARBITRATION",
      answer: (
        <div>
          <p className="mb-4">
            Any dispute, claim, or controversy arising out of or relating to this EULA shall be resolved by binding arbitration administered by the American Arbitration Association under its Commercial Arbitration Rules. The arbitration shall take place in Wilmington, Delaware.
          </p>
          <p>You agree to waive any right to participate in a class action lawsuit or class-wide arbitration against LOUD!.</p>
        </div>
      ),
    },
    {
      question: "11. AGE REQUIREMENTS",
      answer: (
        <div>
          <p className="mb-4">
            You must be at least 13 years old to use LOUD!. If you are under 18, you must have parental or guardian consent. We do not knowingly collect data from children under 13. If we discover such data, we will delete it immediately.
          </p>
        </div>
      ),
    },
    {
      question: "12. DMCA / COPYRIGHT TAKEDOWN",
      answer: (
        <div className="space-y-4">
          <p>We respect intellectual property rights. If you believe your copyrighted work has been used on LOUD! without authorization, you may submit a DMCA takedown notice to:</p>
          <p><strong>Email:</strong> dmca@loudproducts.com</p>
          <p><strong>Mail:</strong> LOUD! Inc., Attn: DMCA Agent, [Address], Wilmington, DE 19801</p>
          <p>Your notice must include:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>A physical or electronic signature of the copyright owner or authorized agent</li>
            <li>Identification of the copyrighted work claimed to be infringed</li>
            <li>Identification of the material to be removed and its location on LOUD!</li>
            <li>Your contact information</li>
            <li>A statement that you have a good faith belief that use of the material is not authorized</li>
            <li>A statement, under penalty of perjury, that the information in the notice is accurate</li>
          </ul>
        </div>
      ),
    },
    {
      question: "13. REFUND POLICY",
      answer: (
        <p>All payments made through LOUD! are non-refundable unless required by applicable law. If you believe a refund is warranted due to a billing error or unauthorized transaction, contact support@loudproducts.com within 30 days of the transaction.</p>
      ),
    },
    {
      question: "14. CONTACT",
      answer: (
        <div>
          <p>For any concerns, reach us at:</p>
          <p className="text-[#01B2FE] mt-2">Email: support@loudproducts.com</p>
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
              License Agreement
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
              End User License Agreement
            </h1>
            <p className="text-slate-400 text-base md:text-lg">
              Last Updated: August 27, 2026
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

export default EULAPage;