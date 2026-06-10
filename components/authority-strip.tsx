const authoritySignals = [
  ["Senior-led", "Strategy and delivery stay close to experienced operators."],
  ["Economics-first", "Decisions connect to margin, payback, and growth quality."],
  ["System-wide", "Acquisition, intelligence, and automation move together."],
  ["Built to execute", "Every recommendation is sequenced into an operating plan."],
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
            <strong className="block text-sm font-semibold">{title}</strong>
            <p className="mt-2 text-xs leading-5 text-muted">{copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
