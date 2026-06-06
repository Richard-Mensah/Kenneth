import ImpactSection from "@/components/features/home/ImpactSection"
import ImpactPillars from "@/components/features/impact/ImpactPillars"
import PageNav from "@/components/layout/PageNav"
import PageHeader from "@/components/ui/PageHeader"

export const metadata = {
  title: "Impact | Kenneth Adu-Akwabeng",
  description: "Community impact, scholarship advocacy, education support, and youth development outcomes.",
}

export default function ImpactPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Impact"
        title="Leadership measured through people reached and projects moved forward."
        description="Scholarship advocacy, student leadership, community welfare, school infrastructure, and behavioral change — work that ladders up to four clear pillars."
      />
      <ImpactSection />
      <ImpactPillars />
      <PageNav current="/impact" />
    </main>
  )
}
