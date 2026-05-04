import { ArrowRight, MessageCircle, Zap, Shield } from "lucide-react";

export function Pricing() {
  return (
    <section id="pricing" className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">Pricing</p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-foreground text-balance sm:text-5xl">
            Un modello costruito <span className="italic text-brand-blue">sul tuo business.</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Non abbiamo un listino standard perché ogni brand ha volumi, canali e obiettivi diversi. Preferiamo costruire insieme il modello commerciale giusto per te — trasparente, misurabile e allineato ai tuoi risultati.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="flex flex-col items-center rounded-3xl bg-background p-8 text-center shadow-soft">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-blue/10 text-brand-blue">
              <Zap className="h-7 w-7" />
            </div>
            <h3 className="mt-5 font-display text-xl font-semibold text-foreground">Zero costi nascosti</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Nessun costo per pass scaricato, nessun costo per notifica push. Paghi solo per il valore che ricevi.
            </p>
          </div>

          <div className="flex flex-col items-center rounded-3xl bg-brand-blue p-8 text-center text-white shadow-soft ring-2 ring-coral">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-coral/20 text-coral">
              <MessageCircle className="h-7 w-7" />
            </div>
            <h3 className="mt-5 font-display text-xl font-semibold text-white">Parliamone</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/85">
              30 minuti insieme per capire i tuoi obiettivi, i volumi attesi e il modello commerciale più adatto. Nessun impegno.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-coral px-6 py-3 text-sm font-semibold text-coral-foreground shadow-card transition-transform hover:scale-105"
            >
              Prenota una call
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="flex flex-col items-center rounded-3xl bg-background p-8 text-center shadow-soft">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-blue/10 text-brand-blue">
              <Shield className="h-7 w-7" />
            </div>
            <h3 className="mt-5 font-display text-xl font-semibold text-foreground">Beta gratuita</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              I primi brand che entrano nella beta privata accedono alla piattaforma completa senza costi per il periodo di test.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
