import {
  platformCategories,
  platforms,
  type Platform,
  type PlatformCategory,
} from "@/lib/platforms";
import { sitePath } from "@/lib/site";
import { SectionHeading } from "./ui";

export function PlatformLogo({ platform }: { platform: Platform }) {
  return (
    <div
      className="flex min-h-20 items-center gap-3 px-4 py-4 sm:min-h-24 sm:gap-4 sm:px-5"
      aria-label={`${platform.name}, a platform MASM works with`}
    >
      {platform.logoPath ? (
        <span className="grid h-9 w-9 shrink-0 place-items-center">
          <img
            src={sitePath(platform.logoPath)}
            alt=""
            aria-hidden="true"
            width="32"
            height="32"
            className={`h-7 w-7 object-contain sm:h-8 sm:w-8 ${
              platform.logoTreatment === "brand-color" ? "" : "opacity-75"
            }`}
          />
        </span>
      ) : null}
      <span className={platform.logoPath ? "" : "py-1"}>
        <strong className="block text-xs font-medium leading-5 tracking-[-0.02em] sm:text-sm">
          {platform.name}
        </strong>
      </span>
    </div>
  );
}

export function PlatformGroup({ category }: { category: PlatformCategory }) {
  const categoryPlatforms = platforms.filter(
    (platform) => platform.category === category,
  );

  return (
    <section
      className="border-b border-ink/15"
      aria-labelledby={`platform-${category.replaceAll(" ", "-").toLowerCase()}`}
    >
      <div className="flex min-h-14 items-center border-b border-ink/15 px-4 py-3 sm:px-5">
        <h3
          id={`platform-${category.replaceAll(" ", "-").toLowerCase()}`}
          className="font-mono text-[9px] font-medium uppercase tracking-[0.16em] text-muted"
        >
          {category}
        </h3>
      </div>
      <div className="grid grid-cols-2 divide-x divide-ink/15 md:grid-cols-3 xl:grid-cols-5">
        {categoryPlatforms.map((platform) => (
          <div key={platform.name} className="border-t border-ink/15 first:border-t-0">
            <PlatformLogo platform={platform} />
          </div>
        ))}
      </div>
    </section>
  );
}

export function PlatformEcosystem() {
  return (
    <section id="platforms" className="section-pad border-b border-ink/15 bg-paper">
      <div className="section-shell">
        <SectionHeading
          index="03"
          label="Platform ecosystem"
          title={
            <>
              Common platforms{" "}
              <span className="text-muted">we work with.</span>
            </>
          }
          description="Established platforms used across acquisition, measurement, infrastructure, commerce, CRM, and automation."
        />

        <div className="mt-10 border-x border-t border-ink/15 bg-white sm:mt-12 lg:mt-16">
          {platformCategories.map((category) => (
            <PlatformGroup key={category} category={category} />
          ))}
        </div>

        <div className="mt-5 grid gap-3 border-t border-ink/15 pt-5 text-xs leading-5 text-muted sm:grid-cols-2 sm:gap-8">
          <p>
            Platforms are selected according to the operating constraint, not
            treated as a fixed stack.
          </p>
          <p className="sm:text-right">
            Listed platforms indicate practical use, not formal partnership or
            certification.
          </p>
        </div>
      </div>
    </section>
  );
}
