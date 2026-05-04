import { useState } from "react";

// ⚠️ CONFIGURAZIONE: sostituire con la tua access key di Web3Forms (https://web3forms.com)
// oppure con un webhook URL (Make, Zapier, n8n, etc.)
const WEB3FORMS_KEY = "YOUR_ACCESS_KEY_HERE";
const WEBHOOK_URL = ""; // alternativa: URL webhook diretto

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      if (WEBHOOK_URL) {
        // Modalità webhook diretto
        await fetch(WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...data, source: "ads.nudj.it", timestamp: new Date().toISOString() }),
        });
      } else {
        // Modalità Web3Forms
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            access_key: WEB3FORMS_KEY,
            subject: `Nudj Ads — Nuovo lead: ${data.company || "N/A"}`,
            from_name: `${data.first} ${data.last}`,
            ...data,
            source: "ads.nudj.it",
          }),
        });
        const result = await res.json();
        if (!result.success) throw new Error(result.message);
      }
      setSubmitted(true);
    } catch (err) {
      setError("Qualcosa è andato storto. Riprova o scrivici a info@nudj.studio");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="bg-background py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:px-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">Beta Privata</p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-foreground text-balance sm:text-5xl">
            Entra nella beta.<br />
            <span className="italic text-brand-blue">Posti limitati.</span>
          </h2>
          <p className="mt-5 max-w-md text-lg text-muted-foreground">
            Stiamo selezionando i primi brand per testare Nudj Ads in anteprima. Setup gratuito, supporto diretto dal team fondatore, accesso completo alla piattaforma.
          </p>
          <dl className="mt-10 space-y-5 text-sm">
            <div>
              <dt className="font-semibold text-foreground">Setup in 24 ore</dt>
              <dd className="text-muted-foreground">Zero integrazioni obbligatorie — ti forniamo tutto noi.</dd>
            </div>
            <div>
              <dt className="font-semibold text-foreground">Beta gratuita</dt>
              <dd className="text-muted-foreground">Accesso completo alla piattaforma per il periodo di test.</dd>
            </div>
            <div>
              <dt className="font-semibold text-foreground">Team dedicato</dt>
              <dd className="text-muted-foreground">Supporto diretto dai fondatori, dal lancio all'ottimizzazione.</dd>
            </div>
          </dl>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-border bg-secondary/40 p-8 shadow-soft"
        >
          {submitted ? (
            <div className="grid h-full place-items-center py-20 text-center">
              <div>
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-coral text-coral-foreground">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold text-foreground">Richiesta ricevuta!</h3>
                <p className="mt-2 text-muted-foreground">Ti ricontatteremo entro 24 ore per organizzare una demo.</p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Nome" name="first" />
              <Field label="Cognome" name="last" />
              <Field label="Email aziendale" name="email" type="email" full />
              <Field label="Nome azienda" name="company" full />
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Cosa ti interessa?
                </label>
                <select
                  name="interest"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-brand-blue"
                >
                  <option value="beta">Accesso alla Beta</option>
                  <option value="demo">Prenota una Demo</option>
                  <option value="partnership">Partnership / Rivendita</option>
                  <option value="other">Altro</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Messaggio (opzionale)
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-brand-blue"
                  placeholder="Raccontaci i tuoi obiettivi..."
                />
              </div>
              {error && (
                <p className="text-sm text-red-600 sm:col-span-2">{error}</p>
              )}
              <p className="text-xs text-muted-foreground sm:col-span-2">
                Cliccando su Invia accetti la Privacy Policy di Nudj Ads.
              </p>
              <button
                type="submit"
                disabled={loading}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-coral px-7 py-3.5 text-base font-semibold text-coral-foreground shadow-card transition-transform hover:scale-105 disabled:opacity-60 disabled:hover:scale-100 sm:col-span-2"
              >
                {loading ? "Invio in corso..." : "Richiedi Accesso"}
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", full }: { label: string; name: string; type?: string; full?: boolean }) {
  return (
    <div className={full ? "sm:col-span-2" : ""}>
      <label htmlFor={name} className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-brand-blue"
      />
    </div>
  );
}
