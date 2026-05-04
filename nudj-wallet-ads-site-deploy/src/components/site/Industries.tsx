import { ShoppingBag, UtensilsCrossed, Ticket, Sparkles, Car, ArrowRight, CheckCircle2 } from "lucide-react";

const INDUSTRIES = [
  {
    icon: ShoppingBag,
    name: "Retail",
    headline: "Trasforma ogni vetrina in un canale diretto",
    desc: "Distribuisci coupon salvabili in store o online, traccia ogni redenzione e riattiva i clienti dormienti con notifiche basate sulla loro ultima visita.",
    metrics: ["+47% redenzioni", "10x vs cartaceo"],
    examples: [
      {
        title: "Coupon di benvenuto in cassa",
        desc: "QR code stampato sullo scontrino: il cliente salva un -15% sul prossimo acquisto direttamente nel wallet.",
      },
      {
        title: "Win-back clienti inattivi",
        desc: "Notifica push automatica dopo 60 giorni di assenza con un'offerta personalizzata sulla categoria preferita.",
      },
      {
        title: "Saldi privati VIP",
        desc: "Pre-accesso esclusivo ai saldi per i possessori della loyalty card digitale, con countdown nel pass.",
      },
    ],
  },
  {
    icon: UtensilsCrossed,
    name: "Ristorazione",
    headline: "Riempi i tavoli quando sei più vuoto",
    desc: "Offerte happy hour, menu del giorno e fidelity card digitali: invia notifiche geolocalizzate quando il cliente è nelle vicinanze del locale.",
    metrics: ["+62% ritorni", "3x scontrini"],
    examples: [
      {
        title: "Happy hour geolocalizzato",
        desc: "Notifica automatica al cliente che si trova entro 500m dal locale tra le 18 e le 19, con drink omaggio.",
      },
      {
        title: "Fidelity card a timbri digitale",
        desc: "Ogni 10 caffè, uno gratis. Tutto nel wallet, senza app né tessere fisiche da smarrire.",
      },
      {
        title: "Prenotazione + menu nel pass",
        desc: "Conferma prenotazione con data, tavolo, mappa del locale e link al menu sempre aggiornato.",
      },
    ],
  },
  {
    icon: Ticket,
    name: "Eventi & Live",
    headline: "Dal biglietto al post-evento, tutto nel wallet",
    desc: "Biglietti dinamici, accessi VIP, mappe del venue e merchandising esclusivo. Comunica in tempo reale con tutti i partecipanti.",
    metrics: ["98% check-in", "+35% upsell"],
    examples: [
      {
        title: "Biglietto dinamico con aggiornamenti",
        desc: "Cambio palco, ritardi, meteo: il pass si aggiorna in tempo reale con tutte le informazioni utili.",
      },
      {
        title: "Upgrade VIP last-minute",
        desc: "24h prima dell'evento, notifica con offerta upgrade area VIP a prezzo dedicato per gli iscritti.",
      },
      {
        title: "Merchandising post-evento",
        desc: "Coupon esclusivo sul merch ufficiale inviato il giorno dopo, finché l'emozione è ancora alta.",
      },
    ],
  },
  {
    icon: Sparkles,
    name: "Beauty & Wellness",
    headline: "Loyalty che fa tornare ogni mese",
    desc: "Card a punti, promemoria appuntamenti e premi personalizzati. Costruisci una relazione duratura con ogni cliente, senza app proprietaria.",
    metrics: ["+77% frequenza", "+52% LTV"],
    examples: [
      {
        title: "Promemoria appuntamento smart",
        desc: "Notifica 24h prima con data, ora, operatore e indicazioni: -80% no-show garantito.",
      },
      {
        title: "Compleanno con regalo dedicato",
        desc: "Trattamento omaggio o sconto speciale inviato automaticamente nel mese del compleanno del cliente.",
      },
      {
        title: "Pacchetti stagionali",
        desc: "Promo cambio stagione (es. trattamenti viso autunnali) inviata solo ai clienti con quel servizio nello storico.",
      },
    ],
  },
  {
    icon: Car,
    name: "Automotive",
    headline: "Service e test drive a portata di pollice",
    desc: "Promemoria tagliando, inviti a eventi dealer, coupon per accessori. Comunicazioni di alto valore al momento giusto della customer journey.",
    metrics: ["+40% service", "19x ricavi"],
    examples: [
      {
        title: "Promemoria tagliando + revisione",
        desc: "Notifica automatica al raggiungimento dei km o alla scadenza, con prenotazione officina in un tap.",
      },
      {
        title: "Invito test drive nuovo modello",
        desc: "Lancio del nuovo modello: invito esclusivo ai clienti con auto della stessa gamma in flotta.",
      },
      {
        title: "Coupon accessori stagionali",
        desc: "Cambio gomme, lavaggio premium, kit emergenza: offerte mirate al momento giusto dell'anno.",
      },
    ],
  },
];

export function Industries() {
  return (
    <section id="industries" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">Settori</p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-foreground text-balance sm:text-5xl">
            Una piattaforma, <span className="italic text-brand-blue">infiniti casi d'uso</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Nudj Wallet Ads si adatta al tuo business: dalla boutique indipendente alla catena nazionale, dal ristorante di quartiere al festival da 50.000 persone. Ecco 3 esempi pronti all'uso per ogni settore.
          </p>
        </div>

        <div className="mt-16 space-y-8">
          {INDUSTRIES.map((ind) => (
            <article
              key={ind.name}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-soft sm:p-10"
            >
              <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-14">
                {/* Sidebar settore */}
                <div className="flex flex-col">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-blue/10 text-brand-blue">
                    <ind.icon className="h-7 w-7" />
                  </div>
                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-coral">{ind.name}</p>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-foreground sm:text-3xl">
                    {ind.headline}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{ind.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {ind.metrics.map((m) => (
                      <span
                        key={m}
                        className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-brand-blue"
                      >
                        {m}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="mt-8 inline-flex items-center gap-2 self-start rounded-full bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white shadow-card transition-transform hover:scale-105"
                  >
                    Richiedi una consulenza
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>

                {/* Esempi pronti all'uso */}
                <div className="grid gap-4 sm:grid-cols-3">
                  {ind.examples.map((ex, i) => (
                    <div
                      key={ex.title}
                      className="flex flex-col rounded-2xl border border-border bg-secondary/40 p-5 transition-colors hover:border-brand-blue/40 hover:bg-secondary/70"
                    >
                      <div className="flex items-center gap-2">
                        <span className="grid h-6 w-6 place-items-center rounded-full bg-brand-blue text-[11px] font-semibold text-white">
                          {i + 1}
                        </span>
                        <CheckCircle2 className="h-4 w-4 text-coral" />
                      </div>
                      <h4 className="mt-3 font-display text-base font-semibold text-foreground">{ex.title}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{ex.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA finale di sezione */}
        <div className="mt-16 rounded-3xl border border-border bg-hero p-10 text-center text-white shadow-card sm:p-14">
          <h3 className="font-display text-3xl font-semibold text-balance sm:text-4xl">
            Non trovi il tuo settore? <span className="italic text-coral">Parliamone.</span>
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/85">
            Ogni business ha le sue dinamiche. Prenota una consulenza gratuita di 30 minuti: analizziamo insieme il tuo caso e ti mostriamo come Nudj Wallet Ads può funzionare per te.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-coral px-7 py-3.5 text-base font-semibold text-coral-foreground shadow-card transition-transform hover:scale-105"
          >
            Richiedi una consulenza gratuita
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
