import type { GalleryImage } from "@/types"

type Props = {
  images: GalleryImage[]
}

export default function GallerySection({ images }: Props) {
  return (
    <section id="gallery" className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="columns-1 gap-4 sm:columns-2 sm:gap-5 lg:columns-3 xl:columns-4">
          {images.map((image) => (
            <figure
              key={image.fileName}
              className="group relative mb-4 break-inside-avoid overflow-hidden rounded-xl border border-navy/10 bg-cream sm:mb-5"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-auto w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/85 to-transparent px-3 pb-3 pt-10 text-xs font-semibold text-white">
                {image.category}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
