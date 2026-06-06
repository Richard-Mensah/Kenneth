import StatCard from "@/components/ui/StatCard"
import SectionHeader from "@/components/ui/SectionHeader"
import { STATS } from "@/constants"

export default function ImpactSection() {
  return (
    <section id="impact" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <SectionHeader
            eyebrow="By the numbers"
            title="Outcomes that show up in people's lives."
            description="A few measures of work that spans scholarship advocacy, student leadership, community welfare, and school infrastructure."
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
