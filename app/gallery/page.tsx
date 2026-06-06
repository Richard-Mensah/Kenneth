import GallerySection from "@/components/features/home/GallerySection"
import PageNav from "@/components/layout/PageNav"
import { getGalleryImages } from "@/lib/gallery"

export const metadata = {
  title: "Gallery | Kenneth Adu-Akwabeng",
  description: "Photo gallery from Kenneth Adu-Akwabeng's community, leadership, and youth development work.",
}

export default function GalleryPage() {
  const galleryImages = getGalleryImages()

  return (
    <main className="pt-16">
      <GallerySection images={galleryImages} />
      <PageNav current="/gallery" />
    </main>
  )
}
