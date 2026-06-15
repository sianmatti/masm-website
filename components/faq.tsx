import { SectionHeading } from "./ui";

export const homepageFaqs = [
  {
    question: "What is the Growth Diagnostic?",
    answer:
      "A fixed-scope strategic assessment of MASM’s core growth system areas: economics, acquisition, search visibility, measurement, and automation maturity. It identifies the primary constraint and translates it into a prioritized 90-day direction.",
  },
  {
    question: "Who is the Growth Diagnostic for?",
    answer:
      "It is for founders and growth leaders already investing across multiple channels but lacking one clear operating model for profitable growth.",
  },
  {
    question: "What does the Growth Diagnostic include?",
    answer:
      "You receive an Executive Growth Scorecard, Primary Constraint Analysis, Prioritized 90-Day Roadmap, and Leadership Decision Session. Delivery is within five business days after payment and required materials are confirmed.",
  },
  {
    question: "What happens after the Diagnostic?",
    answer:
      "If MASM is the right execution partner, the roadmap becomes the operating brief for a Growth Engine engagement. If not, the Diagnostic still gives leadership a clear decision base.",
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
