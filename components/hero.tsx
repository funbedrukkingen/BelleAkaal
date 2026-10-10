import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[92svh] items-center overflow-hidden bg-primary text-primary-foreground">
      <Image
        src="/images/hero.png"
        alt="Een stil, mistig meer bij zonsopkomst in parel- en aquatinten"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/70 via-primary/55 to-primary/85"
      />
      <div className="mx-auto w-full max-w-6xl px-6 pb-24 pt-36">
        <p
          className="drift-in text-sm uppercase tracking-[0.3em] text-accent"
          style={{ animationDelay: '0.1s' }}
        >
          Belle Akaal · The Good Witch
        </p>
        <h1
          className="drift-in mt-6 max-w-3xl text-balance font-serif text-5xl font-medium leading-[1.05] sm:text-6xl lg:text-7xl"
          style={{ animationDelay: '0.3s' }}
        >
          Herinner je waar je <em className="font-normal italic">vandaan</em>{' '}
          komt
        </h1>
        <p
          className="drift-in mt-8 max-w-xl text-pretty text-lg leading-relaxed text-primary-foreground/90"
          style={{ animationDelay: '0.55s' }}
        >
          Cirkels en ceremonies om dieper thuis te komen in jezelf, in harmonie
          met de universele natuurwetten.
        </p>
        <div
          className="drift-in mt-10 flex flex-wrap items-center gap-4"
          style={{ animationDelay: '0.8s' }}
        >
          <a
            href="#cirkels"
            className="rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-accent-foreground transition-transform hover:-translate-y-0.5"
          >
            Bekijk de SAIYA cirkels
          </a>
          <a
            href="#welkom"
            className="px-2 py-3.5 text-sm text-primary-foreground underline-offset-4 hover:underline"
          >
            Over Belle
          </a>
        </div>
      </div>
    </section>
  )
}
