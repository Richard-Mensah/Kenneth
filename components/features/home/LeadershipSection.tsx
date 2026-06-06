import { BriefcaseBusiness, Download } from "lucide-react"

import SectionHeader from "@/components/ui/SectionHeader"
import { ROLES } from "@/constants"

export default function LeadershipSection() {
  return (
    <section className="bg-ink px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Leadership"
          title="A record of service across student, youth, union, NGO, and corporate spaces."
          description="Kenneth's roles show a consistent pattern: organize people, manage stakeholders, and turn leadership platforms into development outcomes."
          tone="dark"
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ROLES.map((role) => (
            <article
              key={`${role.title}-${role.organization}`}
              className="group relative flex flex-col rounded-xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-saffron/50 hover:bg-white/[0.07]"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center rounded-full bg-saffron/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-saffron">
                  {role.sector}
                </span>
                <BriefcaseBusiness
                  aria-hidden="true"
                  className="h-5 w-5 text-white/30 transition group-hover:text-saffron"
                />
              </div>
              <h3 className="mt-5 text-lg font-semibold leading-snug text-white">{role.title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/65">{role.organization}</p>
              {role.period ? (
                <p className="mt-4 border-t border-white/10 pt-3 text-sm font-semibold text-saffron">
                  {role.period}
                </p>
              ) : null}
            </article>
          ))}
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
