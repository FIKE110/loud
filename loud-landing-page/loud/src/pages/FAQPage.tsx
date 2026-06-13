import { type FC, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp, Mail, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
}

const FAQItem: FC<FAQItemProps> = ({ question, answer }) => {
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
        <Link to="/quarterly-ambassador" className="text-sm hover:text-[#01B2FE] transition-colors">Quarterly Ambassador Program</Link>
      </div>
      <div className="text-center text-xs text-slate-600">
        <p className="font-black uppercase tracking-[0.4em]">© 2026 LOUD PRODUCT LIMITED. ALL RIGHTS RESERVED.</p>
      </div>
    </div>
  </footer>
);

const FAQPage: FC = () => {
  const faqData = [
    {
      question: "1. What is LOUD!?",
      answer: (
        <p>
          LOUD! is a social media platform designed to help creators grow, earn, and
          connect with audiences through content sharing, gifting, subscriptions, and
          future services like procurement and event ticketing.
        </p>
      ),
    },
    {
      question: "2. Who can use LOUD!?",
      answer: (
        <p>
          Anyone who meets the minimum legal age in their country (typically 18+) can
          create an account and use LOUD!
        </p>
      ),
    },
    {
      question: "3. Is LOUD! free to use?",
      answer: (
        <p>
          Yes. LOUD! offers a free version with optional premium features such
          as subscriptions and monetization tools.
        </p>
      ),
    },
    {
      question: "4. How do creators make money on LOUD!?",
      answer: (
        <div>
          <p>Creators can earn through:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Gifts from followers</li>
            <li>Subscriptions</li>
            <li>Promotions and incentives</li>
            <li>Platform-based reward programs</li>
          </ul>
          <p className="mt-2 text-sm text-slate-400">
            Earnings depend on engagement and platform activity.
          </p>
        </div>
      ),
    },
    {
      question: "5. What is LOUD! Coin?",
      answer: (
        <p>
          LOUD! Coin is a digital value used within the platform to support
          creators (e.g., gifting). It is not a bank currency, cryptocurrency, or
          investment product.
        </p>
      ),
    },
    {
      question: "6. Can I withdraw my earnings?",
      answer: (
        <p>
          Yes. Creators can withdraw earnings once they meet minimum payout
          thresholds and complete verification requirements.
        </p>
      ),
    },
    {
      question: "7. Does LOUD! pay creators?",
      answer: (
        <p>
          LOUD! offer promotional reward programs (including revenue-sharing or
          incentive campaigns). Subject to specific terms.
        </p>
      ),
    },
    {
      question: "8. How does LOUD! protect my data?",
      answer: (
        <p>
          LOUD! uses industry-standard security measures such as encryption,
          secure servers, and access controls to protect user data.
        </p>
      ),
    },
    {
      question: "9. Does LOUD! sell my personal information?",
      answer: (
        <p>
          No. LOUD! does not sell your personal data. Information is only shared
          as necessary to operate the platform, comply with laws, or support
          services.
        </p>
      ),
    },
    {
      question: "10. Can I control my privacy?",
      answer: (
        <div>
          <p>Yes. You can:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Manage your profile visibility</li>
            <li>Control what you share</li>
            <li>Request access or deletion of your data</li>
          </ul>
        </div>
      ),
    },
    {
      question: "11. What kind of content is allowed on LOUD!?",
      answer: (
        <div>
          <p>Users may share creative and engaging content, but must not post:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Illegal or harmful material</li>
            <li>Copyright-infringing content</li>
            <li>Fraudulent or misleading content</li>
          </ul>
          <p className="mt-2">
            LOUD! reserves the right to remove content that violates its policies.
          </p>
        </div>
      ),
    },
    {
      question: "12. What happens if I violate the rules?",
      answer: (
        <div>
          <p>Violations may result in:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Content removal</li>
            <li>Account suspension</li>
            <li>Permanent ban</li>
            <li>Loss of earnings (in serious cases)</li>
          </ul>
        </div>
      ),
    },
    {
      question: "13. Is LOUD! available globally?",
      answer: (
        <p>
          LOUD! is launching from Nigeria with a global expansion plan.
          Availability may vary by region as the platform grows.
        </p>
      ),
    },
    {
      question: "14. What are the procurement services?",
      answer: (
        <p>
          LOUD! will introduce procurement features allowing users and businesses
          to connect with buyers and seller transactions through the platform.
        </p>
      ),
    },
    {
      question: "15. How will event ticketing work?",
      answer: (
        <div>
          <p>Users will be able to:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Discover events</li>
            <li>Purchase tickets</li>
            <li>Access events digitally in future</li>
          </ul>
          <p className="mt-2">
            Event terms will be managed in collaboration with organizers.
          </p>
        </div>
      ),
    },
    {
      question: "16. Is LOUD! a bank or financial institution?",
      answer: (
        <p>
          No. LOUD! is a technology platform and does not operate as a bank,
          investment firm, or financial institution.
        </p>
      ),
    },
    {
      question: "17. How do I report a problem or abuse?",
      answer: (
        <p>
          You can report issues directly within the app or contact support
          through official LOUD! channels.
        </p>
      ),
    },
    {
      question: "18. How do I delete my account?",
      answer: (
        <p>
          You can delete your account through your settings or by contacting
          support. Some data may be retained where required by law.
        </p>
      ),
    },
    {
      question: "19. Will LOUD! change in the future?",
      answer: (
        <p>
          Yes. LOUD! will continue to evolve, adding new features and expanding
          globally. Users will be notified of major updates.
        </p>
      ),
    },
    {
      question: "20. How can I contact LOUD!?",
      answer: (
        <div>
          <p>For support or inquiries:</p>
          <div className="mt-3 flex items-center gap-2">
            <Mail className="w-4 h-4 text-[#01B2FE]" />
            <a
              href="mailto:support@loudproductslimited.com"
              className="text-[#01B2FE] hover:underline"
            >
              support@loudproductslimited.com
            </a>
          </div>
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
              FAQ
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-slate-400 text-base md:text-lg">
              Everything you need to know about LOUD!
            </p>
          </div>

          <div className="space-y-3">
            {faqData.map((item, index) => (
              <FAQItem key={index} question={item.question} answer={item.answer} />
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 text-center">
            <p className="text-slate-300 mb-4">
              Still have questions? We are here to help.
            </p>
            <a
              href="mailto:support@loudproductslimited.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#01B2FE] text-white rounded-full font-bold hover:bg-[#00a0e6] transition-colors shadow-lg shadow-[#01B2FE]/30"
            >
              <Mail className="w-4 h-4" />
              Contact Support
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FAQPage;