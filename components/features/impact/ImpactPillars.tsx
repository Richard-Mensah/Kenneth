import {
  Cpu,
  GraduationCap,
  HardHat,
  HeartHandshake,
  Scale,
  Users,
  type LucideIcon,
} from "lucide-react"

import SectionHeader from "@/components/ui/SectionHeader"
import { IMPACT_HIGHLIGHTS, IMPACT_PILLARS } from "@/constants"

const ICONS: Record<string, LucideIcon> = {
  GraduationCap,
  HeartHandshake,
  Users,
  HardHat,
  Scale,
  Cpu,
}

export default function ImpactPillars() {
  return (
    <section className="bg-paper px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Areas of impact"
          title="Four pillars guide the work, and every project ladders up to one of them."
          description="The approach stays the same across each area: convene people, unlock resources, and leave communities measurably stronger."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {IMPACT_PILLARS.map((pillar, index) => {
            const Icon = ICONS[pillar.icon] ?? Users

            return (
              <article
                key={pillar.title}
                className="group relative overflow-hidden rounded-xl border border-ink/10 bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:border-moss/40"
              >
                <span className="absolute right-6 top-6 font-serif text-5xl font-semibold text-ink/[0.06]">
                  0{index + 1}
                </span>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-moss/10 text-moss">
                  <Icon aria-hidden="true" className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-serif text-2xl font-semibold text-ink">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/70">{pillar.description}</p>
              </article>
            )
          })}
        </div>

        <div className="mt-10 rounded-xl border border-ink/10 bg-white p-7 shadow-soft">
          <p className="text-sm font-bold uppercase tracking-wide text-clay">Highlights</p>
          <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {IMPACT_HIGHLIGHTS.map((highlight) => (
              <li key={highlight} className="flex items-start gap-3 text-sm leading-6 text-ink/75">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-saffron" />
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
