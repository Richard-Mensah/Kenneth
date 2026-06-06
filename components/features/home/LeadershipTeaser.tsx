import { ArrowRight } from "lucide-react"
import Link from "next/link"

import { ROLES } from "@/constants"

export default function LeadershipTeaser() {
  const sectors = Array.from(new Set(ROLES.map((role) => role.sector)))
  const highlights = ROLES.slice(0, 4)

  return (
    <section className="bg-cream px-4 pb-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-3xl bg-navy p-8 text-white sm:p-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold">Leadership</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight sm:text-4xl">
              {ROLES.length} roles across {sectors.length} sectors.
            </h2>
            <p className="mt-4 max-w-md text-base leading-7 text-white/65">
              Student, youth, union, NGO, and corporate spaces — a consistent record of organizing
              people and turning platforms into outcomes.
            </p>
            <Link
              href="/leadership"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-gold transition hover:gap-3 hover:text-white"
            >
              See the full record
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>

          <ul className="space-y-3">
            {highlights.map((role) => (
              <li
                key={`${role.title}-${role.organization}`}
                className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4"
              >
                <span>
                  <span className="block text-sm font-semibold text-white">{role.title}</span>
                  <span className="mt-1 block text-xs text-white/55">{role.organization}</span>
                </span>
                <span className="shrink-0 rounded-full bg-gold/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-gold">
                  {role.sector}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
