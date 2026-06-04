import Image from "next/image"

import SectionHeader from "@/components/ui/SectionHeader"
import { PROJECTS } from "@/constants"

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-paper px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Projects"
          title="Featured work across mentorship, education, welfare, and engineering."
          description="Each initiative reflects a practical view of leadership: convene people, unlock resources, and leave communities stronger."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <article key={project.title} className="overflow-hidden rounded-lg border border-ink/10 bg-white shadow-soft">
              <div className="relative aspect-[16/10] bg-ink">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-500 hover:scale-[1.03]"
                />
              </div>
              <div className="p-5">
                <p className="text-sm font-bold uppercase text-moss">{project.category}</p>
                <h3 className="mt-2 text-2xl font-semibold text-ink">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/70">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
