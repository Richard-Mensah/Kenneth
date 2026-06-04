import StatCard from "@/components/ui/StatCard"
import SectionHeader from "@/components/ui/SectionHeader"
import { STATS } from "@/constants"

export default function ImpactSection() {
  return (
    <section id="impact" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <SectionHeader
            eyebrow="Impact"
            title="Leadership measured through people reached and projects moved forward."
            description="The work spans scholarship advocacy, student leadership, community welfare, school infrastructure, and behavioral change campaigns."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {STATS.map((stat) => (
              <StatCard key={stat.label} stat={stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
