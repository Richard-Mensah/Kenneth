import { BriefcaseBusiness, Download } from "lucide-react"

import SectionHeader from "@/components/ui/SectionHeader"
import { ROLES } from "@/constants"

export default function LeadershipSection() {
  return (
    <section className="bg-ink px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader
            eyebrow="Leadership"
            title="A record of service across student, youth, union, NGO, and corporate spaces."
            description="Kenneth's roles show a consistent pattern: organize people, manage stakeholders, and turn leadership platforms into development outcomes."
            tone="dark"
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {ROLES.map((role) => (
              <article key={`${role.title}-${role.organization}`} className="rounded-lg border border-white/15 bg-white/10 p-4">
                <BriefcaseBusiness aria-hidden="true" className="h-5 w-5 text-saffron" />
                <h3 className="mt-4 text-lg font-semibold text-white">{role.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/70">{role.organization}</p>
                {role.period ? <p className="mt-3 text-sm font-semibold text-saffron">{role.period}</p> : null}
              </article>
            ))}
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <a
            href="/kenneth-adu-akwabeng-cv.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full bg-saffron px-6 py-3 text-sm font-bold text-ink transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-white/80"
          >
            Download professional CV
            <Download aria-hidden="true" className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
