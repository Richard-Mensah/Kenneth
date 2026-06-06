import LeadershipSection from "@/components/features/home/LeadershipSection"
import ProfileSection from "@/components/features/home/ProfileSection"
import PageNav from "@/components/layout/PageNav"

export const metadata = {
  title: "Profile | Kenneth Adu-Akwabeng",
  description: "Kenneth Adu-Akwabeng's biography, focus areas, and professional profile.",
}

export default function ProfilePage() {
  return (
    <main className="pt-16">
      <ProfileSection />
      <LeadershipSection />
      <PageNav current="/profile" />
    </main>
  )
}
