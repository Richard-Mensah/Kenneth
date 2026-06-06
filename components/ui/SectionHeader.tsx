import { cn } from "@/lib/utils"

type Props = {
  eyebrow: string
  title: string
  description?: string
  tone?: "light" | "dark"
}

export default function SectionHeader({ eyebrow, title, description, tone = "light" }: Props) {
  const isDark = tone === "dark"

  return (
    <div className="max-w-3xl">
      <p className={cn("text-sm font-bold uppercase", isDark ? "text-saffron" : "text-clay")}>
        {eyebrow}
      </p>
      <h2 className={cn("mt-3 font-serif text-3xl font-semibold leading-tight sm:text-4xl", isDark ? "text-white" : "text-ink")}>
        {title}
      </h2>
      {description ? (
        <p className={cn("mt-4 text-base leading-7", isDark ? "text-white/75" : "text-ink/70")}>
          {description}
        </p>
      ) : null}
    </div>
  )
}
