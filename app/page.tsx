import { Closing } from '@/components/closing'
import { EventSection } from '@/components/event-section'
import { Hero } from '@/components/hero'
import { SiteHeader } from '@/components/site-header'
import { Welcome } from '@/components/welcome'
import { events } from '@/lib/events'

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Welcome />
        <div id="cirkels" className="scroll-mt-8">
          {events.map((event, index) => (
            <EventSection
              key={event.id}
              event={event}
              reversed={index % 2 === 1}
            />
          ))}
        </div>
      </main>
      <Closing />
    </>
  )
}
