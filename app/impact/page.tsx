import ContactBand from "@/components/features/home/ContactBand"
import ImpactSection from "@/components/features/home/ImpactSection"
import PageNav from "@/components/layout/PageNav"

export const metadata = {
  title: "Impact | Kenneth Adu-Akwabeng",
  description: "Community impact, scholarship advocacy, education support, and youth development outcomes.",
}

export default function ImpactPage() {
  return (
    <main className="pt-16">
      <ImpactSection />
      <ContactBand />
      <PageNav current="/impact" />
    </main>
  )
}
