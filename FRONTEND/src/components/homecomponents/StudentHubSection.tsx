// components/StudentHubSection.tsx
import { ArrowUpRight } from "lucide-react";
import { studentHubLinks } from "../../data/content";

/**
 * Quick-access panel for the "Student Hub" nav item — the two icons already
 * living in the top utility bar (E-Learning / Student Portal) get proper
 * cards here plus the calendar and downloads a trainee actually needs.
 */
export function StudentHubSection() {
  return (
    <section id="student-hub" className="bg-[#0F2247] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C89B3C]">
              For Current Trainees
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-white sm:text-4xl">
              Student Hub
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/60">
            Everything you need for the term, in one place — no queueing at
            the admin office required.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-sm bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {studentHubLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="group flex flex-col justify-between bg-[#0F2247] p-6 transition-colors hover:bg-[#16305c]"
            >
              <div>
                <h3 className="font-serif text-lg font-semibold text-white">
                  {link.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {link.description}
                </p>
              </div>
              <ArrowUpRight className="mt-6 h-5 w-5 text-[#C89B3C] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
