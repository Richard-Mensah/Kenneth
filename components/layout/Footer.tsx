import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-ink px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-white/70 md:flex-row md:items-center md:justify-between">
        <p>© 2026 Kenneth Adu-Akwabeng. Leadership, engineering, law, and impact.</p>
        <Link href="/gallery" className="font-semibold text-white transition hover:text-saffron">
          View the full gallery
        </Link>
      </div>
    </footer>
  )
}
