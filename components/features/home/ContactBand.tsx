import { ArrowUpRight, Handshake } from "lucide-react"
import Link from "next/link"

export default function ContactBand() {
  return (
    <section id="contact" className="bg-moss px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <Handshake aria-hidden="true" className="h-8 w-8 text-saffron" />
          <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl">
            Open to partnerships in mentorship, construction, youth development, and governance.
          </h2>
          <p className="mt-4 text-base leading-7 text-white/75">
            Kenneth's work is built for collaborations that create visible social value and stronger
            institutions for young people.
          </p>
        </div>
        <Link
          href="/projects"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-moss transition hover:bg-saffron hover:text-ink focus:outline-none focus:ring-2 focus:ring-white"
        >
          Review projects
          <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}
