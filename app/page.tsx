import AboutTeaser from "@/components/features/home/AboutTeaser"
import ContactBand from "@/components/features/home/ContactBand"
import FieldMarquee from "@/components/features/home/FieldMarquee"
import HeroSection from "@/components/features/home/HeroSection"
import ImpactTeaser from "@/components/features/home/ImpactTeaser"
import LeadershipTeaser from "@/components/features/home/LeadershipTeaser"
import ProjectsTeaser from "@/components/features/home/ProjectsTeaser"
import { getGalleryImages } from "@/lib/gallery"

export default function HomePage() {
  const galleryImages = getGalleryImages()

  return (
    <main>
      <HeroSection />
      <AboutTeaser />
      <ImpactTeaser />
      <ProjectsTeaser />
      <LeadershipTeaser />
      <FieldMarquee images={galleryImages} />
      <ContactBand />
    </main>
  )
}
