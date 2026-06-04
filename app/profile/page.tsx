import LeadershipSection from "@/components/features/home/LeadershipSection"
import ProfileSection from "@/components/features/home/ProfileSection"

export const metadata = {
  title: "Profile | Kenneth Adu-Akwabeng",
  description: "Kenneth Adu-Akwabeng's biography, focus areas, and professional profile.",
}

export default function ProfilePage() {
  return (
    <main className="pt-16">
      <ProfileSection />
      <LeadershipSection />
    </main>
  )
}
