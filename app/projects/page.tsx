import ContactBand from "@/components/features/home/ContactBand"
import ProjectsSection from "@/components/features/home/ProjectsSection"
import ProjectAreas from "@/components/features/projects/ProjectAreas"
import PageNav from "@/components/layout/PageNav"

export const metadata = {
  title: "Projects | Kenneth Adu-Akwabeng",
  description: "Featured projects in mentorship, education infrastructure, welfare, and engineering.",
}

export default function ProjectsPage() {
  return (
    <main className="pt-16">
      <ProjectsSection />
      <ProjectAreas />
      <ContactBand />
      <PageNav current="/projects" />
    </main>
  )
}
