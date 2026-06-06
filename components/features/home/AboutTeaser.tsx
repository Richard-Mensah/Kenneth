import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { FOCUS_AREAS, PROFILE_INTRO } from "@/constants"

export default function AboutTeaser() {
  return (
    <section className="bg-cream px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl bg-navy shadow-soft lg:mx-0">
          <Image
            src="/images/gallery/kenneth-leadership-51.jpeg"
            alt="Kenneth Adu-Akwabeng in a professional engagement."
            fill
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold">Profile</p>
          <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-navy sm:text-4xl">
            A builder of institutions, opportunities, and community trust.
          </h2>
          <p className="mt-5 text-base leading-8 text-navy/70">{PROFILE_INTRO[0]}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {FOCUS_AREAS.map((area) => (
              <span
                key={area}
                className="rounded-full border border-navy/10 bg-white px-3 py-1.5 text-xs font-semibold text-navy/80"
              >
                {area}
              </span>
            ))}
          </div>
          <Link
            href="/profile"
            className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-gold transition hover:gap-3 hover:text-navy"
          >
            Read full profile
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
