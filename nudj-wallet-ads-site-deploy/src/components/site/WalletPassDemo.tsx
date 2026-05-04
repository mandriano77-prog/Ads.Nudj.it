import { useState } from "react";
import { ArrowRight, Palette } from "lucide-react";

const PRESETS = [
  { name: "Ristorante", color: "#1a5632", offer: "-20% sul menù degustazione", customer: "Marco Bianchi" },
  { name: "Fashion Store", color: "#1c1c1c", offer: "Free shipping + 15% off", customer: "Sara Verdi" },
  { name: "Centro Padel", color: "#0f2b46", offer: "1 ora di campo gratuita", customer: "Luca Rossi" },
  { name: "Beauty Salon", color: "#6b2f5e", offer: "Trattamento viso omaggio", customer: "Giulia Neri" },
];

export function WalletPassDemo() {
  const [brandName, setBrandName] = useState("Il Tuo Brand");
  const [offer, setOffer] = useState("10% di sconto");
  const [color, setColor] = useState("#1a5632");
  const [customer] = useState("Giulia Rossi");

  function applyPreset(p: typeof PRESETS[0]) {
    setBrandName(p.name);
    setOffer(p.offer);
    setColor(p.color);
  }

  return (
    <section id="platform" className="relative overflow-hidden bg-background py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
        {/* Pass Preview — si aggiorna in tempo reale */}
        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-8 -z-10 rounded-[3rem] blur-3xl" style={{ backgroundColor: `${color}20` }} />

          {/* Il pass */}
          <div
            className="rounded-[2rem] p-6 text-white shadow-card transition-colors duration-500"
            style={{ background: `linear-gradient(135deg, ${color} 0%, ${color}dd 100%)` }}
          >
            <div className="flex items-start justify-between">
              <div
                className="grid h-10 w-10 place-items-center rounded-lg font-display text-xl font-semibold"
                style={{ backgroundColor: "rgba(255,255,255,0.25)" }}
              >
                {brandName.charAt(0).toUpperCase()}
              </div>
              <div className="text-right">
                <p className="text-[10px] font-semibold uppercase tracking-widest opacity-70">Scade</p>
                <p className="text-sm font-bold">Dicembre 2026</p>
              </div>
            </div>
            <div className="my-10 text-center">
              <p className="text-[10px] font-semibold uppercase tracking-widest opacity-70">{brandName}</p>
              <p className="font-display text-4xl font-semibold italic sm:text-5xl">{offer || "La tua offerta"}</p>
              <p className="mt-2 text-sm opacity-80">Mostra il pass in cassa per riscattare</p>
            </div>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-widest opacity-70">Cliente</p>
                <p className="text-sm font-bold">{customer}</p>
              </div>
              <div className="rounded-md bg-white p-2">
                <div className="flex h-10 w-20 items-end gap-px overflow-hidden">
                  {Array.from({ length: 28 }).map((_, i) => (
                    <span
                      key={i}
                      className="block w-1"
                      style={{ height: `${30 + ((i * 37) % 70)}%`, backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Push notification preview */}
          <div className="mt-4 rounded-2xl bg-card p-4 shadow-soft transition-colors duration-500">
            <div className="flex items-start gap-3">
              <div
                className="grid h-9 w-9 shrink-0 place-items-center rounded-lg text-xs font-bold text-white"
                style={{ backgroundColor: color }}
              >
                {brandName.charAt(0).toUpperCase()}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-foreground">{brandName}</p>
                  <p className="text-xs text-muted-foreground">adesso</p>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  Ciao {customer.split(" ")[0]}! La tua offerta ti aspetta. Tocca per scoprire di più.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">Provalo tu</p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-foreground text-balance sm:text-5xl">
            Costruisci il tuo pass.<br />
            <span className="italic text-brand-blue">In tempo reale.</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Personalizza colori, brand e offerta — guarda il pass aggiornarsi istantaneamente. Questo è esattamente quello che i tuoi clienti vedranno nel loro wallet.
          </p>

          {/* Presets */}
          <div className="mt-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Template rapidi</p>
            <div className="flex flex-wrap gap-2">
              {PRESETS.map((p) => (
                <button
                  key={p.name}
                  onClick={() => applyPreset(p)}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-brand-blue hover:bg-brand-blue/5"
                >
                  <span className="h-3 w-3 rounded-full" style={{ backgroundColor: p.color }} />
                  {p.name}
                </button>
              ))}
            </div>
          </div>

          {/* Custom fields */}
          <div className="mt-6 space-y-4">
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Nome brand
              </label>
              <input
                type="text"
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
                maxLength={30}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-brand-blue"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Offerta
              </label>
              <input
                type="text"
                value={offer}
                onChange={(e) => setOffer(e.target.value)}
                maxLength={40}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-brand-blue"
              />
            </div>
            <div>
              <label className="mb-1.5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <Palette className="h-3.5 w-3.5" />
                Colore brand
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="h-10 w-10 cursor-pointer rounded-lg border-none"
                />
                <span className="text-sm font-mono text-muted-foreground">{color}</span>
              </div>
            </div>
          </div>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-coral px-6 py-3 text-sm font-semibold text-coral-foreground shadow-card transition-transform hover:scale-105"
          >
            Voglio il mio pass
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
