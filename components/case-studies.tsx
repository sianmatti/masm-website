import { clientOutcomes } from "@/lib/client-outcomes";
import { sitePath } from "@/lib/site";
import { ButtonLink, SectionHeading } from "./ui";

export function CaseStudies() {
  return (
    <section id="work" className="section-pad bg-paper">
      <div className="section-shell">
        <SectionHeading
          index="02"
          label="Selected system outcomes"
          title={<>Proof, measured in <span className="text-muted">business impact.</span></>}
          description="Anonymized engagement outcomes showing how connected growth systems change commercial performance."
        />
        <div className="mt-7">
          <ButtonLink href={sitePath("/work/")} variant="secondary">
            Explore all Client Outcomes
          </ButtonLink>
        </div>
        <div className="mt-10 grid border-l border-t border-ink/15 sm:mt-12 lg:grid-cols-3">
          {clientOutcomes.map((item, index) => (
            <article
              key={item.title}
              className={`flex flex-col border-b border-r border-ink/15 p-5 sm:p-7 lg:min-h-[34rem] lg:p-8 ${
                index === 1 ? "bg-paper" : "bg-white"
              }`}
            >
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <span className="font-mono text-[10px] text-muted" aria-hidden="true">
                  0{index + 1}
                </span>
                <span className="eyebrow">{item.type}</span>
              </div>
              <p className="mt-3 font-mono text-[9px] uppercase tracking-wider text-muted">
                {item.engagement}
              </p>
              <h3 className="mt-7 text-2xl font-medium leading-[1.08] tracking-[-0.04em] sm:text-3xl">
                {item.title}
              </h3>
              <div className="mt-8 border-y border-ink/15 py-6">
                <strong className="block text-5xl font-semibold tracking-[-0.08em]">
                  {item.outcomes[0].value}
                </strong>
                <span className="mt-2 block text-sm text-muted">
                  {item.outcomes[0].label}
                </span>
                <div className="mt-5 border-t border-ink/10 pt-4">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-muted">
                    Supporting evidence
                  </span>
                  <p className="mt-1.5 text-base font-medium">
                    {item.outcomes[1].value}{" "}
                    <span className="font-normal text-muted">
                      {item.outcomes[1].label}
                    </span>
                  </p>
                </div>
              </div>
              <div className="mt-auto pt-6">
                <span className="font-mono text-[9px] uppercase tracking-wider text-muted">
                  Strategic signal
                </span>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {item.constraint}
                </p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-5 max-w-4xl text-xs leading-5 text-muted">
          Client names are withheld by agreement. Outcomes vary by company, market, and starting point.
        </p>
      </div>
    </section>
  );
}
