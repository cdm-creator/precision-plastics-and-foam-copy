import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { TopBar } from "@/components/layout/top-bar";
import Link from "next/link";

const sections = [
  {
    title: "Examination, Suitability, and Claims",
    body:
      "Purchaser should examine, count, and test each shipment promptly on arrival and before any product has been processed, installed, modified, or changed from its original condition. Precision Plastics & Foam will recognize no claims after products have been processed or changed in any manner. If there is damage, shortage, discrepancy between the packing list and products delivered, or another delivery error, Purchaser must promptly file a claim with the carrier and notify Precision Plastics & Foam within ten (10) days following delivery. Purchaser is responsible for determining whether the products are suitable for Purchaser's intended use, whether or not that use is known to Precision Plastics & Foam. Failure to make a timely claim will be deemed full acceptance of the products delivered and a waiver of such claims."
  },
  {
    title: "Delivery and Freight",
    body:
      "Unless otherwise stated on the invoice or written order confirmation, delivery of all products is FOB Precision Plastics & Foam's facility. Delivery dates are estimates made in good faith and may be affected by supplier delays, carrier delays, material availability, customer changes, or other causes outside our reasonable control. Products will be shipped as stated on the order or according to shipping instructions provided by Purchaser. If no instructions are provided, Precision Plastics & Foam may select the route and mode of transportation in its discretion. Risk of loss transfers to Purchaser when products are delivered to the carrier or otherwise made available at the place of origin."
  },
  {
    title: "Product Warranties",
    body:
      "Precision Plastics & Foam warrants that products manufactured and sold by Precision Plastics & Foam will be free from defects in material and workmanship under normal use and proper maintenance, and will be manufactured in accordance with approved specifications within commercially reasonable tolerances. If Purchaser believes any product does not comply with this warranty, Purchaser must report the alleged defect within the applicable warranty period and cooperate with Precision Plastics & Foam in determining the condition and cause of the alleged defect. Unless a different warranty period is stated in writing, the warranty expires ten (10) days after shipment. This warranty does not apply to products that have been modified, altered, misused, improperly installed, improperly stored, repaired by unauthorized parties, or used outside approved specifications."
  },
  {
    title: "Exclusive Remedies and Limitation of Liability",
    body:
      "If Purchaser establishes a breach of warranty, Purchaser's exclusive remedy and Precision Plastics & Foam's sole liability will be, at Precision Plastics & Foam's option, repair, replacement, rework, or refund of the purchase price for the affected product. Precision Plastics & Foam will not be liable for general, special, incidental, indirect, consequential, punitive, or penal damages, including loss of profits, loss of use, interruption of work, damage to other property, or claims arising from breach of warranty, breach of contract, negligence, strict liability, misrepresentation, or otherwise, except to the extent applicable law requires liability for personal injury."
  },
  {
    title: "Disclaimer of Implied Warranties",
    body:
      "Except for the express warranties stated in these Terms, Precision Plastics & Foam makes no warranties or representations of any kind, express or implied, including warranties of merchantability, fitness for a particular purpose, non-infringement, or suitability for any specific application. All implied warranties are excluded to the fullest extent permitted by law. Products sold as-is are sold without warranty."
  },
  {
    title: "Indemnity",
    body:
      "Purchaser acknowledges that it has made its own investigation of the potential results of the use or application of the products and assumes the risk that desired results may not be achieved or that adverse results may occur. Purchaser shall indemnify, defend, and hold Precision Plastics & Foam harmless from and against claims, demands, liabilities, damages, penalties, costs, and expenses, including reasonable attorney, consultant, and expert fees, arising out of or relating to Purchaser's use, installation, modification, resale, or application of the products."
  },
  {
    title: "Design and Technical Advice",
    body:
      "Any technical advice, drawings, design assistance, material recommendations, or application guidance furnished before or after delivery represents Precision Plastics & Foam's judgment under the circumstances and is provided for convenience only. Purchaser remains responsible for testing and confirming suitability for its intended use. Any engineering, drawings, programming, tooling concepts, insert layouts, packaging designs, or similar work created or developed by Precision Plastics & Foam remain the property of Precision Plastics & Foam unless otherwise agreed in writing. Purchaser may not reverse engineer or permit others to manufacture from Precision Plastics & Foam designs without written authorization."
  },
  {
    title: "Overages and Underages",
    body:
      "Overages and underages for custom products may occur in accordance with current manufacturing practices. Unless specifically agreed in writing, a variation in quantity of approximately ten percent (10%) will be accepted as satisfactory delivery and invoiced accordingly."
  },
  {
    title: "Credit and Payment",
    body:
      "Credit is subject to approval and ongoing review. Precision Plastics & Foam may invoice upon shipment, upon availability for will call, or in advance of production when appropriate. Unless otherwise stated in writing, payment terms are net ten (10) days. Orders from delinquent customers may be held until overdue balances are paid. Past due amounts may be subject to a service charge of 1.5% per month or the maximum amount permitted by law, whichever is less. Precision Plastics & Foam may require payment in advance, cash payment, security, or other adequate assurance if financial condition or other grounds for insecurity warrant such action. Purchaser shall reimburse Precision Plastics & Foam for reasonable collection costs, including attorney's fees and costs."
  },
  {
    title: "Expenses",
    body:
      "If requested by Precision Plastics & Foam, Purchaser shall prepay transportation, insurance, storage, handling, special packaging, expedited processing, or other expenses connected with delivery or performance. Such charges may be added as separate line items to the invoice."
  },
  {
    title: "Returns",
    body:
      "No products may be returned without prior written consent from Precision Plastics & Foam. No shipping costs on returns will be paid unless previously authorized in writing. Approved returns may be subject to a restocking fee. Custom products, including custom foam inserts, machined plastic parts, fabricated components, special-order materials, and products made to customer specifications, may not be returned unless Precision Plastics & Foam determines that they are defective or nonconforming."
  },
  {
    title: "Taxes",
    body:
      "Quoted prices do not include sales, use, excise, privilege, value-added, customs, duties, levies, franchise, or similar taxes or charges unless expressly stated. In the absence of proper exemption documentation supplied by Purchaser, Purchaser will reimburse Precision Plastics & Foam for taxes and charges assessed upon the production, storage, sale, transportation, export, import, or use of the products."
  },
  {
    title: "Tooling, Setup, and Procurement",
    body:
      "Tooling, setup, programming, fixture, die, plate, template, or procurement charges may cover design, service, storage, maintenance, setup, and procurement activity. Unless otherwise agreed in writing, tooling and related production aids remain the property of Precision Plastics & Foam, even if Purchaser paid a tooling or setup charge. Precision Plastics & Foam has no liability for loss or damage to tooling, and inactive tooling may be disposed of after a reasonable period unless other arrangements are agreed in writing."
  },
  {
    title: "Entire Agreement",
    body:
      "Unless specifically incorporated by written agreement, no oral or written understandings, representations, warranties, purchase order terms, acknowledgments, or other documents will modify these Terms. Additional or different terms proposed by Purchaser will not become part of the sale unless expressly agreed to in writing by Precision Plastics & Foam."
  },
  {
    title: "Force Majeure",
    body:
      "Except for payment obligations, neither party will be liable for failure or delay in performance due to causes beyond its reasonable control, including natural disasters, pandemics, governmental acts, laws or regulations, labor disruptions, transportation stoppages or slowdowns, supplier delays, material shortages, utility failures, or inability to procure parts or materials. If such causes continue for more than ninety (90) days, the affected party may terminate the affected order upon notice."
  },
  {
    title: "Pricing Adjustments",
    body:
      "Prices are subject to adjustment upon notice due to increases in material costs, scarcity, supplier pricing, labor costs, freight, tariffs, inflation, customer changes, delays, or other causes beyond Precision Plastics & Foam's reasonable control. Blanket order pricing and long-term quotations may be reviewed and adjusted periodically unless otherwise agreed in writing."
  },
  {
    title: "Governing Law",
    body:
      "These Terms and any sale of products or services by Precision Plastics & Foam will be governed by and construed in accordance with the laws of the state identified in the applicable written agreement, invoice, or order confirmation, without regard to conflict of law rules. If no state is identified, applicable governing law will be determined by Precision Plastics & Foam's principal place of business."
  },
  {
    title: "Miscellaneous, Waiver, and Termination",
    body:
      "Purchaser may not assign or transfer any order without prior written consent. Failure by Precision Plastics & Foam to strictly enforce any provision will not be deemed a waiver or create a course of dealing. Precision Plastics & Foam may suspend delivery or terminate an order if Purchaser fails to make payment when due, fails to accept delivery, objects to pricing adjustments made in accordance with these Terms, or otherwise materially breaches its obligations. Upon termination, Purchaser remains responsible for work completed, design fees, materials ordered, costs incurred, and, where applicable, lost profits."
  }
];

export default function TermsConditionsOfSalePage() {
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
              <span className="text-muted-strong">
                Terms &amp; Conditions of Sale
              </span>
            </nav>

            <h1 className="font-heading text-[2rem] font-semibold leading-tight text-midnight sm:text-[2.35rem]">
              Terms and Conditions of Sale
            </h1>

            <div className="mt-8 space-y-8">
              <p className="body-large text-muted-strong">
                These terms and conditions (&quot;Terms&quot;) apply to any
                order, quotation, invoice, sale, custom manufacturing project,
                or related service provided by Precision Plastics &amp; Foam,
                unless a separate written agreement signed by Precision Plastics
                &amp; Foam expressly states otherwise. All orders are accepted
                and all sales are made subject to these Terms and the terms
                stated on the applicable quote, order confirmation, invoice, or
                written contract.
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
