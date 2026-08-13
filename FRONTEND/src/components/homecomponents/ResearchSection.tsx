// components/ResearchSection.tsx
import { Handshake, FlaskConical, Users } from "lucide-react";

const pillars = [
  {
    icon: FlaskConical,
    title: "Curriculum Review",
    body: "Course content is checked yearly against KNEC and industry standards so trainees leave with skills employers are actually asking for.",
  },
  {
    icon: Handshake,
    title: "Industry Attachment",
    body: "Every trainee completes a supervised industrial attachment with a partner workshop, garage, salon or contractor before graduating.",
  },
  {
    icon: Users,
    title: "Community Outreach",
    body: "Short courses and open workshops bring practical skills to the wider Mirangine and Nyandarua community, not just enrolled trainees.",
  },
];

/**
 * "Research" here reads as applied, TVET-appropriate research — curriculum
 * relevance and industry linkage — rather than academic publishing, which
 * matches what a vocational college actually does.
 */
export function ResearchSection() {
  return (
    <section id="research" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,320px),1fr] lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8892B]">
              Research &amp; Industry Links
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-[#0F2247] sm:text-4xl">
              Training that keeps up with the trade
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[#5B6472]">
              We work with local employers and county government to keep
              every department's curriculum tied to what Nyandarua's job
              market needs right now.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.title}>
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0F2247]">
                    <Icon className="h-5 w-5 text-[#C89B3C]" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-4 font-serif text-base font-semibold text-[#0F2247]">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5B6472]">
                    {pillar.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
