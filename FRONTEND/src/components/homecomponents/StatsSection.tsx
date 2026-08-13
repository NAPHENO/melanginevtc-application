// components/StatsSection.tsx
import { stats } from "../../data/content";

/**
 * Thin navy stat strip. Deliberately not a big hero-style number block —
 * the hero already owns that move — this is a quiet credibility rail.
 */
export function StatsSection() {
  return (
    <section className="bg-[#0F2247]">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-10 sm:grid-cols-4 sm:gap-4">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={
              i % 2 === 0
                ? "sm:border-l sm:border-white/15 sm:pl-4 sm:first:border-l-0 sm:first:pl-0"
                : "border-l border-white/15 pl-4 sm:border-l sm:pl-4"
            }
          >
            <p className="font-serif text-2xl font-bold text-white sm:text-3xl">
              {stat.value}
            </p>
            <p className="mt-1 text-xs uppercase tracking-wide text-white/60">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}