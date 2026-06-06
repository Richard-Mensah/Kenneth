import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

import SectionHeader from "@/components/ui/SectionHeader"
import { PROJECT_AREAS } from "@/constants"

export default function ProjectAreas() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow="Areas of work"
            title="Where the projects focus."
            description="Each project sits within one of four areas of work that together build stronger, fairer communities."
          />
          <Link
            href="/gallery"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-clay transition hover:text-ink"
          >
            See it in the gallery
            <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
          {PROJECT_AREAS.map((area, index) => (
            <div key={area.title} className="bg-white p-6 transition hover:bg-paper">
              <span className="font-serif text-3xl font-semibold text-moss">0{index + 1}</span>
              <h3 className="mt-4 text-lg font-semibold text-ink">{area.title}</h3>
              <p className="mt-2 text-sm leading-6 text-ink/65">{area.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
