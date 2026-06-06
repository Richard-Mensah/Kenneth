"use client"

import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

const NAV_ITEMS = [
  { label: "Profile", href: "/profile" },
  { label: "Impact", href: "/impact" },
  { label: "Projects", href: "/projects" },
  { label: "Leadership", href: "/leadership" },
  { label: "Gallery", href: "/gallery" },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/15 bg-ink/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 text-white sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Kenneth Adu-Akwabeng — home">
          <Image
            src="/logo.png"
            alt="Kenneth Adu-Akwabeng logo"
            width={40}
            height={40}
            priority
            className="h-10 w-10 rounded-md object-contain"
          />
          <span className="hidden text-sm font-semibold tracking-tight sm:inline">
            Kenneth Adu-Akwabeng
          </span>
        </Link>
        <div className="hidden items-center gap-7 text-sm font-medium md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "border-b-2 border-transparent pb-1 text-white/75 transition hover:text-white",
                pathname === item.href && "border-saffron text-white"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-saffron px-4 py-2 text-sm font-semibold text-ink transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-white/80"
        >
          Connect
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </Link>
      </nav>
    </header>
  )
}
