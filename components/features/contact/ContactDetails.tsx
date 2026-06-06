import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Twitter,
  type LucideIcon,
} from "lucide-react"

import { CONTACT, SOCIALS } from "@/constants"

const SOCIAL_ICONS: Record<string, LucideIcon> = {
  Linkedin,
  Facebook,
  Twitter,
  Instagram,
}

export default function ContactDetails() {
  const whatsappDigits = CONTACT.whatsapp.replace(/\D/g, "")
  const hasEmail = !CONTACT.email.includes("example.com")

  const channels = [
    hasEmail
      ? {
          icon: Mail,
          label: "Email",
          value: CONTACT.email,
          href: `mailto:${CONTACT.email}`,
        }
      : null,
    {
      icon: Phone,
      label: "Phone",
      value: CONTACT.phone,
      href: `tel:${CONTACT.phone.replace(/\s/g, "")}`,
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Chat on WhatsApp",
      href: `https://wa.me/${whatsappDigits}`,
    },
    {
      icon: MapPin,
      label: "Location",
      value: CONTACT.location,
      href: null,
    },
  ].filter((channel): channel is NonNullable<typeof channel> => channel !== null)

  return (
    <div className="space-y-4">
      {channels.map((channel) => {
        const Icon = channel.icon
        const inner = (
          <>
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gold/15 text-gold">
              <Icon aria-hidden="true" className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-xs font-bold uppercase tracking-wide text-navy/45">
                {channel.label}
              </span>
              <span className="mt-1 block text-base font-semibold text-navy">{channel.value}</span>
            </span>
          </>
        )

        const className =
          "flex items-center gap-4 rounded-xl border border-navy/10 bg-white p-5 shadow-soft transition"

        return channel.href ? (
          <a
            key={channel.label}
            href={channel.href}
            target={channel.href.startsWith("http") ? "_blank" : undefined}
            rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className={`${className} hover:border-gold`}
          >
            {inner}
          </a>
        ) : (
          <div key={channel.label} className={className}>
            {inner}
          </div>
        )
      })}

      <div className="rounded-xl border border-navy/10 bg-white p-5 shadow-soft">
        <p className="text-xs font-bold uppercase tracking-wide text-navy/45">Follow</p>
        <div className="mt-4 flex gap-3">
          {SOCIALS.map((social) => {
            const Icon = SOCIAL_ICONS[social.icon]
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy/15 text-navy/70 transition hover:border-gold hover:bg-gold hover:text-navy"
              >
                {Icon ? <Icon aria-hidden="true" className="h-5 w-5" /> : null}
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}
