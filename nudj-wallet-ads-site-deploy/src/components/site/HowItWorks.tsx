import { Megaphone, BellRing, Wallet, MousePointerClick } from "lucide-react";

const STEPS = [
  { icon: Megaphone, title: "ADV", desc: "Il prospect vede il tuo annuncio ovunque — web, social, CTV, affissione, stampa o in store." },
  { icon: MousePointerClick, title: "Tap sul pass", desc: "Con un tap o uno scan salva il pass nel suo wallet. Niente app, niente form, niente attriti." },
  { icon: Wallet, title: "Pass nel wallet", desc: "Da quel momento il brand è dentro Apple Wallet o Google Wallet del prospect. Per sempre." },
  { icon: BellRing, title: "Comunichi gratis", desc: "Push native illimitate: in prossimità, su base temporale o quando vuoi tu. Zero costi per invio." },
];

export function HowItWorks() {
  return (
    <section id="how" className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl font-semibold text-foreground text-balance sm:text-5xl">
            Come <span className="italic text-brand-blue">funziona</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Quattro passaggi per trasformare l'investimento ADV in un canale di comunicazione diretto e gratuito con i tuoi prospect. Lo strumento più potente del marketing — e una volta attivato, non costa più nulla.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <div
              key={s.title}
              className="group relative rounded-3xl bg-background p-7 shadow-soft transition-transform hover:-translate-y-1"
            >
              <span className="absolute right-5 top-5 font-display text-5xl font-semibold italic text-brand-blue/15">
                0{i + 1}
              </span>
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-coral-grad text-coral-foreground">
                <s.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
