import LeadershipSection from "@/components/features/home/LeadershipSection"
import PageNav from "@/components/layout/PageNav"
import PageHeader from "@/components/ui/PageHeader"

export const metadata = {
  title: "Leadership | Kenneth Adu-Akwabeng",
  description: "Leadership roles across student, youth, union, NGO, and corporate spaces.",
}

export default function LeadershipPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Leadership"
        title="A record of service across student, youth, union, NGO, and corporate spaces."
        description="Kenneth's roles show a consistent pattern: organize people, manage stakeholders, and turn leadership platforms into development outcomes."
      />
      <LeadershipSection />
      <PageNav current="/leadership" />
    </main>
  )
}
