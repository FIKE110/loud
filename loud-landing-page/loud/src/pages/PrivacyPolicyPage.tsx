
import { FC } from "react";

const PrivacyPolicyPage: FC = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
          LOUD PRIVACY POLICY
        </h1>

        <div className="prose prose-lg text-gray-700">
          <p className="mb-6">
            <strong>Effective Date:</strong> 01/02/2026
            <br />
            <strong>Last Updated:</strong> 01/02/2026
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                1. Introduction and Scope
              </h2>
              <p>
                At Loud, we recognize that your procurement and social data and
                business intelligence are among your most valuable assets. This
                Privacy Policy describes how we collect, use, process, and
                disclose your information, including personal and
                business-related data, in conjunction with your access to and
                use of our procurement and social services.
              </p>
              <p>
                By using our platform, you acknowledge the collection and
                processing of your data as outlined in this document.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                2. Data Categories We Collect
              </h2>
              <p>
                To facilitate a high-trust procurement environment, we process
                the following categories of data:
              </p>
              <div className="space-y-4 mt-4">
                <div>
                  <h3 className="font-bold">A. Personal & Identity Data</h3>
                  <ul className="list-disc list-inside">
                    <li>
                      User Information: Full names, professional titles, and
                      corporate email addresses.
                    </li>
                    <li>
                      Contact Details: Direct business phone numbers and
                      professional social profiles.
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold">
                    B. Business & KYB (Know Your Business) Data
                  </h3>
                  <ul className="list-disc list-inside">
                    <li>
                      Corporate Identity: Legal business name, registered
                      address, and Tax Identification Numbers (VAT/EIN/GST).
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold">C. Verification Data</h3>
                  <ul className="list-disc list-inside">
                    <li>
                      Industry credentials (ISO, diversity certifications),
                      trade licenses, and beneficial ownership details provided
                      for KYB verification.
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold">
                    D. Commercial & Transactional Data
                  </h3>
                  <ul className="list-disc list-inside">
                    <li>
                      Procurement Activity: RFQ documentation, proposal values,
                      cost breakdowns, delivery timelines, and historical
                      contract records.
                    </li>
                    <li>
                      Payment Data: We do not store raw credit card details. We
                      collect encrypted payment tokens and billing addresses via
                      our PCI-compliant payment processors.
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold">E. Technical & Usage Data</h3>
                  <ul className="list-disc list-inside">
                    <li>
                      System Metrics: IP addresses, browser types, device
                      identifiers, and geolocation data.
                    </li>
                    <li>
                      Engagement Logs: Timestamps of logins, bid submissions,
                      and internal platform messaging.
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold">F. Financial Data</h3>
                  <ul className="list-disc list-inside">
                    <li>
                      Bank account details strictly for the purpose of
                      processing payments, issuing refunds and preventing
                      fraudulent transactions..
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                3. Legal Basis for Processing (GDPR Compliance)
              </h2>
              <p>
                Under the GDPR, we process your data based on the following
                legal grounds:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>
                  <strong>Contractual Necessity:</strong> To perform the
                  services requested (e.g., matching Buyers with Suppliers).
                </li>
                <li>
                  <strong>Legal Obligation:</strong> To comply with tax,
                  anti-money laundering (AML), and KYB regulations.
                </li>
                <li>
                  <strong>Legitimate Interests:</strong> To improve platform
                  security, prevent fraud, and perform internal analytics.
                </li>
                <li>
                  <strong>Consent:</strong> Where you have explicitly opted-in to
                  receive marketing communications or allowed specific tracking
                  cookies.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                4. Third-Party Integrations & Data Sharing
              </h2>
              <p>
                We share information only with the following categories of
                service providers:
              </p>
              <table className="w-full mt-4 border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-300 p-2">CATEGORY</th>
                    <th className="border border-gray-300 p-2">PURPOSE</th>
                    <th className="border border-gray-300 p-2">DATA SHARED</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-2">
                      Payment Processors
                    </td>
                    <td className="border border-gray-300 p-2">
                      Processing transactions & payouts
                    </td>
                    <td className="border border-gray-300 p-2">
                      Billing info, Tokenized payment data.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">
                      KYB/Verification
                    </td>
                    <td className="border border-gray-300 p-2">
                      Identity and business authenticity checks
                    </td>
                    <td className="border border-gray-300 p-2">
                      Corporate docs, Tax IDs, Director names.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">
                      Analytics (e.g. Google)
                    </td>
                    <td className="border border-gray-300 p-2">
                      Analyzing platform performance
                    </td>
                    <td className="border border-gray-300 p-2">
                      Anonymized usage patterns, IP logs.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">
                      Cloud Infrastructure
                    </td>
                    <td className="border border-gray-300 p-2">
                      Secure data hosting (AWS/Azure/GCP)
                    </td>
                    <td className="border border-gray-300 p-2">
                      All encrypted platform data.
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                5. Security: Encryption & Storage
              </h2>
              <p>
                We implement "Privacy by Design" and "Privacy by Default"
                principles.
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>
                  <strong>Encryption:</strong> All data is encrypted in transit.
                </li>
                <li>
                  <strong>Access Control:</strong> Access to sensitive
                  commercial data is restricted to authorized personnel only
                  when required for technical support.
                </li>
                <li>
                  <strong>Data Isolation:</strong> Competitive bids are logically
                  isolated and remains inaccessible to competitors until the
                  official "bid opening" or disclosure event.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                6. Cookie & Tracking Policy
              </h2>
              <p>
                We use cookies to enhance your experience and secure our
                platform:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>
                  <strong>Essential Cookies:</strong> Required for login,
                  security, and session management.
                </li>
                <li>
                  <strong>Functional Cookies:</strong> Remember your preferences
                  (e.g., language or dashboard layout).
                </li>
                <li>
                  <strong>Analytical Cookies:</strong> Help us understand how
                  users navigate the site to improve UI/UX.
                </li>
                <li>
                  <strong>Management:</strong> You can manage cookie preferences
                  through your browser settings, though disabling essential
                  cookies may limit platform functionality.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                7. Data Retention & Deletion
              </h2>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>
                  <strong>Retention:</strong> We retain data for as long as your
                  account is active or as needed to provide services.
                </li>
                <li>
                  <strong>Statutory Requirements:</strong> Financial and
                  contract records may be retained for 7–10 years to comply
                  with tax and legal audits.
                </li>
                <li>
                  <strong>Deletion:</strong> Upon account termination, personal
                  data is purged or anonymized within 60 days, unless a legal
                  hold is in place. You may request a "Right to be Forgotten"
                  via our support channel.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                8. Your Rights (User Governance)
              </h2>
              <p>
                Regardless of your location, we provide the following rights to
                all users:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>
                  <strong>Right to Access:</strong> Request a copy of the
                  personal data we hold about you.
                </li>
                <li>
                  <strong>Right to Rectification:</strong> Update inaccurate or
                  incomplete information.
                </li>
                <li>
                  <strong>Right to Erasure:</strong> Request deletion of your
                  data (subject to legal retention requirements).
                </li>
                <li>
                  <strong>Right to Portability:</strong> Receive your data in a
                  structured, machine-readable format.
                </li>
                <li>
                  <strong>Right to Object:</strong> Opt-out of automated
                  decision-making or direct marketing.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                9. Contact Information
              </h2>
              <p>
                For questions regarding this policy or to exercise your data
                rights, please contact our Data Protection Officer:
              </p>
              <ul className="list-none space-y-2 mt-4">
                <li>
                  <strong>Email:</strong> support@loudproductslimited.com
                </li>
                <li>
                  <strong>Address:</strong> 76, Rumudumaya Air Port Road, Port Harcourt, Nigeria
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
