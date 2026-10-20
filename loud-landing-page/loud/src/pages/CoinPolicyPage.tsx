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
        <Link to="/coin-policy" className="text-sm hover:text-[#01B2FE] transition-colors">Coin Policy</Link>
      </div>
      <div className="text-center text-xs text-slate-600">
        <p className="font-black uppercase tracking-[0.4em]">© 2026 LOUD PRODUCT LIMITED. ALL RIGHTS RESERVED.</p>
      </div>
    </div>
  </footer>
);

const CoinPolicyPage: FC = () => {
  const sections = [
    {
      question: "1. Introduction",
      answer: (
        <div className="space-y-4">
          <p>LOUD! Coins (“Coins”) are virtual items used within the LOUD! ecosystem. They are designed to facilitate digital interactions, including gifting and other features that LOUD! may make available to users from time to time.</p>
          <p>Coins are virtual items only. They do not constitute cash, electronic money, cryptocurrency, a bank deposit, a security, an investment, or any other form of financial asset, unless expressly required by applicable law.</p>
          <p>By purchasing, receiving, holding, or using LOUD! Coins, you agree to this LOUD! Coin Policy and the applicable LOUD! Terms of Service and other platform policies.</p>
        </div>
      ),
    },
    {
      question: "2. Acquisition of LOUD! Coins",
      answer: (
        <div className="space-y-4">
          <p>Users may acquire LOUD! Coins through purchasing options made available by LOUD! on:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>The LOUD! iOS application;</li>
            <li>The LOUD! Android application; and</li>
            <li>The LOUD! web platform.</li>
          </ul>
          <p>Depending on the platform, purchases may be processed through third-party payment providers, app-store billing systems, or other authorized payment processors.</p>
          <p>LOUD! may change, suspend, introduce, or discontinue particular purchasing methods or Coin packages at any time.</p>
        </div>
      ),
    },
    {
      question: "3. Third-Party Payment Processors",
      answer: (
        <div className="space-y-4">
          <p>LOUD! uses third-party payment processors and payment platforms to facilitate certain Coin purchases.</p>
          <p>LOUD! does not directly process, hold, or independently settle the payment transaction where a third-party processor is responsible for processing the payment.</p>
          <p>Accordingly, issues relating to:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>payment authorization;</li>
            <li>declined transactions;</li>
            <li>duplicate charges;</li>
            <li>payment reversals;</li>
            <li>unauthorized payment activity;</li>
            <li>payment-provider fees;</li>
            <li>card, bank, mobile-money, or other payment-method issues; or</li>
            <li>technical problems occurring within a third-party payment system</li>
          </ul>
          <p>may need to be addressed directly with the applicable payment processor, financial institution, or app-store provider.</p>
          <p>Where appropriate, LOUD! may assist users in directing payment-related concerns to the relevant provider.</p>
        </div>
      ),
    },
    {
      question: "4. Coin Pricing and Conversion Rates",
      answer: (
        <div className="space-y-4">
          <p>LOUD! may establish and modify the price, quantity, value, conversion rate, or purchasing structure applicable to LOUD! Coins.</p>
          <p>LOUD! reserves the right to change Coin pricing or conversion rates at any time, including to reflect changes in:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>business operations;</li>
            <li>exchange rates;</li>
            <li>taxes and regulatory requirements;</li>
            <li>payment-processing costs;</li>
            <li>market conditions;</li>
            <li>platform costs;</li>
            <li>product development;</li>
            <li>economic conditions; or</li>
            <li>other operational or commercial factors.</li>
          </ul>
          <p>Any applicable conversion rate displayed at the time of a transaction will generally apply to that transaction, subject to applicable law and the rules of the relevant payment platform.</p>
          <p>LOUD! does not guarantee that a Coin's purchasing or gifting value will remain constant.</p>
        </div>
      ),
    },
    {
      question: "5. Taxes, Duties, and Payment-Provider Charges",
      answer: (
        <div className="space-y-4">
          <p>Depending on the user's location and applicable law, additional taxes, duties, levies, or similar charges may apply to a Coin purchase.</p>
          <p>Users in certain jurisdictions may be required to pay applicable local taxes, which may be added to the purchase price at checkout.</p>
          <p>Third-party payment providers, banks, card issuers, app stores, mobile-money providers, or other financial institutions may also apply their own fees, commissions, exchange-rate adjustments, or other charges.</p>
          <p>Such charges may be outside LOUD!'s control.</p>
          <p>Users are responsible for reviewing the total amount displayed before completing a purchase.</p>
        </div>
      ),
    },
    {
      question: "6. Compliance With Local Laws",
      answer: (
        <div className="space-y-4">
          <p>Users are responsible for complying with the laws and regulations applicable to them when purchasing or using LOUD! Coins.</p>
          <p>LOUD! may restrict or prevent Coin purchases, gifting, or other Coin-related functionality in certain countries, territories, jurisdictions, or circumstances where required by law, regulation, payment-provider requirements, sanctions, platform rules, or other applicable restrictions.</p>
          <p>If applicable law or regulatory requirements prevent a user from purchasing or using LOUD! Coins, LOUD! will not be liable for the user's inability to complete the purchase or use the affected functionality and, to the extent permitted by applicable law, will not provide compensation for such restriction.</p>
          <p>Nothing in this policy is intended to exclude any consumer right or remedy that cannot legally be excluded.</p>
        </div>
      ),
    },
    {
      question: "7. No Cash Value or Withdrawal",
      answer: (
        <div className="space-y-4">
          <p>Unless LOUD! expressly states otherwise, LOUD! Coins:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>cannot be exchanged directly for cash by users;</li>
            <li>cannot be withdrawn from LOUD!;</li>
            <li>cannot be deposited into a bank account;</li>
            <li>cannot be transferred outside the LOUD! ecosystem;</li>
            <li>cannot be sold or exchanged between users for money; and</li>
            <li>do not represent ownership of LOUD! or any part of the company.</li>
          </ul>
          <p>LOUD! may determine how Coins can be used within the platform and may modify eligible uses from time to time, subject to applicable law.</p>
        </div>
      ),
    },
    {
      question: "8. Gift Box and Gifting",
      answer: (
        <div className="space-y-4">
          <p>Coins purchased by a user are credited to the user's personal Coin balance, which may be represented through the user's Gift Box or another designated area of the LOUD! platform.</p>
          <p>Once Coins are credited to the user's Gift Box, the user may use eligible Coins to send gifts to other users or creators on LOUD!, subject to LOUD!'s applicable policies and any limits or restrictions displayed on the platform.</p>
          <p>The recipient of a virtual gift does not necessarily receive the same number or monetary value of Coins used by the sender.</p>
          <p>LOUD! may establish rules governing gifting, including limits, eligibility requirements, anti-fraud controls, creator eligibility, and other safeguards.</p>
        </div>
      ),
    },
    {
      question: "9. Non-Refundable Purchases",
      answer: (
        <div className="space-y-4">
          <p>All purchases of LOUD! Coins are final and non-refundable, except where a refund is required by applicable law or by the rules of the relevant app store or payment provider.</p>
          <p>Users should carefully review their purchase, Coin package, quantity, and applicable price before confirming a transaction.</p>
          <p>Once a Coin purchase has been successfully completed and credited, the purchase generally cannot be cancelled, reversed, or exchanged for cash.</p>
        </div>
      ),
    },
    {
      question: "10. Disputed or Unauthorized Purchases",
      answer: (
        <div className="space-y-4">
          <p>Where a dispute arises from the payment processing services of a third-party provider, including a card, bank, app-store, mobile-money, or other payment service, the user should first contact the relevant provider in accordance with its dispute or refund procedures.</p>
          <p>Examples include disputes involving:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>unauthorized charges;</li>
            <li>duplicate charges;</li>
            <li>incorrect payment amounts;</li>
            <li>payment authorization;</li>
            <li>payment reversals; or</li>
            <li>payment-processing errors.</li>
          </ul>
          <p>Where a dispute concerns a LOUD! Coin purchase that has not been properly credited within the applicable processing timeframe, the user may submit the issue to LOUD! through the designated LOUD! support or dispute channel: support@loudproductslimited.com</p>
          <p>Users should provide sufficient information to enable LOUD! to investigate the matter, such as the transaction reference, date of purchase, platform used, purchase amount, and relevant screenshots or receipts. Users should not submit passwords, card PINs, full card numbers, or other sensitive financial credentials.</p>
          <p>LOUD! may investigate transaction-related complaints and may request information reasonably necessary to verify the transaction.</p>
        </div>
      ),
    },
    {
      question: "11. Technical Delays and Processing",
      answer: (
        <div className="space-y-4">
          <p>Coin purchases may occasionally be delayed because of:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>internet connectivity;</li>
            <li>app-store processing;</li>
            <li>payment-provider processing;</li>
            <li>banking or financial-institution delays;</li>
            <li>technical outages;</li>
            <li>fraud-prevention checks;</li>
            <li>system maintenance; or</li>
            <li>other circumstances outside LOUD!'s reasonable control.</li>
          </ul>
          <p>Users should not repeatedly purchase Coins solely because a previous transaction has not yet appeared in their Gift Box. If a purchase appears to have been completed but Coins have not been credited after the applicable processing period, users should contact LOUD! Support.</p>
        </div>
      ),
    },
    {
      question: "12. Fraud, Abuse, and Unauthorized Use",
      answer: (
        <div className="space-y-4">
          <p>LOUD! may investigate suspicious Coin activity and may take reasonable measures to protect users, creators, payment providers, and the integrity of the platform.</p>
          <p>Where permitted by law, LOUD! may restrict, suspend, or remove access to Coins where it reasonably believes that a transaction or account involves:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>fraud;</li>
            <li>unauthorized payment activity;</li>
            <li>payment reversals or chargebacks;</li>
            <li>exploitation of technical errors;</li>
            <li>manipulation of the gifting system;</li>
            <li>account compromise;</li>
            <li>abuse of promotional offers; or</li>
            <li>violation of LOUD!'s Terms of Service or policies.</li>
          </ul>
          <p>LOUD! may take appropriate action without advance notice where necessary to protect the platform or comply with legal or regulatory requirements.</p>
        </div>
      ),
    },
    {
      question: "13. Account Restrictions and Loss of Access",
      answer: (
        <div className="space-y-4">
          <p>Coins are associated with the user's LOUD! account.</p>
          <p>If an account is suspended, restricted, deleted, compromised, or otherwise becomes inaccessible, access to Coins may also be affected.</p>
          <p>Users are responsible for maintaining the security of their account and should promptly report suspected unauthorized access to LOUD!.</p>
          <p>To the extent permitted by law, LOUD! is not responsible for losses resulting from a user's failure to maintain account security.</p>
        </div>
      ),
    },
    {
      question: "14. Changes to LOUD! Coins",
      answer: (
        <div className="space-y-4">
          <p>LOUD! may modify the Coin system at any time, including:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Coin packages;</li>
            <li>pricing;</li>
            <li>conversion rates;</li>
            <li>eligible uses;</li>
            <li>gifting functionality;</li>
            <li>purchase methods;</li>
            <li>geographic availability;</li>
            <li>eligibility requirements; and</li>
            <li>limits on purchases or gifting.</li>
          </ul>
          <p>Where changes materially affect users, LOUD! may provide notice through the platform or other appropriate means.</p>
          <p>LOUD! may also suspend or discontinue Coins or particular Coin-related functionality where reasonably necessary for legal, regulatory, security, technical, business, or operational reasons.</p>
        </div>
      ),
    },
    {
      question: "15. Promotions and Bonus Coins",
      answer: (
        <div className="space-y-4">
          <p>LOUD! may occasionally provide promotional Coins, bonuses, rewards, or other incentives.</p>
          <p>Promotional Coins may be subject to additional terms, expiration periods, eligibility requirements, geographic restrictions, or usage limitations.</p>
          <p>Unless expressly stated otherwise, promotional Coins have no cash value and cannot be redeemed for cash.</p>
        </div>
      ),
    },
    {
      question: "16. Platform and App-Store Rules",
      answer: (
        <div className="space-y-4">
          <p>Coin purchases made through Apple's App Store, Google's applicable app marketplace, or another third-party platform may also be subject to that platform's terms, policies, billing rules, and refund procedures.</p>
          <p>Users must comply with the rules applicable to the platform through which they access LOUD!.</p>
          <p>Where an app-store or platform rule conflicts with this policy regarding matters that the platform controls, the applicable platform rules may govern that specific transaction.</p>
        </div>
      ),
    },
    {
      question: "17. International Use",
      answer: (
        <div className="space-y-4">
          <p>LOUD! is intended to serve users globally. However, availability of Coins and Coin-related features may vary by country or region.</p>
          <p>LOUD! does not guarantee that Coins will be available for purchase, gifting, or use in every jurisdiction.</p>
          <p>Currency conversion, taxation, payment methods, regulatory requirements, sanctions, local laws, app-store requirements, and payment-provider availability may affect how Coins are offered in different markets.</p>
          <p>Users accessing LOUD! from outside their home country are responsible for complying with applicable local laws.</p>
        </div>
      ),
    },
    {
      question: "18. Intellectual Property",
      answer: (
        <div className="space-y-4">
          <p>All rights, title, and interest in the LOUD! Coin system, including its design, technology, branding, software, and related intellectual property, belong to LOUD! or its licensors.</p>
          <p>Purchasing Coins does not grant the user ownership of any LOUD! intellectual property.</p>
          <p>Users receive only a limited, revocable, non-transferable right to use Coins within the LOUD! ecosystem in accordance with this policy and LOUD!'s applicable terms.</p>
        </div>
      ),
    },
    {
      question: "19. No Guarantee of Availability",
      answer: (
        <div className="space-y-4">
          <p>LOUD! aims to maintain reliable Coin functionality but does not guarantee uninterrupted availability.</p>
          <p>Coin-related features may be temporarily unavailable due to maintenance, upgrades, technical issues, security measures, regulatory requirements, payment-provider interruptions, or other circumstances.</p>
        </div>
      ),
    },
    {
      question: "20. Limitation of Liability",
      answer: (
        <div className="space-y-4">
          <p>To the maximum extent permitted by applicable law, LOUD! will not be responsible for losses arising solely from the acts, omissions, failures, fees, exchange rates, policies, or technical systems of third-party payment providers, app stores, banks, card issuers, mobile-money providers, or other third parties.</p>
          <p>Nothing in this policy limits liability or consumer rights that cannot legally be limited or excluded under applicable law.</p>
        </div>
      ),
    },
    {
      question: "21. Governing Terms",
      answer: (
        <div className="space-y-4">
          <p>This Coin Policy should be read together with LOUD!'s Terms of Service, Privacy Policy, Community Guidelines, Creator Policies, and other applicable platform policies.</p>
          <p>If there is a conflict between this Coin Policy and mandatory applicable law, the mandatory law will prevail to the extent of the conflict.</p>
        </div>
      ),
    },
    {
      question: "22. Contact and Support",
      answer: (
        <div className="space-y-4">
          <p>For questions concerning LOUD! Coins, gifting, missing Coins, transaction processing, or Coin-related account issues, users should contact LOUD! through the official support channel: support@loudproductslimited.com</p>
          <p>For payment disputes controlled by a third-party payment provider, users should also contact the relevant provider directly.</p>
        </div>
      ),
    },
    {
      question: "23. Acceptance",
      answer: (
        <div className="space-y-4">
          <p>By purchasing, receiving, holding, or using LOUD! Coins, you acknowledge that you have read and understood this LOUD! Coin Policy and agree to comply with its terms.</p>
          <p>LOUD! reserves the right to update this policy from time to time. The latest version published through LOUD!'s official channels will govern future Coin activity.</p>
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
              Virtual Items
            </span>
            <div className="flex justify-center mb-4">
              <Coins className="w-16 h-16 text-[#01B2FE]" />
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
              LOUD! Coin Policy
            </h1>
            <p className="text-slate-400 text-base md:text-lg">
              Understanding the virtual coin system on LOUD!
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 mb-8 text-sm text-slate-400 space-y-1">
            <p><span className="font-bold text-white">Effective Date:</span> October 20, 2026</p>
            <p><span className="font-bold text-white">Platform:</span> LOUD!</p>
            <p><span className="font-bold text-white">Company:</span> Loud Products Limited and its applicable affiliates</p>
          </div>

          <div className="space-y-3">
            {sections.map((item, index) => (
              <AccordionItem key={index} question={item.question} answer={item.answer} />
            ))}
          </div>

          <p className="text-center text-xs text-slate-500 mt-10">
            © 2026 Loud Products Limited. All rights reserved.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CoinPolicyPage;
