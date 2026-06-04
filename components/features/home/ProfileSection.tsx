import Image from "next/image"

import SectionHeader from "@/components/ui/SectionHeader"
import { FOCUS_AREAS, PROFILE_INTRO } from "@/constants"

export default function ProfileSection() {
  return (
    <section id="profile" className="bg-paper px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-ink shadow-soft">
          <Image
            src="/images/gallery/kenneth-leadership-51.jpeg"
            alt="Kenneth Adu-Akwabeng in a professional office engagement."
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <SectionHeader
            eyebrow="Profile"
            title="A builder of institutions, opportunities, and community trust."
            description="Kenneth connects technical training with public leadership, using each platform to move people, projects, and ideas toward measurable benefit."
          />
          <div className="mt-8 space-y-5 text-base leading-8 text-ink/70">
            {PROFILE_INTRO.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {FOCUS_AREAS.map((area) => (
              <div key={area} className="rounded-lg border border-ink/10 bg-white px-4 py-3 text-sm font-semibold text-ink">
                {area}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
