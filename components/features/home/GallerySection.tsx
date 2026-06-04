import type { GalleryImage } from "@/types"

import SectionHeader from "@/components/ui/SectionHeader"

type Props = {
  images: GalleryImage[]
}

export default function GallerySection({ images }: Props) {
  return (
    <section id="gallery" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow="Gallery"
            title="Moments from community action, leadership rooms, and youth development work."
            description={`${images.length} images are included from the project folders, including the remaining photos not featured above.`}
          />
          <p className="text-sm font-semibold text-ink/55">{images.length} photos</p>
        </div>
        <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-4">
          {images.map((image) => (
            <figure key={image.fileName} className="mb-5 break-inside-avoid overflow-hidden rounded-lg border border-ink/10 bg-paper">
              <img src={image.src} alt={image.alt} loading="lazy" className="h-auto w-full object-cover" />
              <figcaption className="px-3 py-3 text-xs font-semibold text-ink/65">{image.category}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
