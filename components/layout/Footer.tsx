import { Facebook, Instagram, Linkedin, Twitter, type LucideIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { CONTACT, CREDIT, MISSION, SOCIALS } from "@/constants"

const SOCIAL_ICONS: Record<string, LucideIcon> = {
  Linkedin,
  Facebook,
  Twitter,
  Instagram,
}

const QUICK_LINKS = [
  { label: "Profile", href: "/profile" },
  { label: "Impact", href: "/impact" },
  { label: "Projects", href: "/projects" },
  { label: "Leadership", href: "/leadership" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
]

export default function Footer() {
  return (
    <footer className="bg-navy px-4 pb-8 pt-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Kenneth Adu-Akwabeng logo"
                width={44}
                height={44}
                className="h-11 w-11 rounded-md object-contain"
              />
              <span className="font-serif text-lg font-semibold">Kenneth Adu-Akwabeng</span>
            </div>
            <p className="mt-5 text-sm leading-7 text-white/65">{MISSION}</p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map((social) => {
                const Icon = SOCIAL_ICONS[social.icon]
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition hover:border-gold hover:text-gold"
                  >
                    {Icon ? <Icon aria-hidden="true" className="h-4 w-4" /> : null}
                  </a>
                )
              })}
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-gold">Explore</p>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-gold">Get in touch</p>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li>
                <a href={`mailto:${CONTACT.email}`} className="transition hover:text-white">
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="transition hover:text-white">
                  {CONTACT.phone}
                </a>
              </li>
              <li>{CONTACT.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Kenneth Adu-Akwabeng. All rights reserved.</p>
          <p>{CREDIT}</p>
        </div>
      </div>
    </footer>
  )
}
