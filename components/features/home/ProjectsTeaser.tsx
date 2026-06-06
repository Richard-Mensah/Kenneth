import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import SectionHeader from "@/components/ui/SectionHeader"
import { PROJECTS } from "@/constants"

export default function ProjectsTeaser() {
  const featured = PROJECTS.slice(0, 2)

  return (
    <section className="bg-cream px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow="Projects"
            title="Featured work that leaves communities stronger."
            description="A snapshot of recent initiatives across mentorship, education, welfare, and engineering."
          />
          <Link
            href="/projects"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-gold transition hover:gap-3 hover:text-navy"
          >
            View all projects
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {featured.map((project) => (
            <Link
              key={project.title}
              href="/projects"
              className="group flex flex-col overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] bg-navy">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-sm font-bold uppercase tracking-wide text-gold">{project.category}</p>
                <h3 className="mt-2 font-serif text-2xl font-semibold text-navy">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-navy/65">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
