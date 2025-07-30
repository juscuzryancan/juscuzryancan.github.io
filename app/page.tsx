import { Suspense } from "react";
import RedesignedHero from "@/components/redesigned-hero";
import AboutSection from "@/components/about-section";
import SkillsSectionWrapper from "@/components/skills-section-wrapper";
import RedesignedExperience from "@/components/redesigned-experience";
import RedesignedProjects from "@/components/redesigned-projects";
import EnhancedFooter from "@/components/enhanced-footer";
import ScrollProgress from "@/components/scroll-progress";
import { ErrorBoundary } from "@/components/error-boundary";
import { SectionFallback } from "@/components/section-fallback";
import { Loader2 } from "lucide-react";

function LoadingSection({ name }: { name: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <Loader2 className="h-8 w-8 animate-spin text-primary mb-4" />
      <p className="text-muted-foreground">Loading {name} section...</p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background pt-16">
      <ScrollProgress />

      <ErrorBoundary fallback={<SectionFallback title="Hero" />}>
        <Suspense fallback={<LoadingSection name="Hero" />}>
          <RedesignedHero />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary fallback={<SectionFallback title="About" />}>
        <Suspense fallback={<LoadingSection name="About" />}>
          <AboutSection />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary fallback={<SectionFallback title="Skills" />}>
        <SkillsSectionWrapper />
      </ErrorBoundary>

      <ErrorBoundary fallback={<SectionFallback title="Experience" />}>
        <Suspense fallback={<LoadingSection name="Experience" />}>
          <RedesignedExperience />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary fallback={<SectionFallback title="Projects" />}>
        <Suspense fallback={<LoadingSection name="Projects" />}>
          <RedesignedProjects />
        </Suspense>
      </ErrorBoundary>
      <EnhancedFooter />
    </main>
  );
}
