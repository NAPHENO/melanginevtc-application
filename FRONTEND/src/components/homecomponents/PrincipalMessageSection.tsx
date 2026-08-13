// components/PrincipalMessageSection.tsx
import { Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

/**
 * Completes the "Message from the Principal" block already started in the
 * mockup. Photo defaults to initials until a real portrait from the
 * Facebook page / college is dropped into /public/images/principal.jpg.
 */
export function PrincipalMessageSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-1 items-center gap-10 rounded-sm border-l-4 border-[#B8892B] bg-[#FBFAF7] p-8 sm:p-12 md:grid-cols-[auto,1fr]">
          <Avatar className="h-28 w-28 border-4 border-white shadow-sm md:h-32 md:w-32">
            {/* Swap in the real portrait once available */}
            <AvatarImage src="/images/principal.jpg" alt="Dr. Okumu J.W. Odhiambo" />
            <AvatarFallback className="bg-[#0F2247] font-serif text-2xl text-[#C89B3C]">
              OO
            </AvatarFallback>
          </Avatar>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8892B]">
              Leadership
            </p>
            <h2 className="mt-2 font-serif text-2xl font-bold text-[#0F2247] sm:text-3xl">
              Message from the Principal
            </h2>

            <div className="mt-5 flex gap-3">
              <Quote className="h-6 w-6 shrink-0 text-[#C89B3C]" />
              <p className="text-[15px] italic leading-relaxed text-[#4B5563]">
                Every learner who walks through our gates leaves with a skill
                they can put to work the same day they graduate. That is the
                promise Melangine VTC makes to Mirangine and to Nyandarua
                County.
              </p>
            </div>

            <p className="mt-4 font-serif text-lg font-semibold text-[#0F2247]">
              Dr. Okumu J.W. Odhiambo
            </p>
            <p className="text-sm text-[#8A8375]">Principal, Melangine VTC</p>

            <Button
              asChild
              variant="link"
              className="mt-2 h-auto p-0 text-sm font-semibold text-[#0F2247] hover:text-[#B8892B]"
            >
              <a href="/about/principals-message">Read the full message →</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
