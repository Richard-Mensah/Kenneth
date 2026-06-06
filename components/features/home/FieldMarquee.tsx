import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

import type { GalleryImage } from "@/types"

type Props = {
  images: GalleryImage[]
}

type RowProps = {
  images: GalleryImage[]
  direction: "left" | "right"
  size: "lg" | "sm"
}

function MarqueeRow({ images, direction, size }: RowProps) {
  if (images.length === 0) {
    return null
  }

  const animation = direction === "left" ? "marquee-left" : "marquee-right"
  const dimensions =
    size === "lg" ? "h-48 w-72 sm:h-56 sm:w-[22rem]" : "h-40 w-60 sm:h-44 sm:w-72"

  return (
    <div className="marquee-row marquee-mask overflow-hidden">
      <div className={`marquee-track flex gap-5 ${animation}`}>
        {[...images, ...images].map((image, index) => (
          <figure
            key={`${image.fileName}-${index}`}
            className={`group relative shrink-0 overflow-hidden rounded-2xl shadow-soft ring-1 ring-ink/5 ${dimensions}`}
          >
            <img
              src={image.src}
              alt={index < images.length ? image.alt : ""}
              loading="lazy"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent px-4 pb-3 pt-10 text-xs font-semibold tracking-wide text-white">
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
    <section className="overflow-hidden bg-white py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-clay">In the field</p>
        <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-ink sm:text-4xl lg:text-5xl">
          Leadership that shows up where it matters.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-ink/65">
          From classrooms and clean-up drives to leadership rooms and engineering forums — a glimpse
          of the work in motion.
        </p>
      </div>

      <div className="mt-14 flex flex-col gap-5">
        <MarqueeRow images={rowA} direction="left" size="lg" />
        <div className="px-8">
          <MarqueeRow images={rowB} direction="right" size="sm" />
        </div>
      </div>

      <div className="mt-14 flex justify-center px-4">
        <Link
          href="/gallery"
          className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3 text-sm font-bold text-ink transition hover:border-ink hover:bg-ink hover:text-white focus:outline-none focus:ring-2 focus:ring-ink/40"
        >
          View full gallery
          <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}
