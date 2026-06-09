import { ButtonLink } from "./ui";

const checks = [
  ["Acquisition efficiency", "72"],
  ["Search visibility", "46"],
  ["Measurement integrity", "61"],
  ["Automation maturity", "38"],
];

export function Diagnostic() {
  return (
    <section id="diagnostic" className="bg-paper py-24 sm:py-32">
      <div className="section-shell">
        <div className="overflow-hidden border border-ink/20 bg-white shadow-card">
          <div className="grid lg:grid-cols-2">
            <div className="p-7 sm:p-12 lg:p-16">
              <span className="eyebrow">Growth Systems Diagnostic</span>
              <h2 className="mt-8 text-4xl font-medium leading-[1] tracking-[-0.06em] sm:text-6xl">
                Find the friction in your growth engine.
              </h2>
              <p className="mt-6 max-w-md text-base leading-7 text-muted">
                Assess the gaps between your economics, demand, data, and
                operations, then leave with a prioritized 90-day direction.
              </p>
              <div className="mt-9">
                <ButtonLink href="/diagnostic">
                  See the full diagnostic
                </ButtonLink>
              </div>
              <p className="mt-4 font-mono text-[9px] uppercase tracking-wider text-muted">
                Fixed scope · Senior-led · Yours to keep
              </p>
            </div>
            <div className="border-t border-ink/20 bg-ink p-7 text-white sm:p-12 lg:border-l lg:border-t-0">
              <div className="flex items-center justify-between border-b border-white/15 pb-5">
                <span className="font-mono text-[10px] tracking-wider text-white/45">SYSTEM READOUT</span>
                <span className="flex items-center gap-2 font-mono text-[9px] text-white/45">
                  <i className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-white" />
                  SAMPLE
                </span>
              </div>
              <div className="mt-10 space-y-8">
                {checks.map(([label, value]) => (
                  <div key={label}>
                    <div className="mb-3 flex items-center justify-between">
                      <span className="text-sm text-white/65">{label}</span>
                      <span className="font-mono text-xs">{value}/100</span>
                    </div>
                    <div className="h-1 bg-white/15">
                      <div className="h-full bg-white" style={{ width: `${value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12 grid grid-cols-3 border border-white/15">
                {[
                  ["04", "systems"],
                  ["11", "signals"],
                  ["03", "priorities"],
                ].map(([value, label], index) => (
                  <div key={label} className={`p-4 ${index > 0 ? "border-l border-white/15" : ""}`}>
                    <span className="block text-2xl tracking-[-0.04em]">{value}</span>
                    <span className="mt-1 block font-mono text-[8px] uppercase tracking-wider text-white/40">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
