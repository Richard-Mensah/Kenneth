import { ArrowRight, ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import SectionHeader from "@/components/ui/SectionHeader"
import { PROJECTS } from "@/constants"

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-paper px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow="Projects"
            title="Featured work across mentorship, education, welfare, and engineering."
            description="Each initiative reflects a practical view of leadership: convene people, unlock resources, and leave communities stronger."
          />
          <Link
            href="/gallery"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-clay transition hover:text-ink"
          >
            View portfolio
            <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <article key={project.title} className="group flex flex-col overflow-hidden rounded-lg border border-ink/10 bg-white shadow-soft">
              <div className="relative aspect-[16/10] bg-ink">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-sm font-bold uppercase text-moss">{project.category}</p>
                <h3 className="mt-2 font-serif text-2xl font-semibold text-ink">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/70">{project.description}</p>
                <Link
                  href="/impact"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-clay transition hover:gap-3 hover:text-ink"
                >
                  Read case study
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
