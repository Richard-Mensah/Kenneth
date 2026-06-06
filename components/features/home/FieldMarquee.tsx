import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

import type { GalleryImage } from "@/types"

type Props = {
  images: GalleryImage[]
}

type RowProps = {
  images: GalleryImage[]
  direction: "left" | "right"
}

function MarqueeRow({ images, direction }: RowProps) {
  if (images.length === 0) {
    return null
  }

  const animation = direction === "left" ? "marquee-left" : "marquee-right"

  return (
    <div className="marquee-row overflow-hidden">
      <div className={`marquee-track flex gap-4 ${animation}`}>
        {[...images, ...images].map((image, index) => (
          <figure
            key={`${image.fileName}-${index}`}
            aria-hidden={index >= images.length}
            className="relative h-44 w-64 shrink-0 overflow-hidden rounded-xl sm:h-52 sm:w-80"
          >
            <img
              src={image.src}
              alt={index < images.length ? image.alt : ""}
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent px-3 pb-2 pt-8 text-xs font-semibold text-white/90">
              {image.category}
            </span>
          </figure>
        ))}
      </div>
    </div>
  )
}

export default function FieldMarquee({ images }: Props) {
  const curated = images.slice(0, 18)
  const half = Math.ceil(curated.length / 2)
  const rowA = curated.slice(0, half)
  const rowB = curated.slice(half)

  return (
    <section className="overflow-hidden bg-ink py-20 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 md:flex-row md:items-end md:justify-between lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-wide text-saffron">In the field</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight sm:text-4xl">
            Leadership that shows up where it matters.
          </h2>
          <p className="mt-4 text-base leading-7 text-white/70">
            From classrooms and clean-up drives to leadership rooms and engineering forums — a
            glimpse of the work in motion.
          </p>
        </div>
        <Link
          href="/gallery"
          className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm font-bold text-white transition hover:border-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white"
        >
          View full gallery
          <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-12 flex flex-col gap-4">
        <MarqueeRow images={rowA} direction="left" />
        <MarqueeRow images={rowB} direction="right" />
      </div>
    </section>
  )
}
