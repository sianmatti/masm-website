import { SectionHeading } from "./ui";

export const homepageFaqs = [
  {
    question: "What is the Growth Diagnostic?",
    answer:
      "A fixed-scope strategic assessment of MASM’s core growth system areas: economics, acquisition, search visibility, measurement, and automation maturity. It identifies the primary constraint and translates it into a prioritized 90-day direction.",
  },
  {
    question: "What does the Growth Diagnostic include?",
    answer:
      "You receive an Executive Growth Scorecard, Primary Constraint Analysis, Prioritized 90-Day Roadmap, and Leadership Decision Session. Delivery is within five business days after payment and required materials are confirmed.",
  },
  {
    question: "What is not included?",
    answer:
      "The Diagnostic does not include implementation, ad management, SEO execution, automation setup, website development, or ongoing reporting. Any execution support is scoped separately after the findings are reviewed.",
  },
  {
    question: "When does the timeline begin, and what access is needed?",
    answer:
      "The five-business-day timeline begins after payment and required materials are confirmed. MASM will identify the minimum useful inputs during the fit review, which may include exported reports or read-only access to relevant advertising, analytics, search, or CRM systems.",
  },
  {
    question: "What happens after the Diagnostic?",
    answer:
      "The Diagnostic comes before any Growth Engine engagement. If MASM is the right execution partner, the roadmap becomes the operating brief for a separately scoped engagement. If ongoing support is not recommended, leadership still leaves with the scorecard, priorities, and 90-day roadmap.",
  },
  {
    question: "What does the Growth Diagnostic cost?",
    answer:
      "The Growth Diagnostic is a fixed-scope strategic assessment priced at $1,250. The Diagnostic fee may be credited toward an eligible Growth Engine engagement started within 30 days.",
  },
];

export function Faq() {
  return (
    <section className="section-pad-sm bg-paper">
      <div className="section-shell">
        <SectionHeading
          index="05"
          label="Frequently asked"
          title={<>A clear first step, <span className="text-muted">without the ambiguity.</span></>}
        />
        <div className="mt-10 grid border-l border-t border-line sm:mt-12 lg:grid-cols-2">
          {homepageFaqs.map((item) => (
            <article key={item.question} className="border-b border-r border-line bg-white p-6 sm:p-8">
              <h3 className="text-lg font-medium leading-7 tracking-[-0.025em]">{item.question}</h3>
              <p className="mt-4 text-sm leading-6 text-muted">{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
