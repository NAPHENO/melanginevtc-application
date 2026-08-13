// components/NewsEventsSection.tsx
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { newsItems } from "../../data/content";

/**
 * Reproduces the "Latest News & Events" block already drafted in the Stitch
 * mockup (same eyebrow, heading, and three-card layout) so it drops in under
 * the hero without a visual seam. The featured "Event" card keeps the amber
 * top rule shown in the mockup.
 */
export function NewsEventsSection() {
  return (
    <section id="news" className="bg-[#F7F5F0] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8892B]">
            Stay Informed
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-[#0F2247] sm:text-4xl">
            Latest News &amp; Events
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-[#B8892B]" />
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {newsItems.map((item) => (
            <article
              key={item.id}
              className={`flex flex-col bg-white p-6 ${
                item.featured
                  ? "border border-[#E7E2D8] border-t-4 border-t-[#B8892B]"
                  : "border border-[#E7E2D8]"
              }`}
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-[#B8892B]">
                {item.tag}
              </span>
              <h3 className="mt-3 font-serif text-lg font-semibold leading-snug text-[#0F2247]">
                {item.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[#5B6472]">
                {item.excerpt}
              </p>
              <a
                href={item.href}
                className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-[#0F2247] hover:text-[#B8892B]"
              >
                Read More <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            asChild
            variant="outline"
            className="rounded-none border-[#0F2247] text-[#0F2247] hover:bg-[#0F2247] hover:text-white"
          >
            <a href="/news">View All News &amp; Events</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
