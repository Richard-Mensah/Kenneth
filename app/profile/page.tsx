import ProfileSection from "@/components/features/home/ProfileSection"
import PageNav from "@/components/layout/PageNav"
import PageHeader from "@/components/ui/PageHeader"

export const metadata = {
  title: "Profile | Kenneth Adu-Akwabeng",
  description: "Kenneth Adu-Akwabeng's biography, focus areas, and professional profile.",
}

export default function ProfilePage() {
  return (
    <main>
      <PageHeader
        eyebrow="Profile"
        title="Engineering, law, and leadership in service of community."
        description="A young Ghanaian leader connecting technical training with public leadership and practical social impact."
      />
      <ProfileSection />
      <PageNav current="/profile" />
    </main>
  )
}
