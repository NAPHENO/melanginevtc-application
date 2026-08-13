import { StatsSection } from "../components/homecomponents/StatsSection";
import { DepartmentsSection } from "../components/homecomponents/DepartmentsSection";
import { NewsEventsSection } from "../components/homecomponents/NewsEventsSection";
import { PrincipalMessageSection } from "../components/homecomponents/PrincipalMessageSection";
import { StudentHubSection } from "../components/homecomponents/StudentHubSection";
import { ResearchSection } from "../components/homecomponents/ResearchSection";
import { CTASection } from "../components/homecomponents/CTASection";
import {Hero} from "@/components/homecomponents/Hero.tsx";

export function Home() {
  return (
    <main>
        <Hero/>
      <StatsSection />
      <PrincipalMessageSection />
      <DepartmentsSection />
      <StudentHubSection />
      <ResearchSection />
      <NewsEventsSection />
      <CTASection />
    </main>
  );
}
