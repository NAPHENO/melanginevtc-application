// components/CTASection.tsx
import { Button } from "@/components/ui/button";
import { admissionsNote } from "../../data/content";

/**
 * Final admissions push before the footer. Kept as a single band (not another
 * card grid) so the page has a clear closing beat rather than fading out.
 */
export function CTASection() {
  return (
    <section className="bg-[#F7F5F0] py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-serif text-2xl font-bold text-[#0F2247] sm:text-3xl">
          Ready to learn a trade that works for you?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-[#5B6472]">
          {admissionsNote}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            asChild
            className="rounded-none bg-[#0F2247] px-8 text-white hover:bg-[#16305c]"
          >
            <a href="/apply">Apply Now</a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-none border-[#0F2247] px-8 text-[#0F2247] hover:bg-[#0F2247] hover:text-white"
          >
            <a
              href="https://www.kuccps.ac.ke"
              target="_blank"
              rel="noreferrer"
            >
              Apply via KUCCPS
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
