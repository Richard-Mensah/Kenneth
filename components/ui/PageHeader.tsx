type Props = {
  eyebrow: string
  title: string
  description?: string
}

export default function PageHeader({ eyebrow, title, description }: Props) {
  return (
    <section className="relative overflow-hidden bg-navy px-4 pb-16 pt-32 text-white sm:px-6 sm:pb-20 sm:pt-36 lg:px-8">
      {/* Soft gold glow accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/20 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl font-serif text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">{description}</p>
        ) : null}
      </div>
    </section>
  )
}
