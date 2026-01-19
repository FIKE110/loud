
import { type FC } from "react";

const AcceptableUsePolicyPage: FC = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
          LOUD User Conduct & Platform Integrity Standards
        </h1>

        <div className="prose prose-lg text-gray-700">
          <p className="mb-6">
            <strong>Introduction:</strong> This document outlines the mandatory
            behavioral standards for utilizing our Service. Our objective is to
            defend the technical framework of Loud, uphold the principles of
            equitable trade, and ensure system reliability. These rules are
            binding for all team members, external suppliers, independent
            contractors, bidders, purchasers and every other User
            notwithstanding the capacity.
          </p>

          <p className="mb-6">
            <strong>Operational Date:</strong> January 8, 2026
            <br />
            <strong>Applicability:</strong> These terms govern every interaction
            within Loud.
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                I. Fundamental Expectations
              </h2>
              <p>
                Every participant must navigate the site with a commitment to
                legal compliance and professional ethics. To preserve the
                credibility of our trade environment, all dealings must be
                executed with absolute honesty and openness.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                II. Forbidden Commercial Misconduct
              </h2>
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
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                III. Protocol & Authorization Governance
              </h2>
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
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                IV. Cyber-Security & Technical Safeguards
              </h2>
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
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                V. Information Security
              </h2>
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
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                VI. Penalties for Non-Compliance
              </h2>
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
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                VII. Integrity Reporting
              </h2>
              <p>
                If you identify suspicious behavior, specifically regarding
                market manipulation or embezzlement, notify Loud immediately. We
                guarantee protection against any form of reprisal for those
                reporting concerns in good faith.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcceptableUsePolicyPage;
