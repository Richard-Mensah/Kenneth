"use client"

import { Send } from "lucide-react"
import { useState, type FormEvent } from "react"

import { CONTACT } from "@/constants"

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const hasEmail = !CONTACT.email.includes("example.com")

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    const name = String(data.get("name") ?? "")
    const email = String(data.get("email") ?? "")
    const subject = String(data.get("subject") ?? "")
    const message = String(data.get("message") ?? "")

    if (hasEmail) {
      // Open the visitor's email client with everything pre-filled.
      const body = `Name: ${name}\nEmail: ${email}\n\n${message}`
      window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
        subject || `Website enquiry from ${name}`
      )}&body=${encodeURIComponent(body)}`
    } else {
      // Fallback to WhatsApp while no email address is configured.
      const text = `Hi Kenneth, I'm ${name} (${email}).\n\nSubject: ${
        subject || "Website enquiry"
      }\n${message}`
      window.open(`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`, "_blank")
    }

    setSubmitted(true)
  }

  const fieldClasses =
    "w-full rounded-lg border border-navy/15 bg-white px-4 py-3 text-navy placeholder:text-navy/40 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-navy/10 bg-white p-6 shadow-soft sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-navy">Name</span>
          <input name="name" type="text" required placeholder="Your full name" className={fieldClasses} />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-navy">Email</span>
          <input name="email" type="email" required placeholder="you@example.com" className={fieldClasses} />
        </label>
      </div>
      <label className="mt-4 block">
        <span className="mb-2 block text-sm font-semibold text-navy">Subject</span>
        <input name="subject" type="text" placeholder="What is this about?" className={fieldClasses} />
      </label>
      <label className="mt-4 block">
        <span className="mb-2 block text-sm font-semibold text-navy">Message</span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Share a few details about your idea or request…"
          className={`${fieldClasses} resize-y`}
        />
      </label>

      <button
        type="submit"
        className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-bold text-white transition hover:bg-navy-700 focus:outline-none focus:ring-2 focus:ring-navy/40"
      >
        {hasEmail ? "Send message" : "Send via WhatsApp"}
        <Send aria-hidden="true" className="h-4 w-4" />
      </button>

      {submitted ? (
        <p className="mt-4 text-sm font-medium text-navy/70">
          {hasEmail
            ? "Your email app should have opened with the message ready to send."
            : "WhatsApp should have opened with your message ready to send."}
        </p>
      ) : null}
    </form>
  )
}
