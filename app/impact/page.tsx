import ContactBand from "@/components/features/home/ContactBand"
import ImpactSection from "@/components/features/home/ImpactSection"
import ProjectsSection from "@/components/features/home/ProjectsSection"
import ImpactPillars from "@/components/features/impact/ImpactPillars"
import PageNav from "@/components/layout/PageNav"

export const metadata = {
  title: "Impact | Kenneth Adu-Akwabeng",
  description: "Community impact, scholarship advocacy, education support, and youth development outcomes.",
}

export default function ImpactPage() {
  return (
    <main className="pt-16">
      <ImpactSection />
      <ImpactPillars />
      <ProjectsSection />
      <ContactBand />
      <PageNav current="/impact" />
    </main>
  )
}
