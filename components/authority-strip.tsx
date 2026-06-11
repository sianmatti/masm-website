const authoritySignals = [
  ["Senior-led", "Strategy and delivery stay close to experienced operators — not junior account handoffs."],
  ["Economics-first", "Priorities are tied to margin, payback, CAC, revenue quality, and operating capacity."],
  ["System-wide", "Paid, organic, analytics, automation, and conversion are managed as one model."],
  ["Built to execute", "Recommendations become sequenced operating plans, not slideware."],
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
