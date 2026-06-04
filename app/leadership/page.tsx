import LeadershipSection from "@/components/features/home/LeadershipSection"
import ContactBand from "@/components/features/home/ContactBand"

export const metadata = {
  title: "Leadership | Kenneth Adu-Akwabeng",
  description: "Leadership roles across student, youth, union, NGO, and corporate spaces.",
}

export default function LeadershipPage() {
  return (
    <main className="pt-16">
      <LeadershipSection />
      <ContactBand />
    </main>
  )
}
