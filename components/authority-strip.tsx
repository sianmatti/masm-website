const authoritySignals = [
  ["Senior-led clarity", "Growth decisions stay close to experienced operators, not account handoff layers."],
  ["Commercial prioritization", "Every recommendation is tied to margin, payback, revenue quality, or operating capacity."],
  ["Connected growth model", "Acquisition, SEO, analytics, automation, and conversion are reviewed as one system."],
  ["Execution-ready roadmap", "The output is a sequenced operating plan, not a static audit deck."],
];

export function AuthorityStrip() {
  return (
    <section aria-label="MASM engagement principles" className="border-y border-line bg-white">
      <div className="section-shell grid sm:grid-cols-2 lg:grid-cols-4">
        {authoritySignals.map(([title, copy], index) => (
          <div
            key={title}
            className={`py-6 sm:p-6 lg:py-8 ${
              index ? "border-t border-line sm:border-l sm:border-t-0" : ""
            }`}
          >
            <strong className="block text-sm font-semibold tracking-[-0.02em]">{title}</strong>
            <p className="mt-2 max-w-xs text-xs leading-5 text-muted">{copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
