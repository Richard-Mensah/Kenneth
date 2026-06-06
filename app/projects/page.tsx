import ProjectsSection from "@/components/features/home/ProjectsSection"
import ProjectAreas from "@/components/features/projects/ProjectAreas"
import PageNav from "@/components/layout/PageNav"
import PageHeader from "@/components/ui/PageHeader"

export const metadata = {
  title: "Projects | Kenneth Adu-Akwabeng",
  description: "Featured projects in mentorship, education infrastructure, welfare, and engineering.",
}

export default function ProjectsPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Projects"
        title="Featured work across mentorship, education, welfare, and engineering."
        description="Each initiative reflects a practical view of leadership: convene people, unlock resources, and leave communities stronger."
      />
      <ProjectsSection />
      <ProjectAreas />
      <PageNav current="/projects" />
    </main>
  )
}
