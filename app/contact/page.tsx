import ContactBand from "@/components/features/home/ContactBand"
import ProjectsSection from "@/components/features/home/ProjectsSection"
import PageNav from "@/components/layout/PageNav"

export const metadata = {
  title: "Contact | Kenneth Adu-Akwabeng",
  description: "Connect with Kenneth Adu-Akwabeng for partnerships and youth development work.",
}

export default function ContactPage() {
  return (
    <main className="pt-16">
      <ContactBand />
      <ProjectsSection />
      <PageNav current="/contact" />
    </main>
  )
}
