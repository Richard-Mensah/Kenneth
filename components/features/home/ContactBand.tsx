import { ArrowUpRight, Handshake } from "lucide-react"
import Link from "next/link"

export default function ContactBand() {
  return (
    <section id="contact" className="bg-gold px-4 py-16 text-navy sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <Handshake aria-hidden="true" className="h-8 w-8 text-navy" />
          <h2 className="mt-5 font-serif text-3xl font-semibold leading-tight sm:text-4xl">
            Open to partnerships in mentorship, construction, youth development, and governance.
          </h2>
          <p className="mt-4 text-base leading-7 text-navy/75">
            Kenneth&apos;s work is built for collaborations that create visible social value and
            stronger institutions for young people.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-bold text-white transition hover:bg-navy-700 focus:outline-none focus:ring-2 focus:ring-navy/40"
        >
          Get in touch
          <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}
