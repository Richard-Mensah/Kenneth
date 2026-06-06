import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-ink px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-white/70 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Kenneth Adu-Akwabeng logo"
            width={36}
            height={36}
            className="h-9 w-9 rounded-md object-contain"
          />
          <p>© 2026 Kenneth Adu-Akwabeng. Leadership, engineering, law, and impact.</p>
        </div>
        <Link href="/gallery" className="font-semibold text-white transition hover:text-saffron">
          View the full gallery
        </Link>
      </div>
    </footer>
  )
}
