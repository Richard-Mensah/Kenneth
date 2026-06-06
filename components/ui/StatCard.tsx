import type { Stat } from "@/types"

type Props = {
  stat: Stat
}

export default function StatCard({ stat }: Props) {
  return (
    <article className="rounded-lg border border-ink/10 bg-white p-5 shadow-soft">
      <p className="font-serif text-4xl font-semibold text-moss">{stat.value}</p>
      <h3 className="mt-3 text-lg font-semibold text-ink">{stat.label}</h3>
      <p className="mt-2 text-sm leading-6 text-ink/65">{stat.detail}</p>
    </article>
  )
}
