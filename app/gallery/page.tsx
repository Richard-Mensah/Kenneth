import GallerySection from "@/components/features/home/GallerySection"
import PageNav from "@/components/layout/PageNav"
import PageHeader from "@/components/ui/PageHeader"
import { getGalleryImages } from "@/lib/gallery"

export const metadata = {
  title: "Gallery | Kenneth Adu-Akwabeng",
  description: "Photo gallery from Kenneth Adu-Akwabeng's community, leadership, and youth development work.",
}

export default function GalleryPage() {
  const galleryImages = getGalleryImages()

  return (
    <main>
      <PageHeader
        eyebrow="Gallery"
        title="Moments from community action, leadership rooms, and youth development."
        description="A visual record of mentorship, community service, and leadership across Ghana."
      />
      <GallerySection images={galleryImages} />
      <PageNav current="/gallery" />
    </main>
  )
}
