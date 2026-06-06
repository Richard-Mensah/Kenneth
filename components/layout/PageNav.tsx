import { ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"

type JourneyStep = {
  href: string
  label: string
}

const JOURNEY: JourneyStep[] = [
  { href: "/", label: "Home" },
  { href: "/profile", label: "Profile" },
  { href: "/impact", label: "Impact" },
  { href: "/projects", label: "Projects" },
  { href: "/leadership", label: "Leadership" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
]

type Props = {
  current: string
}

export default function PageNav({ current }: Props) {
  const index = JOURNEY.findIndex((step) => step.href === current)

  if (index === -1) {
    return null
  }

  const previous = index > 0 ? JOURNEY[index - 1] : null
  const next = index < JOURNEY.length - 1 ? JOURNEY[index + 1] : null

  return (
    <nav
      aria-label="Page navigation"
      className="bg-paper px-4 pb-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl border-t border-ink/10 pt-10">
        <ol className="mb-8 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-semibold uppercase tracking-wide text-ink/40">
          {JOURNEY.map((step, stepIndex) => (
            <li key={step.href} className="flex items-center gap-2">
              <Link
                href={step.href}
                className={
                  step.href === current
                    ? "text-clay"
                    : "transition hover:text-ink"
                }
              >
                {step.label}
              </Link>
              {stepIndex < JOURNEY.length - 1 ? <span aria-hidden="true">/</span> : null}
            </li>
          ))}
        </ol>

        <div className="grid gap-4 sm:grid-cols-2">
          {previous ? (
            <Link
              href={previous.href}
              className="group flex items-center gap-4 rounded-lg border border-ink/10 bg-white p-5 text-ink shadow-soft transition hover:border-ink/30"
            >
              <ArrowLeft aria-hidden="true" className="h-5 w-5 text-clay transition group-hover:-translate-x-1" />
              <span>
                <span className="block text-xs font-semibold uppercase tracking-wide text-ink/45">
                  Previous
                </span>
                <span className="mt-1 block text-lg font-semibold">{previous.label}</span>
              </span>
            </Link>
          ) : (
            <span aria-hidden="true" className="hidden sm:block" />
          )}

          {next ? (
            <Link
              href={next.href}
              className="group flex items-center justify-end gap-4 rounded-lg border border-navy/10 bg-navy p-5 text-right text-white shadow-soft transition hover:bg-navy-700 sm:col-start-2"
            >
              <span>
                <span className="block text-xs font-semibold uppercase tracking-wide text-saffron">
                  Next
                </span>
                <span className="mt-1 block text-lg font-semibold">{next.label}</span>
              </span>
              <ArrowRight aria-hidden="true" className="h-5 w-5 text-saffron transition group-hover:translate-x-1" />
            </Link>
          ) : null}
        </div>
      </div>
    </nav>
  )
}
