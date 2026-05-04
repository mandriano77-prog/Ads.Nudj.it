import lifestyle from "@/assets/lifestyle-wallet.jpg";
import { MapPin, Clock, Zap, ShieldCheck, Link2, Users, Smartphone } from "lucide-react";

const WALLET_FACTS = [
  { num: "4,4 Mld", label: "wallet digitali attivi nel mondo, già installati su iPhone e Android", source: "Juniper Research, 2024" },
  { num: "73%", label: "degli italiani usa abitualmente il wallet del proprio smartphone", source: "Osservatori Politecnico di Milano" },
  { num: "1 device", label: "= 1 persona reale: il pass vive nel wallet personale, non in un'inbox condivisa", source: "Apple Wallet & Google Wallet" },
  { num: "0 app", label: "da scaricare, 0 form da compilare: salvataggio nativo in due tap", source: "Standard PassKit / Google Wallet API" },
];

const FEATURES = [
  { icon: MapPin, t: "Notifiche di prossimità", d: "Comunica quando il cliente è vicino al tuo punto vendita, evento o fiera. Senza costi per messaggio." },
  { icon: Clock, t: "Comunicazioni temporali", d: "Invia push nel momento giusto — lancio, scadenza, promemoria, restock — pianificate o on-demand." },
  { icon: Zap, t: "Push on-demand illimitate", d: "Aggiorna l'offerta o invia un nuovo messaggio quando vuoi. Nessun costo aggiuntivo per invio." },
  { icon: ShieldCheck, t: "Persone vere, non click", d: "Il pass entra nel wallet personale del consumatore — quello dove tiene carte, biglietti aerei, documenti. Niente bot, niente account fake: solo persone identificate dal proprio device." },
  { icon: Link2, t: "Attribuzione completa", d: "Traccia ogni pass scaricato dall'ADV — online, in store o cartaceo — con URL univoci." },
  { icon: Users, t: "Audience proprietaria", d: "Trasformi l'investimento ADV in un canale 1:1 di tua proprietà, riutilizzabile per sempre." },
];

export function Features() {
  return (
    <section className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-brand-blue/10 blur-2xl" />
            <img
              src={lifestyle}
              alt="Cliente con smartphone che mostra un pass loyalty nel wallet"
              loading="lazy"
              width={1280}
              height={896}
              className="rounded-[2rem] shadow-soft"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">Da ADV a canale diretto</p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-foreground text-balance sm:text-5xl">
              L'annuncio è solo <span className="italic text-brand-blue">l'inizio della conversazione.</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Ogni euro investito in ADV oggi finisce in un click che svanisce. Con Nudj quel click diventa un pass nel wallet del prospect — e da quel momento hai un canale di comunicazione 1:1 diretto, nativo e <strong className="text-foreground">completamente gratuito</strong>.
            </p>
            <p className="mt-3 text-base text-muted-foreground">
              Nessun costo per notifica, nessun intermediario, nessun algoritmo. Comunichi quando vuoi: in prossimità di un punto vendita, in una fascia oraria, al lancio di un nuovo prodotto. Per sempre.
            </p>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div
              key={f.t}
              className="rounded-3xl bg-background p-7 shadow-soft transition-transform hover:-translate-y-1"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-blue/10 text-brand-blue">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-foreground">{f.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </div>

        {/* Blocco wallet reale */}
        <div className="mt-20 overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
          <div className="grid gap-0 lg:grid-cols-[1.1fr_1.4fr]">
            <div className="bg-hero p-8 text-white sm:p-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-coral/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-coral">
                <Smartphone className="h-3.5 w-3.5" />
                Dentro il wallet, accanto alla carta di credito
              </div>
              <h3 className="mt-5 font-display text-3xl font-semibold text-balance sm:text-4xl">
                Il pass entra nel wallet <span className="italic text-coral">reale del consumatore.</span>
              </h3>
              <p className="mt-4 text-base leading-relaxed text-white/85">
                Non è una mail in più nell'inbox, non è un follower in un feed algoritmico. È un pass salvato accanto alla carta di credito, al biglietto aereo, alla patente digitale. Il posto più personale e sempre-presente dello smartphone — quello che il consumatore apre ogni volta che paga, viaggia o sale su un mezzo.
              </p>
              <p className="mt-3 text-base leading-relaxed text-white/85">
                Da quel momento sai esattamente chi è, su quale device, e puoi parlarci direttamente. Per sempre.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-px bg-border">
              {WALLET_FACTS.map((s) => (
                <div key={s.label} className="flex flex-col justify-between bg-card p-6 sm:p-8">
                  <div className="font-display text-4xl font-semibold italic text-brand-blue sm:text-5xl">
                    {s.num}
                  </div>
                  <div className="mt-3">
                    <p className="text-sm font-medium leading-snug text-foreground">{s.label}</p>
                    <p className="mt-1 text-xs text-muted-foreground">Fonte: {s.source}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
