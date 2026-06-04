import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { TopBar } from "@/components/layout/top-bar";
import Link from "next/link";

const sections = [
  {
    title: "Information We Collect",
    body:
      "We collect only the information we reasonably need to respond to inquiries, provide quotes, process orders, improve our website, and support our products and services. This may include contact information such as your name, company, job title, email address, phone number, mailing address, and information you submit through forms, quote requests, email, phone calls, or other communications."
  },
  {
    title: "Information You Provide",
    body:
      "You may provide information when you request a quote, contact our team, ask about custom foam inserts, plastic machining, packaging solutions, subscribe to updates, or otherwise communicate with us. If a transaction is processed, billing, shipping, purchase order, tax, and payment-related information may be collected as needed to complete the transaction."
  },
  {
    title: "Information Collected Automatically",
    body:
      "When you visit our website, certain information may be collected automatically, including pages viewed, time spent on the site, referring pages, browser type, device type, operating system, IP address, approximate location, and similar usage data. We may use cookies and similar technologies to help the site function, understand visitor activity, and improve the user experience."
  },
  {
    title: "How We Use Information",
    body:
      "We use information to operate and improve our website, respond to inquiries, prepare quotes, provide product and service information, process orders, communicate with customers, support customer service, improve marketing and user experience, maintain security, prevent fraud, and comply with legal or regulatory obligations."
  },
  {
    title: "How We Share Information",
    body:
      "We do not sell, distribute, or lease personal information to third parties for their independent marketing purposes. We may share information with trusted service providers who help us operate the website, host data, analyze site use, process communications, support business systems, fulfill orders, or perform related services on our behalf. These providers are expected to use information only for the services they provide to us."
  },
  {
    title: "Legal Compliance and Business Transfers",
    body:
      "We may disclose information when required by law, regulation, subpoena, court order, or other legal process, or when we believe disclosure is necessary to protect our rights, property, customers, website users, or the public. If Precision Plastics & Foam is involved in a merger, acquisition, financing, restructuring, or sale of assets, information may be transferred as part of that transaction."
  },
  {
    title: "Third-Party Links",
    body:
      "Our website may include links to third-party websites or services. These external sites are not operated by Precision Plastics & Foam, and we are not responsible for their content, privacy policies, security, or practices. We encourage you to review the privacy policy of any third-party site you visit."
  },
  {
    title: "Your Privacy Rights",
    body:
      "Depending on your location, you may have rights to request access to personal information, request deletion, request correction of inaccurate information, opt out of certain uses, or receive information about how your data is handled. To exercise available rights, contact us through the website. We may need to verify your identity before processing a request."
  },
  {
    title: "Children's Privacy",
    body:
      "Our website is intended for business and general informational use and is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe a child has provided personal information to us, please contact us so we can take appropriate action."
  },
  {
    title: "Data Security",
    body:
      "We use reasonable technical and organizational measures designed to protect personal information from unauthorized access, use, disclosure, alteration, or loss. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security."
  },
  {
    title: "Changes to This Policy",
    body:
      "We may update this Privacy Policy from time to time. The Last Updated date indicates when the policy was most recently revised. We encourage visitors to review this page periodically to stay informed about our privacy practices."
  },
  {
    title: "Contact Us",
    body:
      "If you have questions or concerns about this Privacy Policy or how your information is handled, please contact Precision Plastics & Foam through the contact form on this website."
  }
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <TopBar />
      <Header />
      <main className="bg-white">
        <section className="py-16 lg:py-20">
          <div className="container-width">
            <nav className="small-text mb-7 flex flex-wrap items-center gap-2 text-muted">
              <Link href="/" className="transition hover:text-accent">
                Home
              </Link>
              <span>/</span>
              <span className="text-muted-strong">Privacy Policy</span>
            </nav>

            <h1 className="font-heading text-[2rem] font-semibold leading-tight text-midnight sm:text-[2.35rem]">
              Privacy Policy
            </h1>
            <p className="small-text mt-3 text-muted">Last Updated: May 19, 2026</p>

            <div className="mt-8 space-y-8">
              <p className="body-large text-muted-strong">
                Precision Plastics &amp; Foam operates this website to provide
                marketing, product, service, and company information. This
                Privacy Policy explains how we collect, use, disclose, and
                protect information when you use our website or communicate with
                us through it.
              </p>
              <p className="body-large text-muted-strong">
                By using this website, you agree to the collection and use of
                information in accordance with this policy. We use personal
                information to provide and improve our website, respond to
                customer needs, and support our products and services.
              </p>

              {sections.map((section) => (
                <section key={section.title}>
                  <h2 className="font-heading text-xl font-semibold leading-tight text-midnight">
                    {section.title}
                  </h2>
                  <p className="body mt-3 text-muted-strong">{section.body}</p>
                </section>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
