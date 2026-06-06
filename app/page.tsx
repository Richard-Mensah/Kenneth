import ContactBand from "@/components/features/home/ContactBand"
import FieldMarquee from "@/components/features/home/FieldMarquee"
import HeroSection from "@/components/features/home/HeroSection"
import ImpactSection from "@/components/features/home/ImpactSection"
import LeadershipSection from "@/components/features/home/LeadershipSection"
import ProfileSection from "@/components/features/home/ProfileSection"
import ProjectsSection from "@/components/features/home/ProjectsSection"
import PageNav from "@/components/layout/PageNav"
import { getGalleryImages } from "@/lib/gallery"

export default function HomePage() {
  const galleryImages = getGalleryImages()

  return (
    <main>
      <HeroSection />
      <ProfileSection />
      <ImpactSection />
      <ProjectsSection />
      <LeadershipSection />
      <FieldMarquee images={galleryImages} />
      <ContactBand />
      <PageNav current="/" />
    </main>
  )
}
