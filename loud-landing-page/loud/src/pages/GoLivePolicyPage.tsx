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

const GoLivePolicyPage: FC = () => {
  const sections = [
    {
      question: "1. Purpose",
      answer: (
        <div className="space-y-4">
          <p>
            LOUD! GoLive is designed to provide users with an open, interactive and inclusive live-streaming environment where people can connect, communicate, create, entertain, educate and support one another in real time.
          </p>
          <p>
            LOUD! believes that access to an audience should not be determined solely by the number of followers a user has. Accordingly, eligible LOUD! users may initiate a GoLive session even when they have zero followers or zero existing viewers.
          </p>
          <p>
            A GoLive session may therefore begin with 0 viewers and 0 followers, while other users may discover, join, interact with, participate in, and support the live session.
          </p>
        </div>
      ),
    },
    {
      question: "2. Zero-Follower GoLive Access",
      answer: (
        <div className="space-y-4">
          <div>
            <h4 className="font-bold text-white">2.1 Open Access to GoLive</h4>
            <p className="mt-2">
              Subject to LOUD!'s eligibility, age, safety and account requirements, a user does not need to have a minimum number of followers, subscribers, views or previous engagements to initiate a GoLive session.
            </p>
            <p className="mt-2">A user may:</p>
            <ul className="list-disc list-inside mt-1 space-y-1">
              <li>Start a GoLive session with zero followers.</li>
              <li>Start a GoLive session with zero viewers.</li>
              <li>Receive viewers after starting the broadcast.</li>
              <li>Allow other eligible users to join the live session.</li>
              <li>Interact with viewers in real time.</li>
              <li>Receive LOUD! gifts from eligible users.</li>
              <li>Build an audience organically through the GoLive discovery system.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white">2.2 Discovery</h4>
            <p className="mt-2">
              Beginning a GoLive session does not guarantee that a user will receive viewers, engagement or gifts.
            </p>
            <p className="mt-2">LOUD! may recommend, surface, rank or distribute live sessions through its discovery systems based on factors such as:</p>
            <ul className="list-disc list-inside mt-1 space-y-1">
              <li>User interests;</li>
              <li>Content relevance;</li>
              <li>Engagement;</li>
              <li>Safety and community compliance;</li>
              <li>Quality of the live session;</li>
              <li>Viewer feedback;</li>
              <li>Availability and platform capacity;</li>
              <li>Geographic or language relevance; and</li>
              <li>Other legitimate platform considerations.</li>
            </ul>
            <p className="mt-2">LOUD! does not guarantee a minimum number of viewers, gifts, earnings or exposure.</p>
          </div>
        </div>
      ),
    },
    {
      question: "3. Joining a GoLive Session",
      answer: (
        <div className="space-y-4">
          <p>Users may join eligible public GoLive sessions as viewers.</p>
          <p>Where enabled by the host and supported by LOUD!, users may also participate directly in a live session.</p>
          <p>Participation may include:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Watching;</li>
            <li>Commenting;</li>
            <li>Reacting;</li>
            <li>Sending gifts;</li>
            <li>Joining as a live participant or guest;</li>
            <li>Asking questions;</li>
            <li>Sharing the live session; and</li>
            <li>Other interactive features made available by LOUD!.</li>
          </ul>
          <p>Hosts may control participation features, including whether viewers can request to join or appear as guests.</p>
        </div>
      ),
    },
    {
      question: "4. Multi-Participant Live Sessions",
      answer: (
        <div className="space-y-4">
          <p>LOUD! may allow multiple users to participate in the same GoLive session.</p>
          <p>Hosts are responsible for the conduct of participants they invite or permit to join their live session.</p>
          <p>
            Hosts should only invite participants who are permitted to use the relevant GoLive feature and should promptly remove participants who violate LOUD!'s Community Guidelines or this policy.
          </p>
          <p>LOUD! may remove, restrict or terminate a participant's access independently of the host.</p>
        </div>
      ),
    },
    {
      question: "5. Gifting During GoLive",
      answer: (
        <div className="space-y-4">
          <p>LOUD! GoLive may support real-time gifting.</p>
          <p>Eligible viewers may send supported LOUD! gifts to creators or live participants during a GoLive session.</p>
          <div>
            <h4 className="font-bold text-white">5.1 Voluntary Gifting</h4>
            <p className="mt-2">Gifting must be voluntary.</p>
            <p className="mt-2">Creators and participants must not:</p>
            <ul className="list-disc list-inside mt-1 space-y-1">
              <li>Threaten viewers for refusing to send gifts;</li>
              <li>Harass users into sending gifts;</li>
              <li>Misrepresent the value of gifts;</li>
              <li>Promise guaranteed financial returns in exchange for gifts;</li>
              <li>Use deception to obtain gifts;</li>
              <li>Manipulate minors into sending gifts; or</li>
              <li>Conduct fraudulent gifting schemes.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white">5.2 No Guaranteed Earnings</h4>
            <p className="mt-2">LOUD! does not guarantee that any GoLive host will receive gifts or generate income.</p>
            <p>The ability to GoLive does not itself create a right to payment.</p>
            <p>
              Any creator rewards, withdrawals, revenue-sharing arrangements, eligibility requirements, fees, conversion rates, thresholds or applicable taxes will be governed by the applicable LOUD! Creator, Payments and Monetization policies.
            </p>
          </div>
        </div>
      ),
    },
    {
      question: "6. Prohibited Live Content",
      answer: (
        <div className="space-y-4">
          <p>Users must comply with the LOUD! Community Guidelines while broadcasting.</p>
          <p>The following activities are prohibited during GoLive, including but not limited to:</p>
          <div>
            <h4 className="font-bold text-white">6.1 Sexual or Exploitative Content</h4>
            <p className="mt-2">Users must not broadcast:</p>
            <ul className="list-disc list-inside mt-1 space-y-1">
              <li>Explicit sexual content;</li>
              <li>Sexual exploitation;</li>
              <li>Sexual solicitation;</li>
              <li>Sexual content involving minors;</li>
              <li>Non-consensual intimate content; or</li>
              <li>Sexual exploitation of another person.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white">6.2 Child Safety</h4>
            <p className="mt-2">Any sexual or exploitative content involving minors is strictly prohibited.</p>
            <p>Users must not use GoLive to groom, exploit, solicit or endanger children.</p>
            <p>
              LOUD! may immediately suspend or terminate accounts involved in serious child-safety violations and may take appropriate legal or regulatory action where required.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white">6.3 Violence and Dangerous Conduct</h4>
            <p className="mt-2">Users must not livestream:</p>
            <ul className="list-disc list-inside mt-1 space-y-1">
              <li>Serious violent acts;</li>
              <li>Encouragement of violence against individuals or groups;</li>
              <li>Terrorist or extremist activity;</li>
              <li>Dangerous challenges likely to cause serious injury;</li>
              <li>Instructions or demonstrations intended to facilitate serious harm; or</li>
              <li>Real-world violence presented for entertainment or promotion.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white">6.4 Hate and Harassment</h4>
            <p className="mt-2">Users must not use GoLive to:</p>
            <ul className="list-disc list-inside mt-1 space-y-1">
              <li>Threaten another person;</li>
              <li>Promote hatred or violence against protected groups;</li>
              <li>Engage in targeted harassment;</li>
              <li>Bully or humiliate individuals;</li>
              <li>Dox or expose private information; or</li>
              <li>Encourage viewers to attack another person online or offline.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white">6.5 Illegal Activities</h4>
            <p className="mt-2">
              GoLive must not be used to facilitate or promote illegal activity, including fraud, scams, trafficking, exploitation or other unlawful conduct.
            </p>
          </div>
        </div>
      ),
    },
    {
      question: "7. Misinformation and Harmful Claims",
      answer: (
        <div className="space-y-4">
          <p>Users are responsible for the information they broadcast.</p>
          <p>
            Particularly in areas involving health, finance, safety and other high-risk subjects, users must not intentionally present dangerous false information as established fact.
          </p>
          <p>
            LOUD! may restrict, label, remove or terminate content or accounts where necessary to protect users and comply with applicable law.
          </p>
        </div>
      ),
    },
    {
      question: "8. Health Content",
      answer: (
        <div className="space-y-4">
          <p>Users must exercise particular care when discussing medical or health matters.</p>
          <p>GoLive must not be used to:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Present unqualified medical advice as professional treatment;</li>
            <li>Encourage users to discontinue prescribed treatment;</li>
            <li>Promote dangerous medical practices;</li>
            <li>Make fraudulent medical claims; or</li>
            <li>Misrepresent AI-generated health information as professional medical advice.</li>
          </ul>
          <p>
            Where LOUD!'s separate <Link to="/health-content-policy" className="text-[#01B2FE] hover:underline">Health Content Policy</Link> applies, that policy will also govern the GoLive session.
          </p>
        </div>
      ),
    },
    {
      question: "9. Minors and Age Requirements",
      answer: (
        <div className="space-y-4">
          <p>Users must satisfy LOUD!'s applicable minimum age requirements before accessing GoLive.</p>
          <p>Certain GoLive, gifting or monetization features may have additional age requirements.</p>
          <p>
            Where required, LOUD! may apply additional restrictions to interactions involving minors, including gifting, private communication, participation and monetization.
          </p>
          <p>Users must not misrepresent their age to obtain access to restricted features.</p>
        </div>
      ),
    },
    {
      question: "10. Privacy and Consent",
      answer: (
        <div className="space-y-4">
          <p>Users must respect the privacy of people appearing in their livestreams.</p>
          <p>Users should not livestream another person in circumstances where doing so would unlawfully expose private or sensitive information.</p>
          <p>Users must not broadcast:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Private addresses;</li>
            <li>Passwords;</li>
            <li>Financial information;</li>
            <li>Private communications;</li>
            <li>Confidential documents; or</li>
            <li>Other sensitive personal information without appropriate authorization.</li>
          </ul>
          <p>Hosts are responsible for ensuring that guests and participants understand that their participation may be visible to viewers.</p>
        </div>
      ),
    },
    {
      question: "11. Recording and Reuse of Live Content",
      answer: (
        <div className="space-y-4">
          <p>A GoLive session may be recorded, stored, clipped, reviewed or otherwise processed by LOUD! for purposes including:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Platform functionality;</li>
            <li>Safety and moderation;</li>
            <li>Security;</li>
            <li>Abuse prevention;</li>
            <li>Enforcement;</li>
            <li>Product improvement; and</li>
            <li>Compliance with legal obligations.</li>
          </ul>
          <p>
            Additional use of content will be governed by LOUD!'s applicable <Link to="/terms" className="text-[#01B2FE] hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-[#01B2FE] hover:underline">Privacy Policy</Link>.
          </p>
        </div>
      ),
    },
    {
      question: "12. Host Responsibilities",
      answer: (
        <div className="space-y-4">
          <p>A GoLive host is responsible for making reasonable efforts to maintain a safe and compliant live session.</p>
          <p>Hosts should:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Monitor their live session;</li>
            <li>Remove problematic participants;</li>
            <li>Report serious violations;</li>
            <li>Avoid encouraging prohibited activities;</li>
            <li>Respect viewers and participants;</li>
            <li>Protect private information; and</li>
            <li>Comply with LOUD!'s Community Guidelines and applicable policies.</li>
          </ul>
          <p>
            Hosts are not expected to prevent every violation, but deliberate encouragement, facilitation or repeated failure to address serious violations may result in enforcement action.
          </p>
        </div>
      ),
    },
    {
      question: "13. Moderation and Safety Controls",
      answer: (
        <div className="space-y-4">
          <p>
            LOUD! may use a combination of automated systems, human moderation, user reports and other safety technologies to monitor GoLive activity.
          </p>
          <p>LOUD! may:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Issue warnings;</li>
            <li>Limit distribution;</li>
            <li>Disable comments;</li>
            <li>Restrict participation;</li>
            <li>Remove viewers or participants;</li>
            <li>End a livestream;</li>
            <li>Temporarily suspend GoLive privileges;</li>
            <li>Suspend an account; or</li>
            <li>Permanently terminate an account.</li>
          </ul>
          <p>
            The enforcement action will depend on factors such as the seriousness of the violation, previous violations, potential harm and applicable law.
          </p>
        </div>
      ),
    },
    {
      question: "14. Gifts, Fraud and Financial Abuse",
      answer: (
        <div className="space-y-4">
          <p>Users must not manipulate GoLive gifting systems.</p>
          <p>Prohibited conduct includes:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Fake gifting;</li>
            <li>Fraudulent transactions;</li>
            <li>Chargeback abuse;</li>
            <li>Account farming;</li>
            <li>Coordinated manipulation of gifts;</li>
            <li>Money laundering;</li>
            <li>Using stolen payment instruments;</li>
            <li>Exploiting platform bugs;</li>
            <li>Artificially inflating gift activity; or</li>
            <li>Creating multiple accounts for fraudulent monetization.</li>
          </ul>
          <p>
            LOUD! may reverse, withhold, suspend or investigate transactions where permitted by applicable law and its payment policies.
          </p>
        </div>
      ),
    },
    {
      question: "15. No Minimum Audience Requirement",
      answer: (
        <div className="space-y-4">
          <p>
            LOUD!'s GoLive system is intentionally designed to give creators an opportunity to build an audience from the beginning.
          </p>
          <p>
            There is no requirement that a creator first obtain a specific number of followers before starting a GoLive session, subject to eligibility and safety requirements.
          </p>
          <p>A creator may start with:</p>
          <p className="text-[#01B2FE] font-bold">
            0 followers → 0 viewers → GoLive → new viewers discover the session → viewers participate → viewers may send gifts.
          </p>
          <p>
            This structure is intended to support discovery, community building and creator participation rather than restricting live broadcasting only to users who have already established a large following.
          </p>
        </div>
      ),
    },
    {
      question: "16. Platform Integrity",
      answer: (
        <div className="space-y-4">
          <p>LOUD! may modify, limit or suspend GoLive functionality where necessary for:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Platform security;</li>
            <li>Regulatory compliance;</li>
            <li>Payment compliance;</li>
            <li>Child safety;</li>
            <li>Fraud prevention;</li>
            <li>Technical stability;</li>
            <li>Abuse prevention; or</li>
            <li>Protection of the LOUD! community.</li>
          </ul>
          <p>
            LOUD! may also introduce additional eligibility requirements for particular features or jurisdictions where required by law or operational considerations.
          </p>
        </div>
      ),
    },
    {
      question: "17. Reporting",
      answer: (
        <div className="space-y-4">
          <p>
            Users can report GoLive sessions, hosts or participants that they believe violate LOUD!'s policies.
          </p>
          <p>
            Reports may be reviewed by LOUD!'s safety and moderation systems and may result in investigation or enforcement.
          </p>
          <p>
            Users should use reporting tools responsibly and must not knowingly submit fraudulent or malicious reports.
          </p>
        </div>
      ),
    },
    {
      question: "18. Enforcement",
      answer: (
        <div className="space-y-4">
          <p>Violations of this GoLive Streaming Policy may result in:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Warning;</li>
            <li>Content removal;</li>
            <li>Reduced distribution;</li>
            <li>Feature restrictions;</li>
            <li>Temporary GoLive suspension;</li>
            <li>Temporary account suspension;</li>
            <li>Permanent account termination; and/or</li>
            <li>Other action permitted under LOUD!'s Terms of Service and applicable law.</li>
          </ul>
          <p>Severe violations may result in immediate termination without prior warning.</p>
        </div>
      ),
    },
    {
      question: "19. Appeals",
      answer: (
        <div className="space-y-4">
          <p>
            Where an enforcement decision is eligible for appeal, the affected user may use the appeal mechanism made available by LOUD!.
          </p>
          <p>
            LOUD! may review relevant information and determine whether the enforcement action should be maintained, modified or reversed.
          </p>
        </div>
      ),
    },
    {
      question: "20. Policy Updates",
      answer: (
        <div className="space-y-4">
          <p>
            LOUD! may update this GoLive Streaming Policy as the platform, technology, laws and safety standards evolve.
          </p>
          <p>
            Users are responsible for complying with the version of the policy applicable to their use of GoLive.
          </p>
        </div>
      ),
    },
    {
      question: "LOUD! GoLive Principle",
      answer: (
        <div className="space-y-4">
          <p className="text-[#01B2FE] font-bold text-lg">
            GoLive should be open to eligible creators — not only established creators.
          </p>
          <p>A creator does not need an existing audience to begin.</p>
          <p className="text-white font-bold text-xl">
            0 followers. 0 viewers. 1 GoLive. Infinite possibilities.
          </p>
          <p>
            LOUD! gives eligible users the opportunity to start broadcasting, be discovered, build a community and receive voluntary support through gifting, subject to LOUD!'s safety, monetization and community standards.
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
              GoLive Policy
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
              LOUD! GoLive Streaming Policy
            </h1>
            <p className="text-slate-400 text-base md:text-lg">
              Effective Date: September 2026
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

export default GoLivePolicyPage;