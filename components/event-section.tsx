import Image from 'next/image'
import type { SaiyaEvent } from '@/lib/events'

export function EventSection({
  event,
  reversed,
}: {
  event: SaiyaEvent
  reversed: boolean
}) {
  return (
    <article
      id={event.id}
      className="scroll-mt-8 px-6 py-16 sm:py-24"
      aria-labelledby={`${event.id}-title`}
    >
      <div
        className={`mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-20 ${
          reversed ? 'lg:[&>div:first-child]:order-2' : ''
        }`}
      >
        <div className="relative aspect-[4/5] overflow-hidden rounded-t-full rounded-b-3xl bg-muted">
          <Image
            src={event.image}
            alt={event.imageAlt}
            fill
            sizes="(min-width: 1024px) 560px, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
            {event.series} · {event.subtitle}
          </p>
          <h2
            id={`${event.id}-title`}
            className="mt-4 text-balance font-serif text-5xl font-medium leading-tight sm:text-6xl"
          >
            {event.title}
          </h2>
          <p className="mt-5 inline-block rounded-full bg-secondary px-4 py-1.5 text-sm text-secondary-foreground">
            {event.format}
          </p>
          <div className="mt-8 space-y-5 text-pretty leading-relaxed text-muted-foreground">
            {event.paragraphs.map((text) => (
              <p key={text.slice(0, 24)}>{text}</p>
            ))}
          </div>
          {event.closing ? (
            <p className="mt-8 border-t border-border pt-6 font-serif text-2xl italic leading-snug text-foreground">
              {event.closing}
            </p>
          ) : null}
        </div>
      </div>
    </article>
  )
}
