import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aevino | Terms and Conditions",
  description: "Terms and Conditions for Aevino Solutions",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Terms and Conditions"
        description="Your privacy is important to us. This policy explains how we collect, use, and protect your information."
      />

      <section className="pt-[120px] pb-[120px]">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="privacy-policy prose max-w-none">
              <h1 className="mb-8 text-3xl font-bold text-black sm:text-4xl dark:text-white">
                AEVINO SOLUTIONS Terms and Conditions
              </h1>

              <div className="space-y-8">
                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-black dark:text-white">
                    1. ACCEPTANCE OF TERMS
                  </h2>
                  <p className="text-body-color text-base leading-relaxed">
                    {`By accessing or using Aevino Solutions Pvt Ltd's ("Company,"
                    "we," "us," or "our") website or services, you ("Client,"
                    "you," or "your") agree to be bound by these Terms of
                    Service ("Terms").`}
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-black dark:text-white">
                    2. DESCRIPTION OF SERVICES
                  </h2>
                  <p className="text-body-color mb-3 text-base leading-relaxed">
                    Aevino Solutions provides:
                  </p>
                  <ul className="text-body-color list-disc space-y-1 pl-6">
                    <li>Custom software development</li>
                    <li>Web and mobile application development</li>
                    <li>AI and machine learning solutions</li>
                    <li>IT consulting and strategy</li>
                    <li>Cloud solutions and integration</li>
                    <li>Database design and management</li>
                    <li>Quality assurance and testing</li>
                    <li>Ongoing support and maintenance</li>
                  </ul>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-black dark:text-white">
                    3. CLIENT RESPONSIBILITIES
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <h3 className="mb-2 text-xl font-medium text-black dark:text-white">
                        3.1 Information and Cooperation
                      </h3>
                      <ul className="text-body-color list-disc space-y-1 pl-6">
                        <li>Provide accurate and complete information</li>
                        <li>Respond promptly to requests for feedback</li>
                        <li>Provide necessary access to systems and data</li>
                        <li>Designate authorized representatives</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="mb-2 text-xl font-medium text-black dark:text-white">
                        3.2 Content and Materials
                      </h3>
                      <ul className="text-body-color list-disc space-y-1 pl-6">
                        <li>Ensure you have rights to all provided content</li>
                        <li>Maintain backup copies of your data</li>
                        <li>Comply with applicable laws and regulations</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-black dark:text-white">
                    4. COMPANY RESPONSIBILITIES
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <h3 className="mb-2 text-xl font-medium text-black dark:text-white">
                        4.1 Service Delivery
                      </h3>
                      <ul className="text-body-color list-disc space-y-1 pl-6">
                        <li>
                          Deliver services with professional skill and care
                        </li>
                        <li>Meet agreed-upon specifications and timelines</li>
                        <li>Maintain confidentiality of client information</li>
                        <li>Provide regular project updates</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="mb-2 text-xl font-medium text-black dark:text-white">
                        4.2 Quality Assurance
                      </h3>
                      <ul className="text-body-color list-disc space-y-1 pl-6">
                        <li>Test deliverables before deployment</li>
                        <li>Provide documentation and training</li>
                        <li>Offer support during transition periods</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-black dark:text-white">
                    5. PROJECT SCOPE AND CHANGES
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <h3 className="mb-2 text-xl font-medium text-black dark:text-white">
                        5.1 Scope Definition
                      </h3>
                      <ul className="text-body-color list-disc space-y-1 pl-6">
                        <li>
                          Services will be defined in separate statements of
                          work
                        </li>
                        <li>All deliverables will be clearly specified</li>
                        <li>Timelines and milestones will be established</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="mb-2 text-xl font-medium text-black dark:text-white">
                        5.2 Change Requests
                      </h3>
                      <ul className="text-body-color list-disc space-y-1 pl-6">
                        <li>Changes to scope require written approval</li>
                        <li>
                          Additional costs will be documented and agreed upon
                        </li>
                        <li>Timeline adjustments may be necessary</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-black dark:text-white">
                    6. PAYMENT TERMS
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <h3 className="mb-2 text-xl font-medium text-black dark:text-white">
                        6.1 Fees and Billing
                      </h3>
                      <ul className="text-body-color list-disc space-y-1 pl-6">
                        <li>Fees will be specified in project agreements</li>
                        <li>Payment terms typically net 30 days</li>
                        <li>Late payments may incur interest charges</li>
                        <li>Disputed amounts must be raised within 30 days</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="mb-2 text-xl font-medium text-black dark:text-white">
                        6.2 Expenses
                      </h3>
                      <ul className="text-body-color list-disc space-y-1 pl-6">
                        <li>Pre-approved expenses will be reimbursed</li>
                        <li>
                          Third-party licenses and services billed separately
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-black dark:text-white">
                    7. INTELLECTUAL PROPERTY
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <h3 className="mb-2 text-xl font-medium text-black dark:text-white">
                        7.1 Client IP
                      </h3>
                      <ul className="text-body-color list-disc space-y-1 pl-6">
                        <li>Clients retain ownership of their existing IP</li>
                        <li>
                          Clients own custom-developed solutions upon full
                          payment
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="mb-2 text-xl font-medium text-black dark:text-white">
                        7.2 Company IP
                      </h3>
                      <ul className="text-body-color list-disc space-y-1 pl-6">
                        <li>We retain rights to our methodologies and tools</li>
                        <li>
                          We may use project learnings for future development
                        </li>
                        <li>Pre-existing IP remains our property</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="mb-2 text-xl font-medium text-black dark:text-white">
                        7.3 Third-Party IP
                      </h3>
                      <ul className="text-body-color list-disc space-y-1 pl-6">
                        <li>
                          {` Third-party licenses are client's responsibility`}
                        </li>
                        <li>We will identify third-party components used</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-black dark:text-white">
                    8. CONFIDENTIALITY
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <h3 className="mb-2 text-xl font-medium text-black dark:text-white">
                        8.1 Mutual Obligations
                      </h3>
                      <ul className="text-body-color list-disc space-y-1 pl-6">
                        <li>
                          Both parties will protect confidential information
                        </li>
                        <li>
                          Confidentiality survives termination of agreement
                        </li>
                        <li>Standard exceptions apply (public domain, etc.)</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="mb-2 text-xl font-medium text-black dark:text-white">
                        8.2 Data Protection
                      </h3>
                      <ul className="text-body-color list-disc space-y-1 pl-6">
                        <li>We implement appropriate security measures</li>
                        <li>Client data will not be used for other purposes</li>
                        <li>Data breaches will be promptly reported</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-black dark:text-white">
                    9. WARRANTIES AND DISCLAIMERS
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <h3 className="mb-2 text-xl font-medium text-black dark:text-white">
                        9.1 Limited Warranty
                      </h3>
                      <ul className="text-body-color list-disc space-y-1 pl-6">
                        <li>
                          Services will be performed in a workmanlike manner
                        </li>
                        <li>
                          Deliverables will substantially conform to
                          specifications
                        </li>
                        <li>Warranty period is 90 days from delivery</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="mb-2 text-xl font-medium text-black dark:text-white">
                        9.2 Disclaimers
                      </h3>
                      <ul className="text-body-color list-disc space-y-1 pl-6">
                        <li>No warranty of uninterrupted operation</li>
                        <li>No warranty against third-party claims</li>
                        <li>Client responsible for data backup and recovery</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-black dark:text-white">
                    10. LIMITATION OF LIABILITY
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <h3 className="mb-2 text-xl font-medium text-black dark:text-white">
                        10.1 Liability Cap
                      </h3>
                      <ul className="text-body-color list-disc space-y-1 pl-6">
                        <li>
                          Our liability is limited to fees paid for the specific
                          service
                        </li>
                        <li>
                          No liability for indirect, consequential, or punitive
                          damages
                        </li>
                        <li>
                          Limitations apply to maximum extent permitted by law
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="mb-2 text-xl font-medium text-black dark:text-white">
                        10.2 Exceptions
                      </h3>
                      <ul className="text-body-color list-disc space-y-1 pl-6">
                        <li>
                          {`Limitations don't apply to gross negligence or willful
                          misconduct`}
                        </li>
                        <li>
                          Confidentiality breaches subject to separate damages
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-black dark:text-white">
                    11. TERMINATION
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <h3 className="mb-2 text-xl font-medium text-black dark:text-white">
                        11.1 Termination Rights
                      </h3>
                      <ul className="text-body-color list-disc space-y-1 pl-6">
                        <li>
                          Either party may terminate with 30 days written notice
                        </li>
                        <li>Immediate termination for material breach</li>
                        <li>
                          Client may terminate for convenience with fee payment
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="mb-2 text-xl font-medium text-black dark:text-white">
                        11.2 Effect of Termination
                      </h3>
                      <ul className="text-body-color list-disc space-y-1 pl-6">
                        <li>Client pays for services rendered</li>
                        <li>Confidentiality obligations survive</li>
                        <li>Return of confidential information</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-black dark:text-white">
                    12. DISPUTE RESOLUTION
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <h3 className="mb-2 text-xl font-medium text-black dark:text-white">
                        12.1 Governing Law
                      </h3>
                      <ul className="text-body-color list-disc space-y-1 pl-6">
                        <li>These terms are governed by Indian law</li>
                        <li>
                          Disputes subject to jurisdiction of Indian courts
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="mb-2 text-xl font-medium text-black dark:text-white">
                        12.2 Resolution Process
                      </h3>
                      <ul className="text-body-color list-disc space-y-1 pl-6">
                        <li>Good faith negotiation required first</li>
                        <li>Mediation before litigation</li>
                        <li>Arbitration if agreed by both parties</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-black dark:text-white">
                    13. GENERAL PROVISIONS
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <h3 className="mb-2 text-xl font-medium text-black dark:text-white">
                        13.1 Entire Agreement
                      </h3>
                      <ul className="text-body-color list-disc space-y-1 pl-6">
                        <li>
                          These terms, together with project agreements,
                          constitute the entire agreement
                        </li>
                        <li>Modifications must be in writing</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="mb-2 text-xl font-medium text-black dark:text-white">
                        13.2 Severability
                      </h3>
                      <ul className="text-body-color list-disc space-y-1 pl-6">
                        <li>
                          {`Invalid provisions don't affect remainder of terms`}
                        </li>
                        <li>
                          Unenforceable provisions will be modified to be
                          enforceable
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="mb-2 text-xl font-medium text-black dark:text-white">
                        13.3 Force Majeure
                      </h3>
                      <ul className="text-body-color list-disc space-y-1 pl-6">
                        <li>
                          Neither party liable for events beyond reasonable
                          control
                        </li>
                        <li>
                          Includes natural disasters, government actions, etc.
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section className="mt-12 border-t pt-8">
                  <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-6 dark:border-yellow-800 dark:bg-yellow-900/20">
                    <h3 className="mb-3 text-lg font-semibold text-yellow-800 dark:text-yellow-200">
                      ⚠️ IMPORTANT LEGAL NOTICE
                    </h3>
                    <p className="text-base leading-relaxed text-yellow-700 dark:text-yellow-300">
                      These documents are templates and should be reviewed by a
                      qualified attorney before use. Laws vary by jurisdiction,
                      and your specific business needs may require
                      modifications. Consider consulting with legal counsel to
                      ensure compliance with applicable laws and regulations in
                      your area.
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
