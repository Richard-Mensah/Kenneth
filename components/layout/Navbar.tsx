"use client"

import { ArrowRight, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

import { cn } from "@/lib/utils"

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Profile", href: "/profile" },
  { label: "Impact", href: "/impact" },
  { label: "Projects", href: "/projects" },
  { label: "Leadership", href: "/leadership" },
  { label: "Gallery", href: "/gallery" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Lock body scroll + allow ESC to close while the mobile menu is open.
  useEffect(() => {
    if (!open) return

    document.body.style.overflow = "hidden"
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKeyDown)

    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy/80 backdrop-blur-xl">
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

        {/* Desktop nav */}
        <div className="hidden items-center gap-7 text-sm font-medium md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "border-b-2 border-transparent pb-1 text-white/75 transition hover:text-white",
                pathname === item.href && "border-gold text-white"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden items-center gap-2 rounded-full bg-gold px-4 py-2 text-sm font-semibold text-navy transition hover:bg-gold-soft focus:outline-none focus:ring-2 focus:ring-white/80 sm:inline-flex"
          >
            Connect
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/60 md:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden border-t border-white/10 bg-navy/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 md:hidden",
          open ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="space-y-1 px-4 py-4 sm:px-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center justify-between rounded-lg px-4 py-3 text-base font-medium text-white/80 transition hover:bg-white/5 hover:text-white",
                pathname === item.href && "bg-white/10 text-white"
              )}
            >
              {item.label}
              {pathname === item.href ? (
                <span aria-hidden="true" className="h-2 w-2 rounded-full bg-gold" />
              ) : null}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-2 flex items-center justify-center gap-2 rounded-full bg-gold px-4 py-3 text-base font-semibold text-navy transition hover:bg-gold-soft"
          >
            Connect
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </header>
  )
}
