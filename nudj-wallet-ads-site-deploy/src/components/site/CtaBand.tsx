export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-hero py-24 text-white">
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-10">
        <h2 className="font-display text-4xl font-semibold leading-[1.05] text-balance sm:text-6xl">
          Trasforma l'ADV<br />
          <span className="italic text-coral">in un canale diretto.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-white/85">
          Una volta che il pass è nel wallet del prospect, comunichi gratis — in prossimità, nel tempo, on-demand. Per sempre. Setup in meno di 24 ore.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-coral px-7 py-3.5 text-base font-semibold text-coral-foreground shadow-card transition-transform hover:scale-105"
          >
            Richiedi Accesso alla Beta
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border-2 border-white/80 px-7 py-3 text-base font-semibold text-white transition-colors hover:bg-white hover:text-brand-blue-deep"
          >
            Prenota una Demo
          </a>
        </div>
      </div>
    </section>
  );
}
