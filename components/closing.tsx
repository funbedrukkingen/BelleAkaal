export function Closing() {
  return (
    <footer className="bg-primary px-6 py-24 text-center text-primary-foreground">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-balance font-serif text-5xl font-medium sm:text-6xl">
          Be welcome!
        </h2>
        <p className="mt-6 text-pretty leading-relaxed text-primary-foreground/80">
          Er is niets wat je hoeft te doen of te weten. Kom zoals je bent, de
          rest volgt vanzelf.
        </p>
        <p className="mt-10 font-serif text-2xl italic text-accent">
          Much Love,
        </p>
        <p className="mt-1 font-serif text-xl">Belle Akaal · The Good Witch</p>
        <p className="mt-16 text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} Belle Akaal The Good Witch
        </p>
      </div>
    </footer>
  )
}
