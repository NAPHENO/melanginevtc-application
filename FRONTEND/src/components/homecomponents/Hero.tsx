import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import merangine from '../../assets/merangine.jpg'

export function Hero() {
    return (
        <section
            className="relative min-h-[520px] bg-cover bg-center"
            style={{
                backgroundImage: `url(${merangine})`,
            }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-[#031936]/75" />

            {/* Hero content */}
            <div className="relative z-10 flex min-h-[520px] items-center justify-center px-6 py-20">
                <div className="mx-auto max-w-3xl text-center text-white">

                    {/* Eyebrow */}
                    <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#d9b62c]">
                        Excellence in Vocational Training
                    </p>

                    {/* Heading */}
                    <h1 className="font-serif text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
                        Skills for Tomorrow,
                        <br />
                        Opportunities for Everyone.
                    </h1>

                    {/* Description */}
                    <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-gray-200">
                        Providing accessible, high-quality technical training designed
                        for the future of work. Join a legacy of excellence and
                        innovation.
                    </p>

                    {/* Buttons */}
                    <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">

                        <Button
                            className="h-12 rounded-none bg-[#e1bb28] px-9 text-[10px] font-bold uppercase tracking-wide text-[#071a36] hover:bg-[#f0cc45]"
                        >
                            Apply Now
                        </Button>

                        <Button
                            variant="outline"
                            className="h-12 rounded-none border-[#d5b52b] bg-transparent px-9 text-[10px] font-bold uppercase tracking-wide text-white hover:bg-white hover:text-[#071a36]"
                        >
                            Explore Courses
                            <ArrowRight className="ml-2 h-3 w-3" />
                        </Button>

                    </div>

                </div>
            </div>
        </section>
    );
}
