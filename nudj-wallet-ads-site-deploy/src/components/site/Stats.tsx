const STATS = [
  { num: "4,4", unit: "Mld", label: "wallet digitali attivi nel mondo, già installati", source: "Juniper Research" },
  { num: "73", unit: "%", label: "degli italiani usa il wallet del proprio smartphone", source: "Osservatori Polimi" },
  { num: "98", unit: "%", label: "tasso di lettura delle notifiche push native", source: "Benchmark di settore" },
  { num: "0", unit: " app", label: "da scaricare — il pass si salva in 2 tap, zero frizioni", source: "Apple / Google Wallet" },
];

export function Stats() {
  return (
    <section id="results" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl font-semibold leading-tight text-foreground text-balance sm:text-5xl">
            Il wallet è già <span className="italic text-brand-blue">nelle tasche di tutti.</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Non stai chiedendo ai tuoi clienti di installare nulla. Il wallet digitale è già lì — su ogni iPhone e ogni Android. Ogni pass scaricato dalla tua ADV diventa un contatto diretto: nessuna mail intermedia, nessun algoritmo social, nessun costo per notifica.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-5xl font-semibold italic text-brand-blue lg:text-6xl">
                {s.num}
                <span className="text-coral">{s.unit}</span>
              </div>
              <p className="mt-2 text-sm font-medium text-foreground">{s.label}</p>
              <p className="mt-1 text-xs text-muted-foreground">Fonte: {s.source}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
