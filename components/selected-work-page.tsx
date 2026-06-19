import { featuredWork, supportingWork, type SelectedWorkProject } from "@/lib/selected-work";
import { sitePath } from "@/lib/site";
import { BookingCta } from "./booking-cta";
import { PlatformEcosystem } from "./platform-ecosystem";
import { ButtonLink, SectionHeading } from "./ui";

function IdentityPlate({ project }: { project: SelectedWorkProject }) {
  return (
    <div className="flex min-h-28 items-center justify-between border-b border-ink/15 px-5 py-5 sm:px-7">
      <div>
        <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted">
          {project.public ? "Selected project" : "Confidential engagement"}
        </span>
        <h3 className="mt-3 max-w-sm text-xl font-semibold tracking-[-0.04em] sm:text-2xl">
          {project.name}
        </h3>
      </div>
      <span className="ml-5 grid h-12 w-12 shrink-0 place-items-center rounded-full border border-ink/15 bg-paper text-xs font-semibold tracking-[0.08em]">
        {project.public ? project.mark : "—"}
      </span>
    </div>
  );
}

function ProofVisual({ type }: { type: SelectedWorkProject["proof"] }) {
  if (type === "marketplace") {
    return (
      <div className="grid h-full min-h-52 place-items-center p-6" role="img" aria-label="Marketplace discovery and onboarding system">
        <div className="w-full max-w-sm">
          <div className="rounded-full border border-ink/15 bg-white px-4 py-3 text-xs text-muted shadow-card">
            Search for a service near you
          </div>
          <div className="mx-auto h-7 w-px bg-ink/20" />
          <div className="grid grid-cols-3 gap-2">
            {["Discover", "Compare", "Connect"].map((label) => (
              <div key={label} className="border border-ink/15 bg-white px-2 py-4 text-center text-[9px] font-medium uppercase tracking-wider">
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (type === "publisher") {
    return (
      <div className="grid h-full min-h-52 place-items-center p-6" role="img" aria-label="Connected publishing growth operation">
        <div className="grid w-full max-w-sm grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-2">
          {["Demand", "Lead", "CRM"].map((label, index) => (
            <div className="contents" key={label}>
              <div className="grid aspect-square place-items-center rounded-full border border-ink/15 bg-white text-[9px] font-medium uppercase tracking-wider">
                {label}
              </div>
              {index < 2 ? <span className="text-ink/30">→</span> : null}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === "hotel") {
    return (
      <div className="grid h-full min-h-52 place-items-center p-6" role="img" aria-label="Hotel direct-booking system">
        <div className="w-full max-w-sm border border-ink/15 bg-white p-5 shadow-card">
          <div className="flex items-center justify-between border-b border-ink/10 pb-4">
            <span className="text-xs font-semibold">Direct booking</span>
            <span className="h-2 w-2 rounded-full bg-ink" />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {["Search", "Stay", "Book"].map((label) => (
              <div key={label} className="bg-paper px-2 py-4 text-center text-[9px] uppercase tracking-wider">
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (type === "booking") {
    return (
      <div className="grid h-full min-h-52 place-items-center p-6" role="img" aria-label="Structured appointment booking flow">
        <div className="w-full max-w-sm">
          <div className="grid grid-cols-3 gap-2">
            {["Artist", "Date", "Time"].map((label, index) => (
              <div key={label} className={`border px-2 py-4 text-center text-[9px] uppercase tracking-wider ${index === 2 ? "border-ink bg-ink text-white" : "border-ink/15 bg-white"}`}>
                {label}
              </div>
            ))}
          </div>
          <div className="mt-3 border border-ink/15 bg-white px-4 py-3 text-center text-[10px] font-medium">
            Booking confirmed
          </div>
        </div>
      </div>
    );
  }

  if (type === "campaign") {
    return (
      <div className="grid h-full min-h-52 place-items-center p-6" role="img" aria-label="Content and Meta advertising system">
        <div className="relative aspect-square w-44">
          <div className="absolute inset-0 rounded-full border border-ink/15" />
          <div className="absolute inset-7 rounded-full border border-dashed border-ink/25" />
          <div className="absolute inset-[3.25rem] grid place-items-center rounded-full bg-ink text-center text-[9px] font-medium uppercase tracking-wider text-white">
            Turnout
          </div>
          {["Content", "Creative", "Pixel", "Retarget"].map((label, index) => (
            <span
              key={label}
              className={`absolute rounded-full border border-ink/15 bg-white px-2 py-1 text-[7px] font-medium uppercase tracking-wider shadow-card ${
                index === 0 ? "-left-3 top-7" : index === 1 ? "-right-5 top-10" : index === 2 ? "-left-2 bottom-8" : "-right-6 bottom-6"
              }`}
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    );
  }

  if (type === "commerce") {
    return (
      <div className="grid h-full min-h-52 place-items-center p-6" role="img" aria-label="Commerce promotion measurement system">
        <div className="w-full max-w-sm space-y-2">
          {[
            ["Tracking", "Measured"],
            ["Offer", "Coordinated"],
            ["Landing page", "Aligned"],
          ].map(([label, status]) => (
            <div key={label} className="border border-ink/15 bg-white p-3">
              <div className="flex justify-between text-[9px] uppercase tracking-wider">
                <span>{label}</span>
                <span className="text-muted">{status}</span>
              </div>
              <div className="mt-2 h-1 bg-ink/10">
                <div className="h-full w-full bg-ink" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === "website") {
    return (
      <div className="grid h-full min-h-52 place-items-center p-6" role="img" aria-label="Corporate website information structure">
        <div className="w-full max-w-sm border border-ink/15 bg-white shadow-card">
          <div className="flex h-8 items-center gap-1.5 border-b border-ink/10 px-3">
            <span className="h-1.5 w-1.5 rounded-full bg-ink/20" />
            <span className="h-1.5 w-1.5 rounded-full bg-ink/20" />
            <span className="h-1.5 w-1.5 rounded-full bg-ink/20" />
          </div>
          <div className="grid grid-cols-[1.3fr_1fr] gap-4 p-4">
            <div>
              <div className="h-3 w-4/5 bg-ink" />
              <div className="mt-2 h-1.5 w-full bg-ink/15" />
              <div className="mt-1.5 h-1.5 w-2/3 bg-ink/15" />
            </div>
            <div className="aspect-[4/3] bg-paper" />
          </div>
        </div>
      </div>
    );
  }

  if (type === "communications") {
    return (
      <div className="grid h-full min-h-52 place-items-center p-6" role="img" aria-label="Integrated marketing communications model">
        <div className="grid w-full max-w-sm grid-cols-2 gap-2">
          {["Research", "Positioning", "Creative", "Distribution"].map((label, index) => (
            <div key={label} className={`border px-3 py-5 text-center text-[9px] font-medium uppercase tracking-wider ${index === 3 ? "border-ink bg-ink text-white" : "border-ink/15 bg-white"}`}>
              {label}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="grid h-full min-h-52 place-items-center p-6" role="img" aria-label="Recurring campaign creative system">
      <div className="grid w-full max-w-sm grid-cols-3 gap-2">
        {[0, 1, 2].map((item) => (
          <div key={item} className="aspect-[4/5] border border-ink/15 bg-white p-3 shadow-card">
            <div className="h-1.5 w-2/3 bg-ink" />
            <div className="mt-3 aspect-square bg-paper" />
            <div className="mt-3 h-1 w-full bg-ink/15" />
            <div className="mt-1 h-1 w-3/4 bg-ink/15" />
          </div>
        ))}
      </div>
    </div>
  );
}

function FeaturedProject({ project, index }: { project: SelectedWorkProject; index: number }) {
  return (
    <article id={project.id} className="border border-ink/15 bg-white">
      <IdentityPlate project={project} />
      <div className="grid lg:grid-cols-12">
        <div className="border-b border-ink/15 lg:col-span-5 lg:border-b-0 lg:border-r">
          <ProofVisual type={project.proof} />
        </div>
        <div className="flex flex-col p-5 sm:p-7 lg:col-span-7 lg:p-9">
          <div className="flex items-center justify-between gap-5">
            <span className="font-mono text-[9px] uppercase tracking-wider text-muted">
              0{index + 1} / {project.year}
            </span>
            <span className="text-right text-xs text-muted">{project.descriptor}</span>
          </div>
          <p className="mt-7 max-w-2xl text-base leading-7 text-muted">{project.summary}</p>
          <div className="mt-7 flex flex-wrap gap-2">
            {project.scope.map((item) => (
              <span key={item} className="rounded-full border border-ink/15 px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.08em]">
                {item}
              </span>
            ))}
          </div>
          {project.result ? (
            <div className="mt-8 border-t border-ink/15 pt-6">
              <strong className="block text-4xl font-semibold tracking-[-0.065em] sm:text-5xl">
                {project.result.value}
              </strong>
              <span className="mt-2 block text-sm leading-6 text-muted">{project.result.label}</span>
              {project.result.note ? (
                <span className="mt-1 block text-xs leading-5 text-muted">{project.result.note}</span>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}

function SupportingProject({ project }: { project: SelectedWorkProject }) {
  return (
    <article className="flex flex-col border-b border-r border-ink/15 bg-white">
      <IdentityPlate project={project} />
      <ProofVisual type={project.proof} />
      <div className="flex flex-1 flex-col border-t border-ink/15 p-5 sm:p-7">
        <div className="flex items-center justify-between gap-4">
          <span className="font-mono text-[9px] uppercase tracking-wider text-muted">{project.year}</span>
          <span className="text-right text-[10px] leading-4 text-muted">{project.descriptor}</span>
        </div>
        <p className="mt-5 text-sm leading-6 text-muted">{project.summary}</p>
          {project.result ? (
            <div className="mt-auto pt-7">
              <strong className="block text-3xl font-semibold tracking-[-0.055em]">{project.result.value}</strong>
              <span className="mt-1 block text-xs leading-5 text-muted">{project.result.label}</span>
              {project.result.note ? (
                <span className="mt-2 block text-[10px] leading-4 text-muted">
                  {project.result.note}
                </span>
              ) : null}
            </div>
          ) : null}
      </div>
    </article>
  );
}

export function SelectedWorkPage() {
  return (
    <main>
      <section className="grid-field bg-paper pb-12 pt-8 sm:pb-14 sm:pt-10 lg:pb-16 lg:pt-11">
        <div className="section-shell grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
          <div className="lg:col-span-7">
            <span className="eyebrow">Selected Work</span>
            <h1 className="display-xl mt-6 max-w-4xl text-balance sm:mt-7">
              Evidence of systems{" "}
              <span className="text-muted">built to work.</span>
            </h1>
          </div>
          <div className="max-w-xl lg:col-span-5 lg:justify-self-end">
            <p className="text-base leading-7 text-muted lg:text-lg lg:leading-8">
              Selected brand, platform, website, campaign, and operating work.
              Each project is presented through the constraint, the system built,
              and the outcome it supported.
            </p>
            <p className="mt-4 text-xs leading-5 text-muted">
              Confidential engagements are anonymized. Reported outcomes reflect
              the circumstances and attribution available for each project.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/15 bg-white">
        <div className="section-shell grid divide-y divide-ink/15 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {[
            ["Brand", "Identity and market presence"],
            ["Demand", "Content and paid acquisition"],
            ["Operations", "Platforms, data, and workflows"],
          ].map(([label, copy]) => (
            <div key={label} className="py-6 sm:px-6 sm:first:pl-0 sm:last:pr-0">
              <strong className="block text-sm font-semibold">{label}</strong>
              <span className="mt-1 block text-xs leading-5 text-muted">{copy}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad bg-paper">
        <div className="section-shell">
          <SectionHeading
            index="01"
            label="Featured systems"
            title={<>From business constraint to <span className="text-muted">working infrastructure.</span></>}
            description="Projects where MASM connected multiple disciplines into one commercial or operating system."
          />
          <div className="mt-10 grid gap-5 sm:mt-12 lg:mt-16 xl:grid-cols-2">
            {featuredWork.map((project, index) => (
              <FeaturedProject key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-y border-ink/15 bg-white">
        <div className="section-shell">
          <SectionHeading
            index="02"
            label="Selected execution"
            title={<>Strategy made <span className="text-muted">tangible.</span></>}
            description="Focused campaign, communications, creative, and website work supporting specific commercial objectives."
          />
          <div className="mt-10 grid border-l border-t border-ink/15 sm:mt-12 md:grid-cols-2 xl:grid-cols-3">
            {supportingWork.map((project) => (
              <SupportingProject key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <PlatformEcosystem />

      <section className="section-pad bg-ink text-white">
        <div className="section-shell grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <span className="eyebrow !text-white/45">The common thread</span>
            <h2 className="display-lg mt-6 max-w-5xl">
              Brand, demand, measurement, and operations should reinforce one another.
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-base leading-7 text-white/55">
              MASM’s role changes by constraint. The operating principle does not:
              connect the work around the commercial outcome.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:flex-col">
              <BookingCta inverted source="selected_work_final">
                Book a Growth Diagnostic
              </BookingCta>
              <ButtonLink href={sitePath("/work/")} inverted className="!border-white/30 !bg-transparent !text-white hover:!bg-white hover:!text-ink">
                View Client Outcomes
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
