import { ArrowRight, MapPin, Bell, Users, TrendingUp } from "lucide-react";

const METRICS = [
  { icon: Users, num: "150+", label: "Pass scaricati nei primi 30 giorni", detail: "Senza advertising — solo QR in reception e post social organici" },
  { icon: Bell, num: "98%", label: "Tasso di ricezione push", detail: "Notifiche lette quasi da tutti — zero spam folder, zero algoritmo" },
  { icon: MapPin, num: "4", label: "Geofence attivi attorno al club", detail: "Notifica automatica ai soci quando passano vicino al centro" },
  { icon: TrendingUp, num: "3x", label: "Ritorno in campo rispetto a SMS", detail: "I soci con il pass nel wallet prenotano il triplo rispetto agli altri" },
];

export function CaseStudy() {
  return (
    <section id="case-study" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">Case Study</p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-foreground text-balance sm:text-5xl">
            Il primo brand live su <span className="italic text-brand-blue">Nudj Ads.</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Hirostar Hangar Padel Club è il nostro laboratorio. Un centro padel con 4 campi indoor a Origgio (VA) dove testiamo tutto prima di proporlo ai clienti.
          </p>
        </div>

        <div className="mt-16 overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
          <div className="grid gap-0 lg:grid-cols-2">
            {/* Lato sinistro — Storia */}
            <div className="bg-hero p-8 text-white sm:p-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-coral/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-coral">
                <MapPin className="h-3.5 w-3.5" />
                Origgio (VA) — 4 campi indoor
              </div>
              <h3 className="mt-5 font-display text-3xl font-semibold text-balance sm:text-4xl">
                Hirostar <span className="italic text-coral">Hangar Padel Club</span>
              </h3>
              <p className="mt-4 text-base leading-relaxed text-white/85">
                Il problema: i soci prenotano su Playtomic ma il centro non ha un canale diretto per comunicare con loro. Le email finiscono in spam, i social non raggiungono tutti, gli SMS costano troppo per la frequenza necessaria.
              </p>
              <p className="mt-3 text-base leading-relaxed text-white/85">
                La soluzione: un wallet pass brandizzato Hangar che ogni socio salva nel proprio iPhone. Da quel momento il centro comunica direttamente — promo last minute, tornei, orari campo libero — con push native a costo zero.
              </p>
              <p className="mt-3 text-base leading-relaxed text-white/85">
                Il setup è durato meno di 24 ore. Il QR per scaricare il pass è in reception e nei post social. Nessuna app, nessun form, nessuna frizione.
              </p>

              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-coral px-5 py-2.5 text-sm font-semibold text-coral-foreground shadow-card transition-transform hover:scale-105"
              >
                Vuoi risultati simili?
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Lato destro — Metriche reali */}
            <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2">
              {METRICS.map((m) => (
                <div key={m.label} className="flex flex-col justify-between bg-card p-6 sm:p-8">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-blue/10 text-brand-blue">
                      <m.icon className="h-5 w-5" />
                    </div>
                    <div className="font-display text-3xl font-semibold italic text-brand-blue sm:text-4xl">
                      {m.num}
                    </div>
                  </div>
                  <div className="mt-3">
                    <p className="text-sm font-semibold leading-snug text-foreground">{m.label}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{m.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Dati reali dal primo mese di operatività. Aggiornati a maggio 2026.
        </p>
      </div>
    </section>
  );
}
