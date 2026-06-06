import { ArrowDown, Images } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative isolate flex min-h-[84svh] items-end overflow-hidden bg-ink px-4 pb-12 pt-28 text-white sm:px-6 lg:px-8">
      <Image
        src="/images/gallery/kenneth-leadership-36.jpeg"
        alt="Kenneth Adu-Akwabeng in a radio studio conversation."
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/85 via-ink/60 to-ink/25" />
      <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold sm:text-sm">
            Leadership · Engineering · Law · Technology
          </p>
          <h1 className="mt-5 font-serif text-4xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
            Kenneth Adu-Akwabeng
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
            Civil engineering graduate, youth mentor, governance advocate, and emerging legal
            professional building practical routes for community development across Ghana.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/impact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-saffron px-5 py-3 text-sm font-bold text-ink transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-white"
            >
              Explore impact
              <ArrowDown aria-hidden="true" className="h-4 w-4" />
            </Link>
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/35 px-5 py-3 text-sm font-bold text-white transition hover:border-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white"
            >
              View gallery
              <Images aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="hidden justify-end lg:flex">
          <div className="max-w-xs border-l border-white/30 pl-6 text-sm leading-7 text-white/75">
            Founder of Ken Inspired Network and a multi-sector leader working at the meeting point
            of service, systems, and opportunity.
          </div>
        </div>
      </div>
    </section>
  )
}
