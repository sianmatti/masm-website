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
    question: "What do we receive after five business days?",
    answer:
      "You receive an executive growth scorecard, primary constraint analysis, prioritized 90-day roadmap, and leadership decision session.",
  },
  {
    question: "What happens after the Diagnostic?",
    answer:
      "If MASM is the right execution partner, the roadmap becomes the operating brief for a Growth Engine engagement. If not, the Diagnostic still gives leadership a clear decision base.",
  },
  {
    question: "Is the Diagnostic fee credited toward implementation?",
    answer:
      "Yes. The fee is credited toward eligible Growth Engine engagements started within 30 days.",
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
