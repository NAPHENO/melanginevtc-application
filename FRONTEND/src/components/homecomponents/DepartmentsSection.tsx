// components/DepartmentsSection.tsx
import { ArrowRight } from "lucide-react";
import { departments } from "../../data/content";

/**
 * Departments / trades on offer.
 * Signature element: each card carries a small brass "workshop tag" in the
 * top-left corner — a nod to the physical tool tags used in a trade workshop —
 * instead of a generic numbered badge.
 */
export function DepartmentsSection() {
  return (
    <section id="departments" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8892B]">
            Hands-On Training
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-[#0F2247] sm:text-4xl">
            Departments &amp; Trades
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-[#B8892B]" />
          <p className="mt-4 text-[15px] leading-relaxed text-[#4B5563]">
            Seven TVETA-accredited trades, taught in fully equipped workshops
            by instructors who still work in the trade.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {departments.map((dept) => {
            const Icon = dept.icon;
            return (
              <a
                key={dept.slug}
                href={`/departments/${dept.slug}`}
                className="group relative overflow-hidden rounded-sm border border-[#E7E2D8] bg-[#FBFAF7] p-6 pt-8 transition-colors hover:border-[#B8892B]/60 hover:bg-white"
              >
                {/* workshop tag */}
                <span
                  aria-hidden
                  className="absolute left-0 top-0 flex h-11 w-11 items-center justify-center bg-[#0F2247]"
                  style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
                >
                  <Icon
                    className="mb-4 ml-[-2px] mt-[-2px] h-4 w-4 text-[#C89B3C]"
                    strokeWidth={1.75}
                  />
                </span>

                <h3 className="font-serif text-lg font-semibold leading-snug text-[#0F2247]">
                  {dept.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5B6472]">
                  {dept.blurb}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-[#E7E2D8] pt-4">
                  <span className="text-xs uppercase tracking-wide text-[#8A8375]">
                    {dept.intake}
                  </span>
                  <ArrowRight className="h-4 w-4 text-[#B8892B] transition-transform group-hover:translate-x-1" />
                </div>
              </a>
            );
          })}

          {/* Closing tile: keeps the grid from ending on an awkward orphan card
              on the lg:3-col layout (7 items) and points to the full list. */}
          <a
            href="/departments"
            className="flex flex-col items-start justify-center rounded-sm border border-dashed border-[#C89B3C]/60 bg-[#0F2247] p-6 text-white transition-colors hover:bg-[#16305c]"
          >
            <span className="font-serif text-lg font-semibold">
              See every course
            </span>
            <span className="mt-2 text-sm text-white/70">
              Full unit breakdown, entry requirements and fees.
            </span>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#C89B3C]">
              View all departments <ArrowRight className="h-4 w-4" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
