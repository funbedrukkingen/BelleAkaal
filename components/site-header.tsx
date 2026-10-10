import Link from 'next/link'
import { events } from '@/lib/events'

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Link
          href="/"
          className="font-serif text-xl tracking-wide text-primary-foreground"
        >
          Belle Akaal
        </Link>
        <nav aria-label="Hoofdmenu">
          <ul className="flex items-center gap-6 text-sm text-primary-foreground/90">
            {events.map((event) => (
              <li key={event.id} className="hidden lg:block">
                <a
                  href={`#${event.id}`}
                  className="transition-colors hover:text-accent"
                >
                  {event.title}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#cirkels"
                className="rounded-full border border-primary-foreground/50 px-4 py-2 transition-colors hover:bg-primary-foreground hover:text-primary"
              >
                Ontdek de cirkels
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
