import ContactDetails from "@/components/features/contact/ContactDetails"
import ContactForm from "@/components/features/contact/ContactForm"
import PageNav from "@/components/layout/PageNav"
import PageHeader from "@/components/ui/PageHeader"

export const metadata = {
  title: "Contact | Kenneth Adu-Akwabeng",
  description: "Connect with Kenneth Adu-Akwabeng for partnerships, mentorship, and youth development work.",
}

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Contact"
        title="Let's build something meaningful together."
        description="Open to partnerships in mentorship, construction, youth development, and governance. Reach out directly or send a message below."
      />

      <section className="bg-cream px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-navy sm:text-3xl">Reach out</h2>
            <p className="mt-3 text-base leading-7 text-navy/65">
              Prefer a direct line? Use any of these channels — or fill in the form and it will open
              in your email app.
            </p>
            <div className="mt-8">
              <ContactDetails />
            </div>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold text-navy sm:text-3xl">Send a message</h2>
            <p className="mt-3 text-base leading-7 text-navy/65">
              Tell Kenneth a little about your idea, project, or invitation.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <PageNav current="/contact" />
    </main>
  )
}
