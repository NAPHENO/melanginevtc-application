import { StatsSection } from "../components/homecomponents/StatsSection";
import { DepartmentsSection } from "../components/homecomponents/DepartmentsSection";
import { NewsEventsSection } from "../components/homecomponents/NewsEventsSection";
import { PrincipalMessageSection } from "../components/homecomponents/PrincipalMessageSection";
import { StudentHubSection } from "../components/homecomponents/StudentHubSection";
import { ResearchSection } from "../components/homecomponents/ResearchSection";
import { CTASection } from "../components/homecomponents/CTASection";

export function Home() {
  return (
    <main>
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
