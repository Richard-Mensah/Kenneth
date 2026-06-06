import { ArrowRight } from "lucide-react"
import Link from "next/link"

import { STATS } from "@/constants"

export default function ImpactTeaser() {
  return (
    <section className="bg-navy px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold">Impact</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight sm:text-4xl">
              Leadership measured through people reached.
            </h2>
          </div>
          <Link
            href="/impact"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-gold transition hover:gap-3 hover:text-white"
          >
            See the full impact
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">
          {STATS.map((stat) => (
            <div key={stat.label} className="bg-navy p-7">
              <p className="font-serif text-5xl font-semibold text-gold">{stat.value}</p>
              <h3 className="mt-3 text-base font-semibold text-white">{stat.label}</h3>
              <p className="mt-2 text-sm leading-6 text-white/60">{stat.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
