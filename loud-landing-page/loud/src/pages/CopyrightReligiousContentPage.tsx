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
        <Link to="/copyright-religious-content-policy" className="text-sm hover:text-[#01B2FE] transition-colors">Copyright & Religious Content</Link>
        <Link to="/golive-policy" className="text-sm hover:text-[#01B2FE] transition-colors">GoLive Policy</Link>
        <Link to="/coin-policy" className="text-sm hover:text-[#01B2FE] transition-colors">Coin Policy</Link>
        <Link to="/quarterly-ambassador" className="text-sm hover:text-[#01B2FE] transition-colors">Quarterly Ambassador Program</Link>
      </div>
      <div className="text-center text-xs text-slate-600">
        <p className="font-black uppercase tracking-[0.4em]">© 2026 LOUD PRODUCT LIMITED. ALL RIGHTS RESERVED.</p>
      </div>
    </div>
  </footer>
);

const CopyrightReligiousContentPage: FC = () => {
  const sections = [
    {
      question: "1. Purpose",
      answer: (
        <div className="space-y-4">
          <p>
            LOUD! is committed to protecting intellectual property, the integrity of creators' original work, and respectful communication within its community.
          </p>
          <p>
            This policy establishes standards governing the copying, reproduction, editing, quotation, redistribution and presentation of sermons, teachings, speeches, religious messages, educational materials and other original content published by pastors, ministers, churches, religious organizations and other content owners.
          </p>
          <p>
            LOUD! does not permit users to deliberately take another person's message or content out of context and present it in a manner that falsely represents the speaker's meaning, promotes ridicule, or is intended to mislead the public.
          </p>
        </div>
      ),
    },
    {
      question: "2. Protection of Original Religious Content",
      answer: (
        <div className="space-y-4">
          <p>
            Sermons, teachings, speeches, books, recordings, videos, written materials, photographs, livestreams and other original works may be protected by copyright or other intellectual-property rights.
          </p>
          <p>Users must not:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Reproduce substantial portions of another person's copyrighted content without appropriate authorization or a legally applicable exception.</li>
            <li>Re-upload or redistribute another person's sermon, teaching, video or recording as though it were their own.</li>
            <li>Remove or conceal attribution, ownership information, watermarks or other identifying information.</li>
            <li>Edit, splice, crop, rearrange or otherwise manipulate a person's message in a manner that materially changes or misrepresents its meaning.</li>
            <li>Present an extracted statement as though it represents the speaker's complete position when the surrounding context materially changes its meaning.</li>
            <li>Use another person's religious teaching primarily to provoke ridicule, harassment or targeted abuse.</li>
            <li>Monetize or commercially exploit another person's copyrighted content without the necessary rights or authorization.</li>
          </ul>
        </div>
      ),
    },
    {
      question: "3. Contextual Integrity",
      answer: (
        <div className="space-y-4">
          <p>
            LOUD! recognizes that short clips taken from longer sermons or teachings can sometimes create a substantially different impression from the original communication.
          </p>
          <p>Accordingly, users must not intentionally:</p>
          <div>
            <h4 className="font-bold text-white mt-4">a. Misrepresent context</h4>
            <p className="mt-1">Present an isolated statement as the complete position of the speaker where the omitted context materially changes the meaning.</p>
          </div>
          <div>
            <h4 className="font-bold text-white mt-4">b. Manipulate meaning</h4>
            <p className="mt-1">Use editing, sequencing, captions, voiceovers, translations or other modifications to create a meaning that the original speaker did not communicate.</p>
          </div>
          <div>
            <h4 className="font-bold text-white mt-4">c. Manufacture controversy</h4>
            <p className="mt-1">Extract religious teachings primarily to create a misleading controversy, provoke hostility or encourage users to ridicule the speaker.</p>
          </div>
          <div>
            <h4 className="font-bold text-white mt-4">d. Misrepresent authorship</h4>
            <p className="mt-1">Give the impression that another person's teaching, statement or intellectual work originated with the person posting it.</p>
          </div>
        </div>
      ),
    },
    {
      question: "4. Permitted Commentary, Criticism and Discussion",
      answer: (
        <div className="space-y-4">
          <p>LOUD! does not intend to prevent legitimate discussion or criticism.</p>
          <p>Users may, where legally permitted:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Quote reasonable portions of a sermon or teaching for purposes such as commentary, criticism, review, education, news reporting or discussion.</li>
            <li>Discuss or disagree with a pastor's, minister's or religious organization's publicly expressed views.</li>
            <li>Share a link or reference to the original content.</li>
            <li>Create transformative commentary that adds substantial original analysis or criticism.</li>
            <li>Use limited excerpts where a copyright exception or other applicable law permits the use.</li>
          </ul>
          <p>
            However, the user remains responsible for ensuring that their use complies with applicable copyright and other laws.
          </p>
          <p>
            Where an excerpt is used, users are encouraged to identify the original speaker and, where practical, provide sufficient context for users to understand the source and purpose of the excerpt.
          </p>
        </div>
      ),
    },
    {
      question: "5. Attribution Does Not Automatically Create Permission",
      answer: (
        <div className="space-y-4">
          <p>Giving credit to the original creator does not by itself give a user permission to reproduce copyrighted material.</p>
          <p>Statements such as:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>"Credit to the owner."</li>
            <li>"I don't own this video."</li>
            <li>"No copyright infringement intended."</li>
          </ul>
          <p>do not automatically authorize the use of copyrighted content.</p>
          <p>
            Users should obtain permission or rely on a valid legal basis for using another person's copyrighted work.
          </p>
        </div>
      ),
    },
    {
      question: "6. Altered or Misleading Religious Content",
      answer: (
        <div className="space-y-4">
          <p>LOUD! may take action where a user materially alters another person's message and presents the altered material as authentic.</p>
          <p>Examples include:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Cutting several sentences from a sermon to create a substantially different meaning.</li>
            <li>Combining unrelated portions of a sermon to manufacture a statement the speaker did not make.</li>
            <li>Adding captions that contradict the speaker's actual words.</li>
            <li>Adding a voiceover that falsely suggests the speaker said something they did not say.</li>
            <li>Editing a religious teaching specifically to portray the speaker as holding a position that the complete recording does not support.</li>
            <li>Publishing a short clip with a misleading title or description designed to cause viewers to misunderstand the speaker's position.</li>
          </ul>
          <p>
            Where technically feasible, LOUD! may require users to clearly identify substantially edited or manipulated content.
          </p>
        </div>
      ),
    },
    {
      question: "7. Copyright Complaints",
      answer: (
        <div className="space-y-4">
          <p>
            A pastor, minister, church, religious organization, creator, copyright owner or authorized representative may submit a copyright complaint to LOUD! when they believe their protected work has been used without authorization.
          </p>
          <p>A complaint should, where applicable, include:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Identification of the copyright owner.</li>
            <li>Identification of the original work.</li>
            <li>Identification of the allegedly infringing LOUD! content.</li>
            <li>The location or URL of the content.</li>
            <li>An explanation of the alleged infringement.</li>
            <li>Evidence of ownership or authorization to act on behalf of the owner.</li>
            <li>Contact information for the complainant.</li>
            <li>Any other information reasonably required by LOUD! to assess the complaint.</li>
          </ul>
          <p>
            LOUD! may remove, restrict or disable access to content while a complaint is reviewed, where appropriate.
          </p>
        </div>
      ),
    },
    {
      question: "8. Counter-Notifications and Disputes",
      answer: (
        <div className="space-y-4">
          <p>
            Where applicable, users whose content has been removed or restricted may submit a counter-notification or dispute through LOUD!'s designated copyright process.
          </p>
          <p>
            LOUD! may request additional information from both parties and may consider the relevant evidence, applicable law and circumstances surrounding the use.
          </p>
          <p>
            LOUD! may restore content where a complaint is withdrawn, determined to be invalid, or where the user establishes a lawful basis for the use, subject to applicable law.
          </p>
        </div>
      ),
    },
    {
      question: "9. Repeat Copyright Infringement",
      answer: (
        <div className="space-y-4">
          <p>LOUD! may maintain a repeat-infringer system.</p>
          <p>Depending on the seriousness and frequency of violations, enforcement may include:</p>
          <ol className="list-decimal list-inside space-y-2">
            <li>Warning or educational notice.</li>
            <li>Removal of the offending content.</li>
            <li>Restriction of posting or sharing privileges.</li>
            <li>Temporary suspension of the account.</li>
            <li>Removal of monetization or creator privileges.</li>
            <li>Permanent termination of the account.</li>
            <li>Other measures permitted under LOUD!'s Terms and applicable law.</li>
          </ol>
          <p>Serious or deliberate violations may result in immediate account action.</p>
        </div>
      ),
    },
    {
      question: "10. Legal Rights of Content Owners",
      answer: (
        <div className="space-y-4">
          <p>LOUD! does not determine or adjudicate private legal claims between users and copyright owners.</p>
          <p>
            Nothing in this policy prevents a copyright owner or other rights holder from pursuing remedies available under applicable law.
          </p>
          <p>
            A rights holder may independently seek legal remedies, including through the appropriate courts or other legally authorized processes, where they believe their rights have been violated.
          </p>
          <p>
            LOUD! may cooperate with lawful legal requests, court orders, subpoenas or other valid legal processes as required by applicable law.
          </p>
        </div>
      ),
    },
    {
      question: "11. Religious Respect and Community Standards",
      answer: (
        <div className="space-y-4">
          <p>
            Copyright protection operates alongside LOUD!'s Community Standards.
          </p>
          <p>
            Users are permitted to disagree with religious teachings and engage in good-faith discussion. However, criticism must not become targeted harassment, threats, incitement, impersonation or deliberate deception.
          </p>
          <p>
            LOUD! does not prohibit criticism of a religion, pastor, minister, church or religious organization merely because the subject disagrees with the criticism.
          </p>
          <p>
            The focus of enforcement is the conduct and content involved — such as copyright infringement, deceptive manipulation, harassment or misleading presentation — not the user's religious viewpoint.
          </p>
        </div>
      ),
    },
    {
      question: "12. Reporting Mechanism",
      answer: (
        <div className="space-y-4">
          <p>
            LOUD! will provide an accessible mechanism through which copyright owners and authorized representatives can report potentially infringing content.
          </p>
          <p>
            Reports may be reviewed using a combination of automated detection, human review and supporting documentation.
          </p>
          <p>
            LOUD! may use technology to identify potentially duplicated or substantially matching content, but automated detection does not by itself constitute a final determination of infringement.
          </p>
        </div>
      ),
    },
    {
      question: "13. Enforcement and Platform Discretion",
      answer: (
        <div className="space-y-4">
          <p>LOUD! reserves the right, consistent with applicable law and its Terms of Service, to:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Remove or restrict content.</li>
            <li>Limit distribution of content.</li>
            <li>Suspend relevant features.</li>
            <li>Restrict monetization.</li>
            <li>Suspend or terminate accounts.</li>
            <li>Preserve relevant information where legally appropriate.</li>
            <li>Respond to valid legal requests.</li>
            <li>Take other reasonable measures necessary to protect users and intellectual-property rights.</li>
          </ul>
          <p>
            Enforcement may consider the nature of the violation, the user's history, whether the conduct appears deliberate, the amount and significance of copyrighted material used, the surrounding context and applicable law.
          </p>
        </div>
      ),
    },
    {
      question: "14. Important Legal Principle",
      answer: (
        <div className="space-y-4">
          <p>
            LOUD! does not treat every quotation, reference, criticism or discussion of another person's work as copyright infringement.
          </p>
          <p>
            Copyright law varies by jurisdiction. Certain uses may be legally permitted without the copyright owner's permission, including certain forms of criticism, commentary, education, news reporting, quotation or other legally recognized exceptions.
          </p>
          <p>Users remain responsible for complying with applicable law.</p>
        </div>
      ),
    },
    {
      question: "15. Policy Objective",
      answer: (
        <div className="space-y-4">
          <p>LOUD! believes that people should be able to:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Create without having their work stolen.</li>
            <li>Criticize without being misrepresented.</li>
            <li>Share ideas without manufacturing false context.</li>
            <li>Discuss religion without harassment.</li>
            <li>And protect original intellectual work without suppressing legitimate public conversation.</li>
          </ul>
          <p>
            By using LOUD!, you agree to respect applicable intellectual-property rights and the contextual integrity of content shared on the platform.
          </p>
          <p>
            Violations may result in content removal, account restrictions, suspension or termination, and may also expose the offending user to legal consequences under applicable law.
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
              Copyright Policy
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
              Copyright, Contextual Integrity & Religious Content Policy
            </h1>
            <p className="text-slate-400 text-base md:text-lg">
              Effective Date: 30/09/2026
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

export default CopyrightReligiousContentPage;